/* Render <div class="scratch"> elements as Scratch 3 block diagrams using
 * scratchblocks.js (loaded from CDN in mkdocs.yml's extra_javascript).
 *
 * Re-runs on every page load, including MkDocs Material's instant
 * navigation, which swaps page content without a full reload.
 */
(function () {
  function render() {
    if (typeof scratchblocks === "undefined") return;
    scratchblocks.renderMatching("div.scratch", {
      style: "scratch3",
      languages: ["en"],
      scale: 0.8
    });
  }

  // MkDocs Material instant navigation
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(render);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
