// ============================================================
// SCRAPBOOK PAGE TEMPLATE
// ============================================================
// Copy this file, rename it (e.g. pages/page-sarah.js),
// fill in your details, then add this line to index.html:
//
//   <script src="pages/page-sarah.js"></script>
//
// Keep the (function(){ ... })(); wrapper — it prevents any
// variable name conflicts between pages.
// ============================================================

(function () {
  window.__SCRAPBOOK_PAGES__ = window.__SCRAPBOOK_PAGES__ || [];

  window.__SCRAPBOOK_PAGES__.push({

    // ── Chapter title shown above the music player ──────────
    title: "Your Chapter Title Here",

    // ── Spotify embed URL ────────────────────────────────────
    // 1. Open Spotify, find your song, click ··· → Share → Embed track
    // 2. Copy the src URL from the iframe code — it looks like:
    //    https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator
    // 3. Paste it below (keep the quotes)
    spotifyEmbed: "https://open.spotify.com/embed/track/REPLACE_WITH_TRACK_ID?utm_source=generator&theme=0",

    // ── Optional: start the song at a specific second ────────
    // e.g. 30 = start at 0:30, 90 = start at 1:30, 0 = from the beginning
    spotifyStartAt: 0,

    // ── Photos ───────────────────────────────────────────────
    // 1. Create a folder: images/page-yourname/
    // 2. Drop your 5 photos in there (jpg, png, webp all work)
    // 3. Reference them below as /images/page-yourname/filename.jpg
    //
    // You can also use a remote URL (Imgur, Google Photos direct link, etc.)
    // if you'd rather not add files to the repo.
    //
    // Optional fields per photo:
    //   crop: controls which part of the photo is visible when cropped.
    //         Uses CSS object-position syntax — examples:
    //           "center"      (default — crops to the middle)
    //           "top"         (keeps the top of the photo)
    //           "bottom"      (keeps the bottom)
    //           "50% 20%"     (fine-tune: X% from left, Y% from top)
    //
    //   fit:  "contain" — shows the whole photo without any cropping
    //                     (letterboxed with a blush background)
    //         omit or "cover" — crops to fill the square (default)
    photos: [
      { src: "/images/page-yourname/photo-1.jpg", caption: "caption one"             },
      { src: "/images/page-yourname/photo-2.jpg", caption: "caption two",  crop: "top"    },
      { src: "/images/page-yourname/photo-3.jpg", caption: "caption three", fit: "contain" },
      { src: "/images/page-yourname/photo-4.jpg", caption: "caption four", crop: "50% 30%" },
      { src: "/images/page-yourname/photo-5.jpg", caption: "caption five"             },
    ],

    // ── Special effects (optional) ───────────────────────────
    // Add celebrations: true to show hearts + fireworks on this page.
    // celebrations: true,

    // ── Password protection (optional) ───────────────────────
    // Add password: 'yourword' to lock this page behind a prompt.
    // password: 'yourword',

    // ── Your message ─────────────────────────────────────────
    // Write freely. A blank line between paragraphs = new paragraph in the card.
    // Keep line breaks as-is — they'll be preserved on screen.
    message: `Write your message to Thalia here.

This is a new paragraph — just leave a blank line.

And another one if you like.

Make it as long or as short as you want. ❤️`,

  });
})();
