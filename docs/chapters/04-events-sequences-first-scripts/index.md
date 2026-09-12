---
title: Events, Sequences, and First Scripts
description: Teaches event-driven programming with the Green Flag, sequential execution, and basic control structures for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 16:00:00
version: 0.08
---

# Events, Sequences, and First Scripts

## Summary

Teaches event-driven programming with the Green Flag, sequential execution, and basic control structures. This chapter covers 25 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Sharing Projects
2. Versioning
3. Stop Sign
4. Sequence
5. X Coordinate
6. Y Coordinate
7. Stage Center
8. Move Steps
9. Turn Degrees
10. Say Block
11. Think Block
12. Switch Costume
13. Next Costume
14. Change Size
15. Switch Backdrop
16. Green Flag Event
17. Sprite Clicked Event
18. Broadcast Message
19. Repeat Loop
20. If Block
21. Cloning
22. Key Pressed Event
23. Touching Sensor
24. Touching Color Sensor
25. Comparison Operators

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)
- [2. Sprites, Stage, and the Coordinate System](../02-sprites-stage-coordinates/index.md)

---

!!! mascot-welcome "Let's Make Things Happen"
    ![Scratch the Cat waving hello](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to make Scratch actually *do* something? This chapter is where sprites start reacting to clicks, keys, and each other — the green flag, loops that repeat, decisions with if blocks, and clones that multiply one sprite into an army. By the end you'll build three complete working scripts from scratch. Let's build something purr-fect!

## Events — When Things Happen

<div class="scratch">
when green flag clicked
</div>

### What Is an Event?

In Scratch, an **event** is something that happens that can **start a script**. Think of events like **triggers** — when the event occurs, Scratch says "Hey! Run this script now!"

Events make Scratch **event-driven** — your code doesn't just run all at once; it waits for things to happen, then responds.

!!! mascot-thinking "Code That Waits"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice something different here: your script doesn't run the instant the project loads — it just sits there until its event fires. That's a real shift from "run top to bottom" thinking: a Scratch project is really a pile of separate scripts, each waiting for its own cue.

### The Event Blocks (Yellow Hat Blocks)

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
when green flag clicked
</div>

Player clicks the green flag — starts the whole game.
</div>

<div class="card" markdown>
<div class="scratch">
when this sprite clicked
</div>

Player clicks or taps this sprite — buttons, collectibles.
</div>

<div class="card" markdown>
<div class="scratch">
when [space v] key pressed
</div>

A specific key is pressed — player movement.
</div>

<div class="card" markdown>
<div class="scratch">
when backdrop switches to [backdrop1 v]
</div>

The backdrop changes — scene transitions.
</div>

<div class="card" markdown>
<div class="scratch">
when I receive [message v]
</div>

A broadcast is received — sprite communication.
</div>

</div>

---

## The Green Flag — Your Universal "Start" Button

<div class="scratch">
when green flag clicked
</div>

The **green flag** (🟢) is the most important event in Scratch. When clicked, it fires **ALL scripts that start with `when green flag clicked`** — at the same time!

### Why the Green Flag Is Special

| Feature | What It Means |
|---------|---------------|
| **Runs everything at once** | Multiple sprites start together |
| **Resets the project** | Variables reset, sprites go to start positions |
| **Universal signal** | Every Scratcher knows: Green Flag = Go! |

### Green Flag Best Practices

1. **Every sprite needs a green flag script** for initialization
2. **Use it to set starting values** — position, variables, costumes
3. **Keep it simple** — just setup, not gameplay logic

<div class="scratch">
when green flag clicked
go to x: (-200) y: (-100) // Start position
set [score v] to (0) // Reset score
switch costume to [player-idle v] // Starting look
show // Make sure visible
</div>

!!! tip "🏁 One Green Flag to Rule Them All"
    The green flag is like the **starting whistle** in a sports game — everyone begins at the same moment!

---

## Sequences — Order Matters!

### What Is a Sequence?

A **sequence** is a set of instructions that run **one after another**, in order, from **top to bottom**.

Think of a recipe:

1. First, crack eggs
2. Then, add flour
3. Then, mix
4. Finally, bake

If you bake before mixing — disaster! **Order matters.**

### Sequence in Scratch

In Scratch, blocks in a stack run **one at a time**, from the **hat block down to the cap block** (or end of stack).

<div class="scratch">
when green flag clicked // 1. Starts first
say [Hello!] for (2) seconds // 2. Runs second, after say finishes
wait (1) seconds // 3. Runs third
move (100) steps // 4. Runs fourth
turn right (90) degrees // 5. Runs fifth
</div>

### Why Sequence Matters

| Wrong Order | What Happens |
|-------------|--------------|
| `move 100` then `say` | Sprite moves, THEN speaks (looks weird) |
| `say` then `move 100` | Sprite speaks, THEN moves (natural!) |

<div class="scratch">
when green flag clicked
go to x: (-200) y: (0) // 1. Position first
switch costume to [run1 v] // 2. Look ready
say [Ready, set, GO!] for (2) seconds // 3. Announce
wait (1) seconds // 4. Dramatic pause
forever // 5. Then start the game loop
if &lt;key [right arrow v] pressed?&gt; then
change x by (10)
end
end
</div>

!!! note "⬇️ Top to Bottom = First to Last"
    Scratch **always** runs blocks in order from the hat block down. If your script does something weird, check the order!

---

## The Stop Sign — Your Emergency Brake

The **stop sign** (🛑 red octagon) next to the green flag **stops everything immediately**.

| What It Stops | What Happens |
|---------------|--------------|
| All running scripts | Frozen mid-action |
| All sounds | Cut off instantly |
| All motion | Sprites freeze in place |
| All loops | Broken out of immediately |

### When to Use the Stop Sign

- **Testing** — Something's wrong, need to stop fast
- **Infinite loops** — `forever` with no exit condition
- **Game over** — Combined with `stop [all]` block in code

!!! mascot-warning "The Stop Sign Is Not Game Over"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A common trap: reaching for the stop sign as your game's "you lose" screen — but players can't click it, only you can, while testing. Use the `stop [all v]` block inside your code instead, and save the stop sign for catching runaway loops while you build.

---

## Building Your First Complete Scripts

### Script 1: The Greeter

A sprite that says hello when clicked:

<div class="scratch">
when this sprite clicked
say [Hello there!] for (2) seconds
play sound [pop v] until done
change color effect by (25)
wait (0.5) seconds
clear graphic effects
</div>

**Concepts used:** `when this sprite clicked` (Event), `say` (Looks), `play sound` (Sound), `change color effect` (Looks), `wait` (Control), `clear graphic effects` (Looks)

---

### Script 2: The Mover

A sprite that moves to where you click:

<div class="scratch">
when this sprite clicked
glide (1) secs to [mouse-pointer v]
play sound [pop v]
say [I'm here!] for (1) seconds
</div>

**Concepts used:** `when this sprite clicked`, `glide` (Motion), `mouse-pointer` (Sensing), `play sound`, `say`

---

### Script 3: The Keyboard Walker

Control a sprite with arrow keys:

<div class="scratch">
when green flag clicked
go to x: (0) y: (0)
forever
if &lt;key [right arrow v] pressed?&gt; then
change x by (10)
point in direction (90)
next costume
end
if &lt;key [left arrow v] pressed?&gt; then
change x by (-10)
point in direction (-90)
next costume
end
if &lt;key [up arrow v] pressed?&gt; then
change y by (10)
end
if &lt;key [down arrow v] pressed?&gt; then
change y by (-10)
end
end
</div>

**Concepts used:** `when green flag`, `go to`, `forever`, `if`, `key pressed?` (Sensing), `change x/y`, `point in direction`, `next costume`

---

## Repeat Loops — Do It Again (and Again!)

<div class="scratch">
repeat (10)
move (10) steps
end
</div>

### What Is a Loop?

A **loop** repeats a set of instructions **multiple times** without you having to copy-paste blocks.

### The Repeat Block (Control → Orange)

<div class="scratch">
repeat (10)
move (10) steps
turn right (15) degrees
end
</div>

This runs the inside blocks **10 times** — drawing a spiral!

### Types of Repeat

| Loop Type | Block | Repeats... |
|-----------|-------|------------|
| **Counted** | `repeat (10)` | Exact number of times |
| **Forever** | `forever` | Until stopped |
| **Until condition** | `repeat until <condition>` | Until something becomes true |

---

### Counted Repeat — Exact Repetitions

<div class="scratch">
repeat (4)
move (100) steps
turn right (90) degrees
end
</div>

**Draws a perfect square!** Runs exactly 4 times.

### Forever Loop — Continuous Action

<div class="scratch">
when green flag clicked
forever
if &lt;key [right arrow v] pressed?&gt; then
change x by (5)
end
if &lt;key [left arrow v] pressed?&gt; then
change x by (-5)
end
end
</div>

**Runs constantly** — perfect for game loops, animations, checking sensors.

!!! mascot-warning "Forever Needs to Breathe"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A `forever` loop with nothing slowing it down runs thousands of times per second, which can lag your whole project. Drop in a tiny `wait (0.01) seconds` — barely noticeable to a player, but it gives Scratch room to breathe.

---

### Repeat Until — Smart Loops

<div class="scratch">
repeat until &lt;touching [edge v]?&gt;
move (10) steps
end
</div>

**Keeps moving until it hits the edge**, then stops automatically!

---

#### Diagram: Loop Comparison

<iframe src="../../sims/loop-comparison/main.html" width="100%" height="485px" scrolling="no"></iframe>

<details markdown="1">
<summary>Loop Comparison</summary>
Type: microsim
**sim-id:** loop-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

Learning objective: Visualize the difference between repeat, forever, and repeat until

Canvas layout:

- Three side-by-side panels, each showing a sprite and loop type
- Panel 1: `repeat (4)` — draws square, stops
- Panel 2: `forever` — continuous spiral, stop button
- Panel 3: `repeat until <touching edge?>` — moves to edge, stops

Visual elements:

- Sprite drawing trail (Pen extension)
- Loop counter display: "Iteration: 1/4"
- Code preview for each loop type
- Play/Pause/Reset for each panel

Interactive controls:

- Play/Pause each loop independently
- Speed slider (0.1x to 5x)
- "Show code" toggle
- Reset all

Data Visibility Requirements:
  Stage 1: Show three loop types side by side, paused
  Stage 2: Play Panel 1 — show counted repeat completing
  Stage 3: Play Panel 2 — show forever running continuously
  Stage 4: Play Panel 3 — show repeat until stopping at edge

Instructional Rationale: Side-by-side comparison with visual output helps learners distinguish loop behaviors concretely rather than abstractly.

Implementation notes:

- Use p5.js with three canvas instances or one wide canvas
- Pen trails for visual feedback
- Loop state machines for each panel
</details>

---

## If Blocks — Making Decisions

<div class="scratch">
if &lt;touching [edge v]?&gt; then
turn right (180) degrees
end
</div>

### What Is an If Block?

An **if block** (Control → Orange) lets your code **make choices** based on conditions.

<div class="scratch">
if &lt;condition&gt; then
move (10) steps // Do this ONLY if condition is TRUE
end
</div>

### If-Else — Two Paths

<div class="scratch">
if &lt;condition&gt; then
move (10) steps // Do this if TRUE
else
turn right (15) degrees // Do this if FALSE
end
</div>

### Common Conditions (Sensing + Operators)

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
touching [mouse-pointer v]?
</div>

Sensing — true when the sprite touches the mouse cursor.
</div>

<div class="card" markdown>
<div class="scratch">
touching [Ball v]?
</div>

Sensing — true when it touches a specific sprite.
</div>

<div class="card" markdown>
<div class="scratch">
touching color [#FF0000]?
</div>

Sensing — true when it touches red pixels.
</div>

<div class="card" markdown>
<div class="scratch">
key [space v] pressed?
</div>

Sensing — true while the space bar is held down.
</div>

<div class="card" markdown>
<div class="scratch">
(x position) > (200)
</div>

Operators — true when X is right of center.
</div>

<div class="card" markdown>
<div class="scratch">
(score) > (100)
</div>

Operators — true when score exceeds 100.
</div>

</div>

---

### If Block Examples

#### Simple If — React to Edge

<div class="scratch">
forever
move (5) steps
if &lt;touching [edge v]?&gt; then
turn right (180) degrees
end
end
</div>

**Bounces off walls!**

#### If-Else — Two Behaviors

<div class="scratch">
forever
if &lt;key [space v] pressed?&gt; then
change y by (20) // Jump!
wait (0.5) seconds
change y by (-20)
else
end
end
</div>

If space isn't pressed, the `else` branch runs instead — here, that's simply nothing, so the sprite just waits.

#### Nested Ifs — Complex Choices

<div class="scratch">
forever
if &lt;touching [coin v]?&gt; then
change [score v] by (10)
play sound [coin v]
go to x: (pick random (-200) to (200)) y: (pick random (-150) to (150)) // Move coin to a new random spot
end
if &lt;touching [enemy v]?&gt; then
change [lives v] by (-1)
play sound [hurt v]
if &lt;(lives) = (0)&gt; then
broadcast [game-over v]
stop [this script v]
end
end
end
</div>

!!! mascot-tip "Track Else By Proximity"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Scratch won't let you add extra indentation for clarity, so train your eye instead: an `else` always belongs to the nearest `if` wrapped directly around it, never one further up the stack. When scripts get deep, trace each `if` from the top down to find its matching `else`.

---

## Comparison Operators — Math Decisions

<div class="scratch">
(score) > (100)
</div>

The **Operators category** (🟢 green) has blocks for comparing values.

### Comparison Blocks

**Examples:**

<div class="scratch">
&lt;(10) &lt; (20)&gt;
</div>

Left less than right — true.

<div class="scratch">
(50) > (5)
</div>

Left greater than right — true.

<div class="scratch">
(10) = (10)
</div>

Left equal to right — true.

### Using Comparisons in If Blocks

<div class="scratch">
if &lt;(score) > (100)&gt; then
broadcast [level-complete v]
end
</div>

<div class="scratch">
if &lt;(lives) = (0)&gt; then
broadcast [game-over v]
end
</div>

<div class="scratch">
if &lt;(timer) &lt; (10)&gt; then
say [Hurry up!] for (1) seconds
end
</div>

### Combining Comparisons (And/Or/Not)

<div class="scratch">
&lt;(score) > (100)&gt; and &lt;(lives) > (0)&gt;
</div>

Both must be true.

<div class="scratch">
&lt;touching [enemy v]?&gt; or &lt;touching [spike v]?&gt;
</div>

At least one true.

<div class="scratch">
not &lt;touching [ground v]?&gt;
</div>

Flips true to false, and false to true.

---

## Broadcast Messages — Sprites Talking!

<div class="scratch">
broadcast [message1 v]
</div>

### Sending Messages

<div class="scratch">
broadcast [game-start v]
</div>

Shouts a message to **all sprites** (including the stage!). Continues immediately.

### Broadcast and Wait

<div class="scratch">
broadcast [level-start v] and wait
</div>

Sends message, then **pauses this script** until ALL sprites that receive it finish their `when I receive` scripts.

### Receiving Messages

<div class="scratch">
when I receive [game-start v]
go to x: (-200) y: (-100)
show
</div>

!!! mascot-thinking "Decoupled by Design"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that the broadcasting sprite never names who's listening — it just shouts a message into the air, and any sprite (or none) can choose to react. That's a real architecture idea called decoupling: sender and receivers don't need to know anything about each other, only the message name they agree on.

### Broadcast Chains — Coordinated Starts

<div class="scratch">
when green flag clicked
broadcast [reset-all v] and wait
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [start-game v]
</div>

**Each sprite responds to the message it cares about!**

---

#### Diagram: Broadcast Flow

<iframe src="../../sims/broadcast-flow/main.html" width="100%" height="545px" scrolling="no"></iframe>

<details markdown="1">
<summary>Broadcast Flow</summary>
Type: diagram
**sim-id:** broadcast-flow<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Visualize how broadcasts coordinate multiple sprites

Components to show:

- Central "Broadcast" node: `broadcast [game-start v] and wait`
- Arrows to 4 sprites: Player, Enemy, Coin, UI
- Each sprite shows its `when I receive [game-start v]` script
- Return arrows showing "and wait" completion
- Timeline showing sequence: Broadcast sent → All receivers run → Broadcast continues

Style: Network diagram with animated pulse traveling from center to sprites

Labels:

- "Sender: broadcasts message"
- "Receiver 1 (Player): initializes position"
- "Receiver 2 (Enemy): spawns at random position"
- "Receiver 3 (Coin): appears at random spot"
- "Receiver 4 (UI): shows 'Ready!'"
- "Broadcast waits for ALL to finish"

Color scheme: Events yellow for broadcast, sprite-specific colors for receivers
</details>

---

## Cloning — Many Sprites From One!

<div class="scratch">
create clone of [myself v]
</div>

### What Is a Clone?

A **clone** is a **copy of a sprite** created **during runtime** (while the project runs). Clones:

- Run the **same scripts** as the original
- Have their **own position, direction, costume**
- Are **temporary** — deleted when project stops

!!! mascot-encourage "Clones Confuse Everyone at First"
    ![Scratch the Cat giving an encouraging thumbs-up](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If "the original runs one script while clones run a totally different one" doesn't click immediately, you're in good company — this is one of the trickier ideas in Scratch. Start small: make ONE clone, watch exactly where it appears and what it does, then work up to ten.

### Clone Blocks

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
create clone of [myself v]
</div>

Makes a copy of this sprite.
</div>

<div class="card" markdown>
<div class="scratch">
create clone of [Sprite2 v]
</div>

Makes a copy of another sprite.
</div>

<div class="card" markdown>
<div class="scratch">
when I start as a clone
</div>

Hat block — runs for EACH new clone.
</div>

<div class="card" markdown>
<div class="scratch">
delete this clone
</div>

Removes this clone.
</div>

</div>

---

### How Cloning Works

<div class="scratch">
when green flag clicked
repeat (10)
create clone of [myself v]
wait (0.5) seconds
end

when I start as a clone
go to x: (pick random (-200) to (200)) y: (pick random (-150) to (150))
forever
move (3) steps
if &lt;touching [edge v]?&gt; then
delete this clone
end
end
</div>

**Creates 10 clones over 5 seconds**, each wandering until hitting an edge!

---

### Cloning Rules

| Rule | What It Means |
|------|---------------|
| **Original ≠ Clone** | Original runs `when green flag`; clones run `when I start as a clone` |
| **Clones share scripts** | Clones run the SAME code blocks as original |
| **Clones have own data** | Each clone has its own position, direction, costume |
| **`delete this clone`** | Only works inside a clone script |
| **Stop sign deletes all** | Clones vanish when project stops |

!!! mascot-tip "Clones Are Particle Systems"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Anywhere you'd want dozens of similar little things — rain, snow, stars, an explosion, a swarm of enemies — reach for cloning instead of drawing dozens of separate sprites by hand. One script, `create clone of [myself v]` on repeat, and Scratch handles the rest.

---

## Touching Sensors — Detecting Contact

<div class="scratch">
touching [mouse-pointer v]?
</div>

### Touching Sprite

<div class="scratch">
touching [Ball v]?
</div>

True if **any part** of this sprite touches **any part** of the target sprite.

### Touching Color

<div class="scratch">
touching color [#FF0000]?
</div>

True if **any pixel** of this sprite touches **that exact color** anywhere on stage.

### Color Picking Trick

1. Click the **color input** (colored box)
2. Click the **eyedropper** that appears
3. Click **any color on the stage** to pick it!

!!! tip "🎨 Color Touching = Level Boundaries"
    Draw your **maze walls in pure red (#FF0000)**, then:

    <div class="scratch">
    if &lt;touching color [#FF0000]?&gt; then
    go to start position
    end
    </div>

---

## X and Y Coordinates — Precise Positioning

<div class="scratch">
x position
</div>

### Reporter Blocks for Position

**Examples:**

<div class="scratch">
x position
</div>

Current horizontal position — ranges from -240 to 240.

<div class="scratch">
y position
</div>

Current vertical position — ranges from -180 to 180.

### Using Position Reporters

<div class="scratch">
go to x: (x position) y: (100) // Keeps current X, sets Y to 100
</div>

<div class="scratch">
if &lt;(x position) > (200)&gt; then
set x to (200) // Prevents going past the right edge
end
</div>

---

#### Diagram: Coordinate Reporters in Action

<iframe src="../../sims/coordinate-reporters/main.html" width="100%" height="455px" scrolling="no"></iframe>

<details markdown="1">
<summary>Coordinate Reporters in Action</summary>
Type: microsim
**sim-id:** coordinate-reporters<br/>
**Library:** p5.js<br/>
**Status:** Specified

Learning objective: See live x position and y position values as sprite moves

Canvas layout:

- Stage with draggable sprite
- Live display: "x position: 0" "y position: 0"
- Code snippet showing `go to x: (x position) y: (100)`
- "Jump to top" button demonstrating reporter use

Visual elements:

- Sprite follows mouse or clicks
- Large coordinate display in top corner
- Visual indicators for X axis (horizontal arrow) and Y axis (vertical arrow)
- Boundary markers at -240, 240, -180, 180

Interactive controls:

- Drag sprite to see live coordinates
- "Freeze display" to capture values
- "Show code example" toggle
- Boundary clamp demo

Data Visibility Requirements:
  Stage 1: Show sprite at center with coordinates (0, 0)
  Stage 2: Show sprite at various positions with live updates
  Stage 3: Demonstrate `go to x: (x position) y: (100)` keeping X, setting Y

Instructional Rationale: Live coordinate display with immediate manipulation builds intuition for coordinate reporters as dynamic values.

Implementation notes:

- p5.js mouse tracking
- Reporter blocks simulated as live values
</details>

---

## Stage Center — The (0,0) Sweet Spot

The **center of the stage** is **(0, 0)** — the perfect reference point.

### Why Center Matters

| Use Case | Why Center Helps |
|----------|------------------|
| **Spawning** | `go to x: 0 y: 0` = dead center |
| **Symmetry** | Mirror positions: (100, 0) and (-100, 0) |
| **Rotation** | `point in direction 0` faces up from center |
| **Camera** | Center = screen middle in full-screen |

### Quick Center Shortcuts

| Position | Coordinates |
|----------|-------------|
| Center | (0, 0) |
| Top Center | (0, 180) |
| Bottom Center | (0, -180) |
| Left Center | (-240, 0) |
| Right Center | (240, 0) |

---

## Sharing Projects — Show Your Work!

### How to Share

1. Click **Share** (📤) in toolbar
2. Add **clear instructions** — how to play/use
3. Add **tags** — "game", "platformer", "animation", "music"
4. Choose **visibility** — anyone, link-only, private
5. Click **Share**

### Good Project Page Includes

| Element | Example |
|---------|---------|
| **Title** | "Super Coin Collector v1.2" |
| **Instructions** | "Arrow keys to move, Space to jump. Collect all coins!" |
| **Credits** | "Music by Kevin MacLeod. Art by me." |
| **Notes** | "v1.2: Fixed level 3 bug. Added new enemy type." |

### After Sharing

- Get a **unique URL** to send friends
- Others can **heart ❤️, comment 💬, remix 🔄**
- Appears in **search** and **categories**
- **Stats** show views, loves, favorites, remixes

---

## Versioning — Save Your Progress!

### What Is Versioning?

**Versioning** means saving **numbered copies** of your project as you build it.

### Versioning Workflow

```
Project Name: "My Game"
v1.0 - First working prototype
v1.1 - Added player movement
v1.2 - Added enemies
v1.3 - Fixed bug where player gets stuck
v2.0 - Complete redesign with new levels
```

### How to Version in Scratch

| Method | How To |
|--------|--------|
| **File → Save As** | Save as "My Game v1.1", "My Game v1.2" |
| **Download to Computer** | File → Download → save as "my-game-v1.1.sb3" |
| **Duplicate** | File → Save As → keep original + new version |

!!! tip "📦 Backup = Peace of Mind"
    **Always** keep previous versions! If you break something, you can go back to the working version.

---

## Summary

In this chapter, you learned:

- ✅ **Events** — Triggers that start scripts (green flag, click, keys, broadcasts)
- ✅ **Sequences** — Blocks run top-to-bottom, order matters!
- ✅ **Green Flag** — Universal start signal for entire project
- ✅ **Stop Sign** — Emergency halt for testing
- ✅ **Repeat loops** — Counted, forever, and repeat until
- ✅ **If blocks** — Make decisions based on conditions
- ✅ **Comparison operators** — <, >, = for smart decisions
- ✅ **And/Or/Not** — Combine conditions
- ✅ **Broadcasts** — Sprites sending messages to coordinate
- ✅ **Cloning** — Create multiple copies at runtime
- ✅ **Touching sensors** — Detect sprite or color contact
- ✅ **X/Y coordinate reporters** — Read current position
- ✅ **Stage center** — The (0, 0) reference point
- ✅ **Sharing projects** — Publish with good instructions
- ✅ **Versioning** — Save numbered backups

!!! mascot-celebration "You Just Built Real Interactive Programs"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You went from a single script to full event-driven programs: scripts that react to clicks and keys, loop with purpose, make decisions with if/else, talk to each other with broadcasts, and multiply themselves with clones. That's everything a real Scratch game needs — the rest of this book is about making it look and feel great.

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Event** | Something that happens to trigger a script |
| **Event-Driven** | Programming where code runs in response to events |
| **Sequence** | Instructions running in order, top to bottom |
| **Loop** | Repeating a set of instructions |
| **Counted Loop** | Repeats exact number of times (`repeat 10`) |
| **Forever Loop** | Repeats until stopped (`forever`) |
| **Conditional Loop** | Repeats until condition true (`repeat until`) |
| **If Block** | Runs code only if condition is true |
| **If-Else Block** | Runs one thing if true, another if false |
| **Comparison Operator** | `<`, `>`, `=` to compare values |
| **Broadcast** | Message sent to all sprites |
| `when I receive` | Hat block that runs on broadcast |
| **Clone** | Runtime copy of a sprite |
| `when I start as a clone` | Hat block for clone initialization |
| `touching color?` | Detects contact with specific color |
| **Versioning** | Saving numbered project copies |

---

## Try It Yourself! 🎯

**Challenge 1:** Make a sprite that **draws a square** using a `repeat 4` loop

**Challenge 2:** Create a **"bouncing ball"** that moves forever and bounces off edges

**Challenge 3:** Build a **simple game**: Arrow keys move player, touching enemy broadcasts "hit"

**Challenge 4:** Use **cloning** to create **falling stars** (create clone every 0.5 sec, clones fall down, delete at bottom)

**Challenge 5:** Make a **color-based maze**: Draw red walls, use `touching color red?` to detect collisions

**Challenge 6:** **Version your project** — Save v1.0, v1.1, v1.2 as you add features

**Challenge 7:** **Share your best project** with clear instructions and credits

---

## What's Next?

In **Chapter 5**, you'll explore **Sounds, Extensions, and Sharing Projects** in depth. You'll learn to add background music, sound effects, use the Pen extension for drawing, Video Sensing for camera games, and Text to Speech for talking characters!

[**→ Next Chapter: Sounds, Extensions, and Sharing Projects**](../05-sounds-extensions-sharing/index.md)