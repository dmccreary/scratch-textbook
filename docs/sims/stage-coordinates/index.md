---
title: "Stage Coordinate System"
description: "Click anywhere on the Scratch stage to move a sprite and see its live x, y coordinates and quadrant; buttons jump to the center or corners, and checkboxes toggle the grid, labels, and quadrants."
image: /sims/stage-coordinates/stage-coordinates.png
og:image: /sims/stage-coordinates/stage-coordinates.png
twitter:image: /sims/stage-coordinates/stage-coordinates.png
social:
   cards: false
quality_score: 0
---

# Stage Coordinate System

<iframe src="main.html" height="525px" width="100%" scrolling="no"></iframe>

[Run the Stage Coordinate System MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim visualizes the Scratch stage as an x/y coordinate grid running from -240 to 240 across and -180 to 180 up and down, with the origin (0,0) at the center. It shows a cat sprite that glides to any point you choose, so students can connect a Scratch coordinate pair to where it actually lands on the stage and which of the four quadrants it falls in.

## How to Use

- **Click anywhere on the stage** to send the sprite gliding to that point; the x and y values and the current quadrant (QI-QIV) update live below the stage.
- **Center (0,0)**, **Top-Left (-240,180)**, **Top-Right (240,180)**, **Bottom-Left (-240,-180)**, and **Bottom-Right (240,-180)** buttons jump the sprite straight to each named coordinate.
- **Show Grid**, **Show Axis Labels**, and **Show Quadrants** checkboxes toggle the background grid lines, the QI-QIV labels, and the quadrant display on and off.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://arunbatchu.github.io/scratch-textbook/sims/stage-coordinates/main.html"
        height="525px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-11)

### Duration
15 minutes

### Prerequisites
- Knows what a sprite and the stage are (introduced earlier in this chapter)
- Has seen that the stage is 480x360 pixels with (0, 0) at the center, x ranging from -240 to 240, and y ranging from -180 to 180 (see the "Pro Tip" earlier in this chapter)
- Comfortable reading positive and negative numbers on a number line

### Activities

1. **Exploration** (5 min): Students click several spots on the stage and watch the cat glide there, reading the live x, y, and quadrant (QI-QIV) display and noticing how the numbers change sign as they cross the center.
2. **Guided Practice** (5 min): Working in pairs, one student names a location ("Top-Left," "Center") for their partner to click the matching button, and both predict the (x, y) values before checking them against the live display.
3. **Assessment** (5 min): With Show Grid and Show Quadrants turned off, the teacher calls out a coordinate pair (e.g., "(150, -100)") and students click their best guess on the blank stage, then turn the grid back on to check how close they landed.

### Assessment
Student can correctly identify which quadrant (QI-QIV) a clicked point falls into and can explain why the sign of x changes at the vertical center line and the sign of y changes at the horizontal center line.

## References

1. [The Stage — Chapter 1: Welcome to Scratch](../../chapters/01-welcome-to-scratch/index.md)
2. [Coordinate System — Scratch Wiki](https://en.scratch-wiki.info/wiki/Coordinate_System)
