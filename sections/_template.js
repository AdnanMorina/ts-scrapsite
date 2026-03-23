// ============================================================
// INTRO SECTION TEMPLATE
// ============================================================
// These pages appear between the homepage and the scrapbook.
// Use them for anything you want — an intro, a story, a note.
//
// To add a new section:
//   1. Copy this file → sections/section-yourname.js
//   2. Fill in your content below
//   3. Add this line to index.html (in the INTRO SECTIONS block):
//        <script src="sections/section-yourname.js"></script>
//      Sections display in the order their <script> tags appear.
// ============================================================

(function () {
  window.__INTRO_SECTIONS__ = window.__INTRO_SECTIONS__ || [];

  window.__INTRO_SECTIONS__.push({

    // ── Small label above the title (optional) ───────────────
    subtitle: "A note before we begin",

    // ── Main title ───────────────────────────────────────────
    title: "Your Section Title",

    // ── Body text ────────────────────────────────────────────
    // Write freely. Blank line between paragraphs = new paragraph.
    // Keep the backtick string — line breaks are preserved on screen.
    body: `Write whatever you'd like here.

A blank line between paragraphs creates a new paragraph.

This can be as long or as short as you want.`,

    // ── Button label (optional) ───────────────────────────────
    // Defaults to "Continue →" (or "Open Scrapbook →" on the last section).
    // Uncomment to override:
    // enterLabel: "Let's go →",

  });
})();
