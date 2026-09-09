---
title: "Block Shape Flow"
description: "Interactive diagram showing how Scratch block shapes connect in a script: a hat block starts it, stack blocks act in sequence, and reporter/boolean blocks plug into slots. Hover to highlight blocks."
image: /sims/block-shape-flow/block-shape-flow.png
og:image: /sims/block-shape-flow/block-shape-flow.png
twitter:image: /sims/block-shape-flow/block-shape-flow.png
social:
   cards: false
quality_score: 0
---

# Block Shape Flow

<iframe src="main.html" height="565px" width="100%" scrolling="no"></iframe>

[Run the Block Shape Flow MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This diagram shows how the different Scratch block shapes connect together in a real script: a hat block starts the sequence, two stack blocks carry out actions in order, and a C-block wraps a cap block ("stop all") that ends the script. A reporter block and a boolean block sit off to the side with arrows showing which empty slots they plug into. The blocks are rendered with [scratchblocks.js](https://github.com/scratchblocks/scratchblocks) — the same renderer used throughout this site — so they look and are colored exactly like real Scratch blocks, grouped by their real Scratch category (Events, Motion, Operators, Sensing, Control).

## How to Use

- Hover over (or tap, on touch devices) any block in the diagram to highlight it and read a short note about its shape in the line below the diagram.
- Click/tap a block to pin its highlight; click it again, or click "Reset Highlight", to clear it.
- Every block can also be reached with the Tab key and toggled with Enter or Space, for keyboard-only use.
- Use the "Show Block Types" checkbox to toggle small labels (HAT, STACK, REPORTER, BOOLEAN, C-BLOCK + CAP) above each block.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://arunbatchu.github.io/scratch-textbook/sims/block-shape-flow/main.html"
        height="565px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-12)

### Duration
15-20 minutes

### Prerequisites
- Has learned the five block shapes (hat, stack, reporter, boolean, cap) and what job each one does, from earlier in this chapter.
- Knows that a script runs top to bottom starting from a hat block.
- Familiar with the idea of a round "input slot" and a hexagonal "boolean slot" where reporter and boolean blocks plug in.

### Activities

1. **Exploration** (5 min): Students hover over each block in the diagram — the hat, the two stack blocks, the if/stop-all block, the reporter, and the boolean — and read the pop-up description of why that block has its shape.
2. **Guided Practice** (7 min): With "Show Block Types" turned on, students trace the diagram out loud in order (hat, stack, stack, conditional), then identify the reporter and boolean blocks off to the side and explain why they aren't part of that vertical chain.
3. **Assessment** (5 min): Students turn off "Show Block Types" and, working from memory, label each block's shape type to a partner, then turn the labels back on to self-check.

### Assessment
Student can correctly identify which blocks in the diagram start the script, run in sequence, and end the script, and can explain that the reporter and boolean blocks are not part of that sequence — they plug into slots on other blocks instead.

## References

1. [Chapter 3: Motion Blocks and Block Categories — The Five Block Shapes](../../chapters/03-motion-blocks-categories/index.md)
