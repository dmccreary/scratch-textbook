// Block Shape Flow - Interactive Diagram
//
// The blocks themselves are rendered by scratchblocks.js (see
// docs/js/scratchblocks-init.js, loaded before this file), which turns the
// <div class="scratch"> elements in main.html into real Scratch 3 block
// graphics. This script adds the diagram's interactivity on top of that
// rendering: hover/tap highlighting, the connecting arrows between blocks,
// and the "Show Block Types" / "Reset Highlight" controls.
//
// Layout strategy: #stage holds the blocks at one fixed, natural size (it
// never reflows), so the arrow paths only need to be measured and drawn
// once. #flow-area is the responsive part - it just scales #stage down
// (as a single rigid unit, via CSS transform) to fit the available width.

(function () {
  const connections = [
    { from: "hat", to: "stack1", label: "then", kind: "flow" },
    { from: "stack1", to: "stack2", label: "then", kind: "flow" },
    { from: "stack2", to: "conditional", label: "then", kind: "flow" },
    { from: "reporter", to: "stack2", label: "plugs in", kind: "input" },
    { from: "boolean", to: "conditional", label: "plugs in", kind: "input" }
  ];

  const svgNS = "http://www.w3.org/2000/svg";
  let flowArea, stage, arrowsSvg, infoLine, cards, resetButton, showTypesCheckbox;
  let activeId = null;
  let stageWidth = 0;
  let stageHeight = 0;

  function init() {
    flowArea = document.getElementById("flow-area");
    stage = document.getElementById("stage");
    arrowsSvg = document.getElementById("arrows-svg");
    infoLine = document.getElementById("info-line");
    resetButton = document.getElementById("reset-button");
    showTypesCheckbox = document.getElementById("show-types-checkbox");
    cards = Array.from(document.querySelectorAll(".block-card"));

    if (!flowArea || !stage || cards.length === 0) return;

    cards.forEach((card) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      if (card.dataset.desc) card.setAttribute("aria-label", card.dataset.desc);

      card.addEventListener("mouseenter", () => setActive(card.dataset.id));
      card.addEventListener("mouseleave", () => setActive(null));
      card.addEventListener("click", () => {
        setActive(activeId === card.dataset.id ? null : card.dataset.id);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(activeId === card.dataset.id ? null : card.dataset.id);
        }
      });
    });

    resetButton.addEventListener("click", () => setActive(null));
    showTypesCheckbox.addEventListener("change", () => {
      flowArea.classList.toggle("show-types", showTypesCheckbox.checked);
    });
    flowArea.classList.toggle("show-types", showTypesCheckbox.checked);

    measureAndDrawArrows();
    applyScale();

    window.addEventListener("resize", debounce(applyScale, 100));
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(applyScale, 100)).observe(flowArea);
    }
  }

  function setActive(id) {
    activeId = id;
    cards.forEach((card) => card.classList.toggle("active", card.dataset.id === id));

    if (id) {
      const card = cards.find((c) => c.dataset.id === id);
      infoLine.textContent = card.dataset.desc || "";
    } else {
      infoLine.textContent = "Hover or tap a block to see what makes its shape special.";
    }

    arrowsSvg.querySelectorAll("[data-from]").forEach((group) => {
      const touches = id && (group.dataset.from === id || group.dataset.to === id);
      group.classList.toggle("dim", Boolean(id) && !touches);
    });
  }

  // Measures the stage at its natural (untransformed) size and draws the
  // arrows once, in that same fixed coordinate space. Because #stage is
  // scaled later as a single rigid unit, this never needs to run again.
  function measureAndDrawArrows() {
    const prevTransform = stage.style.transform;
    stage.style.transform = "none";

    const stageRect = stage.getBoundingClientRect();
    stageWidth = stageRect.width;
    stageHeight = stageRect.height;
    arrowsSvg.setAttribute("width", stageWidth);
    arrowsSvg.setAttribute("height", stageHeight);

    const rects = {};
    cards.forEach((card) => {
      const r = card.getBoundingClientRect();
      rects[card.dataset.id] = {
        left: r.left - stageRect.left,
        top: r.top - stageRect.top,
        right: r.right - stageRect.left,
        bottom: r.bottom - stageRect.top
      };
    });

    arrowsSvg.innerHTML = "";
    connections.forEach((conn) => {
      const from = rects[conn.from];
      const to = rects[conn.to];
      if (!from || !to) return;

      const group = document.createElementNS(svgNS, "g");
      group.dataset.from = conn.from;
      group.dataset.to = conn.to;

      if (conn.kind === "flow") {
        const x = (from.left + from.right) / 2;
        const y1 = from.bottom;
        const y2 = to.top;
        addLine(group, x, y1, x, y2 - 8);
        addArrowhead(group, x, y2, 90);
        addLabel(group, x + 10, (y1 + y2) / 2, conn.label);
      } else {
        const startX = from.left;
        const startY = (from.top + from.bottom) / 2;
        const endX = to.right;
        const endY = (to.top + to.bottom) / 2;
        const midX = (startX + endX) / 2;
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute(
          "d",
          `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX + 10} ${endY}`
        );
        path.setAttribute("class", "flow-arrow");
        group.appendChild(path);
        const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;
        addArrowhead(group, endX + 8, endY, angle);
        addLabel(group, midX, (startY + endY) / 2 - 6, conn.label);
      }

      arrowsSvg.appendChild(group);
    });

    stage.style.transform = prevTransform;
  }

  // Scales #stage as one rigid unit to fit the available width, and tells
  // #flow-area how tall to be (transformed elements don't affect normal
  // document flow sizing on their own).
  function applyScale() {
    if (!stageWidth) return;
    const available = flowArea.clientWidth || stageWidth;
    const scale = Math.min(1, available / stageWidth);
    stage.style.transform = `scale(${scale})`;
    flowArea.style.height = `${stageHeight * scale}px`;
  }

  function addLine(group, x1, y1, x2, y2) {
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("class", "flow-arrow");
    group.appendChild(line);
  }

  function addArrowhead(group, x, y, angleDeg) {
    const tri = document.createElementNS(svgNS, "polygon");
    tri.setAttribute("points", "0,0 -8,-4 -8,4");
    tri.setAttribute("transform", `translate(${x},${y}) rotate(${angleDeg})`);
    tri.setAttribute("class", "flow-arrowhead");
    group.appendChild(tri);
  }

  function addLabel(group, x, y, text) {
    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y);
    label.setAttribute("class", "flow-label");
    label.setAttribute("style", "stroke:#fff;stroke-width:3px;paint-order:stroke fill;");
    label.textContent = text;
    group.appendChild(label);
  }

  function debounce(fn, wait) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
