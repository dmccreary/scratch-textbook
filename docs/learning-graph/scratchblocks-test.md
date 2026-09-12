---
title: Scratchblocks Rendering Test
description: Verifies that div.scratch markup renders as Scratch 3 block diagrams via scratchblocks.js.
hide:
  toc
---

# Scratchblocks Rendering Test

This page checks that `<div class="scratch">` blocks render correctly as
Scratch 3 block diagrams. Write the Scratch block source as plain text inside
the div; `docs/js/scratchblocks-init.js` finds every `div.scratch` on the page
and hands it to [scratchblocks.js](https://github.com/scratchblocks/scratchblocks)
for rendering.

## Basic script

<div class="scratch">
when green flag clicked
move (10) steps
turn right (15) degrees
</div>

## Loops and pen blocks

<div class="scratch">
when green flag clicked
erase all
pen down
repeat (4)
move (100) steps
turn right (90) degrees
end
</div>

## Variables and conditionals

<div class="scratch">
when green flag clicked
set [score v] to (0)
forever
if &lt;key (space v) pressed?&gt; then
change [score v] by (1)
end
end
</div>

If the three scripts above render as colored Scratch block diagrams (not raw
text), the `extra_css` / `extra_javascript` entries in `mkdocs.yml` and the
assets in `docs/css/scratchblocks.css` and `docs/js/scratchblocks-init.js`
are wired up correctly.
