---
title: Motion Blocks and Block Categories
description: Explores motion blocks in depth, block categories, shapes, colors, and the blocks palette organization for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 14:00:00
version: 0.08
---

# Motion Blocks and Block Categories

## Summary

Explores motion blocks in depth, block categories, shapes, colors, and the blocks palette organization. This chapter covers 10 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 10 concepts from the learning graph:

1. Hat Block Shape
2. Stack Block Shape
3. Reporter Block Shape
4. Boolean Block Shape
5. Cap Block Shape
6. Add Extension
7. Script Area
8. Costume Center
9. Sound Blocks
10. Backpack

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)

---

!!! mascot-welcome "Cracking the Code of Shapes"
    ![Scratch the Cat waving hello](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ever notice how a jigsaw piece only fits one way? Scratch blocks play the same trick, and once you can read a block's shape at a glance, you'll stop wasting time dragging the wrong piece into the wrong slot. By the end of this chapter you'll be adding sound, superpowers from extensions, and even packing your best scripts into a backpack to reuse later. Let's build something purr-fect!

## Block Shapes — The Secret Language of Scratch

In Chapters 1 and 2, you saw that blocks come in **different shapes**. These shapes aren't just for looks — they tell you **exactly how the block works** and **where it can go** in a script.

Think of block shapes like **puzzle pieces** — each shape has a specific job and only fits in certain places.

---

## The Five Block Shapes

### 1. Hat Blocks 🎩 — The Script Starters

<div class="scratch">
when green flag clicked
</div>

**Shape:** Rounded top, flat bottom (like a hat!)

**Job:** **Start a script** when something happens. Every script MUST begin with a hat block.

**Where they go:** ONLY at the very top of a script. Nothing can go above them!

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
when green flag clicked
</div>
</div>

<div class="card" markdown>
<div class="scratch">
when this sprite clicked
</div>
</div>

<div class="card" markdown>
<div class="scratch">
when [space v] key pressed
</div>
</div>

<div class="card" markdown>
<div class="scratch">
when I receive [message v]
</div>
</div>

</div>

!!! tip "🎩 One Hat Per Script"
    Every separate script stack needs its **own hat block**. You can't have two hat blocks in the same stack!

---

### 2. Stack Blocks 🧱 — The Action Doers

<div class="scratch">
move (10) steps
</div>

**Shape:** Puzzle-piece notches on top AND bottom (like a brick!)

**Job:** **Do something** — move, turn, say, wait, change a variable, play a sound, etc.

**Where they go:** In the **middle** of a script, snapped between other stack blocks or under a hat block.

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
move (10) steps
</div>
</div>

<div class="card" markdown>
<div class="scratch">
say [Hello!]
</div>
</div>

<div class="card" markdown>
<div class="scratch">
play sound [pop v]
</div>
</div>

<div class="card" markdown>
<div class="scratch">
wait (1) seconds
</div>
</div>

<div class="card" markdown>
<div class="scratch">
change x by (10)
</div>
</div>

<div class="card" markdown>
<div class="scratch">
set [score v] to (0)
</div>
</div>

</div>

!!! note "🧱 Stack Blocks Chain Together"
    Stack blocks snap together **vertically** — the bottom notch of one fits into the top notch of the next. They run **in order, top to bottom**.

---

### 3. Reporter Blocks 📊 — The Value Givers

<div class="scratch">
x position
</div>

**Shape:** Rounded rectangle (like a pill!)

**Job:** **Give a value** — a number or text — that other blocks can use.

**Where they go:** Inside the **white holes** (slots) of other blocks. They **don't stand alone**!

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
x position
</div>

Gives the current X coordinate.
</div>

<div class="card" markdown>
<div class="scratch">
y position
</div>

Gives the current Y coordinate.
</div>

<div class="card" markdown>
<div class="scratch">
direction
</div>

Gives the current facing angle.
</div>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (10)
</div>

Gives a random number.
</div>

<div class="card" markdown>
<div class="scratch">
timer
</div>

Gives seconds since the green flag was clicked.
</div>

<div class="card" markdown>
<div class="scratch">
answer
</div>

Gives what the player typed.
</div>

</div>

!!! info "📊 Reporters Fit Inside Slots"
    See those **white oval/rectangular holes** in other blocks? That's where reporter blocks go!

    <div class="scratch">
    go to x: (x position) y: (y position)
    </div>

    Both `(x position)` and `(y position)` are reporters plugged straight into the white number slots of `go to x: _ y: _`.

---

### 4. Boolean Blocks ⬡ — The True/False Answerers

<div class="scratch">
touching [mouse-pointer v]?
</div>

**Shape:** Hexagon (six-sided, like a nut!)

**Job:** **Answer a yes/no question** — gives either **true** or **false**.

**Where they go:** Inside **hexagonal (pointy) slots** in other blocks. Usually in `if`, `repeat until`, or `wait until` blocks.

**Examples:**

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
touching [mouse-pointer v]?
</div>

True if touching the mouse-pointer.
</div>

<div class="card" markdown>
<div class="scratch">
key [space v] pressed?
</div>

True if space is held down.
</div>

<div class="card" markdown>
<div class="scratch">
(5) > (3)
</div>

True — 5 is greater than 3.
</div>

<div class="card" markdown>
<div class="scratch">
(10) = (10)
</div>

True — 10 equals 10.
</div>

<div class="card" markdown>
<div class="scratch">
(score) > (100)
</div>

True if score is greater than 100.
</div>

</div>

!!! note "⬡ Boolean = Yes/No"
    Think of Boolean blocks as **questions** that Scratch answers with **YES (true)** or **NO (false)**.

    <div class="scratch">
    if &lt;touching [edge v]?&gt; then
    turn right (180) degrees
    end
    </div>

    The hexagonal `<touching [edge v]?>` block fits only into the hexagonal notch carved into the `if` block.

---

### 5. Cap Blocks 🛑 — The Script Stoppers

<div class="scratch">
stop [all v]
</div>

**Shape:** Flat top, rounded bottom (like a cap on a bottle!)

**Job:** **End a script** — stop this script, or stop ALL scripts.

**Where they go:** ONLY at the **very bottom** of a script stack. Nothing can go below them!

**Examples:**

<div class="scratch">
stop [this script v]
</div>

Stops just this stack.

<div class="scratch">
stop [all v]
</div>

Stops EVERYTHING — like hitting the stop sign.

<div class="scratch">
stop [other scripts in sprite v]
</div>

Stops other stacks in the same sprite.

!!! mascot-warning "Nothing Runs After The End"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A common trap is dragging more blocks under a cap block and expecting them to run — they never will, because the script already stopped there. If a block seems to do nothing, check whether it accidentally landed below a `stop` block and drag it back above instead.

---

## Block Shapes Quick Reference

| Shape | Name | Starts Script? | Does Action? | Gives Value? | True/False? | Ends Script? | Where It Goes |
|-------|------|----------------|--------------|--------------|-------------|--------------|---------------|
| 🎩 | **Hat** | ✅ YES | No | No | No | No | **Top only** |
| 🧱 | **Stack** | No | ✅ YES | No | No | No | **Middle** |
| 📊 | **Reporter** | No | No | ✅ YES | No | No | **Inside white slots** |
| ⬡ | **Boolean** | No | No | No | ✅ YES/NO | No | **Inside hexagonal slots** |
| 🛑 | **Cap** | No | No | No | No | ✅ YES | **Bottom only** |

!!! mascot-thinking "One Shape, One Job"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Look at that table again: every shape appears in exactly one "Where It Goes" column. That's not an accident — Scratch designed the shapes so a script that snaps together is automatically a script that makes sense, the same way you'd never wedge a puzzle-piece sky into a puzzle-piece ocean.

---

#### Diagram: Block Shape Flow

<iframe src="../../sims/block-shape-flow/main.html" width="100%" height="485px" scrolling="no"></iframe>

<details markdown="1">
<summary>Block Shape Flow</summary>
Type: diagram
**sim-id:** block-shape-flow<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show how block shapes fit together in a complete script

Components to show:

- A complete script with all 5 shapes in correct positions:
  1. Hat block at top: `when green flag clicked`
  2. Stack blocks in middle: `move 10 steps`, `turn 15 degrees`, `wait 1 secs`
  3. Reporter blocks inside slots: `go to x: (x position) y: (y position)`
  4. Boolean block inside if: `if <touching [edge v]?> then`
  5. Cap block at bottom: `stop [this script v]`
- Arrows showing valid connections:
  - Hat → Stack ✅
  - Stack → Stack ✅
  - Reporter → White slot ✅
  - Boolean → Hex slot ✅
  - Stack → Cap ✅
- Red X showing invalid connections:
  - Stack → Hat ❌
  - Reporter standing alone ❌
  - Cap in middle ❌

Style: Annotated script with color-coded connection lines (green=valid, red=invalid)

Labels:

- "Hat starts the script"
- "Stacks do actions in order"
- "Reporters fill white slots"
- "Booleans fill hex slots"
- "Cap ends the script"

Color scheme: Match actual Scratch block colors
</details>

---

## The Script Area — Your Workbench

The **script area** is the big gray space in the middle where you build scripts.

### Script Area Features

| Feature | What It Does |
|---------|--------------|
| **Gray background** | Your canvas — drag blocks here |
| **Grid lines** | Help align blocks neatly |
| **Multiple scripts** | You can have many separate stacks |
| **Right-click menu** | Duplicate, delete, add comment, clean up |
| **Zoom controls** | Bottom-right: + / - / 100% |

### Useful Right-Click Tricks

| Action | How To |
|--------|--------|
| **Duplicate stack** | Right-click top block → "Duplicate" |
| **Delete stack** | Right-click top block → "Delete" |
| **Add comment** | Right-click block → "Add comment" (yellow sticky note!) |
| **Clean up** | Right-click empty space → "Clean up" (aligns blocks neatly) |
| **Block help** | Right-click block → "Help" (shows what it does!) |

!!! mascot-tip "Comments Are Your Friends!"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Right-click any block and choose **"Add comment"** to pin a little yellow sticky note right next to it. Future-you (or a friend reading your project) will thank you for explaining what a tricky section does.

---

## Costume Center — The Secret Pivot Point

Every costume has a **center point** (crosshair) that determines:

1. **Where the sprite rotates around**
2. **Where the costume attaches to the sprite's position**
3. **What "touching" checks use as the contact point**

### Setting the Costume Center

1. Go to **Costumes tab**
2. Select a costume
3. Click the **crosshair tool** (looks like a + target)
4. Click where you want the center

### Center Point Tips

| Sprite Type | Best Center Location |
|-------------|---------------------|
| **Walking character** | **Feet** (bottom middle) — so feet stay on ground |
| **Spinning object** | **Exact geometric center** — spins smoothly |
| **Car/vehicle** | **Bottom center of wheels** — drives on ground |
| **Projectile (bullet)** | **Tip/front** — hits target from front |

!!! mascot-encourage "Pivot Points Take Practice"
    ![Scratch the Cat giving an encouraging thumbs-up](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If picking a costume's pivot point still feels like guesswork, that's completely normal — even experienced creators nudge the crosshair a few times before a sprite stops wobbling. Set it once, try the spin test below, and adjust; you'll feel the difference the moment it clicks.

!!! tip "🎯 Test Your Center!"
    After setting the center, go to Code tab and add:

    <div class="scratch">
    when green flag clicked
    forever
    turn (15) degrees
    wait (0.1) secs
    end
    </div>

    Watch how it spins — if it wobbles, adjust the center!

---

## Sound Blocks — Making Noise!

The **Sound category** (🩷 pink) lets you add audio to your projects.

### Key Sound Blocks

| Block | What It Does | When to Use |
|-------|--------------|-------------|
| `play sound [pop v] until done` | Plays sound, **waits** for it to finish | Dialogue, effects that must sync |
| `start sound [pop v]` | Starts sound, **continues immediately** | Background music, overlapping effects |
| `stop all sounds` | Stops everything playing | Scene changes, game over |
| `change pitch effect by (10)` | Higher/lower pitch | Chipmunk voice, slow-mo |
| `change pan left/right by (10)` | Move sound left/right | 3D audio, stereo |
| `clear sound effects` | Reset pitch/pan | Cleanup |
| `set volume to (100%)` | Master volume | Menu settings |
| `change volume by (-10)` | Adjust volume | Fade in/out |

### Play Until Done vs. Start Sound

| Block | Behavior | Use For |
|-------|----------|---------|
| `play sound [pop] until done` | **Waits** for sound to finish before next block | Dialogue, sound effects that must complete |
| `start sound [pop]` | **Continues immediately** — sound plays in background | Background music, rapid-fire effects |

!!! mascot-tip "Waiting or Not?"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Stuck choosing a sound block? If the next block needs to wait for the sound to finish, reach for `play sound until done` — otherwise, use `start sound` and let the action continue while it plays.

!!! example "🎵 Background Music + Sound Effects"
    <div class="scratch">
    when green flag clicked
    start sound [background-music v] // Music plays continuously
    forever
    if &lt;key [space v] pressed?&gt; then
    start sound [jump v] // Jump sound overlaps music
    change y by (50)
    wait (0.3) secs
    change y by (-50)
    end
    end
    </div>

---

### Recording Your Own Sounds!

1. Click **Sounds tab**
2. Click **Choose a Sound** 🎵
3. Click **Record** (🔴 microphone icon)
4. **Allow microphone** permission
4. Record your sound (clap, voice, instrument)
5. Click **Stop** ⏹️
6. Trim if needed, then **Save**

!!! tip "🎤 Sound Ideas"

    - Record your own **jump sound** (say "boing!")
    - Record **character voices** for story games
    - Record **real-world sounds** (door creak, coin chime)

---

## Adding Extensions — Superpowers for Scratch!

**Extensions** add **extra blocks** to Scratch — like adding new tools to your toolbox!

### How to Add an Extension

1. Click the **Extensions button** (🧩 puzzle piece) at bottom-left of blocks palette
2. Browse or search for an extension
3. Click **Add** — new category appears in palette!

---

### Built-In Extensions

| Extension | Category Color | What It Adds |
|-----------|----------------|--------------|
| **Pen** | 🟢 Green | Draw lines, shapes, art with code |
| **Video Sensing** | 🟣 Purple | Use camera for motion detection |
| **Text to Speech** | 🩷 Pink | Make sprites talk with synthetic voices |
| **Translate** | 🔵 Blue | Translate text to other languages |
| **Makey Makey** | 🟠 Orange | Physical controller input |
| **micro:bit** | 🔵 Blue | BBC micro:bit hardware control |
| **LEGO® Education** | 🟡 Yellow | LEGO SPIKE Prime, WeDo 2.0 robots |
| **Go Direct** | 🟢 Green | Vernier science sensors |

---

### Pen Extension — Draw With Code!

The **Pen** is one of the most fun extensions — it turns your sprite into a **drawing tool**!

#### Pen Blocks

| Block | What It Does |
|-------|--------------|
| `pen down` | Start drawing (leaves trail) |
| `pen up` | Stop drawing |
| `erase all` | Clear all pen marks |
| `set pen color to [color]` | Change drawing color |
| `change pen color by (10)` | Cycle through colors |
| `set pen size to (5)` | Thickness of line |
| `change pen size by (5)` | Thicker/thinner |
| `stamp` | Leave a copy of costume as drawing |

!!! example "🎨 Draw a Square"
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

!!! tip "🌈 Rainbow Pen Trick"
    <div class="scratch">
    when green flag clicked
    erase all
    pen down
    set pen size to (10)
    repeat (360)
    move (5) steps
    turn right (1) degrees
    change pen [color v] by (1)
    end
    pen up
    </div>

---

### Video Sensing — Camera Magic!

**Video Sensing** uses your **webcam** to detect motion — like a motion sensor!

#### Video Sensing Blocks

| Block | What It Does |
|-------|--------------|
| `turn video [on v]` | Start/stop camera |
| `video [on v] on [stage v]` | Show/hide video on stage |
| `video transparency (50)` | How see-through video is |
| `video [motion v] on [this sprite v]` | Amount of motion detected (0-100) |
| `when video [motion] > (50)` | Hat block: triggers when motion detected |

!!! example "📷 Motion-Controlled Game"
    <div class="scratch">
    when green flag clicked
    turn video [on v]
    set video transparency to (50)
    forever
    if &lt;(video [motion v] on [this sprite v]) &gt; (30)&gt; then
    change [color v] effect by (10)
    play sound [pop v]
    end
    end
    </div>

---

### Text to Speech — Talking Sprites!

**Text to Speech** makes sprites **talk with synthetic voices** — no recording needed!

#### Text to Speech Blocks

| Block | What It Does |
|-------|--------------|
| `speak [Hello!]` | Speaks text immediately |
| `speak [Hello!] and wait` | Speaks, waits for finish |
| `set voice to [alto v]` | Choose voice (alto, tenor, soprano, etc.) |
| `set language to [English v]` | Language (English, Spanish, French, etc.) |

!!! example "🗣️ Talking Character"
    <div class="scratch">
    when green flag clicked
    set voice to [tenor v]
    set language to [English v]
    speak [Welcome to my game!] and wait
    speak [Press space to jump!]
    </div>

---

### Translate — Speak Many Languages!

**Translate** converts text between languages instantly.

#### Translate Blocks

| Block | What It Does |
|-------|--------------|
| `translate [Hello] to [Spanish v]` | Reporter: gives translated text |
| `language [Spanish v]` | Reporter: language code |

!!! example "🌍 Multilingual Greeting"
    <div class="scratch">
    when green flag clicked
    set language to [Spanish v]
    speak (translate [Hello, friend!] to [Spanish v]) and wait
    </div>

---

## The Backpack — Your Portable Toolbox!

The **Backpack** (🎒 icon at bottom of sidebar) lets you **save blocks, sprites, costumes, and sounds** to use in **OTHER projects**!

### What You Can Store

| Item | How to Store |
|------|--------------|
| **Scripts/blocks** | Drag stack to backpack |
| **Sprites** | Drag sprite from sprite pane |
| **Costumes** | Drag costume from costumes list |
| **Sounds** | Drag sound from sounds list |

!!! mascot-thinking "Projects Aren't Sealed Boxes"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Up to now, each project probably felt like its own separate world. The backpack quietly breaks that rule: it's storage that lives outside every project, so a script, sprite, or sound can travel from one world to the next without you rebuilding it from scratch.

### How to Use the Backpack

| Action | How To |
|--------|--------|
| **Open backpack** | Click 🎒 icon (bottom-left sidebar) |
| **Save to backpack** | Drag item TO backpack |
| **Use from backpack** | Drag item FROM backpack to project |
| **Delete from backpack** | Right-click in backpack → Delete |

!!! tip "🎒 Backpack = Reuse Superpower!"
    Build a **perfect jumping script** once → save to backpack → use in ALL your platformer games!
    
    Build a **cool enemy AI** → backpack → drop into next game!

---

## Summary

In this chapter, you learned:

- ✅ **5 block shapes** — Hat (start), Stack (do), Reporter (give value), Boolean (true/false), Cap (stop)
- ✅ **Where each shape goes** — Top, middle, inside slots, bottom
- ✅ **Script area features** — Right-click tricks, comments, clean up
- ✅ **Costume center** — The pivot point for rotation and touching
- ✅ **Sound blocks** — Play/start sound, pitch, volume, recording
- ✅ **Extensions** — Pen, Video Sensing, Text to Speech, Translate, and more
- ✅ **Pen extension** — Draw with code (pen down/up, color, size, stamp)
- ✅ **Video Sensing** — Camera motion detection for interactive games
- ✅ **Text to Speech** — Synthetic voices in many languages
- ✅ **Translate** — Instant translation between languages
- ✅ **Backpack** — Save and reuse blocks/sprites across projects

!!! mascot-celebration "You Can Read Scratch's Whole Grammar Now"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just learned to recognize all 5 block shapes on sight, tame the script area, aim a costume's pivot point, add sound and superpowers with extensions, and stash your best work in a backpack. That's the grammar of Scratch — every chapter from here just adds new vocabulary.

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Hat Block** | Starts a script (rounded top) |
| **Stack Block** | Does an action, snaps in middle |
| **Reporter Block** | Gives a value, fits in white slots |
| **Boolean Block** | Answers true/false, fits in hex slots |
| **Cap Block** | Ends a script (rounded bottom) |
| **Script Area** | Gray workspace where you build scripts |
| **Costume Center** | Pivot point for rotation and touching |
| **Extension** | Extra blocks added via 🧩 button |
| **Pen Extension** | Drawing with code (trails, stamping) |
| **Video Sensing** | Camera-based motion detection |
| **Text to Speech** | Synthetic voice from text |
| **Translate** | Convert text between languages |
| **Backpack** | Cross-project storage (🎒 icon) |

---

## Try It Yourself! 🎯

**Challenge 1:** Build a script using **all 5 block shapes** in correct order (Hat → Stacks → Reporters/Booleans → Cap)

**Challenge 2:** Set the **costume center** to the feet of a walking character, then make it spin — does it wobble?

**Challenge 3:** Add the **Pen extension** and draw a **spirograph** (hint: `repeat 360`, move a little, turn 1 degree, change color)

**Challenge 4:** Record a **custom jump sound** and use `start sound` in a platformer

**Challenge 5:** Add **Text to Speech** and make a sprite introduce itself in **3 different voices**

**Challenge 6:** Open the **Backpack**, save your favorite script, then create a NEW project and drag it from the backpack

---

## What's Next?

In **Chapter 4**, you'll dive into **Events, Sequences, and First Scripts**. You'll learn how to chain events together, build your first complete interactive project, and understand the flow of a Scratch program from start to finish!

[**→ Next Chapter: Events, Sequences, and First Scripts**](../04-events-sequences-first-scripts/index.md)