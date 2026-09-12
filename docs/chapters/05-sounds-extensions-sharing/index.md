---
title: Sounds, Extensions, and Sharing Projects
description: Explores sound blocks, Scratch extensions, project sharing, and versioning basics for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 18:00:00
version: 0.08
---

# Sounds, Extensions, and Sharing Projects

## Summary

Explores sound blocks, Scratch extensions, project sharing, and versioning basics. This chapter covers 25 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Random Number
2. Variable Creation
3. Custom Block Definition
4. Pen Extension
5. Video Sensing
6. Text To Speech
7. Translate Extension
8. Micro Bit Extension
9. Extension Management
10. Drag And Drop
10. Delete Block
11. Duplicate Block
12. Comment Block
13. Clean Up Blocks
13. Play Sound
14. Start Sound
15. Change Tempo
16. Copy To Backpack
17. Paste From Backpack
18. Project Page
19. Community Feedback
20. Step By Step Thinking
21. Forever Loop
22. Positive X
23. Negative X

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)
- [2. Sprites, Stage, and the Coordinate System](../02-sprites-stage-coordinates/index.md)
- [3. Motion Blocks and Block Categories](../03-motion-blocks-categories/index.md)
- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)

---

!!! mascot-welcome "New Superpowers Await"
    ![Scratch the Cat waving hello](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Time to level up! This chapter hands you randomness, variables that remember things, custom blocks you invent yourself, and a whole toolbox of extensions — camera sensing, talking sprites, translation, even real hardware. By the end you'll be building with tools professional Scratchers use every day. Let's build something purr-fect!

## Random Numbers — Unpredictable Fun!

<div class="scratch">
pick random (1) to (10)
</div>

### What Is a Random Number?

A **random number** is a number that Scratch picks **unpredictably** from a range you choose. It's like rolling dice — you never know exactly what you'll get!

### The Random Block (Operators → Green)

<div class="scratch">
pick random (1) to (10)
</div>

**Gives a random integer** between the two numbers (inclusive).

### Random Number Examples

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (6)
</div>

Dice rolls.
</div>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (100)
</div>

Percent chance.
</div>

<div class="card" markdown>
<div class="scratch">
pick random (-10) to (10)
</div>

Random direction.
</div>

<div class="card" markdown>
<div class="scratch">
pick random (0) to (360)
</div>

Random angle.
</div>

</div>

!!! tip "🎲 Random = Surprise!"
    Random numbers make games **different every time** — enemies spawn in new places, loot varies, levels feel fresh!

---

### Random Number Examples in Action

#### Random Position

<div class="scratch">
when I start as a clone
go to x: (pick random (-200) to (200)) y: (pick random (-150) to (150))
</div>

**Spawns clone at random position** on stage!

#### Random Wait

<div class="scratch">
forever
wait (pick random (1) to (5)) seconds
create clone of [myself v]
end
</div>

**Creates clones at random intervals** — 1 to 5 seconds apart!

#### Random Chance

<div class="scratch">
if &lt;(pick random (1) to (10)) &lt; (3)&gt; then
broadcast [rare-item v] // 20% chance: 2 out of 10
end
</div>

**20% chance** something special happens!

---

## Variables — Remembering Things!

<div class="scratch">
set [my variable v] to (0)
</div>

### What Is a Variable?

A **variable** is a **named container** that holds **one value** (number or text) that can **change** during your program.

Think of it like a **labeled box** — you can put something in, take it out, check what's inside, or replace it.

!!! mascot-thinking "A Box That Outlives the Block"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that a variable keeps its value even after the script that set it has finished running — it's not a temporary answer like a reporter, it's storage. That persistence is what lets a score survive between coin pickups, or a timer keep counting while everything else in your project happens around it.

### Creating a Variable

1. Go to **Variables** category (🔴 Red)
2. Click **Make a Variable**
3. Name it: `score`, `lives`, `timer`, `level`
4. Choose: **For all sprites** (shared) or **For this sprite only** (private)
5. Click **OK** — new blocks appear!

### Variable Blocks

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
set [score v] to (0)
</div>

Put a value in the box.
</div>

<div class="card" markdown>
<div class="scratch">
change [score v] by (1)
</div>

Add or subtract from the box.
</div>

<div class="card" markdown>
<div class="scratch">
show variable [score v]
</div>

Display it on stage.
</div>

<div class="card" markdown>
<div class="scratch">
hide variable [score v]
</div>

Hide it from stage.
</div>

<div class="card" markdown>
<div class="scratch">
(score)
</div>

The reporter — get the current value.
</div>

</div>

---

### For All Sprites vs. This Sprite Only

| Scope | What It Means | Use For |
|-------|---------------|---------|
| **For all sprites** | ONE box, everyone shares | Score, timer, level, high score |
| **For this sprite only** | Each sprite has own box | Sprite's own health, speed, state |

!!! tip "🔴 Red = Remember!"
    Variables are **red** because they **remember** things for you!

---

### Variable Examples

#### Score Counter

<div class="scratch">
when green flag clicked
set [score v] to (0)
show variable [score v]

when I receive [coin-collected v]
change [score v] by (10)
</div>

#### Lives System

<div class="scratch">
when green flag clicked
set [lives v] to (3)
show variable [lives v]

when I receive [player-hit v]
change [lives v] by (-1)
if &lt;(lives) = (0)&gt; then
broadcast [game-over v]
end
</div>

#### Timer

<div class="scratch">
when green flag clicked
set [timer v] to (0)
show variable [timer v]
forever
wait (1) seconds
change [timer v] by (1)
end
</div>

---

## Custom Blocks — Make Your Own Blocks!

<div class="scratch">
define jump
</div>

### What Are Custom Blocks?

**My Blocks** (🩷 Pink) let you **create your own blocks** — like inventing new LEGO® pieces!

!!! mascot-thinking "You're Naming a New Verb"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A custom block isn't just a shortcut for typing less — it's you inventing a new word the rest of your project can speak. Once `jump` exists, every script can say "jump" instead of re-explaining three motion blocks, the same way real programmers wrap complexity behind a simple name.

### Why Make Custom Blocks?

| Reason | Example |
|--------|---------|
| **Avoid repetition** | "Jump" used in 5 places → make `jump` block |
| **Organize code** | Group related blocks: `setup-player`, `spawn-enemies` |
| **Use parameters** | `jump (height)` — different heights each time! |
| **Share with others** | Backpack your custom blocks to other projects |

---

### Creating a Custom Block

1. Go to **My Blocks** (🩷 Pink) category
2. Click **Make a Block**
3. Name it: `jump`
4. (Optional) Click **Options** → **Add number input** → name: `height`
5. Click **OK** — a `define jump` hat block appears!
6. Build your script under the `define` hat
6. Use your new `jump` block anywhere!

---

### Custom Block Examples

#### Simple Custom Block (No Parameters)

<div class="scratch">
define jump
change y by (50)
wait (0.2) seconds
change y by (-50)
</div>

**Use it:** `jump` — always jumps 50 pixels

#### Custom Block with Parameter

<div class="scratch">
define jump (height)
change y by (height)
wait (0.2) seconds
change y by ((height) * (-1))
</div>

**Use it:** `jump (100)` — jumps high! `jump (20)` — small hop

!!! mascot-encourage "Parameters Take a Second Look"
    ![Scratch the Cat giving an encouraging thumbs-up](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If it's not obvious yet why `(height)` inside the definition can mean something different every time you call `jump`, that's completely normal — parameters are one of the first real abstractions in this book. Try calling `jump (20)` and `jump (100)` back to back and watch the difference; seeing it beats reading about it.

#### Custom Block with Multiple Parameters

<div class="scratch">
define glide-to (target-x) (target-y) (seconds)
glide (seconds) secs to x: (target-x) y: (target-y)
</div>

**Use it:** `glide-to (100) (50) (2)` — smooth move to (100, 50) in 2 seconds!

---

### Run Without Screen Refresh ⚡

In the **Make a Block** options, check **"Run without screen refresh"**.

| Setting | What It Does |
|---------|--------------|
| **Unchecked (default)** | Runs one step per frame (visible animation) |
| **Checked** | Runs **instantly** — all steps in one frame |

| Use Case | Setting |
|----------|---------|
| Movement, animation, player sees it | **Unchecked** |
| Math calculation, setup, instant teleport | **Checked** |

!!! mascot-tip "Turbo Mode for Math"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Reach for "Run without screen refresh" on anything the player shouldn't watch happen step by step — calculations, setup scripts, instant positioning, generating a level. Leave it unchecked for anything the player SHOULD see, like a jump or a walk animation.

---

## Extensions — Superpowers for Scratch!

### What Are Extensions?

**Extensions** add **extra block categories** to Scratch — like downloading new apps for your phone!

### How to Add Extensions

1. Click the **Extensions button** (🧩 puzzle piece) at **bottom-left** of blocks palette
2. Browse the list
3. Click **Add** → new category appears!

---

### The Big Extensions

| Extension | Category | Color | What It Adds |
|-----------|----------|-------|--------------|
| **Pen** | Pen | 🟢 Green | Draw with code |
| **Video Sensing** | Video Sensing | 🟣 Purple | Camera motion detection |
| **Text to Speech** | Text to Speech | 🩷 Pink | Talking sprites |
| **Translate** | Translate | 🔵 Blue | Language translation |
| **Makey Makey** | Makey Makey | 🟠 Orange | Physical controllers |
| **micro:bit** | micro:bit | 🔵 Blue | BBC micro:bit hardware |
| **LEGO®** | LEGO® | 🟡 Yellow | LEGO SPIKE/WeDo robots |
| **Go Direct** | Go Direct | 🟢 Green | Science sensors |

---

## Pen Extension — Draw With Code!

<div class="scratch">
pen down
</div>

### Adding Pen

**Extensions → Pen → Add** → **Pen** category appears (🟢 Green)!

### Pen Blocks

| Block | What It Does |
|-------|--------------|
| `pen down` | Start drawing trail |
| `pen up` | Stop drawing |
| `erase all` | Clear all pen marks |
| `set pen color to [color]` | Choose color |
| `change pen color by (10)` | Cycle color |
| `set pen size to (5)` | Line thickness |
| `change pen size by (5)` | Thicker/thinner |
| `stamp` | Leave costume copy as drawing |

### Pen Examples

#### Draw a Square

<div class="scratch">
when green flag clicked
erase all
pen down
repeat (4)
move (100) steps
turn right (90) degrees
end
pen up
</div>

#### Rainbow Spiral

<div class="scratch">
when green flag clicked
erase all
pen down
set pen size to (5)
repeat (360)
move (5) steps
turn right (1) degrees
change pen [color v] by (1)
end
pen up
</div>

#### Stamp Pattern

<div class="scratch">
when green flag clicked
erase all
pen up
repeat (12)
go to x: (0) y: (0)
point in direction ((30) * (repeat count))
move (100) steps
stamp
turn right (30) degrees
end
</div>

!!! tip "🎨 Pen = Math Art!"
    Combine **loops + pen + math** to create amazing geometric art, spirographs, fractals, and more!

---

## Video Sensing — Camera Games!

<div class="scratch">
turn video [on v]
</div>

### Adding Video Sensing

**Extensions → Video Sensing → Add** → **Video Sensing** category appears (🟣 Purple)!

### Video Sensing Blocks

| Block | What It Does |
|-------|--------------|
| `turn video [on v]` | Start/stop camera |
| `video [on v] on [stage v]` | Show/hide video |
| `video transparency (50)` | How see-through (0-100) |
| `video [motion v] on [this sprite v]` | Motion amount (0-100) |
| `when video [motion] > (50)` | Hat: triggers on motion |

### Video Sensing Examples

#### Motion Mirror

<div class="scratch">
when green flag clicked
turn video [on v]
set video transparency to (50)
forever
if &lt;(video [motion v] on [this sprite v]) > (30)&gt; then
change color effect by (10)
play sound [pop v]
end
end
</div>

**Wave at camera → sprite reacts!**

#### Hand-Controlled Sprite

<div class="scratch">
when green flag clicked
turn video [on v]
forever
go to [mouse-pointer v] // or use video position
if &lt;(video [motion v] on [this sprite v]) > (50)&gt; then
play sound [pop v]
end
end
</div>

!!! tip "📷 Video = Body Control!"
    Use your **body as the controller** — dance, wave, jump to control the game!

---

## Text to Speech — Talking Sprites!

<div class="scratch">
speak [Hello!]
</div>

### Adding Text to Speech

**Extensions → Text to Speech → Add** → **Text to Speech** category appears (🩷 Pink)!

### Text to Speech Blocks

| Block | What It Does |
|-------|--------------|
| `speak [Hello!]` | Speaks immediately |
| `speak [Hello!] and wait` | Speaks, waits for finish |
| `set voice to [alto v]` | Choose voice |
| `set language to [English v]` | Choose language |

### Voice Options

| Voice | Style |
|-------|-------|
| `alto` | Low female |
| `tenor` | Low male |
| `soprano` | High female |
| `random` | Surprise! |

### Language Options

English, Spanish, French, German, Italian, Chinese, Japanese, Korean, and many more!

### Text to Speech Examples

#### Talking Greeter

<div class="scratch">
when green flag clicked
set voice to [tenor v]
set language to [English v]
speak [Welcome to my game!] and wait
speak [Use arrow keys to move.]
</div>

#### Multilingual Character

<div class="scratch">
when this sprite clicked
set language to [Spanish v]
speak [¡Hola! ¿Cómo estás?] and wait
set language to [French v]
speak [Bonjour! Comment ça va?] and wait
</div>

!!! tip "🗣️ No Recording Needed!"
    Text to Speech **generates voice from text** — no microphone, no recording, infinite possibilities!

---

## Translate Extension — Many Languages!

<div class="scratch">
translate [Hello] to [Spanish v]
</div>

### Adding Translate

**Extensions → Translate → Add** → **Translate** category appears (🔵 Blue)!

### Translate Blocks

| Block | What It Does |
|-------|--------------|
| `translate [Hello] to [Spanish v]` | Reporter: translated text |
| `language [Spanish v]` | Reporter: language code |

### Translate Example

#### Multilingual Greeting

<div class="scratch">
when green flag clicked
set language to [Spanish v]
speak (translate [Hello, friend!] to [Spanish v]) and wait
</div>

!!! tip "🌍 Translate + Text to Speech = Polyglot Sprites!"
    Combine both extensions for sprites that **speak any language**!

---

## micro:bit Extension — Hardware Fun!

<div class="scratch">
when [button A v] pressed
</div>

### What Is micro:bit?

The **BBC micro:bit** is a tiny programmable computer with buttons, LEDs, accelerometer, compass, and radio!

### Adding micro:bit

**Extensions → micro:bit → Add** → **micro:bit** category appears (🔵 Blue)!

### micro:bit Blocks (Key Ones)

| Block | What It Does |
|-------|--------------|
| `when [button A] pressed` | Hat: micro:bit button pressed |
| `show [heart v] on LED` | Display image on 5×5 LED grid |
| `scroll [Hello!]` | Scroll text across LEDs |
| `acceleration (x)` | Reporter: tilt amount |
| `compass heading` | Reporter: compass direction |
| `send radio [message]` | Send to other micro:bits |

!!! tip "🤖 micro:bit = Physical Computing!"
    Control Scratch with a **real device in your hand** — tilt to steer, press buttons to jump, shake to shake the screen!

---

## Extension Management — Keep It Organized!

### Adding Extensions

1. Click **🧩 Extensions** (bottom-left of palette)
2. Scroll or search
3. Click **Add**

### Removing Extensions

1. Click **🧩 Extensions**
2. Find the extension
3. Click **Remove** (or click the ✕ on the category tab)

### Tips

| Tip | Why |
|-----|-----|
| **Only add what you need** | Too many = cluttered palette |
| **Remove when done** | Keeps palette clean for next project |
| **Extensions save with project** | Shared project includes extensions |

---

## Editor Skills — Drag, Drop, Duplicate, Comment, Clean!

### Drag and Drop — The Basics!

| Action | How To |
|--------|--------|
| **Move block** | Click and drag |
| **Insert in middle** | Drag between blocks — white line appears |
| **Remove block** | Drag out of script area |
| **Move whole stack** | Drag the **top block** (hat block) |

### Duplicate Block — Copy Instantly!

| Method | How To |
|--------|--------|
| **Right-click → Duplicate** | Right-click any block → "Duplicate" |
| **Alt/Option + Drag** | Hold Alt (Win) / Option (Mac) while dragging |
| **Backpack** | Drag to 🎒, then drag out copies |

### Delete Block — Remove Cleanly

| Method | How To |
|--------|--------|
| **Drag away** | Drag block out of script area |
| **Right-click → Delete** | Right-click → "Delete" |
| **Delete key** | Select block → press Delete/Backspace |

!!! mascot-warning "Deleting the Top Block Deletes Everything"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A common surprise: dragging away or deleting a hat block takes the **entire stack** below it with it, not just that one block. Before deleting a hat block, drag the rest of the stack off it first if you want to keep it.

---

### Comment Block — Leave Notes!

**Right-click any block → "Add comment"** → Yellow sticky note appears!

| Use Comments For | Example |
|------------------|---------|
| **Explain tricky code** | "This calculates jump arc using quadratic formula" |
| **Label sections** | "=== PLAYER MOVEMENT ===" |
| **TODO reminders** | "TODO: Add double-jump here" |
| **Credit others** | "Enemy AI from @CoolCoder123" |

!!! mascot-tip "Future You Will Thank Present You"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Your future self **will forget** why you wrote that weird math or what a tricky script does. Right-click and add a comment the moment it's clear in your head — not later, when it won't be.

---

### Clean Up Blocks — Auto-Organize!

**Right-click empty space in script area → "Clean up"**

| What It Does | Result |
|--------------|--------|
| **Aligns vertically** | Stacks become straight columns |
| **Even spacing** | Even gaps between blocks |
| **Multiple stacks** | Each stack aligned separately |

!!! tip "🧹 Clean Up = Professional Look!"
    Before sharing your project: **Right-click → Clean up** on every script. Makes your code look polished!

---

## Play Sound vs. Start Sound — Timing Matters!

### Play Sound Until Done

<div class="scratch">
play sound [jump v] until done
</div>

**Waits** for sound to completely finish before next block.

- Use for: **Dialogue, sound effects that must finish**

### Start Sound

<div class="scratch">
start sound [jump v]
</div>

**Continues immediately** — sound plays in background.

- Use for: **Background music, rapid effects, overlapping sounds**

---

### When to Use Which

| Situation | Block |
|-----------|-------|
| Character says line, then moves | `play sound [line] until done` |
| Jump sound while running | `start sound [jump]` |
| Background music | `start sound [music]` |
| Footsteps (rapid) | `start sound [step]` |
| "Game over" fanfare | `play sound [game-over] until done` |

!!! example "🎵 Music + Effects Together"
    <div class="scratch">
    when green flag clicked
    start sound [background-music v] // Music plays continuously
    forever
    if &lt;key [space v] pressed?&gt; then
    start sound [jump v] // Overlaps music perfectly
    change y by (50)
    wait (0.3) seconds
    change y by (-50)
    end
    end
    </div>

---

## Changing Tempo — Speed Up the Beat!

<div class="scratch">
change tempo by (20)
</div>

### Tempo Block

<div class="scratch">
change tempo by (20)
</div>

**Changes playback speed** of sounds (pitch changes too!).

| Tempo Change | Effect |
|-------------|--------|
| `+20` | Faster, higher pitch (chipmunk) |
| `-20` | Slower, lower pitch (slow-mo) |
| `set tempo to (100)` | Normal speed |

!!! tip "🎶 Tempo = Mood!"

    - **Fast tempo** = excitement, action, panic
    - **Slow tempo** = sadness, tension, slow-motion

---

## The Backpack — Your Cross-Project Toolbox!

### What Is the Backpack?

The **Backpack** (🎒 icon at bottom of sidebar) stores **blocks, sprites, costumes, sounds** to use in **ANY project**!

### Opening the Backpack

Click the **🎒 icon** at bottom of left sidebar (below sprite pane).

### What You Can Store

| Item | How to Store |
|------|--------------|
| **Script stacks** | Drag top block (hat) to backpack |
| **Single blocks** | Drag block to backpack |
| **Sprites** | Drag sprite from sprite pane |
| **Costumes** | Drag from costumes list |
| **Sounds** | Drag from sounds list |

### Using Backpack Items

| Action | How To |
|--------|--------|
| **Open backpack** | Click 🎒 icon |
| **Add to backpack** | Drag item → backpack |
| **Use in project** | Drag from backpack → script area/sprite pane |
| **Remove from backpack** | Right-click in backpack → Delete |

### Backpack Superpowers

| Superpower | Example |
|------------|---------|
| **Reuse code** | Perfect jump script → backpack → every platformer |
| **Reuse sprites** | Perfect enemy sprite → backpack → every game |
| **Reuse sounds** | Perfect coin sound → backpack → every game |
| **Move between computers** | Backpack saves to cloud account |

!!! tip "🎒 Backpack = Code Library!"
    Build once, use forever. **Invest time making perfect reusable pieces** — they pay off forever!

---

## Project Page — Your Project's Home!

### What Is the Project Page?

When you **Share** a project, it gets its own **web page** with:

- **Title & Instructions**
- **Playable project** (embedded)
- **See Inside** button (view code)
- **Remix** button
- **Comments** section
- **Stats** (views, loves, favorites, remixes)

### Making a Great Project Page

| Element | What to Include |
|---------|-----------------|
| **Title** | Clear, descriptive: "Space Adventure v2.1" |
| **Instructions** | How to play: "Arrow keys move, Space jumps" |
| **Credits** | "Music: Kevin MacLeod. Art: Me." |
| **Notes/Changelog** | "v2.1: Fixed level 3. Added boss." |
| **Tags** | "platformer", "space", "adventure", "pixel-art" |

---

## Community Feedback — Learn from Others!

### Types of Feedback

| Type | What It Means |
|------|---------------|
| **Love (❤️)** | Someone liked your project |
| **Favorite (★)** | Someone bookmarked it |
| **Comment (💬)** | Written feedback |
| **Remix (🔄)** | Someone made their own version |

### Responding to Comments

| Good Response | Avoid |
|---------------|-------|
| "Thanks! I'm glad you liked the boss fight!" | No response |
| "Great idea! I'll add that in v2.2." | Ignoring suggestions |
| "Thanks for catching that bug! Fixed in v1.3." | Getting defensive |

### Giving Good Feedback

| Good Comment | Why |
|--------------|-----|
| "Love the pixel art! The jump feels great. Maybe add a double-jump?" | Specific, positive, constructive |
| "The level design is clever. Level 3 was too hard though — maybe add a checkpoint?" | Balanced, specific |
| "Cool idea! The music fits perfectly." | Encouraging |

---

## Step-by-Step Thinking — Plan Before You Code!

### What Is Step-by-Step Thinking?

**Breaking a big problem into small steps** — like writing a recipe before cooking!

### The Process

1. **Understand the goal** — What should the project do?
2. **List the parts** — What sprites, scripts, variables needed?
3. **Order the steps** — What must happen first, second, third?
4. **Code one step at a time** — Test each part before next
5. **Test and fix** — Play, find bugs, improve

### Example: Platformer Game Plan

```
GOAL: Player jumps on platforms, collects coins, avoids enemies

PARTS:
- Player sprite (move, jump, animate)
- Platform sprites (solid, different sizes)
- Coin sprites (collectible, score +10)
- Enemy sprites (patrol, hurt player)
- Score variable, Lives variable
- Level backdrop

ORDER:
1. Player movement (left/right, jump)
2. Platform collision (land on top, fall through gaps)
3. Coin collection (touch → score +10, hide coin)
4. Enemy patrol (move back/forth)
5. Player-enemy collision (lose life, respawn)
6. Level complete (all coins → next level)
7. Game over (lives = 0 → game over screen)
```

!!! tip "📝 Plan on Paper First!"
    **Sketch your game** — draw sprites, map levels, list variables. **Planning saves hours of recoding!**

---

## Forever Loop — The Game Engine!

<div class="scratch">
forever
move (10) steps
end
</div>

### What Is Forever?

<div class="scratch">
forever
// These blocks run over and over
end
</div>

**Runs until stopped** — the heartbeat of your game!

### Forever Loop Patterns

| Pattern | Code | Use For |
|---------|------|---------|
| **Game Loop** | `forever { check controls, update physics, check collisions }` | Main game logic |
| **Animation** | `forever { next costume, wait 0.1 secs }` | Walking, flying |
| **Sensor Check** | `forever { if <touching enemy?> { lose life } }` | Constant monitoring |
| **Spawner** | `forever { wait 2 secs, create clone }` | Spawning enemies |

---

### Forever Loop + Wait = Smooth!

<div class="scratch">
forever
// Do something
wait (0.01) seconds // Critical!
end
</div>

**Without `wait`**, the loop runs **thousands of times per second** — can lag or freeze Scratch!

!!! mascot-warning "Forever Needs a Break"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Skip the `wait` inside a `forever` loop and it runs thousands of times a second, which can lag or freeze your whole project. Always tuck a tiny `wait (0.01) seconds` inside — small enough that players never notice, big enough to keep Scratch breathing.

---

## Positive X and Negative X — Left and Right!

### X Coordinate Review

| Direction | X Value | Meaning |
|-----------|---------|---------|
| **Right** | Positive (+) | `change x by 10` moves right |
| **Left** | Negative (-) | `change x by -10` moves left |
| **Center** | 0 | `go to x: 0` = middle |

### X Coordinate Shortcuts

| Position | X Value |
|----------|---------|
| **Far Right** | 240 |
| **Right of Center** | Positive (1 to 240) |
| **Center** | 0 |
| **Left of Center** | Negative (-1 to -240) |
| **Far Left** | -240 |

### X in Code

<div class="scratch">
when key [right arrow v] pressed
change x by (10) // Move RIGHT (positive)
</div>

<div class="scratch">
when key [left arrow v] pressed
change x by (-10) // Move LEFT (negative)
</div>

<div class="scratch">
if &lt;(x position) > (200)&gt; then
set x to (200) // Stop at right edge
end
</div>

<div class="scratch">
if &lt;(x position) &lt; (-200)&gt; then
set x to (-200) // Stop at left edge
end
</div>

!!! tip "➡️ Right = Positive, ⬅️ Left = Negative"
    **Remember:** Number line! Positive right, negative left. Just like math class!

---

## Summary

In this chapter, you learned:

- ✅ **Random numbers** — `pick random` for dice, spawns, chance
- ✅ **Variables** — Create, set, change, show/hide, scope (all/this sprite)
- ✅ **Custom blocks** — Make your own blocks with parameters, run without refresh
- ✅ **Pen extension** — Draw with code (pen down/up, color, size, stamp)
- ✅ **Video Sensing** — Camera motion detection games
- ✅ **Text to Speech** — Talking sprites, multiple voices/languages
- ✅ **Translate** — Instant translation + speech
- ✅ **micro:bit** — Hardware control (buttons, LEDs, sensors)
- ✅ **Extension management** — Add, remove, organize
- ✅ **Editor skills** — Drag/drop, duplicate, delete, comment, clean up
- ✅ **Play vs Start sound** — Timing differences
- ✅ **Change tempo** — Speed up/slow down sounds
- ✅ **Backpack** — Cross-project storage (🎒)
- ✅ **Project page** — Share with good instructions, credits, tags
- ✅ **Community feedback** — Give and receive constructive comments
- ✅ **Step-by-step thinking** — Plan before coding
- ✅ **Forever loop** — Game engine, always with wait!
- ✅ **Positive/Negative X** — Right/left movement

!!! mascot-celebration "You've Got a Whole Toolbox Now"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Randomness, variables that remember, custom blocks you invented yourself, five different extensions, and the editor skills to keep it all tidy — that's a professional Scratcher's toolbox, and it's yours now. Next up: putting it all to work on real interactive logic.

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Random Number** | Unpredictable value from a range (`pick random 1 to 10`) |
| **Variable** | Named container that holds a changeable value |
| **Custom Block** | User-created block (My Blocks category) |
| **Parameter** | Input value for a custom block |
| **Run Without Refresh** | Runs instantly in one frame (turbo mode) |
| **Extension** | Extra block category added via 🧩 button |
| **Pen Extension** | Drawing with code (trails, stamps, colors) |
| **Video Sensing** | Webcam-based motion detection |
| **Text to Speech** | Synthetic voice from text |
| **Translate** | Text translation between languages |
| **micro:bit** | Physical hardware controller |
| **Backpack** | Cloud storage for blocks/sprites across projects (🎒) |
| **Project Page** | Published project's web page |
| **Remix** | Copy of someone's project with your changes |
| **Step-by-Step Thinking** | Planning by breaking into ordered steps |
| **Forever Loop** | Repeats until stopped (game engine) |
| **Positive X** | Rightward direction (positive numbers) |
| **Negative X** | Leftward direction (negative numbers) |

---

## Try It Yourself! 🎯

**Challenge 1:** Create a **dice roller** — press space, sprite says random 1-6

**Challenge 2:** Make a **variable** called `high-score` that saves the highest score ever

**Challenge 3:** Create a **custom block** `draw-polygon (sides) (size)` using Pen extension

**Challenge 4:** Add **Video Sensing** and make a **mirror** — sprite copies your movements

**Challenge 4:** Use **Text to Speech** to make a **multilingual tour guide** (3 languages)

**Challenge 5:** Save your **perfect player movement script** to the **Backpack**

**Challenge 6:** **Plan a game** on paper using step-by-step thinking, then build v1.0

**Challenge 7:** **Share a project** with clear instructions, credits, and tags

---

## What's Next?

In **Chapter 6**, you'll dive into **Broadcasting, Conditionals, and Sensing** — the core of interactive games! You'll master sprite communication, complex decision-making, and detecting the world around your sprites.

[**→ Next Chapter: Broadcasting, Conditionals, and Sensing**](../06-broadcasting-conditionals-sensing/index.md)