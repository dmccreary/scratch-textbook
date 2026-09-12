---
title: Broadcasting, Conditionals, and Sensing
description: Introduces sprite communication via broadcasts, if/else conditionals, and sensor-based interactions for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 20:00:00
version: 0.08
---

# Broadcasting, Conditionals, and Sensing

## Summary

Introduces sprite communication via broadcasts, if/else conditionals, and sensor-based interactions. This chapter covers 20 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. Go To Position
2. Glide To Position
3. Distance To Sensor
4. Positive Y
5. Negative Y
6. Backdrop Switch Event
7. Next Backdrop
8. Script Reading Order
9. Parallelism
10. When I Receive
11. Sprite Communication
12. If Else Block
13. Create Clone
14. Event Driven Programming
15. Key Pressed Sensor
16. Player Control
17. Makey Makey Extension
18. Collision Detection
19. Boolean Introduction
20. Less Than Operator

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)
- [2. Sprites, Stage, and the Coordinate System](../02-sprites-stage-coordinates/index.md)
- [3. Motion Blocks and Block Categories](../03-motion-blocks-categories/index.md)
- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)
- [5. Sounds, Extensions, and Sharing Projects](../05-sounds-extensions-sharing/index.md)

---

!!! mascot-welcome "Sprites That Talk, Choices That Branch"
    ![Scratch the Cat waving hello](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Get ready to make your sprites work as a team! You'll teach them to send secret messages with broadcasts, make smart either/or decisions with if-else blocks, and give them senses for touching, key presses, and distance. By the end of this chapter you'll build a real player controller that jumps, dodges, and reacts like a game. Let's build something purr-fect!

## Broadcast Messages — Sprites Talking to Each Other!

<div class="scratch">
broadcast [message1 v]
</div>

### What Are Broadcasts?

**Broadcasts** are messages that one sprite sends and **all other sprites can hear**. Think of it like a school announcement over the PA system — everyone hears it at the same time!

### Broadcast Blocks

| Block | What It Does |
|-------|--------------|
| `broadcast [message v]` | Sends message, continues immediately |
| `broadcast [message v] and wait` | Sends message, **waits for all receivers to finish** |
| `when I receive [message v]` | Hat block: runs when message received |

### Creating a Broadcast Message

1. Click the **broadcast block** dropdown
2. Click **New message**
3. Type a name: `game-start`, `level-complete`, `player-hit`, `coin-collected`
4. Click **OK**

---

### Sending a Broadcast

<div class="scratch">
when green flag clicked
broadcast [game-start v] and wait
</div>

**Sends the message to ALL sprites** (including the stage!).

---

### Receiving a Broadcast

<div class="scratch">
when I receive [game-start v]
go to x: (-200) y: (-100)
show
</div>

**Every sprite that has this hat block runs** when the message is sent.

---

### Broadcast and Wait — Synchronized Start

<div class="scratch">
when green flag clicked
broadcast [reset-all v] and wait
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [start-game v]
</div>

**Pauses this script until ALL sprites finish their `when I receive` scripts.** Perfect for coordinated level starts!

!!! mascot-warning "Don't Forget the 'and Wait'!"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A plain `broadcast` fires and moves on immediately, so if your next block depends on the receivers finishing first, it can run too early and look glitchy. Switch to `broadcast and wait` whenever the next step needs those receiving scripts to be done.

---

### Broadcast Chains — Step-by-Step Coordination

<div class="scratch">
when green flag clicked
broadcast [phase1-setup v] and wait
wait (1) seconds
broadcast [phase2-spawn v] and wait
wait (0.5) seconds
broadcast [phase3-go v]
</div>

**Each phase completes before the next begins** — great for cutscenes, level loading, tutorials!

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

## When I Receive — The Listening Hat

<div class="scratch">
when I receive [message1 v]
</div>

`when I receive [message v]` is a **hat block** that starts a script when a specific broadcast is received.

### Multiple Scripts Can Listen to Same Message

<div class="scratch">
when I receive [game-start v]
go to x: (-200) y: (-100)
</div>

<div class="scratch">
when I receive [game-start v]
set [score v] to (0)
show variable [score v]
</div>

**Both run at the same time** when `game-start` is broadcast!

---

### Naming Broadcast Messages

| Good Name | Bad Name |
|-----------|----------|
| `game-start` | `msg1` |
| `player-hit` | `thing` |
| `level-complete` | `done` |
| `coin-collected` | `get` |
| `enemy-spawned` | `make` |

**Use descriptive names** — you'll thank yourself later!

---

## Sprite Communication — Working Together

### Direct Commands vs. Broadcasts

| Method | How It Works | When to Use |
|--------|--------------|-------------|
| **Direct** | One script directly checks or changes another sprite's variables | One sprite controls another directly |
| **Broadcast** | `broadcast [message v]` — all sprites react | Many sprites need to know, loose coupling |

**Broadcasts are better for games** — sprites don't need to know about each other!

!!! mascot-thinking "Broadcasts Are Loose Coupling"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that the sender never names who's listening — it just shouts the message into the air. That's the real trick: a sprite can join, leave, or change how it reacts to `game-start` without you ever touching the sender's script again.

### Common Communication Patterns

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
broadcast [game-start v]
</div>

Initialize all sprites.
</div>

<div class="card" markdown>
<div class="scratch">
broadcast [player-hit v]
</div>

Enemies and UI react.
</div>

<div class="card" markdown>
<div class="scratch">
broadcast [score-changed v]
</div>

UI updates, high score check.
</div>

<div class="card" markdown>
<div class="scratch">
broadcast [level-complete v]
</div>

Next level, celebration.
</div>

<div class="card" markdown>
<div class="scratch">
broadcast [game-over v]
</div>

Stop enemies, show game-over screen.
</div>

</div>

---

## If Else Block — Two Paths!

<div class="scratch">
if &lt;condition&gt; then
else
end
</div>

### If vs. If-Else

| Block | What It Does |
|-------|--------------|
| `if <condition> then` | Do something IF true |
| `if <condition> then else` | Do A if true, B if false |

### If-Else Structure

<div class="scratch">
if &lt;(score) &gt; (100)&gt; then
say [High score!] for (2) seconds
else
say [Keep going!] for (2) seconds
end
</div>

### Examples

#### Simple If-Else

<div class="scratch">
if &lt;touching [edge v]?&gt; then
turn right (180) degrees
else
move (5) steps
end
</div>

#### Nested If-Else

<div class="scratch">
if &lt;touching [coin v]?&gt; then
change [score v] by (10)
play sound [coin v]
hide
else
if &lt;touching [enemy v]?&gt; then
change [lives v] by (-1)
broadcast [player-hit v]
end
end
</div>

---

### If-Else If (Chain) — Multiple Conditions

Scratch doesn't have an "else if" block, but you can chain `if`/`else` blocks inside each other:

<div class="scratch">
if &lt;(score) &gt; (100)&gt; then
say [Amazing!] for (2) seconds
else
if &lt;(score) &gt; (50)&gt; then
say [Nice job!] for (2) seconds
else
say [Keep trying!] for (2) seconds
end
end
</div>

!!! mascot-encourage "Chained Conditionals Take a Second Look"
    ![Scratch the Cat giving an encouraging thumbs-up](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If nesting an if-else inside another else feels tangled the first time, that's completely normal — you've already mastered a single if-else, and this is just two of them stacked. Try reading it one branch at a time, from the outside in, and it will click.

---

## Distance To Sensor — How Far Away?

### Distance To Block (Sensing → Light Blue)

<div class="scratch">
distance to [mouse-pointer v]
</div>

**Reports the distance** (in pixels) from this sprite to the target.

### Targets

| Target | What It Measures |
|--------|------------------|
| `mouse-pointer` | Distance to mouse cursor |
| `Sprite2` | Distance to another sprite |
| `edge` | Distance to nearest stage edge |

### Distance Examples

#### Follow at a Distance

<div class="scratch">
forever
point towards [mouse-pointer v]
if &lt;(distance to [mouse-pointer v]) &gt; (50)&gt; then
move (5) steps
end
end
</div>

**Follows mouse but stops when close!**

#### Proximity Alert

<div class="scratch">
forever
if &lt;(distance to [enemy v]) &lt; (50)&gt; then
broadcast [danger-close v]
end
end
</div>

**Warns when enemy gets too close!**

---

## Positive Y and Negative Y — Up and Down!

### Y Coordinate Review

| Direction | Y Value | Meaning |
|-----------|---------|---------|
| **Up** | Positive (+) | `change y by 10` moves up |
| **Down** | Negative (-) | `change y by -10` moves down |
| **Center** | 0 | `go to y: 0` = middle |

### Y Coordinate Shortcuts

| Position | Y Value |
|----------|---------|
| **Top Edge** | 180 |
| **Above Center** | Positive (1 to 180) |
| **Center** | 0 |
| **Below Center** | Negative (-1 to -180) |
| **Bottom Edge** | -180 |

### Y in Code

<div class="scratch">
when key [up arrow v] pressed
change y by (10)

when key [down arrow v] pressed
change y by (-10)

if &lt;(y position) &gt; (150)&gt; then
set y to (150)
end

if &lt;(y position) &lt; (-150)&gt; then
set y to (-150)
end
</div>

### Jumping Physics (Simple)

<div class="scratch">
when key [space v] pressed
repeat (10)
change y by (10)
wait (0.02) seconds
end
repeat (10)
change y by (-10)
wait (0.02) seconds
end
</div>

**Creates a smooth arc jump!**

---

## Backdrop Switch Event — Scene Changes!

### Backdrop Switch Block

<div class="scratch">
when backdrop switches to [level2 v]
</div>

**Runs when the stage backdrop changes** to the specified one.

---

### Changing Backdrops

| Block | What It Does |
|-------|--------------|
| `switch backdrop to [level2 v]` | Instant change |
| `next backdrop` | Cycle to next in list |

### Backdrop Switch Examples

#### Level Transition

<div class="scratch">
when I receive [level-complete v]
switch backdrop to [level2 v]
broadcast [level2-start v]
</div>

#### Scene Transition in Story

<div class="scratch">
when I receive [scene-2 v]
switch backdrop to [forest v]
play sound [forest-ambience v]
broadcast [scene-2-ready v]
</div>

---

### Backdrop Switch Event Examples

#### Level-Specific Setup

<div class="scratch">
when backdrop switches to [level1 v]
broadcast [spawn-level1-enemies v]

when backdrop switches to [level2 v]
broadcast [spawn-level2-enemies v]

when backdrop switches to [boss-level v]
broadcast [spawn-boss v]
</div>

#### UI Updates

<div class="scratch">
when backdrop switches to [menu v]
show variable [high-score v]
hide variable [score v]

when backdrop switches to [game v]
show variable [score v]
show variable [lives v]
</div>

---

## Next Backdrop — Cycle Through Scenes

### Next Backdrop Block

<div class="scratch">
next backdrop
</div>

**Switches to the next backdrop** in the stage's backdrop list (loops back to first).

---

### Uses for Next Backdrop

<div class="scratch">
when this sprite clicked
next backdrop
</div>

Story book — click the sprite to flip to the next page.

<div class="scratch">
forever
wait (5) seconds
next backdrop
end
</div>

Slide show — auto-advances to the next backdrop every 5 seconds.

<div class="scratch">
when this sprite clicked
next backdrop
</div>

Level select — click an arrow button to advance to the next level's backdrop.

---

## Script Reading Order — Top to Bottom!

### The Golden Rule

**Scratch ALWAYS reads blocks from TOP to BOTTOM** in a script stack.

<div class="scratch">
when green flag clicked // 1. FIRST
say [Hello!] for (2) seconds // 2. SECOND
wait (1) seconds // 3. THIRD
move (100) steps // 4. FOURTH
turn right (90) degrees // 5. FIFTH
</div>

### Why Order Matters

| Wrong Order | Result |
|-------------|--------|
| `move 100` then `say [Hello!]` | Moves FIRST, then speaks (awkward!) |
| `say [Hello!]` then `move 100` | Speaks first, then moves (natural!) |

### Parallel Scripts — Same Time!

**Multiple scripts starting with the same hat block run SIMULTANEOUSLY!**

<div class="scratch">
when green flag clicked
forever
move (5) steps
end

when green flag clicked
forever
if &lt;touching [edge v]?&gt; then
turn right (180) degrees
end
end
</div>

**Both run at the same time** — sprite moves AND checks edges at the same time!

---

## Parallelism — Doing Multiple Things at Once!

### What Is Parallelism?

**Parallelism** = multiple scripts running **at the same time**.

In Scratch, **every hat block starts a separate "thread"** that runs independently.

!!! mascot-thinking "Every Hat Block Is Its Own Thread"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Think of each hat block as its own tiny worker that never waits around for the others. That's why two `forever` loops in the same sprite don't take turns — they genuinely run side by side, which is exactly what lets movement and collision-checking happen at once.

### Examples of Parallelism

| Script 1 | Script 2 | Result |
|----------|----------|--------|
| Player movement (forever) | Enemy patrol (forever) | Both move at once! |
| Animation (forever) | Sensor check (forever) | Smooth animation + collision detection |
| Background music | Gameplay loop | Music plays while you play! |

### Managing Parallelism

| Challenge | Solution |
|-----------|----------|
| **Too many loops** = lag | Combine related code into ONE loop |
| **Race conditions** | Use `broadcast and wait` for coordination |
| **Conflicting changes** | Use variables to coordinate (e.g., `game-state`) |

!!! mascot-tip "Think About Timing!"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    When two scripts might change the same variable, who runs first matters. Use `broadcast and wait` to control the order instead of hoping it works out.

---

## Boolean Introduction — True or False!

<div class="scratch">
touching [mouse-pointer v]?
</div>

### What Is a Boolean?

A **Boolean** is a value that can only be **TRUE** or **FALSE** — like a light switch!

| Boolean Value | Means |
|---------------|-------|
| **True** | Yes, correct, on, 1 |
| **False** | No, incorrect, off, 0 |

### Boolean Blocks (Hexagon Shape ⬡)

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
touching [mouse-pointer v]?
</div>

Sensing — true when the sprite touches the mouse-pointer.
</div>

<div class="card" markdown>
<div class="scratch">
key [space v] pressed?
</div>

Sensing — true while the space key is held down.
</div>

<div class="card" markdown>
<div class="scratch">
touching [Sprite2 v]?
</div>

Sensing — true when touching another sprite.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(10) &gt; (5)&gt;
</div>

Operators — true, since 10 is greater than 5.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(3) = (5)&gt;
</div>

Operators — false, since 3 does not equal 5.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(score) &gt; (100)&gt;
</div>

Operators — true once the score variable passes 100.
</div>

</div>

---

## If Else Block — Two-Way Decisions!

### If-Else Structure (Review)

<div class="scratch">
if &lt;(score) &gt; (100)&gt; then
say [High score!] for (2) seconds
else
say [Keep going!] for (2) seconds
end
</div>

### Boolean + If-Else = Smart Decisions!

<div class="scratch">
if &lt;touching [enemy v]?&gt; then
change [lives v] by (-1)
play sound [hurt v]
else
end
</div>

**The else branch is left empty on purpose** — when the sprite is safe, there's simply nothing extra to do!

### Boolean Operators (And/Or/Not)

<div class="scratch">
&lt;touching [enemy v]?&gt; and &lt;(lives) &gt; (0)&gt;
</div>

Both must be TRUE — touching the enemy AND lives greater than 0.

<div class="scratch">
&lt;touching [spike v]?&gt; or &lt;touching [lava v]?&gt;
</div>

At least one must be TRUE — touching a spike OR touching lava.

<div class="scratch">
not &lt;touching [ground v]?&gt;
</div>

Flips TRUE to FALSE and back — true means NOT touching the ground (in the air!).

---

## Key Pressed Sensor — Player Input!

### Key Pressed Block (Sensing)

<div class="scratch">
key [space v] pressed?
</div>

**True while key is held down**, false when released.

### Common Keys for Games

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
key [right arrow v] pressed?
</div>

Move right.
</div>

<div class="card" markdown>
<div class="scratch">
key [left arrow v] pressed?
</div>

Move left.
</div>

<div class="card" markdown>
<div class="scratch">
key [up arrow v] pressed?
</div>

Jump.
</div>

<div class="card" markdown>
<div class="scratch">
key [down arrow v] pressed?
</div>

Duck / fall faster.
</div>

<div class="card" markdown>
<div class="scratch">
key [space v] pressed?
</div>

Jump / shoot / interact.
</div>

<div class="card" markdown>
<div class="scratch">
key [a v] pressed?
</div>

Alternative move-left key.
</div>

<div class="card" markdown>
<div class="scratch">
key [d v] pressed?
</div>

Alternative move-right key.
</div>

<div class="card" markdown>
<div class="scratch">
key [w v] pressed?
</div>

Jump (WASD controls).
</div>

</div>

---

### Smooth Movement Pattern (Best Practice!)

<div class="scratch">
when green flag clicked
forever
if &lt;key [right arrow v] pressed?&gt; then
change x by (5)
point in direction (90)
next costume
end
if &lt;key [left arrow v] pressed?&gt; then
change x by (-5)
point in direction (-90)
next costume
end
if &lt;key [space v] pressed?&gt; then
// Jump logic here
end
end
</div>

!!! mascot-warning "Hat Blocks Only Fire Once Per Press"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A `when key pressed` hat block only triggers once when the key goes down, so it feels jerky for movement that should keep going while the key is held. Fix it with `forever` + `if key pressed?` instead — checking every single frame gives smooth, continuous motion.

---

## Player Control — Building a Controller!

### Complete Player Controller

<div class="scratch">
when green flag clicked
go to x: (-200) y: (-100)
set rotation style [left-right v]
forever
if &lt;key [right arrow v] pressed?&gt; then
change x by (5)
point in direction (90)
next costume
end
if &lt;key [left arrow v] pressed?&gt; then
change x by (-5)
point in direction (-90)
next costume
end
if &lt;key [space v] pressed?&gt; and &lt;touching [ground v]?&gt; then
repeat (15)
change y by (8)
wait (0.01) seconds
end
repeat (15)
change y by (-8)
wait (0.01) seconds
end
end
if &lt;(x position) &gt; (220)&gt; then
set x to (220)
end
if &lt;(x position) &lt; (-220)&gt; then
set x to (-220)
end
end
</div>

### Key Concepts in This Controller

| Concept | Implementation |
|---------|----------------|
| **Smooth movement** | `forever + if key pressed` (not hat blocks) |
| **Facing direction** | `point in direction 90` (right) / `-90` (left) |
| **Animation** | `next costume` inside movement |
| **Ground check** | `touching [ground v]?` before jump |
| **Screen bounds** | Clamp X position to ±220 |

---

## Makey Makey Extension — Real World Controllers!

<div class="scratch">
when [key v] connected
</div>

### What Is Makey Makey?

**Makey Makey** is a circuit board that turns **everyday objects into keyboard keys**!

- Bananas → arrow keys
- Play-Doh → space bar
- Aluminum foil → click
- Your body → ground connection

### Adding Makey Makey

**Extensions → Makey Makey → Add** → **Makey Makey** category (🟠 Orange)!

### Makey Makey Blocks

| Block | What It Does |
|-------|--------------|
| `when key [space v] pressed` | Works with Makey Makey keys |
| `when [key v] connected` | Hat: object connected |

### Makey Makey Ideas

| Object | Key | Game Action |
|--------|-----|-------------|
| Banana | Right arrow | Move right |
| Banana | Left arrow | Move left |
| Apple | Space | Jump |
| Water cup | Click | Shoot |
| Your hand (ground) | — | Completes circuit |

!!! mascot-tip "Anything Conductive Is a Button!"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Anything that conducts electricity can become a game controller — fruit, foil, pencil graphite, plants, even people. Clip an alligator wire to it, connect the other end to ground, and Makey Makey turns a touch into a keypress.

---

## Collision Detection — When Things Touch!

### Types of Collision

<div class="scratch">
touching [Sprite2 v]?
</div>

Sprite vs Sprite — player vs enemy, player vs coin.

<div class="scratch">
touching color [#ff0000]?
</div>

Sprite vs Color — walls, lava, finish line.

<div class="scratch">
touching [edge v]?
</div>

Edge — screen boundaries.

---

### Sprite vs Sprite Collision

<div class="scratch">
forever
if &lt;touching [coin v]?&gt; then
change [score v] by (10)
play sound [coin v]
hide
wait (2) seconds
go to [random position v]
show
end
end
</div>

### Color-Based Collision (Maze Walls)

1. Draw walls in **pure red** (#FF0000)
2. Use color picker to get exact red
3. Code:

<div class="scratch">
forever
if &lt;touching color [#ff0000]?&gt; then
go to x: (0) y: (0) // back to start
end
end
</div>

### Precise Collision (Hitboxes)

For precise collisions, use a **small invisible "hitbox" sprite** as a stand-in for the sprite's real shape:

```
Forever:
    set hitbox to player position
    if hitbox touching enemy:
        player takes damage
```

---

## Less Than Operator — Comparing Numbers!

### Less Than Block (Operators → Green)

<div class="scratch">
&lt;(10) &lt; (20)&gt;
</div>

**True if left number is SMALLER than right number.**

### Comparison Operators Summary

<div class="scratch">
&lt;(a) &lt; (b)&gt;
</div>

True when the left value is smaller than the right value.

<div class="scratch">
&lt;(a) &gt; (b)&gt;
</div>

True when the left value is bigger than the right value.

<div class="scratch">
&lt;(a) = (b)&gt;
</div>

True when the two values are equal.

### Using Less Than

#### Boundary Check

<div class="scratch">
if &lt;(x position) &lt; (-220)&gt; then
set x to (-220)
end
</div>

#### Timer Urgency

<div class="scratch">
if &lt;(timer) &lt; (10)&gt; then
say [Hurry!] for (1) seconds
end
</div>

#### Distance Check

<div class="scratch">
if &lt;(distance to [enemy v]) &lt; (50)&gt; then
broadcast [danger v]
end
</div>

#### Score Thresholds

<div class="scratch">
if &lt;(score) &lt; (100)&gt; then
say [Keep going!]
else
say [Great job!]
end
</div>

---

## Go To Position — Instant Teleport!

### Go To Block (Motion → Blue)

<div class="scratch">
go to x: (100) y: (50)
</div>

**Instantly moves** sprite to exact coordinates.

### Go To Targets

<div class="scratch">
go to x: (0) y: (0)
</div>

Teleport to coordinates.

<div class="scratch">
go to [mouse-pointer v]
</div>

Teleport to mouse.

<div class="scratch">
go to [Sprite2 v]
</div>

Teleport to another sprite.

---

## Glide To Position — Smooth Movement!

### Glide Block (Motion → Blue)

<div class="scratch">
glide (1) secs to x: (100) y: (50)
</div>

**Smoothly slides** to position over specified time.

### Glide Targets

<div class="scratch">
glide (1) secs to x: (0) y: (0)
</div>

Smooth slide to coordinates.

<div class="scratch">
glide (1) secs to [mouse-pointer v]
</div>

Smooth follow mouse.

<div class="scratch">
glide (1) secs to [Sprite2 v]
</div>

Smooth chase sprite.

---

### Go To vs Glide

| Block | Speed | Use For |
|-------|-------|---------|
| `go to x: y:` | **Instant** | Spawning, resetting, teleporting |
| `glide secs to x: y:` | **Smooth** | Cutscenes, returning, chasing |

---

### Glide Examples

#### Smooth Return to Center

<div class="scratch">
when I receive [return-to-center v]
glide (2) secs to x: (0) y: (0)
</div>

#### Chase Player

<div class="scratch">
forever
if &lt;(distance to [player v]) &gt; (50)&gt; then
glide (0.5) secs to [player v]
end
end
</div>

#### Cutscene Movement

<div class="scratch">
when I receive [cutscene-start v]
glide (3) secs to x: (-200) y: (100)
wait (1) seconds
glide (2) secs to x: (200) y: (100)
glide (2) secs to x: (0) y: (0)
</div>

---

## Create Clone — Make Copies at Runtime!

### Create Clone Block

<div class="scratch">
create clone of [myself v]
</div>

**Makes a copy of a sprite** while the project is running!

### Clone Targets

| Target | What It Creates |
|--------|-----------------|
| `myself` | Clone of this sprite |
| `[Sprite2 v]` | Clone of another sprite |

---

## Event-Driven Programming — React to Events!

### What Is Event-Driven Programming?

**Code runs in response to events** (clicks, key presses, broadcasts, sensor triggers) rather than running top-to-bottom once.

### Scratch Is Event-Driven!

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
when green flag clicked
</div>

Project starts — initialize the game.
</div>

<div class="card" markdown>
<div class="scratch">
when this sprite clicked
</div>

Sprite clicked — buttons, collectibles.
</div>

<div class="card" markdown>
<div class="scratch">
when key [space v] pressed
</div>

Key pressed — jump, shoot.
</div>

<div class="card" markdown>
<div class="scratch">
when I receive [message1 v]
</div>

Broadcast received — coordinated actions.
</div>

<div class="card" markdown>
<div class="scratch">
when backdrop switches to [level2 v]
</div>

Backdrop changes — level transitions.
</div>

<div class="card" markdown>
<div class="scratch">
when video [motion v] > (50)
</div>

Video motion — camera games.
</div>

<div class="card" markdown>
<div class="scratch">
when I start as a clone
</div>

Clone created — particle systems.
</div>

</div>

---

### Benefits of Event-Driven

| Benefit | Explanation |
|---------|-------------|
| **Responsive** | Instant reaction to player input |
| **Efficient** | Code only runs when needed |
| **Modular** | Each script handles one event |
| **Natural for games** | Games are all about reacting! |

---

## Summary

In this chapter, you learned:

- ✅ **Broadcasts** — Send messages, coordinate sprites (`broadcast`, `when I receive`)
- ✅ **Broadcast and Wait** — Synchronize multi-sprite actions
- ✅ **If-Else** — Two-path decisions based on conditions
- ✅ **Sensors** — Touching, distance, key pressed, color
- ✅ **Distance To** — Measure pixels to sprites/mouse/edge
- ✅ **Positive/Negative Y** — Up/down movement
- ✅ **Backdrop Events** — Scene transitions (`switch backdrop`, `when backdrop switches`)
- ✅ **Script Reading Order** — Top to bottom, always!
- ✅ **Parallelism** — Multiple scripts running simultaneously
- ✅ **Booleans** — True/false values, hexagon blocks
- ✅ **If-Else** — Two-path decision making
- ✅ **Key Pressed Sensor** — Smooth movement with `forever + if`
- ✅ **Player Control** — Complete controller pattern
- ✅ **Makey Makey** — Real-world objects as controllers
- ✅ **Collision Detection** — Sprite, color, edge detection
- ✅ **Less Than Operator** — `<` for boundaries, thresholds
- ✅ **Go To / Glide** — Instant vs smooth movement
- ✅ **Cloning** — Runtime copies for particles, enemies
- ✅ **Event-Driven Programming** — React to events, not just run once

!!! mascot-celebration "You Just Built a Reactive Game Controller"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just mastered broadcasting for sprite-to-sprite communication, if-else and chained conditionals for branching logic, and sensing blocks like touching, key pressed, and distance to for real player input. You even built a complete player controller with smooth movement, jumping, and screen bounds — that's a genuine game-engine skillset!

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Broadcast** | Message sent to all sprites |
| `when I receive` | Hat block triggered by broadcast |
| `broadcast and wait` | Sends message, pauses until all receivers finish |
| **If-Else** | Two-path decision (true/false) |
| **Sensor** | Detects something (touch, key, distance) |
| `distance to` | Reporter: pixels to target |
| **Positive Y** | Upward direction |
| **Negative Y** | Downward direction |
| `switch backdrop` | Change stage background |
| `when backdrop switches` | Hat: backdrop changed |
| `next backdrop` | Cycle to next backdrop |
| **Script Reading Order** | Top to bottom execution |
| **Parallelism** | Multiple scripts running simultaneously |
| **Boolean** | True/false value (hexagon ⬡) |
| `key pressed?` | True while key held |
| **Player Control** | Movement + jump + bounds |
| **Makey Makey** | Physical objects as keys |
| **Collision Detection** | Detecting sprite/color/edge contact |
| **Less Than Operator** | `<` comparison |
| `go to x: y:` | Instant teleport |
| `glide secs to` | Smooth movement |
| `create clone` | Runtime sprite copy |
| **Event-Driven** | Code runs in response to events |

---

## Try It Yourself! 🎯

**Challenge 1:** Create a **broadcast system** — green flag → broadcast `start` → 3 sprites respond differently

**Challenge 2:** Build a **complete player controller** with smooth movement, jump, and screen bounds

**Challenge 3:** Make a **maze game** using `touching color red?` for walls

**Challenge 4:** Use **Makey Makey** (or draw buttons) to control a sprite with fruit/playdoh

**Challenge 5:** Create **enemy clones** that spawn randomly and chase the player

**Challenge 6:** Build a **cutscene** using `glide` and `broadcast and wait` for coordination

**Challenge 7:** Add **collision detection** to your platformer — coins, enemies, spikes

---

## What's Next?

In **Chapter 7**, you'll dive into **Variables, Lists, and Game Data** — the backbone of game state! You'll master variables for score/lives, lists for inventories/high scores, and variable scope.

[**→ Next Chapter: Variables, Lists, and Game Data**](../07-variables-lists-data/index.md)
