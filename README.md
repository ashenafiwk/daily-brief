# Daily Brief

A single-page investing dashboard: markets, Fed and rates, real estate, policy,
retirement accounts, and the week's catalysts — filtered down to what actually
changes a decision.

Published with GitHub Pages, built to live on a phone home screen.

## Live site

`https://ashenafiwk.github.io/daily-news`

Add to home screen on your phone and it opens fullscreen with its own icon, no
browser chrome.

- **iPhone (Safari):** Share → Add to Home Screen
- **Android (Chrome):** ⋮ menu → Add to Home screen / Install app

## How it is put together

| File | Role |
|---|---|
| `index.html` | The renderer — layout, styling, dark/light theming. Rarely changes. |
| `brief.js` | The content. One `BRIEF` object. **This is the only file that changes daily.** |
| `manifest.json` | PWA metadata so the phone treats it as an app. |
| `assets/` | Icons, plus the script that regenerates them. |
| `private/` | Gitignored. Anything with real dollar figures. |

The split is deliberate: updating tomorrow's brief means rewriting `brief.js`
and nothing else. The schema is stable, so the renderer never needs to know
what changed.

## Updating

```bash
# edit brief.js, then:
git add brief.js
git commit -m "brief: 2026-08-26"
git push
```

Pages redeploys in roughly 30 seconds.

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
