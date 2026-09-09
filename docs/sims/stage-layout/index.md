---
title: "Stage Layout and Boundaries"
description: "A sprite moves on the 480x360 Scratch stage and bounces, stops, or wraps at the edges based on a dropdown choice, with pause, reset, click-to-place, a speed slider, and grid and coordinate toggles."
image: /sims/stage-layout/stage-layout.png
og:image: /sims/stage-layout/stage-layout.png
twitter:image: /sims/stage-layout/stage-layout.png
social:
   cards: false
quality_score: 0
---

# Stage Layout and Boundaries

<iframe src="main.html" height="505px" width="100%" scrolling="no"></iframe>

[Run the Stage Layout and Boundaries MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim shows the Scratch stage's actual size (480x360 pixels) and its coordinate boundaries, from -240 to 240 on the x-axis and -180 to 180 on the y-axis. A cat sprite drifts across the stage and demonstrates the three ways Scratch can handle a sprite reaching the edge: bouncing back, stopping in place, or wrapping around to the opposite side.

## How to Use

- **⏸ Pause / ▶ Play** button starts and stops the sprite's motion; **Reset Position** sends it back to the center (0,0).
- A dropdown menu chooses the boundary behavior: **Bounce**, **Stop at Edge**, or **Wrap Around**.
- **Show Grid** and **Show Coordinates** checkboxes toggle the background grid lines and the axis number labels.
- The **Speed** slider (0.5x to 5x) controls how fast the sprite moves.
- Hovering over the stage makes the sprite move, and clicking anywhere on the stage instantly places the sprite at that point.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://arunbatchu.github.io/scratch-textbook/sims/stage-layout/main.html"
        height="505px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-11)

### Duration
20 minutes

### Prerequisites
- Knows the stage is 480x360 pixels with center (0, 0), x from -240 to 240, and y from -180 to 180 (covered earlier in this chapter and in Chapter 1)
- Comfortable reading an (x, y) position, ideally after using the Stage Coordinate System MicroSim
- No motion-block vocabulary is needed yet — this sim previews what "bounce," "stop," and "wrap" look like before those blocks are introduced later in this chapter

### Activities

1. **Exploration** (5 min): Students press Play to watch the default motion, then use the Speed slider to slow down and speed up the sprite, describing in their own words what happens each time it reaches an edge.
2. **Guided Practice** (10 min): Students switch the dropdown through all three boundary behaviors — Bounce, Stop at Edge, Wrap Around — one at a time, pausing after each to describe what happened, then use Reset Position and click-to-place to test a behavior starting from a specific point they choose.
3. **Assessment** (5 min): Given a description of a desired behavior (e.g., "a ball that bounces off the walls" vs. "a character that disappears off one side and reappears on the other"), students choose the matching dropdown setting and justify their choice.

### Assessment
Student can correctly match a boundary behavior (Bounce, Stop at Edge, Wrap Around) to a description of how a sprite should act at the stage's edge, and can describe "wrap around" using coordinate language (for example, "it goes from x = 240 to x = -240").

## References

1. [Stage Size and Boundaries — Chapter 2: Sprites, Stage, and the Coordinate System](../../chapters/02-sprites-stage-coordinates/index.md)
2. [If on Edge, Bounce (block) — Scratch Wiki](https://en.scratch-wiki.info/wiki/If_on_Edge,_Bounce_(block))
