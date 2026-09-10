---
title: "Broadcast Flow"
description: "Interactive diagram of Scratch's broadcast system. Pick a message and click Trigger Broadcast to animate it flowing from a sender sprite to its receivers, with sync mode and code snippets."
image: /sims/broadcast-flow/broadcast-flow.png
og:image: /sims/broadcast-flow/broadcast-flow.png
twitter:image: /sims/broadcast-flow/broadcast-flow.png
social:
   cards: false
quality_score: 0
---

# Broadcast Flow

<iframe src="main.html" height="545px" width="100%" scrolling="no"></iframe>

[Run the Broadcast Flow MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This MicroSim visualizes how Scratch's broadcast and "when I receive" blocks let sprites communicate with each other. Selecting one of five sample messages (such as game-start or player-hit) shows which sprite sends it and which sprites receive it, and an animated pulse traces the message traveling from sender to receivers.

## How to Use

- Click one of the five broadcast-name buttons (game-start, player-hit, coin-collected, level-complete, game-over) to select a message; its sender, receivers, and sync/async status appear in the info panel.
- Click "Trigger Broadcast" to animate the message moving from the sending sprite to its receivers.
- Check "Show 'and wait' sync" to replay the broadcast continuously as a synchronous (broadcast and wait) call.
- Check "Show code snippets" to show or hide the matching "when I receive" code example in the info panel.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/scratch-textbook/sims/broadcast-flow/main.html"
        height="545px"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
Grades 4-6 (ages 9-12)

### Duration
15-20 minutes

### Prerequisites
- Understands events and hat blocks (for example, "when green flag clicked") and has built at least one script that starts with a hat block.
- Knows what a sprite is and that a Scratch project can have several sprites on the stage at once.
- Has been introduced to the `broadcast` and `when I receive` blocks (see the Broadcast Messages section earlier in this chapter) before using this MicroSim to see them animated.

### Activities

1. **Exploration** (5 min): Students click through each of the 5 broadcast messages (game-start, player-hit, coin-collected, level-complete, game-over) and read which sprite sends it and which sprites receive it in the info panel.
2. **Guided Practice** (7 min): Students click "Trigger Broadcast" to watch the pulse travel from sender to receivers, then check "Show code snippets" to match the animation to the actual `broadcast` and `when I receive` blocks, discussing why every receiving sprite can react to the same message differently.
3. **Assessment** (5 min): Students check "Show 'and wait' sync" and explain, in their own words, the difference between a plain `broadcast` and a `broadcast ... and wait` — specifically, what the sending sprite does while it waits.

### Assessment
Student can explain that one broadcast message can be received by multiple sprites at once, can identify which sprite is the sender versus the receivers for a chosen message, and can describe the difference between `broadcast` and `broadcast and wait`.

## References

1. [Chapter 4: Events, Sequences, and First Scripts — Broadcast Messages](../../chapters/04-events-sequences-first-scripts/index.md)
2. [Chapter 6: Broadcasting, Conditionals, and Sensing — Broadcast Messages](../../chapters/06-broadcasting-conditionals-sensing/index.md)
