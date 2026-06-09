---
title: Variables, Lists, and Data Management
description: Covers variables for game state, lists for collections, and variable scope concepts for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 22:00:00
version: 0.08
---

# Variables, Lists, and Data Management

## Summary

Covers variables for game state, lists for collections, and variable scope concepts. This chapter covers 25 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Greater Than Operator
2. Equal Operator
3. Pick Random
4. Counted Repetition
5. Set Variable
6. Show Variable
7. Hide Variable
8. Variable Scope
9. List Creation
10. Block Parameters
11. Abstraction
12. Geometric Patterns
13. Pen Down
14. Pen Up
15. Pen Color
16. Pen Size
17. Clear Graphics
18. Erase All
19. Motion Detection
20. Talking Sprites
21. Accessibility Features
22. Multilingual Projects
23. Snap Together
24. Remix Exploration
25. Project Tags

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)
- [2. Sprites, Stage, and the Coordinate System](../02-sprites-stage-coordinates/index.md)
- [3. Motion Blocks and Block Categories](../03-motion-blocks-categories/index.md)
- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)
- [5. Sounds, Extensions, and Sharing Projects](../05-sounds-extensions-sharing/index.md)

---

## Comparison Operators — Making Number Decisions!

### Greater Than Operator (>)

```
< (10) > (5) >
```

**True if left number is BIGGER than right number.**

| Example | Result |
|---------|--------|
| `10 > 5` | True ✅ |
| `5 > 10` | False ❌ |
| `10 > 10` | False ❌ (not greater, equal) |

**Use for:** High score checks, boundary limits, "is big enough?"

---

### Equal Operator (=)

```
< (10) = (10) >
```

**True if both numbers are EXACTLY the same.**

| Example | Result |
|---------|--------|
| `10 = 10` | True ✅ |
| `10 = 5` | False ❌ |
| `0 = 0` | True ✅ |

**Use for:** Exact matches, "did we reach exactly 100?", "is timer 0?"

---

### All Three Comparison Operators

| Block | Symbol | True When... | Memory Trick |
|-------|--------|--------------|--------------|
| `< >` | < | Left SMALLER than right | "Less than" points to smaller |
| `< >` | > | Left BIGGER than right | "Greater than" points to bigger |
| `< = >` | = | Left EQUALS right | Two lines = same |

---

## Random Numbers — Pick Random!

### Pick Random Block (Operators → Green)

```
pick random (1) to (10)
```

**Gives a random whole number** between the two numbers (including both!).

### Random Number Uses

| Code | Range | Use For |
|------|-------|---------|
| `pick random 1 to 6` | 1–6 | Dice roll |
| `pick random 1 to 100` | 1–100 | Percent chance (1% each) |
| `pick random -10 to 10` | -10 to 10 | Random direction |
| `pick random 0 to 360` | 0–360 | Random angle |

---

### Random in Action

#### Random Spawn Position

```
when I start as a clone
go to x: (pick random -200 to 200) y: (pick random -150 to 150)
```

#### Random Chance (20% = 1 in 5)

```
if < (pick random 1 to 5) = 1 > then
    // 20% chance!
    broadcast [rare-item v]
end
```

#### Random Wait

```
forever
    wait (pick random 1 to 3) secs
    create clone of [myself v]
end
```

---

## Counted Repetition — Exact Loops!

### Repeat Block (Control → Orange)

```
repeat (10)
    move 10 steps
    turn 15 degrees
end
```

**Runs exactly N times** — perfect when you know how many!

---

### Counted Repeat Examples

#### Draw a Polygon

```
repeat (5)        // Pentagon
    move 100 steps
    turn 72 degrees    // 360/5 = 72
end
```

#### Spawn Exact Number

```
repeat (10)
    create clone of [myself v]
    wait 0.5 secs
end
```

#### Countdown

```
set [countdown v] to (10)
repeat (10)
    say (countdown) for 1 secs
    change [countdown v] by (-1)
end
```

---

## Variable Basics — Your Data Boxes!

### What Is a Variable?

A **variable** is a **named box** that holds **one value** that can **change**.

```
set [score v] to (0)    // Put 0 in the "score" box
change [score v] by (10)  // Add 10 to the box
```

### Variable Blocks (Variables → Red)

| Block | What It Does |
|-------|--------------|
| `set [name v] to (value)` | Put exact value in box |
| `change [name v] by (amount)` | Add/subtract from box |
| `show variable [name]` | Display on stage |
| `hide variable [name]` | Remove from stage |
| `variable` (reporter) | Get current value |

---

### Creating Variables

1. Click **Variables** (🔴 Red)
2. Click **Make a Variable**
3. Name it: `score`, `lives`, `timer`, `level`, `high-score`
4. Choose scope:
   - **For all sprites** = shared (one box for everyone)
   - **For this sprite only** = private (each sprite has own)
3. Click OK!

---

### Variable Scope — Who Can See It?

| Scope | Who Sees It | Use For |
|-------|-------------|---------|
| **For all sprites** | Everyone shares ONE box | Score, timer, high score, level |
| **For this sprite only** | Each sprite has own box | Player health, enemy speed, sprite state |

---

### Variable Examples

#### Score System

```
when green flag clicked
set [score v] to (0)
show variable [score v]

when I receive [coin-collected v]
change [score v] by (10)
```

#### Lives System

```
when green flag clicked
set [lives v] to (3)
show variable [lives v]

when I receive [player-hit v]
change [lives v] by (-1)
if < (lives) = 0 > then
    broadcast [game-over v]
end
```

#### Timer

```
when green flag clicked
set [timer v] to (0)
show variable [timer v]
forever
    wait (1) secs
    change [timer v] by (1)
end
```

---

## Show/Hide Variables — Control the Display!

### Show Variable

```
show variable [score v]
```

**Displays the variable** on the stage (top-left by default).

### Hide Variable

```
hide variable [score v]
```

**Removes from stage** — but value still exists!

---

### When to Show/Hide

| Situation | Action |
|-----------|--------|
| Game starts | `show variable [score]`, `show variable [lives]` |
| Menu screen | `hide variable [score]`, `show variable [high-score]` |
| Game over | `hide variable [lives]`, `show variable [final-score]` |
| Pause menu | `hide variable [timer]` |

!!! tip "👁️ Show What Matters!"
    Only show variables the player **needs to see right now**. Too many = clutter!

---

## Lists — Collections of Values!

### What Is a List?

A **list** is like a variable, but holds **MULTIPLE values** in order — like a shopping list!

```
List: inventory
[0] "sword"
[1] "shield"
[2] "potion"
[3] "key"
```

---

### Creating a List

1. Click **Variables** (🔴 Red)
2. Click **Make a List**
3. Name it: `inventory`, `high-scores`, `level-codes`, `player-names`
4. Choose scope: **For all sprites** or **For this sprite only**
5. Click OK!

---

### List Blocks (Variables → Dark Red)

| Block | What It Does |
|-------|--------------|
| `add [thing v] to [list v]` | Append to end |
| `delete (1) of [list v]` | Remove item at position |
| `insert [thing v] at (1) of [list v]` | Insert at position |
| `replace item (1) of [list v] with [thing v]` | Change existing |
| `item (1) of [list v]` | Reporter: get value at position |
| `length of [list v]` | Reporter: how many items |
| `list contains [thing v]?` | Boolean: is it in list? |
| `show list [name]` | Display on stage |
| `hide list [name]` | Hide from stage |
| `delete all of [list v]` | Clear everything |

---

### List Examples

#### Inventory System

```
when green flag clicked
delete all of [inventory v]
add [sword] to [inventory v]
add [shield] to [inventory v]
show list [inventory v]

when I receive [found-potion v]
add [potion] to [inventory v]
```

#### High Score List

```
when green flag clicked
delete all of [high-scores v]
repeat 5
    add (0) to [high-scores v]
end

when I receive [new-score v]
if < (score) > (item (1) of [high-scores v]) > then
    insert (score) at (1) of [high-scores v]
    delete (6) of [high-scores v]  // Keep top 5
end
```

---

## Block Parameters — Custom Block Inputs!

### What Are Parameters?

**Parameters** are **inputs** for your custom blocks — like function arguments!

```
define jump (height)
change y by (height)
wait 0.2 secs
change y by (height * -1)
```

**Use it:** `jump (100)` → jumps high! `jump (20)` → small hop!

---

### Adding Parameters

1. **Make a Block** in My Blocks (🩷 Pink)
2. Click **Options** (gear icon)
3. Click **Add number input** or **Add string input**
4. Name it: `height`, `speed`, `name`, `color`
6. Click OK — parameter appears in `define` hat!

---

### Parameter Types

| Type | Accepts | Example Use |
|------|---------|-------------|
| **Number input** | Numbers | `jump (height)`, `move (steps)` |
| **String input** | Text | `say (message)`, `set name to (name)` |
| **Boolean input** | True/false | `if (condition) then` |

---

### Parameter Examples

#### Jump with Height

```
define jump (height)
change y by (height)
wait 0.2 secs
change y by (height * -1)
```

**Use:** `jump (100)` = high jump, `jump (20)` = small hop

#### Draw Polygon

```
define polygon (sides) (size)
repeat (sides)
    move (size) steps
    turn (360 / sides) degrees
end
```

**Use:** `polygon (5) (100)` = pentagon, `polygon (8) (50)` = octagon!

#### Glide to Position

```
define glide-to (target-x) (target-y) (seconds)
glide (seconds) secs to x: (target-x) y: (target-y)
```

**Use:** `glide-to (100) (50) (2)` — smooth move to (100, 50) in 2 secs!

---

## Abstraction — Hiding Complexity!

### What Is Abstraction?

**Abstraction** = hiding complex details behind a simple name.

**Analogy:** You press "Start" on a microwave. You don't need to know how magnetrons work — you just press "Start"!

### In Scratch: Custom Blocks = Abstraction!

```
define draw-house (size)
repeat 4
    move (size) steps
    turn 90 degrees
end
move (size) steps
turn 30 degrees
repeat 3
    move (size) steps
    turn 120 degrees
end
```

**User just types:** `draw-house (100)` — doesn't need to know the math!

---

### Why Abstraction Helps

| Benefit | Explanation |
|---------|-------------|
| **Less repetition** | Write once, use many times |
| **Easier to read** | `draw-house` vs 20 motion blocks |
| **Easy to fix** | Change once, fixes everywhere |
| **Shareable** | Backpack your blocks to other projects |

---

## Pen Extension Deep Dive — Drawing Details!

### Pen Blocks Review (Pen → Green)

| Block | What It Does |
|-------|--------------|
| `pen down` | Start drawing trail |
| `pen up` | Stop drawing |
| `erase all` | Clear all pen marks |
| `set pen color to [color]` | Set exact color |
| `change pen color by (10)` | Cycle through colors |
| `set pen size to (5)` | Line thickness |
| `change pen size by (5)` | Thicker/thinner |
| `stamp` | Leave costume copy as drawing |

---

### Pen Down / Pen Up

```
pen down      // Start drawing
move 100 steps
pen up        // Stop drawing
move 50 steps // No trail
```

**Only draws when pen is DOWN!**

---

### Pen Color

| Block | What It Does |
|-------|--------------|
| `set pen color to [color]` | Pick exact color |
| `change pen color by (10)` | Cycle through spectrum (0-200) |

### Pen Size

```
set pen size to (10)     // Thick line
change pen size by (5)   // Thicker
set pen size to (1)      // Thin line
```

---

### Clear Graphics

| Block | What It Does |
|-------|--------------|
| `erase all` | Clear ALL pen marks |
| `clear graphics` | Same as erase all |

---

### Pen Examples

#### Rainbow Spiral

```
when green flag clicked
erase all
pen down
set pen size to 5
repeat 360
    move 5 steps
    turn 1 degrees
    change pen color by 1
end
pen up
```

#### Stamp Circle

```
when green flag clicked
erase all
pen up
repeat 12
    go to x: 0 y: 0
    move 100 steps
    stamp
    turn 30 degrees
end
```

---

## Motion Detection — Camera Magic!

### Video Sensing Recap (Extensions → Video Sensing)

| Block | What It Does |
|-------|--------------|
| `turn video [on v]` | Start/stop camera |
| `video [on v] on [stage v]` | Show/hide video |
| `video transparency (50)` | See-through amount |
| `video [motion v] on [this sprite v]` | Motion amount (0-100) |
| `when video [motion] > (50)` | Hat: triggers on motion |

---

### Motion Detection Example

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

**Wave at camera → sprite reacts!**

---

## Talking Sprites — Text to Speech!

### Text to Speech Recap (Extensions → Text to Speech)

| Block | What It Does |
|-------|--------------|
| `speak [Hello!]` | Speaks immediately |
| `speak [Hello!] and wait` | Speaks, waits for finish |
| `set voice to [alto v]` | Choose voice |
| `set language to [English v]` | Choose language |

### Voices: `alto`, `tenor`, `soprano`, `random`
### Languages: English, Spanish, French, German, Chinese, Japanese, Korean...

---

### Text to Speech Example

```
when green flag clicked
set voice to [tenor v]
set language to [English v]
speak [Welcome to my game!] and wait
speak [Use arrow keys to move.]
```

---

## Accessibility Features — Making Games for Everyone!

### Why Accessibility Matters

Games should be **fun for everyone** — including players with different abilities!

### Scratch Accessibility Features

| Feature | How It Helps |
|---------|--------------|
| **High contrast** | Use bright colors on dark backgrounds |
| **Text to Speech** | Read text aloud for visually impaired |
| **Large text** | Big speech bubbles, large variable displays |
| **Simple controls** | One key per action, no complex combos |
| **Visual cues** | Flash, color change, not just sound |
| **Adjustable speed** | Variable for game speed |

### Accessible Design Tips

| Tip | Example |
|-----|---------|
| **Color + Shape** | Red X (color) + X mark (shape) for "wrong" |
| **Sound + Visual** | Flash screen AND play sound for hit |
| **Adjustable text** | Let player choose font size |
| **No time limits** | Or make them optional |
| **Remappable keys** | Let player choose controls |

---

## Multilingual Projects — Games for the World!

### Translate + Text to Speech = Polyglot Games!

```
when green flag clicked
set language to [Spanish v]
speak (translate [Welcome!] to [Spanish v]) and wait
```

### Supported Languages

English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Russian, Arabic, Hindi, and many more!

---

### Multilingual Example

```
when green flag clicked
set language to [Spanish v]
speak (translate [Welcome to my game!] to [Spanish v]) and wait
wait 1 secs
set language to [French v]
speak (translate [Bienvenue dans mon jeu!] to [French v]) and wait
wait 1 secs
set language to [Japanese v]
speak (translate [ようこそ！] to [Japanese v]) and wait
```

---

## Block Mechanics — Snap Together!

### How Blocks Connect

| Connection | How It Works |
|------------|--------------|
| **Vertical snap** | Top/bottom notches click |
| **Horizontal insert** | White/hex holes accept reporters/booleans |
| **Drag to insert** | Drag between blocks — white line shows where |

---

### Snap Rules

| Rule | Description |
|-------|-------------|
| **Hat only at top** | Nothing above hat block |
| **Cap only at bottom** | Nothing below cap block |
| **Reporters in white holes** | Number/text inputs |
| **Booleans in hex holes** | True/false inputs |
| **Stacks stack vertically** | Top to bottom order |

---

## Remix Exploration — Learn from Others!

### What Is Remixing?

**Remixing** = taking someone's project, making changes, sharing as your own!

### How to Remix

1. Find a project you like
2. Click **See Inside** (view code)
3. Click **Remix** (creates your copy)
4. Make changes
5. **Share** — automatically credits original!

### Learning from Remixes

| What to Look For | What to Learn |
|-----------------|---------------|
| **How they did movement** | Player controller patterns |
| **How they did collisions** | `touching color?`, `distance to` |
| **How they managed state** | Variables, lists, broadcasts |
| **How they organized code** | Custom blocks, comments, clean up |

!!! tip "🔍 Remix = Free Tutorial!"
    Every remixed project is a **free masterclass** — see exactly how they did it!

---

### Remix Etiquette

| Do | Don't |
|----|-------|
| **Credit original** (auto-added) | Claim as 100% yours |
| **Make meaningful changes** | Just change title/colors |
| **Thank creator** in notes | Claim their code as yours |
| **Add your twist** | Copy-paste without understanding |

---

## Project Tags — Help Others Find Your Game!

### What Are Tags?

**Tags** are keywords that help people **find your project** in search!

### Good Tags

| Category | Example Tags |
|---------|--------------|
| **Genre** | `platformer`, `rpg`, `puzzle`, `shooter`, `racing` |
| **Style** | `pixel-art`, `hand-drawn`, `3d`, `anime`, `retro` |
| **Theme** | `space`, `fantasy`, `horror`, `cute`, `educational` |
| **Tech** | `pen`, `clones`, `lists`, `video-sensing`, `microbit` |
| **Audience** | `beginner`, `kids`, `all-ages`, `challenging` |

### Tagging Tips

| Tip | Why |
|-----|-----|
| **5-10 tags max** | Too many = spammy |
| **Be specific** | `platformer` better than `game` |
| **Use popular tags** | Check what similar projects use |
| **Update tags** | Add new tags when you add features |

---

## Summary

In this chapter, you learned:

- ✅ **Comparison operators** — `>`, `<`, `=` for smart decisions
- ✅ **Random numbers** — `pick random` for dice, spawns, chance
- ✅ **Counted repetition** — `repeat (N)` for exact loops
- ✅ **Variables** — Create, set, change, show/hide, scope
- ✅ **Lists** — Create, add, delete, insert, length, contains
- ✅ **Block parameters** — Custom blocks with inputs
- ✅ **Abstraction** — Hide complexity in custom blocks
- ✅ **Pen details** — Down/up, color, size, clear, stamp
- ✅ **Motion detection** — Camera-based games
- ✅ **Text to Speech** — Talking sprites
- ✅ **Accessibility** — Games for everyone
- ✅ **Multilingual** — Translate + Speech = world-ready
- ✅ **Block snapping** — How connections work
- ✅ **Remixing** — Learn by modifying others' work
- ✅ **Project tags** — Help players find your game

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Greater Than (>)** | Left bigger than right |
| **Equal (=)** | Left exactly equals right |
| **Pick Random** | Random integer in range |
| **Counted Repetition** | `repeat (N)` exact loop |
| **Set Variable** | Put exact value in box |
| **Show/Hide Variable** | Display or hide on stage |
| **Variable Scope** | For all sprites vs this sprite only |
| **List Creation** | `make a list` for collections |
| **Block Parameters** | Inputs for custom blocks |
| **Abstraction** | Hide complexity behind simple name |
| **Pen Down/Up** | Start/stop drawing trail |
| **Pen Color/Size** | Drawing appearance |
| **Erase All/Clear** | Remove pen marks |
| **Motion Detection** | Camera-based movement sensing |
| **Text to Speech** | Synthetic voice from text |
| **Accessibility** | Design for all abilities |
| **Multilingual** | Multiple languages in one project |
| **Snap Together** | How blocks connect |
| **Remix** | Modify and share someone's project |
| **Project Tags** | Keywords for discoverability |

---

## Try It Yourself! 🎯

**Challenge 1:** Create a **high score list** (list) that saves top 5 scores

**Challenge 2:** Make a **custom block** `draw-star (size) (points)` using Pen

**Challenge 3:** Build a **shop system** — list `inventory`, variable `coins`, buy/sell items

**Challenge 4:** Add **Text to Speech** to make your game **accessible** (reads instructions)

**Challenge 5:** **Remix a project** from the Scratch community — add your own feature

**Challenge 6:** Add **tags** to your best project and share it

**Challenge 6:** Make your game **multilingual** — at least 3 languages

---

## What's Next?

In **Chapter 8**, you'll explore **Animation, Parallelism, and Debugging** — bringing your games to life with smooth animations, multiple things happening at once, and fixing bugs like a pro!

[**→ Next Chapter: Animation, Parallelism, and Debugging**](../08-animation-parallelism-debugging/index.md)