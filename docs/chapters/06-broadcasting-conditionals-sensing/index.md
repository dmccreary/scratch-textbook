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

## Broadcast Messages — Sprites Talking to Each Other!

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

```
when green flag clicked
broadcast [game-start v] and wait
```

**Sends the message to ALL sprites** (including the stage!).

---

### Receiving a Broadcast

```
when I receive [game-start v]
go to x: -200 y: -100
show
```

**Every sprite that has this hat block runs** when the message is sent.

---

### Broadcast and Wait — Synchronized Start

```
when green flag clicked
broadcast [reset-all v] and wait
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [start-game v]
```

**Pauses this script until ALL sprites finish their `when I receive` scripts.** Perfect for coordinated level starts!

---

### Broadcast Chains — Step-by-Step Coordination

```
when green flag clicked
broadcast [phase1-setup v] and wait
wait 1 secs
broadcast [phase2-spawn v] and wait
wait 0.5 secs
broadcast [phase3-go v]
```

**Each phase completes before the next begins** — great for cutscenes, level loading, tutorials!

---

#### Diagram: Broadcast Flow

<iframe src="../../sims/broadcast-flow/main.html" width="100%" height="450px" scrolling="no"></iframe>

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

`when I receive [message v]` is a **hat block** that starts a script when a specific broadcast is received.

### Multiple Scripts Can Listen to Same Message

```
when I receive [game-start v]
go to x: -200 y: -100
```

```
when I receive [game-start v]
set score to 0
show variable [score]
```

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
| **Direct (tell)** | `tell [Sprite2 v] to [go to x: 0 y: 0]` | One sprite controls another directly |
| **Broadcast** | `broadcast [message]` — all sprites react | Many sprites need to know, loose coupling |

**Broadcasts are better for games** — sprites don't need to know about each other!

---

### Common Communication Patterns

| Pattern | Broadcast | Use For |
|---------|-----------|---------|
| **Start Game** | `game-start` | Initialize all sprites |
| **Player Hit** | `player-hit` | Enemies, UI react |
| **Score Change** | `score-changed` | UI updates, high score check |
| **Level Complete** | `level-complete` | Next level, celebration |
| **Game Over** | `game-over` | Stop enemies, show screen |

---

## If Else Block — Two Paths!

### If vs. If-Else

| Block | What It Does |
|-------|--------------|
| `if <condition> then` | Do something IF true |
| `if <condition> then else` | Do A if true, B if false |

### If-Else Structure

```
if <condition> then
    // Runs if TRUE
else
    // Runs if FALSE
end
```

### Examples

#### Simple If-Else

```
if <touching [edge v]?> then
    turn 180 degrees    // Bounce back
else
    move 5 steps        // Keep moving
end
```

#### Nested If-Else

```
if <touching [coin v]?> then
    change score by 10
    play sound [coin v]
    hide
else
    if <touching [enemy v]?> then
        change lives by -1
        broadcast [player-hit v]
    end
end
```

---

### If-Else If (Chain) — Multiple Conditions

Scratch doesn't have "else if" block, but you can chain:

```
if <condition1> then
    // Do A
else
    if <condition2> then
        // Do B
    else
        // Do C
    end
end
```

---

## Distance To Sensor — How Far Away?

### Distance To Block (Sensing → Light Blue)

```
distance to [mouse-pointer v]
```

**Reports the distance** (in pixels) from this sprite to the target.

### Targets

| Target | What It Measures |
|--------|------------------|
| `mouse-pointer` | Distance to mouse cursor |
| `Sprite2` | Distance to another sprite |
| `edge` | Distance to nearest stage edge |

### Distance Examples

#### Follow at a Distance

```
forever
    point towards [mouse-pointer v]
    if <distance to [mouse-pointer v] > 50> then
        move 5 steps
    end
end
```

**Follows mouse but stops when close!**

#### Proximity Alert

```
forever
    if <distance to [enemy v] < 50> then
        broadcast [danger-close v]
    end
end
```

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

```
when [up arrow] key pressed
change y by 10        // Move UP (positive)

when [down arrow] key pressed
change y by -10       // Move DOWN (negative)

if < (y position) > 150 > then
    set y to 150      // Stop at top
end

if < (y position) < -150 > then
    set y to -150     // Stop at bottom
end
```

### Jumping Physics (Simple)

```
when [space] key pressed
repeat 10
    change y by 10    // Go up
    wait 0.02 secs
end
repeat 10
    change y by -10   // Fall down
    wait 0.02 secs
end
```

**Creates a smooth arc jump!**

---

## Backdrop Switch Event — Scene Changes!

### Backdrop Switch Block

```
when backdrop switches to [level2 v]
```

**Runs when the stage backdrop changes** to the specified one.

---

### Changing Backdrops

| Block | What It Does |
|-------|--------------|
| `switch backdrop to [level2 v]` | Instant change |
| `next backdrop` | Cycle to next in list |

### Backdrop Switch Examples

#### Level Transition

```
when I receive [level-complete v]
switch backdrop to [level2 v]
broadcast [level2-start v]
```

#### Scene Transition in Story

```
when I receive [scene-2 v]
switch backdrop to [forest v]
play sound [forest-ambience v]
broadcast [scene-2-ready v]
```

---

### Backdrop Switch Event Examples

#### Level-Specific Setup

```
when backdrop switches to [level1 v]
broadcast [spawn-level1-enemies v]

when backdrop switches to [level2 v]
broadcast [spawn-level2-enemies v]

when backdrop switches to [boss-level v]
broadcast [spawn-boss v]
```

#### UI Updates

```
when backdrop switches to [menu v]
show variable [high-score]
hide variable [score]

when backdrop switches to [game v]
show variable [score]
show variable [lives]
```

---

## Next Backdrop — Cycle Through Scenes

### Next Backdrop Block

```
next backdrop
```

**Switches to the next backdrop** in the stage's backdrop list (loops back to first).

---

### Uses for Next Backdrop

| Use Case | Code |
|----------|------|
| **Story book** | `when this sprite clicked` → `next backdrop` |
| **Slide show** | `forever { wait 5 secs, next backdrop }` |
| **Level select** | Click arrow → `next backdrop` |

---

## Script Reading Order — Top to Bottom!

### The Golden Rule

**Scratch ALWAYS reads blocks from TOP to BOTTOM** in a script stack.

```
when green flag clicked        ← 1. FIRST
say [Hello!] for 2 secs        ← 2. SECOND
wait 1 secs                    ← 3. THIRD
move 100 steps                 ← 4. FOURTH
turn 90 degrees                ← 5. FIFTH
```

### Why Order Matters

| Wrong Order | Result |
|-------------|--------|
| `move 100` then `say [Hello!]` | Moves FIRST, then speaks (awkward!) |
| `say [Hello!]` then `move 100` | Speaks first, then moves (natural!) |

### Parallel Scripts — Same Time!

**Multiple scripts starting with the same hat block run SIMULTANEOUSLY!**

```
when green flag clicked
forever
    move 5 steps
end

when green flag clicked
forever
    if <touching [edge v]?> then turn 180 degrees end
end
```

**Both run at the same time** — sprite moves AND checks edges at the same time!

---

## Parallelism — Doing Multiple Things at Once!

### What Is Parallelism?

**Parallelism** = multiple scripts running **at the same time**.

In Scratch, **every hat block starts a separate "thread"** that runs independently.

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

!!! tip "🧠 Think About Timing!"
    When two scripts might change the same variable, **who runs first matters**. Use `broadcast and wait` to control order!

---

## Boolean Introduction — True or False!

### What Is a Boolean?

A **Boolean** is a value that can only be **TRUE** or **FALSE** — like a light switch!

| Boolean Value | Means |
|---------------|-------|
| **True** | Yes, correct, on, 1 |
| **False** | No, incorrect, off, 0 |

### Boolean Blocks (Hexagon Shape ⬡)

| Block | Category | True When... |
|-------|----------|--------------|
| `touching [mouse-pointer v]?` | Sensing | Sprite touches mouse |
| `key [space] pressed?` | Sensing | Key held down |
| `touching [Sprite2 v]?` | Sensing | Touching sprite |
| `< 10 > 5 >` | Operators | 10 > 5 (true) |
| `< 3 = 5 >` | Operators | 3 = 5 (false) |
| `< [score] > 100 >` | Operators | Score > 100 |

---

## If Else Block — Two-Way Decisions!

### If-Else Structure (Review)

```
if <condition> then
    // TRUE path
else
    // FALSE path
end
```

### Boolean + If-Else = Smart Decisions!

```
if <touching [enemy v]?> then
    change lives by -1
    play sound [hurt v]
else
    // Safe! Keep playing
end
```

### Boolean Operators (And/Or/Not)

| Block | What It Does | Example |
|-------|--------------|---------|
| `< > and < >` | Both TRUE | `touching enemy AND lives > 0` |
| `< > or < >` | At least one | `touching spike OR touching lava` |
| `not < >` | Flip it | `not touching ground` (in air!) |

---

## Key Pressed Sensor — Player Input!

### Key Pressed Block (Sensing)

```
key [space v] pressed?
```

**True while key is held down**, false when released.

### Common Keys for Games

| Key | Typical Use |
|-----|-------------|
| `right arrow` | Move right |
| `left arrow` | Move left |
| `up arrow` / `space` | Jump |
| `down arrow` | Duck / fall faster |
| `space` | Jump / shoot / interact |
| `a` / `d` | Alternative move keys |
| `w` | Jump (WASD controls) |

---

### Smooth Movement Pattern (Best Practice!)

**Don't use hat blocks for continuous movement!** Use `forever + if`:

```
when green flag clicked
forever
    if <key [right arrow] pressed?> then
        change x by 5
        point in direction 90
        next costume
    end
    if <key [left arrow] pressed?> then
        change x by -5
        point in direction -90
        next costume
    end
    if <key [space] pressed?> then
        // Jump logic here
    end
end
```

**Why?** Hat blocks (`when key pressed`) only trigger **once per press**. `forever + if` checks **every frame** for smooth movement!

---

## Player Control — Building a Controller!

### Complete Player Controller

```
when green flag clicked
go to x: -200 y: -100
set rotation style [left-right v]
forever
    // Horizontal movement
    if <key [right arrow] pressed?> then
        change x by 5
        point in direction 90
        next costume
    end
    if <key [left arrow] pressed?> then
        change x by -5
        point in direction -90
        next costume
    end
    
    // Jump (simple)
    if <key [space] pressed?> and <touching [ground v]?> then
        repeat 15
            change y by 8
            wait 0.01 secs
        end
        repeat 15
            change y by -8
            wait 0.01 secs
        end
    end
    
    // Screen boundaries
    if < (x position) > 220 > then set x to 220 end
    if < (x position) < -220 > then set x to -220 end
end
```

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
| `when [key] pressed` | Works with Makey Makey keys |
| `when [clamped] connected` | Hat: object connected |

### Makey Makey Ideas

| Object | Key | Game Action |
|--------|-----|-------------|
| Banana | Right arrow | Move right |
| Banana | Left arrow | Move left |
| Apple | Space | Jump |
| Water cup | Click | Shoot |
| Your hand (ground) | — | Completes circuit |

!!! tip "🍌 Anything Conductive = Button!"
    **Anything that conducts electricity** can be a game controller — fruit, foil, pencil graphite, plants, people!

---

## Collision Detection — When Things Touch!

### Types of Collision

| Type | Block | Use For |
|------|-------|---------|
| **Sprite vs Sprite** | `touching [Sprite2 v]?` | Player vs enemy, player vs coin |
| **Sprite vs Color** | `touching color [#FF0000]?` | Walls, lava, finish line |
| **Edge** | `touching [edge v]?` | Screen boundaries |

---

### Sprite vs Sprite Collision

```
forever
    if <touching [coin v]?> then
        change score by 10
        play sound [coin v]
        hide
        wait 2 secs
        go to random position
        show
    end
end
```

### Color-Based Collision (Maze Walls)

1. Draw walls in **pure red** (#FF0000)
2. Use color picker to get exact red
3. Code:

```
forever
    if <touching color [#FF0000]?> then
        go to start position
    end
end
```

### Precise Collision (Hitboxes)

For precise collisions, use a **small invisible "hitbox" sprite**:

```
Forever:
    set hitbox to player position
    if <hitbox touching [enemy]> then
        player takes damage
    end
```

---

## Less Than Operator — Comparing Numbers!

### Less Than Block (Operators → Green)

```
< (10) < (20) >
```

**True if left number is SMALLER than right number.**

### Comparison Operators Summary

| Block | Symbol | True When... |
|-------|--------|--------------|
| `< >` | < | Left < Right |
| `< >` | > | Left > Right |
| `< = >` | = | Left = Right |

### Using Less Than

#### Boundary Check

```
if < (x position) < -220 > then
    set x to -220
end
```

#### Timer Urgency

```
if < (timer) < 10 > then
    say [Hurry!] for 1 secs
end
```

#### Distance Check

```
if <distance to [enemy] < 50> then
    broadcast [danger v]
end
```

#### Score Thresholds

```
if < (score) < 100 > then
    say [Keep going!]
else
    say [Great job!]
end
```

---

## Go To Position — Instant Teleport!

### Go To Block (Motion → Blue)

```
go to x: (100) y: (50)
```

**Instantly moves** sprite to exact coordinates.

### Go To Targets

| Target | What It Does |
|--------|--------------|
| `go to x: (0) y: (0)` | Teleport to coordinates |
| `go to [mouse-pointer v]` | Teleport to mouse |
| `go to [Sprite2 v]` | Teleport to another sprite |

---

## Glide To Position — Smooth Movement!

### Glide Block (Motion → Blue)

```
glide (1) secs to x: (100) y: (50)
```

**Smoothly slides** to position over specified time.

### Glide Targets

| Target | What It Does |
|--------|--------------|
| `glide (1) secs to x: (0) y: (0)` | Smooth slide to coordinates |
| `glide (1) secs to [mouse-pointer v]` | Smooth follow mouse |
| `glide (1) secs to [Sprite2 v]` | Smooth chase sprite |

---

### Go To vs Glide

| Block | Speed | Use For |
|-------|-------|---------|
| `go to x: y:` | **Instant** | Spawning, resetting, teleporting |
| `glide secs to x: y:` | **Smooth** | Cutscenes, returning, chasing |

---

### Glide Examples

#### Smooth Return to Center

```
when I receive [return-to-center v]
glide 2 secs to x: 0 y: 0
```

#### Chase Player

```
forever
    if <distance to [player] > 50> then
        glide 0.5 secs to [player v]
    end
end
```

#### Cutscene Movement

```
when I receive [cutscene-start v]
glide 3 secs to x: -200 y: 100
wait 1 secs
glide 2 secs to x: 200 y: 100
glide 2 secs to x: 0 y: 0
```

---

## Create Clone — Make Copies at Runtime!

### Create Clone Block

```
create clone of [myself v]
```

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

| Event | Hat Block | Example |
|-------|-----------|---------|
| Project starts | `when green flag clicked` | Initialize game |
| Sprite clicked | `when this sprite clicked` | Buttons, collectibles |
| Key pressed | `when [space] key pressed` | Jump, shoot |
| Broadcast received | `when I receive [msg]` | Coordinated actions |
| Backdrop changes | `when backdrop switches to` | Level transitions |
| Video motion | `when video [motion] > 50` | Camera games |
| Clone created | `when I start as a clone` | Particle systems |

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