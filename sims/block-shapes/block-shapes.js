// Block Shapes - Interactive Gallery
//
// The blocks themselves are rendered by scratchblocks.js (see
// docs/js/scratchblocks-init.js, loaded before this file), which turns the
// <div class="scratch"> elements in main.html into real Scratch 3 block
// graphics. This script only adds the gallery's interactivity: hovering,
// tapping, or tabbing to a card highlights it, swaps its single preview
// block for the full list of example blocks with that shape, and shows a
// short note in the info line. Clicking/tapping (or Enter/Space) pins a
// card open; "Reset" unpins it.

(function () {
  let gallery, infoLine, resetButton, cards;
  let activeId = null;
  let hoveredId = null;

  function init() {
    gallery = document.getElementById("gallery");
    infoLine = document.getElementById("info-line");
    resetButton = document.getElementById("reset-button");
    cards = Array.from(document.querySelectorAll(".shape-card"));

    if (!gallery || cards.length === 0) return;

    cards.forEach((card) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      if (card.dataset.desc) card.setAttribute("aria-label", card.dataset.desc);

      card.addEventListener("mouseenter", () => {
        hoveredId = card.dataset.id;
        refresh();
      });
      card.addEventListener("mouseleave", () => {
        hoveredId = null;
        refresh();
      });
      card.addEventListener("click", () => {
        activeId = activeId === card.dataset.id ? null : card.dataset.id;
        refresh();
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activeId = activeId === card.dataset.id ? null : card.dataset.id;
          refresh();
        }
      });
      card.addEventListener("focus", () => {
        hoveredId = card.dataset.id;
        refresh();
      });
      card.addEventListener("blur", () => {
        hoveredId = null;
        refresh();
      });
    });

    resetButton.addEventListener("click", () => {
      activeId = null;
      refresh();
    });

    refresh();
  }

  function refresh() {
    const openId = activeId || hoveredId;

    cards.forEach((card) => {
      card.classList.toggle("active", card.dataset.id === openId);
    });

    if (openId) {
      const card = cards.find((c) => c.dataset.id === openId);
      infoLine.textContent = card.dataset.desc || "";
    } else {
      infoLine.textContent = "Hover or tap a card to see more example blocks with that shape.";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
