---
title: "Coordinate Reporters in Action"
description: "Interactive p5.js MicroSim showing Scratch's x position and y position reporters: click the stage to move a sprite and watch live x/y readouts, an optional motion path, and mouse-follow mode."
image: /sims/coordinate-reporters/coordinate-reporters.png
og:image: /sims/coordinate-reporters/coordinate-reporters.png
twitter:image: /sims/coordinate-reporters/coordinate-reporters.png
social:
   cards: false
quality_score: 0
---

# Coordinate Reporters in Action

<iframe src="main.html" height="455px" width="100%" scrolling="no"></iframe>

[Run the Coordinate Reporters in Action MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim demonstrates how Scratch's x position and y position reporter blocks track a sprite's location as it moves. A small cat sprite sits on a coordinate grid, and a live x, y, and quadrant readout updates in real time as the sprite glides toward wherever the student clicks.

## How to Use

- Click anywhere on the stage to send the sprite gliding toward that position.
- Check **Show x/y Reporters** to display the live x, y, and quadrant readout in the top-left corner.
- Check **Follow Mouse** to have the sprite continuously chase the mouse pointer instead of clicking to set a target.
- Check **Show Path** to trace the sprite's recent movement as a blue line, and use the **Clear Path** button to erase it.
- Click **Go to Center (0,0)** to snap the target back to the origin.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://arunbatchu.github.io/scratch-textbook/sims/coordinate-reporters/main.html"
        height="455px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-12)

### Duration
15-20 minutes

### Prerequisites
Students should already understand the Scratch coordinate system — x from -240 to 240, y from -180 to 180, center at (0, 0), and the four quadrants (Chapter 2). They should also know the difference between an instant `go to` and a smooth `glide` motion block, and that a rounded "reporter" block (like `x position` or `y position`) gives back a value rather than performing an action (Chapters 1 and 2).

### Activities

1. **Exploration** (5 min): Students click different spots on the stage and watch the cat sprite glide there while the x, y, and quadrant readout updates; then turn on **Show Path** to see the trail the sprite left behind.
2. **Guided Practice** (5-7 min): Students turn on **Follow Mouse** and slowly move the mouse through each of the four quadrants, pausing to read the live x and y values and connect them to the `x position` / `y position` reporter blocks shown in the chapter's code examples (for example, `go to x: (x position) y: (100)`).
3. **Assessment** (5 min): Students click **Go to Center (0,0)**, predict what the x, y, and quadrant readout will show for a new target *before* clicking it, then click and check their prediction — repeating for a few more points.

### Assessment
Check that the student can read the live x, y, and quadrant display and correctly state what the `x position` and `y position` reporter blocks would report at that moment, and can explain in their own words the difference between the sprite "gliding" to a clicked point and "following" the mouse continuously.

## References

1. [Chapter 4: Events, Sequences, and First Scripts](../../chapters/04-events-sequences-first-scripts/index.md) — the chapter where this MicroSim is introduced, covering the `x position` and `y position` reporter blocks.
2. [Chapter 2: Sprites, Stage, and the Coordinate System](../../chapters/02-sprites-stage-coordinates/index.md) — where the underlying coordinate system and quadrants are first taught.
