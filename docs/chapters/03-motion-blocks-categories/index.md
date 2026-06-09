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

## Block Shapes — The Secret Language of Scratch

In Chapters 1 and 2, you saw that blocks come in **different shapes**. These shapes aren't just for looks — they tell you **exactly how the block works** and **where it can go** in a script.

Think of block shapes like **puzzle pieces** — each shape has a specific job and only fits in certain places.

---

## The Five Block Shapes

### 1. Hat Blocks 🎩 — The Script Starters

**Shape:** Rounded top, flat bottom (like a hat!)

**Job:** **Start a script** when something happens. Every script MUST begin with a hat block.

**Where they go:** ONLY at the very top of a script. Nothing can go above them!

**Examples:**
- `when green flag clicked` 🟢
- `when this sprite clicked` 👆
- `when [space] key pressed` ⌨️
- `when I receive [message]` 📡

!!! tip "🎩 One Hat Per Script"
    Every separate script stack needs its **own hat block**. You can't have two hat blocks in the same stack!

---

### 2. Stack Blocks 🧱 — The Action Doers

**Shape:** Puzzle-piece notches on top AND bottom (like a brick!)

**Job:** **Do something** — move, turn, say, wait, change a variable, play a sound, etc.

**Where they go:** In the **middle** of a script, snapped between other stack blocks or under a hat block.

**Examples:**
- `move 10 steps` 🔵
- `say Hello!` 🟣
- `play sound pop` 🩷
- `wait 1 seconds` 🟠
- `change x by 10` 🔵
- `set score to 0` 🔴

!!! note "🧱 Stack Blocks Chain Together"
    Stack blocks snap together **vertically** — the bottom notch of one fits into the top notch of the next. They run **in order, top to bottom**.

---

### 3. Reporter Blocks 📊 — The Value Givers

**Shape:** Rounded rectangle (like a pill!)

**Job:** **Give a value** — a number or text — that other blocks can use.

**Where they go:** Inside the **white holes** (slots) of other blocks. They **don't stand alone**!

**Examples:**
- `x position` 🔵 — gives current X coordinate
- `y position` 🔵 — gives current Y coordinate
- `direction` 🔵 — gives current facing angle
- `pick random 1 to 10` 🟢 — gives random number
- `timer` 🟡 — gives seconds since green flag
- `answer` 🔷 — gives what player typed

!!! info "📊 Reporters Fit Inside Slots"
    See those **white oval/rectangular holes** in other blocks? That's where reporter blocks go!
    
    ```
    go to x: (x position) y: (y position)
                    ↑           ↑
              reporter      reporter
    ```

---

### 4. Boolean Blocks ⬡ — The True/False Answerers

**Shape:** Hexagon (six-sided, like a nut!)

**Job:** **Answer a yes/no question** — gives either **true** or **false**.

**Where they go:** Inside **hexagonal (pointy) slots** in other blocks. Usually in `if`, `repeat until`, or `wait until` blocks.

**Examples:**
- `touching [mouse-pointer v]?` 🔷 — true if touching mouse
- `key [space] pressed?` 🔷 — true if space held down
- `< 5 > 3` 🟢 — true (5 is greater than 3)
- `= 10 10` 🟢 — true (10 equals 10)
- `< [score] > 100` 🔴 — true if score > 100

!!! note "⬡ Boolean = Yes/No"
    Think of Boolean blocks as **questions** that Scratch answers with **YES (true)** or **NO (false)**.
    
    ```
    if <touching [edge v]?> then
        bounce
    end
         ↑
    Boolean block fits here
    ```

---

### 5. Cap Blocks 🛑 — The Script Stoppers

**Shape:** Flat top, rounded bottom (like a cap on a bottle!)

**Job:** **End a script** — stop this script, or stop ALL scripts.

**Where they go:** ONLY at the **very bottom** of a script stack. Nothing can go below them!

**Examples:**
- `stop [this script v]` 🟠 — stops just this stack
- `stop [all v]` 🟠 — stops EVERYTHING (like hitting the stop sign)
- `stop [other scripts in sprite v]` 🟠 — stops other stacks in same sprite

!!! warning "🛑 Cap = The End"
    Nothing runs after a cap block. It's like a period at the end of a sentence — the script is DONE.

---

## Block Shapes Quick Reference

| Shape | Name | Starts Script? | Does Action? | Gives Value? | True/False? | Ends Script? | Where It Goes |
|-------|------|----------------|--------------|--------------|-------------|--------------|---------------|
| 🎩 | **Hat** | ✅ YES | No | No | No | No | **Top only** |
| 🧱 | **Stack** | No | ✅ YES | No | No | No | **Middle** |
| 📊 | **Reporter** | No | No | ✅ YES | No | No | **Inside white slots** |
| ⬡ | **Boolean** | No | No | No | ✅ YES/NO | No | **Inside hexagonal slots** |
| 🛑 | **Cap** | No | No | No | No | ✅ YES | **Bottom only** |

---

#### Diagram: Block Shape Flow

<iframe src="../../sims/block-shape-flow/main.html" width="100%" height="450px" scrolling="no"></iframe>

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

!!! tip "💬 Comments Are Your Friends!"
    **Right-click any block → "Add comment"** to leave notes for yourself or others. Great for remembering what a tricky section does!

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

!!! tip "🎯 Test Your Center!"
    After setting the center, go to Code tab and add:
    ```
    when green flag clicked
    forever
        turn 15 degrees
        wait 0.1 secs
    end
    ```
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

!!! example "🎵 Background Music + Sound Effects"
    ```
    when green flag clicked
    start sound [background-music v]    // Music plays continuously
    forever
        if <key [space] pressed?> then
            start sound [jump v]        // Jump sound overlaps music
            change y by 50
            wait 0.3 secs
            change y by -50
        end
    end
    ```

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
    ```
    when green flag clicked
    erase all
    pen down
    repeat 4
        move 100 steps
        turn 90 degrees
    end
    pen up
    ```

!!! tip "🌈 Rainbow Pen Trick"
    ```
    when green flag clicked
    erase all
    pen down
    set pen size to 10
    repeat 360
        move 5 steps
        turn 1 degrees
        change pen color by 1
    end
    pen up
    ```

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
    ```
    when green flag clicked
    turn video on
    set video transparency to 50
    forever
        if <video [motion] on [this sprite] > 30> then
            change color effect by 10
            play sound [pop v]
        end
    end
    ```

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
    ```
    when green flag clicked
    set voice to [tenor v]
    set language to [English v]
    speak [Welcome to my game!] and wait
    speak [Press space to jump!]
    ```

---

### Translate — Speak Many Languages!

**Translate** converts text between languages instantly.

#### Translate Blocks

| Block | What It Does |
|-------|--------------|
| `translate [Hello] to [Spanish v]` | Reporter: gives translated text |
| `language [Spanish v]` | Reporter: language code |

!!! example "🌍 Multilingual Greeting"
    ```
    when green flag clicked
    set language to [Spanish v]
    speak (translate [Hello, friend!] to [Spanish v]) and wait
    ```

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