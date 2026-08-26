# Daily Brief

A single-page investing dashboard: markets, Fed and rates, real estate, policy,
retirement accounts, and the week's catalysts — filtered down to what actually
changes a decision.

Published with GitHub Pages, built to live on a phone home screen.

## Live site

`https://ashenafiwk.github.io/daily-brief`

Add to home screen on your phone and it opens fullscreen with its own icon, no
browser chrome.

- **iPhone (Safari):** Share → Add to Home Screen
- **Android (Chrome):** ⋮ menu → Add to Home screen / Install app

## How it is put together

| File | Role |
|---|---|
| `index.html` | The renderer — layout, styling, theming, live-fetch logic. |
| `brief.js` | **Written analysis.** Human-authored. Changes when someone writes a new brief. |
| `live.json` | **Machine data.** Quotes + headlines. Auto-refreshed, never hand-edited. |
| `scripts/refresh.mjs` | Fetches quotes and RSS headlines, rewrites `live.json`. Zero dependencies. |
| `.github/workflows/refresh.yml` | Runs the refresh every 30 minutes. |
| `manifest.json` | PWA metadata so the phone treats it as an app. |
| `assets/` | Icons, plus the script that regenerates them. |
| `private/` | Gitignored. Anything with real dollar figures. |

### The two-speed split

This is the important design decision. **Analysis and data refresh at
different rates**, so they live in different files:

- `live.json` — numbers and headlines. Stale in minutes. Refreshed by a robot.
- `brief.js` — what the numbers *mean*. Stale in a day. Written by a human.

The page fetches `live.json` on **every load**, on tab focus, and every 60
seconds while open — always cache-busted, so a phone never shows a stale copy.
If the written analysis predates today, the page says so in a banner rather
than quietly implying the commentary is current.

If `live.json` can't be fetched, the page falls back to the snapshot embedded
in `brief.js` and marks the data unavailable. It never renders blank.

## Updating

**Live data** updates itself — nothing to do.

**Written analysis:**

```bash
# edit brief.js, then:
git add brief.js && git commit -m "brief: 2026-08-27" && git push
```

Pages redeploys in roughly 30 seconds.

**Force a data refresh now:**

```bash
gh workflow run refresh.yml        # or run locally:
node scripts/refresh.mjs
```

To preview locally before pushing:

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Regenerating icons

```bash
python assets/make_icons.py
```

## Security note

**A GitHub Pages site is publicly reachable even if this repository is
private.** A private repo hides the source, not the served page.

The dashboard therefore carries tickers only — no positions, no balances, no
dollar amounts. Anything sensitive belongs in `private/`, which is gitignored.
See `private/README.md`.

## Disclaimer

This aggregates and summarizes public reporting. It is not investment advice.
Figures may be delayed or revised — verify anything you intend to act on
against a primary source.
