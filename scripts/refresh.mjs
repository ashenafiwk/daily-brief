/**
 * Hourly refresh: pulls live quotes and headlines, rewrites live.js.
 *
 * Deliberately dependency-free (Node 22 global fetch) so the GitHub
 * Actions job needs no install step and cannot break on a bad lockfile.
 *
 * NEVER touches brief.js - that file holds written analysis and is
 * owned by a human. This script only ever writes live.js.
 *
 *   node scripts/refresh.mjs
 */

import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "live.json");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/126.0 Safari/537.36";

const TICKERS = [
  { sym: "^GSPC", stooq: "^spx", name: "S&P 500" },
  { sym: "^IXIC", stooq: "^ndq", name: "Nasdaq" },
  { sym: "^DJI",  stooq: "^dji", name: "Dow 30" },
  { sym: "^RUT",  stooq: "^rut", name: "Russell 2000" },
  { sym: "^TNX",  stooq: null,   name: "10Y Treasury", suffix: "%" },
  { sym: "CL=F",  stooq: "cl.f", name: "Crude (WTI)", prefix: "$" },
  { sym: "GC=F",  stooq: "gc.f", name: "Gold", prefix: "$" },
  { sym: "^VIX",  stooq: null,   name: "VIX" }
];

const FEEDS = [
  { url: "https://feeds.content.dowjones.io/public/rss/mw_topstories", source: "MarketWatch" },
  { url: "https://finance.yahoo.com/news/rssindex", source: "Yahoo Finance" },
  { url: "https://www.cnbc.com/id/100003114/device/rss/rss.html", source: "CNBC" },
  { url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml", source: "WSJ Markets" }
];

const errors = [];

const timeout = (ms) => {
  const c = new AbortController();
  setTimeout(() => c.abort(), ms);
  return c.signal;
};

async function getText(url, ms = 12000) {
  const r = await fetch(url, {
    signal: timeout(ms),
    headers: { "User-Agent": UA, Accept: "*/*" }
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return await r.text();
}

// ---------- quotes ----------------------------------------------------

async function fromYahoo(t) {
  const url =
    `https://query1.finance.yahoo.com/v8/finance/chart/` +
    `${encodeURIComponent(t.sym)}?range=5d&interval=1d`;
  const j = JSON.parse(await getText(url));
  const meta = j?.chart?.result?.[0]?.meta;
  if (!meta) throw new Error("no meta");
  const last = meta.regularMarketPrice;
  const prev = meta.chartPreviousClose ?? meta.previousClose;
  if (typeof last !== "number" || typeof prev !== "number") throw new Error("no price");
  return { last, prev };
}

async function fromStooq(t) {
  if (!t.stooq) throw new Error("no stooq symbol");
  const url = `https://stooq.com/q/l/?s=${encodeURIComponent(t.stooq)}&f=sd2t2ohlc&h&e=csv`;
  const rows = (await getText(url)).trim().split("\n");
  if (rows.length < 2) throw new Error("empty csv");
  const c = rows[1].split(",");
  const open = parseFloat(c[3]);
  const close = parseFloat(c[6]);
  if (!isFinite(close)) throw new Error("bad csv");
  return { last: close, prev: isFinite(open) ? open : close };
}

function fmt(n, t) {
  const scaled = t.scale ? n * t.scale : n;
  const s = scaled.toLocaleString("en-US", {
    minimumFractionDigits: scaled < 100 ? 2 : 2,
    maximumFractionDigits: 2
  });
  return `${t.prefix ?? ""}${s}${t.suffix ?? ""}`;
}

async function quote(t) {
  let data = null;
  try {
    data = await fromYahoo(t);
  } catch (e1) {
    try {
      data = await fromStooq(t);
    } catch (e2) {
      errors.push(`${t.name}: ${e1.message} / ${e2.message}`);
      return null;
    }
  }
  const diff = data.last - data.prev;
  const pct = data.prev ? (diff / data.prev) * 100 : 0;
  const scale = t.scale ?? 1;
  return {
    name: t.name,
    value: fmt(data.last, t),
    chg: `${diff >= 0 ? "+" : ""}${(diff * scale).toFixed(2)}`,
    pct: `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`,
    dir: diff >= 0 ? "up" : "down"
  };
}

// ---------- headlines -------------------------------------------------

function decode(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function parseItems(xml, source) {
  const out = [];
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || [];
  for (const b of blocks) {
    const title = decode((b.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");
    let link = decode((b.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1] || "");
    const date = decode((b.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || [])[1] || "");
    if (!title || !link.startsWith("http")) continue;
    const ts = date ? Date.parse(date) : NaN;
    out.push({ title, url: link, source, ts: isFinite(ts) ? ts : 0 });
  }
  return out;
}

async function headlines() {
  const all = [];
  for (const f of FEEDS) {
    try {
      all.push(...parseItems(await getText(f.url), f.source));
    } catch (e) {
      errors.push(`feed ${f.source}: ${e.message}`);
    }
  }
  const seen = new Set();
  return all
    .filter((h) => {
      const k = h.title.toLowerCase().slice(0, 60);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 14)
    .map((h) => ({
      title: h.title.length > 130 ? h.title.slice(0, 127) + "..." : h.title,
      url: h.url,
      source: h.source,
      when: h.ts ? new Date(h.ts).toISOString() : null
    }));
}

// ---------- main ------------------------------------------------------

const now = new Date();

const [quotes, news] = await Promise.all([
  Promise.all(TICKERS.map(quote)).then((r) => r.filter(Boolean)),
  headlines()
]);

// Never publish an empty page: if everything failed, keep what is there.
if (quotes.length === 0 && news.length === 0 && existsSync(OUT)) {
  console.error("all sources failed - leaving live.json untouched");
  console.error(errors.join("\n"));
  process.exit(0);
}

const payload = {
  fetched: now.toISOString(),
  fetchedLabel:
    now.toLocaleString("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }) + " ET",
  quotes,
  headlines: news,
  errors
};

writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");

console.log(`quotes: ${quotes.length}  headlines: ${news.length}  errors: ${errors.length}`);
if (errors.length) console.log(errors.join("\n"));
