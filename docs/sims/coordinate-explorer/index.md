---
title: "Interactive Coordinate Explorer"
description: "Interactive p5.js coordinate plane: move the mouse or click the stage to place a star sprite and see its (x, y) coordinates and quadrant update live, plus a quiz mode that scores target clicks."
image: /sims/coordinate-explorer/coordinate-explorer.png
og:image: /sims/coordinate-explorer/coordinate-explorer.png
twitter:image: /sims/coordinate-explorer/coordinate-explorer.png
social:
   cards: false
quality_score: 0
---

# Interactive Coordinate Explorer

<iframe src="main.html" height="555px" width="100%" scrolling="no"></iframe>

[Run the Interactive Coordinate Explorer MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim shows the Scratch Stage as a labeled coordinate plane divided into four quadrants, helping students connect the numeric x and y values used in Scratch motion blocks to actual positions on the screen. Moving the mouse over the stage places a star-shaped sprite and updates a live coordinate readout, so students can see exactly how (0, 0) sits at the center and how the sign of x and y changes in each quadrant.

## How to Use

- Move the mouse over the stage (or click) to place the yellow star sprite; the x, y coordinates and quadrant name update in the info box at the top left.
- Use the **Show Grid**, **Show Quadrants**, and **Show Axes** checkboxes to turn each visual layer on or off.
- Check **Quiz Mode** (or **Show Target**) to display a pulsing red target; click on it to score a point, and watch the Score counter in the top-right corner track correct guesses out of total attempts.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/scratch-textbook/sims/coordinate-explorer/main.html"
        height="555px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-12)

### Duration
15-20 minutes

### Prerequisites
Students should already know that the Scratch Stage is 480 x 360 pixels with its center at (0, 0) (Chapter 1), and should have just read how the x-axis runs from -240 to 240 and the y-axis runs from -180 to 180, with positions written as (x, y) (Chapter 2, "The Coordinate System"). Comfort with positive and negative numbers on a number line is helpful but not required — the MicroSim itself is a good first introduction.

### Activities

1. **Exploration** (5 min): With **Show Grid**, **Show Quadrants**, and **Show Axes** all turned on, students move the mouse around the stage and watch the (x, y) reading and quadrant name change as the yellow star follows the cursor.
2. **Guided Practice** (5-7 min): The teacher calls out a target ("Click somewhere in Quadrant III," "Find a spot where x is negative and y is positive"), and students click there, checking the coordinate readout to confirm they landed in the right place.
3. **Assessment** (5 min): Students turn on **Quiz Mode**, click the pulsing target as it appears in different quadrants, and watch the Score counter track how many attempts they get right.

### Assessment
Check that the student can state the (x, y) coordinates of a point where the star is placed, name which quadrant a given point falls in based on the signs of x and y, and score at least 4 out of 5 correct hits in Quiz Mode.

## References

1. [Chapter 2: Sprites, Stage, and the Coordinate System](../../chapters/02-sprites-stage-coordinates/index.md) — the chapter where this MicroSim is introduced, covering the full coordinate system and quadrants.
