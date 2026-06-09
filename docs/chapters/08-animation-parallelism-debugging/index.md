---
title: Animation, Parallelism, and Debugging
description: Teaches costume animation, parallel execution, loops, and systematic debugging techniques for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-10 08:00:00
version: 0.08
---

# Animation, Parallelism, and Debugging

## Summary

Teaches costume animation, parallel execution, loops, and systematic debugging techniques. This chapter covers 25 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Project Description
2. Algorithmic Thinking
3. Costume Animation
4. Continuous Motion
5. Scrolling Background
6. Beat Synchronization
7. Loop Nesting
8. Enemy Movement
9. Debugging Basics
10. Broadcast And Wait
11. Message Passing
12. Asynchronous Broadcast
13. Decision Making
14. Conditional Branching
15. When I Start As Clone
16. Concurrent Scripts
17. Physical Computing
18. Repeat Until Loop
18. Boolean Logic
19. Dice Roll
20. Change Variable
21. For All Sprites
22. For This Sprite Only
23. Add To List
24. List Length
25. List Length

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)
- [2. Sprites, Stage, and the Coordinate System](../02-sprites-stage-coordinates/index.md)
- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)
- [5. Sounds, Extensions, and Sharing Projects](../05-sounds-extensions-sharing/index.md)
- [6. Broadcasting, Conditionals, and Sensing](../06-broadcasting-conditionals-sensing/index.md)
- [7. Variables, Lists, and Data Management](../07-variables-lists-data/index.md)

---

## Project Description — What Are We Building?

### The Big Picture

Before writing code, we **describe the project** — like a movie pitch!

### Project Description Template

| Section | What to Include |
|---------|-----------------|
| **Title** | Catchy name: "Space Runner 3000" |
| **Genre** | Platformer, puzzle, shooter, story |
| **Core Mechanic** | "Run, jump, collect stars, avoid spikes" |
| **Goal** | "Reach the end of 5 levels" |
| **Controls** | "Arrows move, Space jumps" |
| **Look & Feel** | "Retro pixel art, synthwave music" |

### Example Project Description

> **Title:** "Coin Collector Extreme"
> **Genre:** Platformer / Collection
> **Core Mechanic:** Run, jump, and dash through 10 levels collecting golden coins while avoiding enemies and spikes.
> **Goal:** Collect all 50 coins in each level to unlock the next. Beat all 5 worlds!
> **Controls:** Arrow keys move, Space jumps, Shift dashes.
> **Look & Feel:** Bright cartoon style, upbeat chiptune music, particle effects on coin collect.

!!! tip "📝 Write It Down First!"
    A clear project description **keeps you focused** and helps you explain your game to others!

---

## Algorithmic Thinking — Think Like a Computer!

### What Is an Algorithm?

An **algorithm** is a **step-by-step recipe** for solving a problem — precise enough that a computer can follow it!

### Algorithmic Thinking Steps

| Step | Question | Example |
|------|----------|---------|
| **1. Understand** | What's the problem? | "Make player jump realistically" |
| **2. Break Down** | What are the steps? | "Check ground → apply force → apply gravity → land" |
| **3. Order** | What comes first? | Check ground → if on ground & space → jump → apply gravity each frame |
| **4. Test** | Does it work? | Test jump height, double-jump prevention, landing |
| **5. Improve** | Can it be better? | Add coyote time, jump buffering, variable height |

### Algorithmic Thinking in Scratch

| Thinking Step | Scratch Translation |
|---------------|---------------------|
| **Sequence** | Blocks top-to-bottom |
| **Condition** | `if < > then else` |
| **Loop** | `repeat`, `forever`, `repeat until` |
| **Variable** | `score`, `timer`, `velocity` |
| **Function** | Custom block (`define jump`) |

---

## Costume Animation — Bring Sprites to Life!

### How Animation Works

**Animation** = rapidly switching **costumes** (pictures) to create illusion of movement!

### Animation Blocks (Looks → Purple)

| Block | What It Does |
|-------|--------------|
| `switch costume to [costume1 v]` | Instant change to specific costume |
| `next costume` | Cycle to next in list |
| `costume #` | Reporter: current costume number |

---

### Smooth Animation Pattern

```
when green flag clicked
forever
    next costume
    wait 0.1 secs
end
```

**Cycles through all costumes** with a 0.1 sec delay between each!

---

### Animation Timing

| Wait Time | Effect |
|-----------|--------|
| `0.05 secs` | Very fast (hummingbird wings) |
| `0.1 secs` | Normal walk/run |
| `0.2 secs` | Slow walk, heavy character |
| `0.5 secs` | Very slow (zombie shuffle) |

---

### Animation Examples

#### Walking Animation (4 costumes: walk1, walk2, walk3, walk4)

```
when green flag clicked
forever
    if <key [right arrow] pressed?> then
        next costume
        wait 0.1 secs
    else
        switch costume to [idle v]
    end
end
```

#### Flying Animation (2 costumes: wings-up, wings-down)

```
forever
    next costume
    wait 0.15 secs
end
```

#### Attack Animation (3 frames: windup, strike, recovery)

```
when [space] key pressed
switch costume to [windup v]
wait 0.1 secs
switch costume to [strike v]
wait 0.05 secs
switch costume to [recovery v]
wait 0.1 secs
switch costume to [idle v]
```

---

### Costume Center Reminder!

**Set costume center to FEET** for walking characters — prevents "floating" or "sinking" during animation!

---

## Continuous Motion — Smooth Movement!

### What Is Continuous Motion?

**Continuous motion** = sprite moves **smoothly every frame** while key held, not in jumps!

### The Secret: Forever + If (Not Hat Blocks!)

#### ❌ Wrong: Hat Blocks (Choppy!)

```
when [right arrow] key pressed
change x by 10
```

**Only moves ONCE per key press!** Choppy!

#### ✅ Correct: Forever + If (Smooth!)

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
end
```

**Checks every frame** — buttery smooth!

---

### Continuous Motion Template

```
when green flag clicked
forever
    // Horizontal
    if <key [right arrow] pressed?> then
        change x by (speed)
        point in direction 90
        next costume
    end
    if <key [left arrow] pressed?> then
        change x by (speed * -1)
        point in direction -90
        next costume
    end
    
    // Vertical (gravity, jump)
    // ... jump code here ...
    
    wait 0.01 secs    // Critical! Prevents lag
end
```

---

### Speed Variables

```
when green flag clicked
set [walk-speed v] to (5)
set [run-speed v] to (10)
set [jump-power v] to (15)

forever
    if <key [right arrow] pressed?> then
        change x by (walk-speed)
    end
    // ...
end
```

**Easy to tweak!** Change `walk-speed` variable to adjust feel.

---

## Scrolling Background — Infinite Worlds!

### The Illusion of Movement

**Scrolling background** = move background opposite to player = feels like player moves through big world!

---

### Method 1: Multiple Background Sprites

```
Background1 (original)
Background2 (copy, positioned right next to 1)

forever
    change x by (-scroll-speed)  // Move left
    if <x < -480> then
        go to x: 480   // Wrap to right side
    end
end
```

### Method 2: Backdrop Switching

```
forever
    if <player near edge> then
        next backdrop
        // Reposition everything for new scene
    end
end
```

### Scrolling Background Example

```
when green flag clicked
go to x: 0 y: 0
forever
    change x by (-3)    // Scroll left at speed 3
    if < (x position) < -480 > then
        go to x: 480     // Teleport to right side
    end
end
```

**Two copies side-by-side** = infinite seamless scroll!

---

## Beat Synchronization — Music + Action!

### What Is Beat Sync?

**Beat synchronization** = game actions happen **on the musical beat**!

### Using Tempo

```
when green flag clicked
forever
    wait (60 / tempo) secs    // One beat at current tempo
    // Do something on beat
    change color effect by 25
end
```

### Beat Sync Examples

#### Visual Beat

```
forever
    wait (60 / tempo) secs
    change size by 10
    wait 0.1 secs
    change size by -10
end
```

#### Obstacle Spawn on Beat

```
forever
    wait (60 / tempo) secs
    if < (pick random 1 to 4) = 1 > then
        create clone of [obstacle v]
    end
end
```

#### Music-Reactive Background

```
when green flag clicked
forever
    wait (60 / tempo) secs
    change color effect by 10
    change pen color by 5
end
```

!!! tip "🎵 Beat Sync = Rhythm Game!"
    Scratch's `tempo` variable (default 60 BPM) lets you sync **everything to music**!

---

## Loop Nesting — Loops Inside Loops!

### What Is Loop Nesting?

**Loop nesting** = putting a loop **inside another loop**!

### Nested Loop Structure

```
repeat (outer)
    repeat (inner)
        // Do something many times
    end
end
```

**Total iterations = outer × inner**

---

### Nested Loop Examples

#### Grid Pattern (Rows × Columns)

```
repeat (5)          // 5 rows
    repeat (10)     // 10 columns
        stamp
        move 20 steps
    end
    go to x: -100 y: (y + 20)   // Next row
end
```

**Creates 50 stamps in a 5×10 grid!**

#### Nested Animation

```
repeat (3)              // 3 waves
    repeat (10)         // 10 ripples per wave
        change size by 5
        wait 0.05 secs
    end
    repeat (10)
        change size by -5
        wait 0.05 secs
    end
end
```

#### Spiral with Nested Loops

```
repeat (6)              // 6 arms
    repeat (60)         // 60 steps per arm
        move 5 steps
        turn 1 degrees
        change pen color by 1
    end
    turn 60 degrees     // Next arm
end
```

---

## Enemy Movement — Smart Adversaries!

### Types of Enemy AI

| Type | Behavior | Code Pattern |
|------|----------|--------------|
| **Patrol** | Back and forth | `repeat until edge, turn 180` |
| **Chase** | Follow player | `point towards player, move` |
| **Random** | Wander randomly | `pick random direction, move` |
| **Turret** | Stay put, shoot | `point towards player, shoot` |
| **Boss** | Phases, patterns | Broadcast + phases |

---

### Patrol Enemy (Back and Forth)

```
when green flag clicked
forever
    move 3 steps
    if <touching [edge v]?> then
        turn 180 degrees
    end
end
```

### Chase Enemy

```
when green flag clicked
forever
    point towards [player v]
    move 2 steps
    if <touching [player v]?> then
        broadcast [player-hit v]
    end
end
```

### Smart Patrol (Platform Edges)

```
forever
    move 2 steps
    if <touching [edge v]?> or <not <touching color [#8B4513]?>> then
        turn 180 degrees
    end
end
```

**Turns around at platform edges** (brown color #8B4513 = ground)!

---

### Enemy Variations

| Variation | Code Change |
|-----------|-------------|
| **Fast enemy** | `move 5 steps` instead of 2 |
| **Jumping enemy** | Add jump logic on timer |
| **Shooting enemy** | `if <distance < 200> then broadcast [shoot]` |
| **Boss** | Phases: `broadcast [phase1]`, `broadcast [phase2]` |

---

## Debugging Basics — Finding and Fixing Bugs!

### What Is a Bug?

A **bug** = code that doesn't do what you intended. **Debugging** = finding and fixing it!

### Debugging Steps

| Step | Action |
|------|--------|
| **1. Reproduce** | Make the bug happen consistently |
| **2. Isolate** | Find which script/block causes it |
| **3. Hypothesize** | "I think the `change x by` is wrong" |
| **4. Test** | Change one thing, test again |
| **4. Fix** | Apply the correction |
| **5. Verify** | Test thoroughly — did it fix? Any new bugs? |

---

### Scratch Debugging Tools

| Tool | How to Use |
|------|------------|
| **Block Highlighting** | Watch which block glows when running |
| **Variable Watchers** | Show variables on stage — watch values live |
| **`say` for Debug** | `say (variable) for 2 secs` — prints value |
| **Single Step** | Click green flag, then press space to step (in some versions) |
| **`wait` for Timing** | Add `wait 1 secs` to slow down and watch |

---

### Common Bugs & Fixes

| Bug | Likely Cause | Fix |
|-----|--------------|-----|
| **Sprite doesn't move** | Wrong hat block, or `forever` missing | Check hat block, add `forever` |
| **Moves wrong direction** | `change x by -10` vs `10` | Check positive/negative |
| **Jumps forever** | No ground check | Add `touching ground?` |
| **Stuck in wall** | No edge check | Add `touching color?` check |
| **Score doesn't increase** | Wrong variable name | Check spelling: `score` vs `Score` |
| **Infinite loop** | Missing `wait` in `forever` | Add `wait 0.01 secs` |

---

### Debugging with `say`

```
when green flag clicked
forever
    say (join [x: ] (x position)) for 0.1 secs
    // Shows x position live!
end
```

**Live variable display** — watch values change in real time!

---

## Broadcast And Wait — Synchronization!

### Broadcast vs Broadcast And Wait

| Block | Behavior |
|-------|----------|
| `broadcast [msg]` | Sends, continues immediately |
| `broadcast [msg] and wait` | Sends, **waits for ALL receivers** |

---

### When to Use Broadcast And Wait

| Use Case | Why |
|----------|-----|
| **Level start** | All sprites ready before gameplay |
| **Cutscene steps** | Each phase completes before next |
| **Save game** | All data saved before continuing |
| **Level complete** | All effects finish before next level |

---

### Broadcast And Wait Example

```
when green flag clicked
broadcast [setup-level v] and wait
wait 1 secs
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [game-start v]
```

**Each phase finishes completely before next starts!**

---

## Message Passing — Sprites Sharing Data!

### What Is Message Passing?

**Message passing** = sprites communicating via broadcasts instead of directly accessing each other.

### Why Message Passing?

| Benefit | Explanation |
|---------|-------------|
| **Loose coupling** | Sprites don't need to know about each other |
| **Flexible** | Add/remove sprites without breaking others |
| **Scalable** | Add more sprites easily |

---

### Message Passing Patterns

| Pattern | Sender | Receiver | Use For |
|---------|--------|----------|---------|
| **Event** | `broadcast [coin]` | `when I receive [coin]` | Score +10 |
| **Command** | `broadcast [jump]` | `when I receive [jump]` | All sprites jump |
| **Query** | `broadcast [get-score]` | `when I receive [get-score]` → `broadcast [score-is] + wait` | Get data |

---

## Asynchronous Broadcast — Fire and Forget!

### Broadcast (Fire and Forget)

```
broadcast [explosion v]
// Continues immediately!
```

**Doesn't wait** — sender continues instantly.

### When to Use Async Broadcast

| Situation | Why Async |
|-----------|-----------|
| **Effects** | Explosion, particles — don't block gameplay |
| **Notifications** | "Achievement unlocked" — don't pause game |
| **Logging** | Send analytics — don't slow down |

---

## Decision Making — If This, Then That!

### Decision Making in Code

**Every game is a series of decisions:**
- Is player on ground? → Allow jump
- Is score > 100? → Level up
- Touching enemy? → Lose life
- Timer = 0? → Game over

### Decision Blocks

| Block | Use For |
|-------|---------|
| `if < > then` | One option |
| `if < > then else` | Two paths |
| `repeat until < >` | Loop until condition |
| `< > and < >` | Both must be true |
| `< > or < >` | Either true |

---

## Conditional Branching — Two Paths!

### If-Else Review

```
if <condition> then
    // TRUE path
else
    // FALSE path
end
```

### Branching Examples

#### Simple Branch

```
if <touching [coin v]?> then
    change score by 10
else
    // Nothing, keep playing
end
```

#### Multi-Level Branch

```
if < (score) > 1000 > then
    broadcast [level-3 v]
else
    if < (score) > 500 > then
        broadcast [level-2 v]
    else
        broadcast [level-1 v]
    end
end
```

---

## When I Start As Clone — Clone Initialization!

### Clone Hat Block

```
when I start as a clone
```

**Runs automatically for EACH new clone** — perfect for initialization!

---

### Clone Initialization Pattern

```
when I start as a clone
go to x: (pick random -200 to 200) y: (180)
set [velocity-y v] to (0)
show

forever
    change y by (velocity-y)
    change [velocity-y v] by (-1)   // Gravity
    if <touching [ground v]?> then
        delete this clone
    end
end
```

**Every clone sets itself up automatically!**

---

### Clone Initialization Checklist

| Step | Code |
|------|------|
| **Position** | `go to x: (random) y: (top)` |
| **Variables** | `set [velocity v] to (0)` |
| **Appearance** | `switch costume to [rock v]`, `show` |
| **Behavior** | `forever { physics, check delete }` |

---

## Concurrent Scripts — Parallel Power!

### What Are Concurrent Scripts?

**Concurrent scripts** = multiple scripts running **at the same time** (parallelism).

### Scratch = Naturally Concurrent!

**Every hat block starts a new "thread"** that runs independently.

### Managing Concurrency

| Challenge | Solution |
|-----------|----------|
| **Variable conflicts** | Use `broadcast and wait` for order |
| **Race conditions** | Single "manager" script for shared data |
| **Too many loops** | Combine into one main game loop |

---

### Concurrency Example

```
when green flag clicked          // Script 1: Player
forever
    // Movement, jump, animation
end

when green flag clicked          // Script 2: Enemies
forever
    // Spawn, move, check collisions
end

when green flag clicked          // Script 3: UI
forever
    // Update score display, timer
end
```

**All three run simultaneously!**

---

## Physical Computing — Code Meets Reality!

### What Is Physical Computing?

**Physical computing** = code interacting with **real-world hardware** (sensors, motors, lights)!

### Scratch Hardware Extensions

| Hardware | Extension | What It Does |
|----------|-----------|--------------|
| **Makey Makey** | Makey Makey | Everyday objects → keys |
| **micro:bit** | micro:bit | Buttons, LEDs, accelerometer |
| **LEGO SPIKE** | LEGO® | Motors, sensors, robots |
| **Go Direct** | Go Direct | Science sensors (temp, force, etc.) |

---

### Makey Makey Example

```
when [banana] key pressed
change x by 10
```

**Banana = right arrow key!**

### micro:bit Example

```
when [button A] pressed
change x by 10

when [tilt left] detected
turn 15 degrees
```

### Physical Computing Ideas

| Project | Hardware | Code Idea |
|---------|----------|-----------|
| **Fruit Piano** | Makey Makey | Each fruit = note |
| **Tilt Maze** | micro:bit | Tilt to roll ball |
| **Robot Dance** | LEGO SPIKE | Code dance moves |
| **Weather Station** | Go Direct | Log temp, graph it |

---

## Repeat Until Loop — Smart Loops!

### Repeat Until Block

```
repeat until <condition>
    // Runs until condition becomes TRUE
end
```

**Checks condition at START of each iteration.**

---

### Repeat Until Examples

#### Move Until Edge

```
repeat until <touching [edge v]?>
    move 5 steps
end
```

#### Wait for Button

```
repeat until <key [space] pressed?>
    say [Press SPACE to start]
    wait 0.5 secs
end
```

#### Wait for Condition

```
repeat until < (score) > 100 >
    wait 1 secs
end
broadcast [level-complete v]
```

---

### Repeat Until vs Other Loops

| Loop Type | Stops When... |
|-----------|---------------|
| `repeat (10)` | After 10 iterations |
| `forever` | Never (until stop) |
| `repeat until <cond>` | Condition becomes TRUE |

---

## Boolean Logic — And, Or, Not!

### Boolean Operators (Operators → Green)

| Block | Symbol | True When... |
|-------|--------|--------------|
| `< > and < >` | AND | Both TRUE |
| `< > or < >` | OR | At least one TRUE |
| `not < >` | NOT | Flips TRUE↔FALSE |

---

### Boolean Logic Examples

#### AND — Both Must Be True

```
if <touching [coin v]?> and < (lives) > 0 > then
    change score by 10
end
```

#### OR — At Least One

```
if <touching [spike v]?> or <touching [lava v]?> then
    broadcast [player-hit v]
end
```

#### NOT — Flip It

```
if <not <touching [ground v]?>> then
    // In the air!
    change [velocity-y v] by (-1)   // Gravity
end
```

### Truth Tables

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

---

## Dice Roll — Random Fun!

### Dice Roll = Pick Random 1 to 6

```
pick random (1) to (6)
```

**Simulates a 6-sided die!**

### Dice Roll Uses

| Code | Simulates | Use For |
|------|-----------|---------|
| `pick random 1 to 6` | 1d6 | Board games, RPGs |
| `pick random 1 to 20` | 1d20 | D&D style |
| `(pick random 1 to 6) + (pick random 1 to 6)` | 2d6 | Monopoly, Catan |
| `pick random 1 to 100` | d100 | Percentile rolls |

---

### Dice Roll Examples

#### Attack Roll

```
if < (pick random 1 to 20) > 15 > then
    // Critical hit!
    change [damage v] by (10)
else
    change [damage v] by (5)
end
```

#### Loot Table

```
set [roll v] to (pick random 1 to 100)
if < (roll) < 50 > then
    add [common-item] to [inventory v]
else
    if < (roll) < 80 > then
        add [uncommon-item] to [inventory v]
    else
        if < (roll) < 95 > then
            add [rare-item] to [inventory v]
        else
            add [legendary-item] to [inventory v]
        end
    end
end
```

---

## Change Variable — Math on the Fly!

### Change Variable Block

```
change [score v] by (10)
```

**Adds (or subtracts) from current value.**

### Change Variable Patterns

| Code | Effect |
|------|--------|
| `change [score v] by (10)` | +10 |
| `change [score v] by (-5)` | -5 |
| `change [x v] by (10)` | Move right |
| `change [x v] by (-10)` | Move left |
| `change [velocity-y v] by (-1)` | Gravity! |

---

### Change Variable Examples

#### Score System

```
when I receive [coin v]
change [score v] by (10)

when I receive [gem v]
change [score v] by (50)

when I receive [boss-defeated v]
change [score v] by (1000)
```

#### Physics Velocity

```
when green flag clicked
set [velocity-x v] to (0)
set [velocity-y v] to (0)
forever
    change [velocity-y v] by (-0.5)   // Gravity
    change x by (velocity-x)
    change y by (velocity-y)
end
```

#### Cooldown Timer

```
when [space] key pressed
if < (cooldown) = 0 > then
    set [cooldown v] to (30)   // 30 frames = 0.5 sec at 60fps
    broadcast [shoot v]
end

forever
    if < (cooldown) > 0 > then
        change [cooldown v] by (-1)
    end
end
```

---

## Variable Scope — For All vs This Sprite!

### For All Sprites (Global)

```
set [score v] to (0)    // ONE box, everyone shares
```

**All sprites see and change the SAME value.**

### For This Sprite Only (Local)

```
set [health v] to (100)    // EACH sprite has own box
```

**Each sprite has its OWN private copy.**

---

### When to Use Which

| Scope | Use For | Example |
|-------|---------|---------|
| **For all sprites** | Shared game state | `score`, `timer`, `level`, `high-score` |
| **For this sprite only** | Individual state | `health`, `speed`, `ammo`, `facing-right` |

---

### Scope Example

```
Player script:
set [score v] to (0)           // Global
set [player-health v] to (100) // Local

Enemy script:
when I start as a clone
set [enemy-health v] to (50)   // Local (each clone own!)
```

---

## Add To List — Building Collections!

### Add To List Block

```
add [apple] to [inventory v]
```

**Appends to END of list.**

---

### Add To List Examples

#### Inventory System

```
when I receive [found-apple v]
add [apple] to [inventory v]
say [Got an apple!] for 2 secs
```

#### High Score List

```
when I receive [game-over v]
add (score) to [high-scores v]
```

#### Level Codes

```
when green flag clicked
add [LEVEL1-CODE] to [level-codes v]
add [LEVEL2-CODE] to [level-codes v]
```

---

## List Length — How Many Items?

### Length of List Block

```
length of [inventory v]
```

**Reporter: tells you how many items in list.**

---

### List Length Uses

#### Check If Empty

```
if < (length of [inventory v]) = 0 > then
    say [Inventory empty!] for 2 secs
end
```

#### Limit List Size

```
add (new-score) to [high-scores v]
if < (length of [high-scores v]) > 10 > then
    delete (11) of [high-scores v]   // Remove 11th (keep top 10)
end
```

#### Loop Through List

```
repeat (length of [inventory v])
    say (item (loop-counter) of [inventory v]) for 1 secs
end
```

---

## Summary

In this chapter, you learned:

- ✅ **Project Description** — Plan before you code
- ✅ **Algorithmic Thinking** — Step-by-step problem solving
- ✅ **Costume Animation** — `next costume` + `wait` for smooth animation
- ✅ **Continuous Motion** — `forever + if key pressed` for smooth movement
- ✅ **Scrolling Background** — Infinite world illusion
- ✅ **Beat Synchronization** — Sync actions to music tempo
- ✅ **Loop Nesting** — Loops inside loops for grids, patterns
- ✅ **Enemy Movement** — Patrol, chase, random, turret AI
- ✅ **Debugging Basics** — Reproduce, isolate, hypothesize, test, fix
- ✅ **Broadcast And Wait** — Synchronized multi-sprite coordination
- ✅ **Message Passing** — Broadcasts for loose coupling
- ✅ **Async Broadcast** — Fire-and-forget for effects
- ✅ **Decision Making** — If/else, boolean logic
- ✅ **Conditional Branching** — If-else, nested ifs
- ✅ **When I Start As Clone** — Clone initialization pattern
- ✅ **Concurrent Scripts** — Natural parallelism in Scratch
- ✅ **Physical Computing** — Makey Makey, micro:bit, LEGO, sensors
- ✅ **Repeat Until Loop** — Smart loops with exit conditions
- ✅ **Boolean Logic** — And, or, not for complex conditions
- ✅ **Dice Roll** — `pick random 1 to 6` for games
- ✅ **Change Variable** — Increment/decrement on the fly
- ✅ **Variable Scope** — Global vs local variables
- ✅ **Add To List** — Build collections dynamically
- ✅ **List Length** — Count items, limit size, loop through

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Project Description** | Written plan for your game |
| **Algorithmic Thinking** | Step-by-step problem solving |
| **Costume Animation** | `next costume` + `wait` loop |
| **Continuous Motion** | `forever + if key pressed` |
| **Scrolling Background** | Moving backdrop for infinite world |
| **Beat Synchronization** | Sync actions to music tempo |
| **Loop Nesting** | Loop inside a loop |
| **Enemy AI** | Patrol, chase, random, turret patterns |
| **Debugging** | Find and fix bugs systematically |
| **Broadcast And Wait** | Synchronized broadcast |
| **Message Passing** | Broadcasts for communication |
| **Async Broadcast** | Fire-and-forget broadcast |
| **Conditional Branching** | If-else decision trees |
| `when I start as a clone` | Clone initialization hat block |
| **Concurrent Scripts** | Parallel script execution |
| **Physical Computing** | Hardware + code (Makey Makey, micro:bit) |
| `repeat until` | Loop until condition true |
| **Boolean Logic** | And, or, not operators |
| **Dice Roll** | `pick random 1 to 6` |
| **Change Variable** | Increment/decrement variable |
| **Variable Scope** | Global (all sprites) vs local (this sprite) |
| `add to list` | Append to collection |
| `length of list` | Count items in list |

---

## Try It Yourself! 🎯

**Challenge 1:** Create a **walking animation** with 4 costumes and smooth movement

**Challenge 2:** Build a **scrolling background** with 2 sprites that wrap

**Challenge 2:** Add **beat synchronization** — make background pulse to music

**Challenge 3:** Create **nested loops** to draw a 5×5 grid of stamps

**Challenge 4:** Build **3 enemy types**: patrol, chase, and random wanderer

**Challenge 5:** **Debug a broken script** — use `say` to watch variable values

**Challenge 6:** Use **broadcast and wait** for a 3-phase level start sequence

**Challenge 7:** Build a **coin flip simulator** using `pick random 1 to 2`

---

## What's Next?

In **Chapter 9**, you'll master **Advanced Control and Operators** — complex loops, boolean mastery, clone management, and physical computing extensions!

[**→ Next Chapter: Advanced Control and Operators**](../09-advanced-control-operators/index.md)