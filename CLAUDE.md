# CLAUDE.md — Thalia's Birthday Scrapbook

## What This Project Is
A birthday scrapbook website for Thalia. Multiple friends each contribute a "page" with photos, Spotify embed, and a personal message. Built as a static single-page React app

## Skill Invoking
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
---

## Tech Stack
- **React 18** via CDN UMD + Babel standalone for JSX (no Node, no bundler)
- **Custom CSS variables** — not Tailwind. Never introduce Tailwind.
- **Fonts:** Cormorant Garamond (display/headings) + Jost (UI/labels) via Google Fonts
- **Primary color:** `--rose: #C4686A` and its derived palette (`--rose-mid`, `--rose-light`, `--rose-pale`)
- All styles live inline in `index.html` inside a `<style>` block
- No external CSS or JS files except page/section data files

---

## File Structure
```
index.html              — app shell: all CSS, all components, router
serve.mjs               — local dev server (port 3000)
pages/
  _template.js          — copy this to add a new scrapbook page
  page-1.js             — contributor pages (order = script tag order)
  pageAdnan.js          — Adnan's page (has fireworks + password)
sections/
  _template.js          — copy this to add an intro/transitional section
images/
  imgAdnan/             — one folder per contributor
```

---

## How Pages Work
Each `pages/*.js` file pushes a data object to `window.__SCRAPBOOK_PAGES__`. The scrapbook order is determined by the **order of `<script>` tags** in `index.html`, not filenames. To add a page:
1. Copy `pages/_template.js` → `pages/page-yourname.js`
2. Fill in content
3. Add `<script src="pages/page-yourname.js"></script>` to `index.html` in the desired position

Page data fields:
```js
{
  title:         string,
  spotifyEmbed:  string,   // Spotify embed URL
  spotifyStartAt: number,  // seconds
  photos:        [{ src, caption, crop?, fit? }],  // exactly 5 photos
  message:       string,
  celebrations?: true,     // shows hearts + fireworks on this page
  password?:     string,   // locks this page behind a password prompt
}
```

## How Intro Sections Work
Same pattern as pages but push to `window.__INTRO_SECTIONS__`. These appear between the homepage and the scrapbook. Load them via `<script src="sections/section-N.js"></script>` in `index.html`.

---

## App Navigation Flow
`home` → `intro[0…N]` (optional) → `scrapbook[0…N]`

- Home button (top-right) always returns to homepage
- Hamburger menu (top-left) shows all pages and allows direct navigation
- Previous on scrapbook page 1 goes back to the last intro section (or home if none)
- Dark mode toggle (crescent moon, top-right)

---

## Local Dev Server
```
node serve.mjs
```
Serves project root at `http://localhost:3000`. Start in background. Do not start a second instance if already running.

---

## Git & Deployment
- **Never push to GitHub unless the user explicitly says to.** Do not commit or push after making changes.
- Deployed on **Vercel** connected to `github.com/AdnanMorina/ts-scrapsite`
- Vercel auto-deploys on push to `main`
- **Image filenames are case-sensitive on Vercel (Linux).** Always match the exact case in both the file and the `src` reference. Prefer all-lowercase filenames.

---

## Design Rules
- Never use `transition-all` — only animate `transform` and `opacity`
- Never use Tailwind or default blue/indigo colors
- All interactive elements need hover, focus-visible, and active states
- Surfaces use a layering system: `--bg` (base) → `--surface` (cards) → floating (modals/lightbox)
- Spacing uses CSS `clamp()` for responsive scaling
- Dark mode via `[data-theme="dark"]` on `document.documentElement`

---

## Key Components (all in index.html)
| Component | Purpose |
|---|---|
| `HomePage` | Landing screen with note card |
| `IntroSection` | Transitional pages between home and scrapbook |
| `PolaroidStrip` | 5 swinging polaroids with lightbox on click |
| `Lightbox` | FLIP animation zoom from thumbnail to center |
| `SpotifyEmbed` | Spotify iframe (152px height, autoplay attempted) |
| `MessageCard` | Typewriter-animated message with ghost-overlay height trick |
| `HeartParticles` | Floating hearts/emojis on last page (and `fireworks: true` pages) |
| `Fireworks` | Burst particle effects on pages with `fireworks: true` |
| `PasswordGate` | Lock screen for pages with a `password` field |
| `HamburgerMenu` | Slide-in nav listing all pages |

---

## Things NOT to Do
- Do not add unrequested features or "improvements"
- Do not refactor working code unless asked
- Do not add comments or docstrings to code you didn't change
- Do not push to GitHub without being explicitly told
- Do not start a second dev server if one is running
- Do not use Tailwind
- Do not introduce a build step or bundler
