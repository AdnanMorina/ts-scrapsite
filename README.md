# Thalia's Birthday Scrapbook

A collaborative digital scrapbook built for Thalia's birthday. Each contributor gets their own page with photos, a Spotify track, and a personal message.

---

## For Contributors — Adding Your Page

You don't need to know React or run anything locally. Just follow these steps:

### 1. Copy the template

Duplicate `pages/_template.js` and rename it to something like `pages/page-yourname.js`.

### 2. Fill in your content

Open your new file and fill in:

- **title** — your chapter heading (e.g. `"From Sarah, With Love"`)
- **spotifyEmbed** — paste the embed URL from Spotify (Share → Embed track → copy the `src` URL)
- **spotifyStartAt** — optional, start the song at a specific second (e.g. `30` for 0:30)
- **photos** — exactly 5 photos with captions. See below for image options.
- **message** — write whatever you want, as long as you like

Optional flags you can add:
```js
celebrations: true,   // adds hearts + fireworks to your page
password: 'yourword', // locks your page behind a password prompt
```

### 3. Add your photos

Create a folder at `images/page-yourname/` and drop your 5 photos in there. Then reference them in your page file as `/images/page-yourname/photo-1.jpg`.

**Important:** Filenames are case-sensitive on the live site. Use all-lowercase names (e.g. `photo-1.jpg`, not `Photo-1.JPG`).

Alternatively, you can use direct image URLs from Imgur, Google Photos, or any image host — no need to add files to the repo.

### 4. Submit

Send your completed `pages/page-yourname.js` file (and your `images/` folder if applicable) to Adnan. He'll add it to the site.

---

## Running Locally

Requires [Node.js](https://nodejs.org/).

```bash
node serve.mjs
```

Then open `http://localhost:3000` in your browser.

---

## Project Structure

```
index.html          — entire app: all CSS, all components, routing
serve.mjs           — local dev server
pages/
  _template.js      — start here to add a new page
  page-yourname.js  — one file per contributor
sections/
  _template.js      — for intro/transitional pages between home and scrapbook
images/
  page-yourname/    — one folder per contributor's photos
```

---

## Tech

- React 18 via CDN (no build step, no Node required to contribute)
- Babel Standalone for JSX
- Pure CSS with custom properties — no Tailwind, no frameworks
- Deployed on Vercel via this repo
