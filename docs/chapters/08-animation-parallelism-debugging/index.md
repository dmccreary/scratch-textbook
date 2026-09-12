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

!!! mascot-welcome "Lights, Camera, Parallelism!"
    ![Scratch the Cat waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to make your sprites move like they're alive, run dozens of scripts at once, and squash bugs like a pro? This chapter is where your projects stop feeling like slideshows and start feeling like real games — animated characters, scrolling worlds, and music that syncs to the action. You'll learn the exact techniques real game creators use for smooth animation, true parallel scripts, and systematic debugging. Let's build something purr-fect!

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

!!! mascot-tip "Write It Down First!"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Before you drag a single block, jot down your project's title, core mechanic, and controls in a few sentences. A clear description keeps you focused while you build and makes it easy to explain your game to a friend later.

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
| **Condition** | `if <> then else` |
| **Loop** | `repeat`, `forever`, `repeat until` |
| **Variable** | `score`, `timer`, `velocity` |
| **Function** | Custom block (`define jump`) |

---

## Costume Animation — Bring Sprites to Life!

<div class="scratch">
next costume
</div>

### How Animation Works

**Animation** = rapidly switching **costumes** (pictures) to create the illusion of movement!

### Animation Blocks

<div class="scratch">
switch costume to [costume1 v]
</div>

Instant change to a specific costume.

<div class="scratch">
next costume
</div>

Cycles to the next costume in the list.

<div class="scratch">
(costume [number v])
</div>

Reporter — tells you the current costume number.

---

### Smooth Animation Pattern

<div class="scratch">
when green flag clicked
forever
    next costume
    wait (0.1) seconds
end
</div>

**Cycles through all costumes** with a 0.1 second delay between each!

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

<div class="scratch">
when green flag clicked
forever
    if &lt;key [right arrow v] pressed?&gt; then
        next costume
        wait (0.1) seconds
    else
        switch costume to [idle v]
    end
end
</div>

#### Flying Animation (2 costumes: wings-up, wings-down)

<div class="scratch">
when green flag clicked
forever
    next costume
    wait (0.15) seconds
end
</div>

#### Attack Animation (3 frames: windup, strike, recovery)

<div class="scratch">
when key [space v] pressed
switch costume to [windup v]
wait (0.1) seconds
switch costume to [strike v]
wait (0.05) seconds
switch costume to [recovery v]
wait (0.1) seconds
switch costume to [idle v]
</div>

---

### Costume Center Reminder!

**Set the costume center to FEET** for walking characters — this prevents "floating" or "sinking" during animation!

---

## Continuous Motion — Smooth Movement!

### What Is Continuous Motion?

**Continuous motion** = a sprite moves **smoothly every frame** while a key is held, not in jumps!

### The Secret: Forever + If (Not Hat Blocks!)

#### ❌ Wrong: Hat Blocks (Choppy!)

<div class="scratch">
when key [right arrow v] pressed
change x by (10)
</div>

**Only moves ONCE per key press!** Choppy!

#### ✅ Correct: Forever + If (Smooth!)

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
end
</div>

**Checks every frame** — buttery smooth!

!!! mascot-thinking "One Trigger vs. Every Single Frame"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the shift here: a hat block like `when key [right arrow v] pressed` fires once per press, but `forever` + `if` checks the condition again and again, dozens of times a second. That's the mental flip from "something happened" to "keep checking, frame after frame" — and it's the trick behind every smooth-feeling game.

---

### Continuous Motion Template

<div class="scratch">
when green flag clicked
forever
    if &lt;key [right arrow v] pressed?&gt; then
        change x by (speed)
        point in direction (90)
        next costume
    end
    if &lt;key [left arrow v] pressed?&gt; then
        change x by ((speed) * (-1))
        point in direction (-90)
        next costume
    end
    wait (0.01) seconds // critical! prevents lag
end
</div>

Vertical movement (gravity, jumping) slots in right alongside the horizontal checks above.

---

### Speed Variables

<div class="scratch">
when green flag clicked
set [walk-speed v] to (5)
set [run-speed v] to (10)
set [jump-power v] to (15)

forever
    if &lt;key [right arrow v] pressed?&gt; then
        change x by (walk-speed)
    end
end
</div>

**Easy to tweak!** Change the `walk-speed` variable to adjust the feel.

---

## Scrolling Background — Infinite Worlds!

### The Illusion of Movement

**Scrolling background** = move the background opposite to the player = feels like the player moves through a big world!

---

### Method 1: Multiple Background Sprites

Use two copies of the backdrop sprite — `Background1` (the original) and `Background2` (a copy positioned right next to it) — then scroll both together:

<div class="scratch">
forever
    change x by ((-1) * (scroll-speed)) // move left
    if &lt;(x position) &lt; (-480)&gt; then
        set x to (480) // wrap to the right side
    end
end
</div>

### Method 2: Backdrop Switching

<div class="scratch">
forever
    if &lt;touching [edge v]?&gt; then
        next backdrop
    end
end
</div>

Reposition every sprite for the new scene right after switching.

### Scrolling Background Example

<div class="scratch">
when green flag clicked
go to x: (0) y: (0)
forever
    change x by (-3) // scroll left at speed 3
    if &lt;(x position) &lt; (-480)&gt; then
        set x to (480) // teleport to the right side
    end
end
</div>

**Two copies side-by-side** = infinite seamless scroll!

---

## Beat Synchronization — Music + Action!

<div class="scratch">
(tempo)
</div>

### What Is Beat Sync?

**Beat synchronization** = game actions happen **on the musical beat**!

### Using Tempo

<div class="scratch">
when green flag clicked
forever
    wait ((60) / (tempo)) seconds
    change [color v] effect by (25)
end
</div>

One beat at the current tempo triggers whatever comes next.

!!! mascot-tip "Ride the Beat Variable"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Drop `wait ((60) / (tempo)) seconds` inside a `forever` loop and any block right after it fires exactly on the beat. Change the `tempo` reporter's value, and your whole game speeds up or slows down with the music — no extra math needed.

### Beat Sync Examples

#### Visual Beat

<div class="scratch">
when green flag clicked
forever
    wait ((60) / (tempo)) seconds
    change size by (10)
    wait (0.1) seconds
    change size by (-10)
end
</div>

#### Obstacle Spawn on Beat

<div class="scratch">
when green flag clicked
forever
    wait ((60) / (tempo)) seconds
    if &lt;(pick random (1) to (4)) = (1)&gt; then
        create clone of [obstacle v]
    end
end
</div>

#### Music-Reactive Background

<div class="scratch">
when green flag clicked
forever
    wait ((60) / (tempo)) seconds
    change [color v] effect by (10)
    change pen [color v] by (5)
end
</div>

---

## Loop Nesting — Loops Inside Loops!

<div class="scratch">
repeat (10)
    repeat (10)
        move (10) steps
    end
end
</div>

### What Is Loop Nesting?

**Loop nesting** = putting a loop **inside another loop**!

### Nested Loop Structure

<div class="scratch">
repeat (outer)
    repeat (inner)
        move (10) steps
    end
end
</div>

**Total iterations = outer × inner**

---

### Nested Loop Examples

#### Grid Pattern (Rows × Columns)

<div class="scratch">
repeat (5) // 5 rows
    repeat (10) // 10 columns
        stamp
        move (20) steps
    end
    set x to (-100)
    change y by (20) // next row
end
</div>

**Creates 50 stamps in a 5×10 grid!**

#### Nested Animation

<div class="scratch">
repeat (3) // 3 waves
    repeat (10) // 10 ripples per wave
        change size by (5)
        wait (0.05) seconds
    end
    repeat (10)
        change size by (-5)
        wait (0.05) seconds
    end
end
</div>

#### Spiral with Nested Loops

<div class="scratch">
repeat (6) // 6 arms
    repeat (60) // 60 steps per arm
        move (5) steps
        turn right (1) degrees
        change pen [color v] by (1)
    end
    turn right (60) degrees // next arm
end
</div>

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

<div class="scratch">
when green flag clicked
forever
    move (3) steps
    if &lt;touching [edge v]?&gt; then
        turn right (180) degrees
    end
end
</div>

### Chase Enemy

<div class="scratch">
when green flag clicked
forever
    point towards [player v]
    move (2) steps
    if &lt;touching [player v]?&gt; then
        broadcast [player-hit v]
    end
end
</div>

### Smart Patrol (Platform Edges)

<div class="scratch">
when green flag clicked
forever
    move (2) steps
    if &lt;touching [edge v]?&gt; or not &lt;touching color [#8B4513]?&gt; then
        turn right (180) degrees
    end
end
</div>

**Turns around at platform edges** (brown color #8B4513 = ground)!

---

### Enemy Variations

| Variation | Code Change |
|-----------|-------------|
| **Fast enemy** | `move (5) steps` instead of 2 |
| **Jumping enemy** | Add jump logic on a timer |
| **Shooting enemy** | `if <(distance to [player v]) < (200)> then broadcast [shoot v]` |
| **Boss** | Phases: `broadcast [phase1 v]`, `broadcast [phase2 v]` |

---

## Debugging Basics — Finding and Fixing Bugs!

<div class="scratch">
say (score) for (2) seconds
</div>

### What Is a Bug?

A **bug** = code that doesn't do what you intended. **Debugging** = finding and fixing it!

### Debugging Steps

| Step | Action |
|------|--------|
| **1. Reproduce** | Make the bug happen consistently |
| **2. Isolate** | Find which script/block causes it |
| **3. Hypothesize** | "I think the `change x by` is wrong" |
| **4. Test** | Change one thing, test again |
| **5. Fix** | Apply the correction |
| **6. Verify** | Test thoroughly — did it fix? Any new bugs? |

---

### Scratch Debugging Tools

| Tool | How to Use |
|------|------------|
| **Block Highlighting** | Watch which block glows when running |
| **Variable Watchers** | Show variables on stage — watch values live |
| **`say` for Debug** | `say (variable) for (2) seconds` — prints the value |
| **Single Step** | Slow the project down with `wait` blocks to watch each step |
| **`wait` for Timing** | Add `wait (1) seconds` to slow down and watch |

!!! mascot-tip "See What Your Sprite Is Thinking"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Stuck on a bug? Drag a `say (variable) for (2) seconds` block into the suspicious script, or right-click a variable and turn on its watcher on the stage. Watching the real value change beats guessing every time.

---

### Common Bugs & Fixes

| Bug | Likely Cause | Fix |
|-----|--------------|-----|
| **Sprite doesn't move** | Wrong hat block, or `forever` missing | Check the hat block, add `forever` |
| **Moves wrong direction** | `change x by (-10)` vs `(10)` | Check positive vs. negative |
| **Jumps forever** | No ground check | Add a `touching [ground v]?` check |
| **Stuck in wall** | No edge check | Add a `touching color [...]?` check |
| **Score doesn't increase** | Wrong variable name | Check spelling: `score` vs `Score` |
| **Infinite loop feels frozen** | Missing `wait` in a busy loop | Add `wait (0.01) seconds` |

---

### Debugging with `say`

<div class="scratch">
when green flag clicked
forever
    say (join [x: ] (x position)) for (0.1) seconds
end
</div>

**Live variable display** — watch values change in real time!

!!! mascot-encourage "Debugging Feels Slow at First — That's Normal"
    ![Scratch the Cat giving an encouraging smile](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If hunting down a bug feels frustrating, you're right on schedule — every coder spends real time debugging, even the pros. You already know how to test one change at a time from earlier chapters; now just add a `say` block or a variable watcher and keep narrowing down where things go wrong.

---

## Broadcast And Wait — Synchronization!

### Broadcast vs Broadcast And Wait

<div class="scratch">
broadcast [message1 v]
</div>

Sends the message and continues immediately.

<div class="scratch">
broadcast [message1 v] and wait
</div>

Sends the message and **waits for ALL receivers** to finish.

---

### When to Use Broadcast And Wait

| Use Case | Why |
|----------|-----|
| **Level start** | All sprites ready before gameplay |
| **Cutscene steps** | Each phase completes before the next |
| **Save game** | All data saved before continuing |
| **Level complete** | All effects finish before the next level |

---

### Broadcast And Wait Example

<div class="scratch">
when green flag clicked
broadcast [setup-level v] and wait
wait (1) seconds
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [game-start v]
</div>

**Each phase finishes completely before the next starts!**

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
| **Event** | `broadcast [coin v]` | `when I receive [coin v]` | Score +10 |
| **Command** | `broadcast [jump v]` | `when I receive [jump v]` | All sprites jump |
| **Query** | `broadcast [get-score v]` | `when I receive [get-score v]` → `broadcast [score-is v] and wait` | Get data |

---

## Asynchronous Broadcast — Fire and Forget!

### Broadcast (Fire and Forget)

<div class="scratch">
broadcast [explosion v]
</div>

**Doesn't wait** — the sender continues instantly.

### When to Use Async Broadcast

| Situation | Why Async |
|-----------|-----------|
| **Effects** | Explosion, particles — don't block gameplay |
| **Notifications** | "Achievement unlocked" — don't pause the game |
| **Logging** | Send analytics — don't slow things down |

---

## Decision Making — If This, Then That!

### Decision Making in Code

**Every game is a series of decisions:**

- Is the player on the ground? → Allow jump
- Is the score greater than 100? → Level up
- Touching an enemy? → Lose a life
- Is the timer at 0? → Game over

### Decision Blocks

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
if &lt;touching [edge v]?&gt; then
    turn right (180) degrees
end
</div>

One path — runs only when the condition is true.
</div>

<div class="card" markdown>
<div class="scratch">
if &lt;touching [coin v]?&gt; then
    change [score v] by (10)
else
    change [lives v] by (-1)
end
</div>

Two paths — picks one branch based on the condition.
</div>

<div class="card" markdown>
<div class="scratch">
repeat until &lt;touching [edge v]?&gt;
    move (10) steps
end
</div>

Loops until the condition becomes true.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;touching [coin v]?&gt; and &lt;(lives) > (0)&gt;
</div>

True only when both conditions are true.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;touching [spike v]?&gt; or &lt;touching [lava v]?&gt;
</div>

True when at least one condition is true.
</div>

</div>

---

## Conditional Branching — Two Paths!

### If-Else Review

<div class="scratch">
if &lt;touching [edge v]?&gt; then
    turn right (180) degrees
else
    turn left (180) degrees
end
</div>

---

### Branching Examples

#### Simple Branch

<div class="scratch">
if &lt;touching [coin v]?&gt; then
    change [score v] by (10)
else

end
</div>

An empty `else` branch is perfectly valid — it just means nothing happens when the coin isn't touched.

#### Multi-Level Branch

<div class="scratch">
if &lt;(score) > (1000)&gt; then
    broadcast [level-3 v]
else
    if &lt;(score) > (500)&gt; then
        broadcast [level-2 v]
    else
        broadcast [level-1 v]
    end
end
</div>

---

## When I Start As Clone — Clone Initialization!

### Clone Hat Block

<div class="scratch">
when I start as a clone
</div>

**Runs automatically for EACH new clone** — perfect for initialization!

---

### Clone Initialization Pattern

<div class="scratch">
when I start as a clone
go to x: (pick random (-200) to (200)) y: (180)
set [velocity-y v] to (0)
show
forever
    change y by (velocity-y)
    change [velocity-y v] by (-1) // gravity
    if &lt;touching [ground v]?&gt; then
        delete this clone
    end
end
</div>

**Every clone sets itself up automatically!**

---

### Clone Initialization Checklist

| Step | Code |
|------|------|
| **Position** | `go to x: (pick random (-200) to (200)) y: (180)` |
| **Variables** | `set [velocity-y v] to (0)` |
| **Appearance** | `switch costume to [rock v]`, `show` |
| **Behavior** | `forever` loop with physics and a delete check |

---

## Concurrent Scripts — Parallel Power!

<div class="scratch">
when green flag clicked
forever
    move (2) steps
end
</div>

<div class="scratch">
when green flag clicked
forever
    next costume
end
</div>

Both scripts belong to the **same sprite** and start the moment the green flag is clicked — and then they run together, not one after the other.

### What Are Concurrent Scripts?

**Concurrent scripts** = multiple scripts running **at the same time** (parallelism).

### Scratch = Naturally Concurrent!

**Every hat block starts a new "thread"** that runs independently.

!!! mascot-thinking "Not Taking Turns — Really at Once"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Here's the paradigm shift: those two scripts above aren't secretly running one at a time super fast — Scratch genuinely juggles every hat block in parallel, all the time. Once you stop picturing your project as "one script doing everything in order" and start picturing "many small scripts, each minding its own business," parallel programs suddenly make a lot more sense.

### Managing Concurrency

| Challenge | Solution |
|-----------|----------|
| **Variable conflicts** | Use `broadcast and wait` for order |
| **Race conditions** | Single "manager" script for shared data |
| **Too many loops** | Combine into one main game loop |

!!! mascot-warning "When Two Scripts Grab the Same Variable"
    ![Scratch the Cat waving a warning sign](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    If two parallel scripts both change `score` at the exact same moment, one script's change can get stomped by the other — a race condition. Give shared variables a single "manager" script that owns the changes, or use `broadcast and wait` so updates happen in a guaranteed order.

---

### Concurrency Example

<div class="scratch">
when green flag clicked // Script 1: Player
forever
    change x by (2)
end

when green flag clicked // Script 2: Enemies
forever
    next costume
end

when green flag clicked // Script 3: UI
forever
    say (join [Score: ] (score)) for (0.1) seconds
end
</div>

**All three run simultaneously!**

---

## Physical Computing — Code Meets Reality!

<div class="scratch">
when [button A v] pressed
</div>

### What Is Physical Computing?

**Physical computing** = code interacting with **real-world hardware** (sensors, motors, lights)!

### Scratch Hardware Extensions

| Hardware | Extension | What It Does |
|----------|-----------|---------------|
| **Makey Makey** | Makey Makey | Everyday objects → keys |
| **micro:bit** | micro:bit | Buttons, LEDs, accelerometer |
| **LEGO SPIKE** | LEGO® | Motors, sensors, robots |
| **Go Direct** | Go Direct | Science sensors (temp, force, etc.) |

---

### Makey Makey Example

<div class="scratch">
when key [right arrow v] pressed // banana = right arrow key
change x by (10)
</div>

**Banana = right arrow key!** Makey Makey turns everyday objects into keyboard presses, so any `when key [_ v] pressed` hat block works.

### micro:bit Example

<div class="scratch">
when [button A v] pressed
change x by (10)
</div>

<div class="scratch">
when tilted [left v]
turn right (15) degrees
</div>

### Physical Computing Ideas

| Project | Hardware | Code Idea |
|---------|----------|-----------|
| **Fruit Piano** | Makey Makey | Each fruit = a note |
| **Tilt Maze** | micro:bit | Tilt to roll the ball |
| **Robot Dance** | LEGO SPIKE | Code dance moves |
| **Weather Station** | Go Direct | Log temperature, graph it |

---

## Repeat Until Loop — Smart Loops!

### Repeat Until Block

<div class="scratch">
repeat until &lt;condition&gt;
    move (10) steps
end
</div>

**Checks the condition at the START of each iteration.**

---

### Repeat Until Examples

#### Move Until Edge

<div class="scratch">
repeat until &lt;touching [edge v]?&gt;
    move (5) steps
end
</div>

#### Wait for Button

<div class="scratch">
repeat until &lt;key [space v] pressed?&gt;
    say [Press SPACE to start]
    wait (0.5) seconds
end
</div>

#### Wait for Condition

<div class="scratch">
repeat until &lt;(score) > (100)&gt;
    wait (1) seconds
end
broadcast [level-complete v]
</div>

---

### Repeat Until vs Other Loops

<div class="scratch">
repeat (10)

end
</div>

Stops after 10 iterations.

<div class="scratch">
forever

end
</div>

Never stops (until the project itself stops).

<div class="scratch">
repeat until &lt;condition&gt;

end
</div>

Stops as soon as the condition becomes true.

---

## Boolean Logic — And, Or, Not!

### Boolean Operators

<div class="scratch">
&lt;touching [edge v]?&gt; and &lt;touching [coin v]?&gt;
</div>

True only when **both** are true.

<div class="scratch">
&lt;touching [edge v]?&gt; or &lt;touching [coin v]?&gt;
</div>

True when **at least one** is true.

<div class="scratch">
not &lt;touching [edge v]?&gt;
</div>

Flips true ↔ false.

---

### Boolean Logic Examples

#### AND — Both Must Be True

<div class="scratch">
if &lt;touching [coin v]?&gt; and &lt;(lives) > (0)&gt; then
    change [score v] by (10)
end
</div>

#### OR — At Least One

<div class="scratch">
if &lt;touching [spike v]?&gt; or &lt;touching [lava v]?&gt; then
    broadcast [player-hit v]
end
</div>

#### NOT — Flip It

<div class="scratch">
if not &lt;touching [ground v]?&gt; then
    change [velocity-y v] by (-1) // gravity
end
</div>

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

<div class="scratch">
pick random (1) to (6)
</div>

**Simulates a 6-sided die!**

### Dice Roll Uses

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (6)
</div>

Simulates 1d6 — great for board games and RPGs.
</div>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (20)
</div>

Simulates 1d20 — the D&D-style roll.
</div>

<div class="card" markdown>
<div class="scratch">
(pick random (1) to (6)) + (pick random (1) to (6))
</div>

Simulates 2d6 — Monopoly and Catan style rolls.
</div>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (100)
</div>

Simulates a d100 — percentile rolls.
</div>

</div>

---

### Dice Roll Examples

#### Attack Roll

<div class="scratch">
if &lt;(pick random (1) to (20)) > (15)&gt; then
    change [damage v] by (10)
else
    change [damage v] by (5)
end
</div>

#### Loot Table

<div class="scratch">
set [roll v] to (pick random (1) to (100))
if &lt;(roll) &lt; (50)&gt; then
    add [common-item] to [inventory v]
else
    if &lt;(roll) &lt; (80)&gt; then
        add [uncommon-item] to [inventory v]
    else
        if &lt;(roll) &lt; (95)&gt; then
            add [rare-item] to [inventory v]
        else
            add [legendary-item] to [inventory v]
        end
    end
end
</div>

---

## Change Variable — Math on the Fly!

### Change Variable Block

<div class="scratch">
change [score v] by (10)
</div>

**Adds (or subtracts) from the current value.**

### Change Variable Patterns

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
change [score v] by (10)
</div>

+10 to the score.
</div>

<div class="card" markdown>
<div class="scratch">
change [score v] by (-5)
</div>

-5 from the score.
</div>

<div class="card" markdown>
<div class="scratch">
change x by (10)
</div>

Moves right.
</div>

<div class="card" markdown>
<div class="scratch">
change x by (-10)
</div>

Moves left.
</div>

<div class="card" markdown>
<div class="scratch">
change [velocity-y v] by (-1)
</div>

Gravity!
</div>

</div>

---

### Change Variable Examples

#### Score System

<div class="scratch">
when I receive [coin v]
change [score v] by (10)

when I receive [gem v]
change [score v] by (50)

when I receive [boss-defeated v]
change [score v] by (1000)
</div>

#### Physics Velocity

<div class="scratch">
when green flag clicked
set [velocity-x v] to (0)
set [velocity-y v] to (0)
forever
    change [velocity-y v] by (-0.5) // gravity
    change x by (velocity-x)
    change y by (velocity-y)
end
</div>

#### Cooldown Timer

<div class="scratch">
when key [space v] pressed
if &lt;(cooldown) = (0)&gt; then
    set [cooldown v] to (30) // 30 frames = 0.5 sec at 60fps
    broadcast [shoot v]
end

when green flag clicked
forever
    if &lt;(cooldown) > (0)&gt; then
        change [cooldown v] by (-1)
    end
end
</div>

---

## Variable Scope — For All vs This Sprite!

### For All Sprites (Global)

<div class="scratch">
set [score v] to (0)
</div>

**All sprites see and change the SAME value.**

### For This Sprite Only (Local)

<div class="scratch">
set [health v] to (100)
</div>

**Each sprite has its OWN private copy.**

---

### When to Use Which

| Scope | Use For | Example |
|-------|---------|---------|
| **For all sprites** | Shared game state | `score`, `timer`, `level`, `high-score` |
| **For this sprite only** | Individual state | `health`, `speed`, `ammo`, `facing-right` |

---

### Scope Example

<div class="scratch">
set [score v] to (0) // global — Player script
set [player-health v] to (100) // local — Player script
</div>

<div class="scratch">
when I start as a clone
set [enemy-health v] to (50) // local — each clone owns its own copy, Enemy script
</div>

---

## Add To List — Building Collections!

### Add To List Block

<div class="scratch">
add [apple] to [inventory v]
</div>

**Appends to the END of the list.**

---

### Add To List Examples

#### Inventory System

<div class="scratch">
when I receive [found-apple v]
add [apple] to [inventory v]
say [Got an apple!] for (2) seconds
</div>

#### High Score List

<div class="scratch">
when I receive [game-over v]
add (score) to [high-scores v]
</div>

#### Level Codes

<div class="scratch">
when green flag clicked
add [LEVEL1-CODE] to [level-codes v]
add [LEVEL2-CODE] to [level-codes v]
</div>

---

## List Length — How Many Items?

### Length of List Block

<div class="scratch">
length of [inventory v]
</div>

**Reporter: tells you how many items are in the list.**

---

### List Length Uses

#### Check If Empty

<div class="scratch">
if &lt;(length of [inventory v]) = (0)&gt; then
    say [Inventory empty!] for (2) seconds
end
</div>

#### Limit List Size

<div class="scratch">
add (new-score) to [high-scores v]
if &lt;(length of [high-scores v]) > (10)&gt; then
    delete (11) of [high-scores v]
end
</div>

#### Loop Through List

<div class="scratch">
repeat (length of [inventory v])
    say (item (loop-counter) of [inventory v]) for (1) seconds
end
</div>

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

!!! mascot-celebration "You're an Animator, a Debugger, and a Parallel Programmer!"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Look at everything you just mastered — costume animation, scrolling backgrounds, nested loops, clones, and broadcasting with real synchronization, all while running many scripts at once without them tripping over each other. You even learned to debug like a pro. That's a huge chunk of what makes a real game tick!

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
