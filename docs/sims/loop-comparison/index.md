---
title: "Loop Comparison"
description: "Animated comparison of Scratch's repeat, forever, and repeat until loops, controlled with loop-select buttons, Start/Pause/Reset, and a speed slider."
image: /sims/loop-comparison/loop-comparison.png
og:image: /sims/loop-comparison/loop-comparison.png
twitter:image: /sims/loop-comparison/loop-comparison.png
social:
   cards: false
quality_score: 0
---

# Loop Comparison

<iframe src="main.html" height="485px" width="100%" scrolling="no"></iframe>

[Run the Loop Comparison MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim animates three Scratch loop blocks side by side: repeat (a counted loop that runs a fixed number of times), forever (a continuous loop that never stops on its own), and repeat until (a conditional loop that ends when a condition becomes true). Watching a sprite move through each loop type helps students see how choosing a loop changes program behavior, from drawing a square to continuous game-style movement to moving until a sprite reaches an edge.

## How to Use

- Click one of the three loop buttons (🔁 repeat (10), ∞ forever, or 🎯 repeat until < >) to choose which loop type to visualize.
- Press ▶ Start to run the animation, ⏸ Pause to stop it partway, and 🔄 Reset to return to the beginning.
- Drag the Speed slider to make the animation run faster or slower.
- Watch the Iteration counter and the info panel in the upper left, which show the loop's description and a short code example.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/scratch-textbook/sims/loop-comparison/main.html"
        height="485px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-12)

### Duration
10-15 minutes

### Prerequisites
Understands that scripts run in sequence, top to bottom, and has been introduced to the idea that a loop repeats a set of blocks (earlier in this chapter). Knows what the `touching edge?` sensing block checks, since the repeat-until example uses it. No prior experience choosing between loop types is assumed — this is the first side-by-side comparison in the course.

### Activities

1. **Exploration** (5 min): Students select each of the three loop buttons in turn — repeat (10), forever, repeat until \<touching edge?\> — and press Start to watch each one run at the default speed, noting whether and how it stops.
2. **Guided Practice** (5 min): Using the Speed slider, students slow down the `repeat (10)` loop and count iterations aloud with the on-screen counter, then compare it to `forever`, which keeps going until Pause is pressed.
3. **Assessment** (5 min): Before pressing Start on `repeat until`, students predict when the sprite will stop, then run it to check, and explain what would need to be added to a `forever` loop to make it stop the same way.

### Assessment
Student can correctly choose which loop type to use for (a) drawing a shape with an exact number of sides, (b) an action that should run continuously during a game, and (c) an action that should stop automatically once a condition is met — and can explain why an unguarded `forever` loop never stops on its own.

## References

1. [Repeat Loops — Chapter 4: Events, Sequences, and First Scripts](../../chapters/04-events-sequences-first-scripts/index.md)
2. [Repeat Until () — Scratch Wiki](https://en.scratch-wiki.info/wiki/Repeat_Until_()_(block))
