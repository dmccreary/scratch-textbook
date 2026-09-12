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

!!! mascot-welcome "Time to Give Your Project a Memory!"
    ![Scratch the Cat waving hello](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to give your projects a memory? In this chapter you'll build score counters, inventories, and high-score lists — the same tools real game developers use to track everything that changes. You'll turn simple boxes called variables and ordered lists into the backbone of a real game. Let's build something purr-fect!

## Comparison Operators — Making Number Decisions!

### Greater Than Operator (>)

<div class="scratch">
&lt;(10) > (5)&gt;
</div>

**True if left number is BIGGER than right number.**

<div class="scratch">
&lt;(10) > (5)&gt;
</div>

**True** — 10 is bigger than 5.

<div class="scratch">
&lt;(5) > (10)&gt;
</div>

**False** — 5 is not bigger than 10.

<div class="scratch">
&lt;(10) > (10)&gt;
</div>

**False** — equal numbers are never "greater than."

**Use for:** High score checks, boundary limits, "is big enough?"

---

### Equal Operator (=)

<div class="scratch">
&lt;(10) = (10)&gt;
</div>

**True if both numbers are EXACTLY the same.**

<div class="scratch">
&lt;(10) = (10)&gt;
</div>

**True** — both sides match exactly.

<div class="scratch">
&lt;(10) = (5)&gt;
</div>

**False** — 10 and 5 are different.

<div class="scratch">
&lt;(0) = (0)&gt;
</div>

**True** — zero equals zero.

**Use for:** Exact matches, "did we reach exactly 100?", "is timer 0?"

---

### All Three Comparison Operators

| Block | Symbol | True When... | Memory Trick |
|-------|--------|--------------|--------------|
| `(1) < (2)` | < | Left SMALLER than right | "Less than" points to smaller |
| `(1) > (2)` | > | Left BIGGER than right | "Greater than" points to bigger |
| `(1) = (2)` | = | Left EQUALS right | Two lines = same |

---

## Random Numbers — Pick Random!

### Pick Random Block (Operators → Green)

<div class="scratch">
pick random (1) to (10)
</div>

**Gives a random whole number** between the two numbers (including both!).

### Random Number Uses

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (6)
</div>

Roll a die (1–6).
</div>

<div class="card" markdown>
<div class="scratch">
pick random (1) to (100)
</div>

Percent chance, 1% per number.
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

---

### Random in Action

#### Random Spawn Position

<div class="scratch">
when I start as a clone
go to x: (pick random (-200) to (200)) y: (pick random (-150) to (150))
</div>

#### Random Chance (20% = 1 in 5)

<div class="scratch">
if &lt;(pick random (1) to (5)) = (1)&gt; then
    // 20% chance!
    broadcast [rare-item v]
end
</div>

#### Random Wait

<div class="scratch">
forever
    wait (pick random (1) to (3)) seconds
    create clone of [myself v]
end
</div>

---

## Counted Repetition — Exact Loops!

### Repeat Block (Control → Orange)

<div class="scratch">
repeat (10)
    move (10) steps
    turn right (15) degrees
end
</div>

**Runs exactly N times** — perfect when you know how many!

---

### Counted Repeat Examples

#### Draw a Polygon

<div class="scratch">
repeat (5)        // Pentagon
    move (100) steps
    turn right (72) degrees    // 360/5 = 72
end
</div>

#### Spawn Exact Number

<div class="scratch">
repeat (10)
    create clone of [myself v]
    wait (0.5) seconds
end
</div>

#### Countdown

<div class="scratch">
set [countdown v] to (10)
repeat (10)
    say (countdown) for (1) seconds
    change [countdown v] by (-1)
end
</div>

---

## Variable Basics — Your Data Boxes!

### What Is a Variable?

<div class="scratch">
set [score v] to (0)    // Put 0 in the "score" box
change [score v] by (10)  // Add 10 to the box
</div>

A **variable** is a **named box** that holds **one value** that can **change**.

### Variable Blocks (Variables → Red)

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
set [score v] to (0)
</div>

Put an exact value in the box.
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

Display the variable on stage.
</div>

<div class="card" markdown>
<div class="scratch">
hide variable [score v]
</div>

Remove the variable from stage.
</div>

<div class="card" markdown>
<div class="scratch">
(score)
</div>

Reporter: get the current value.
</div>

</div>

---

### Creating Variables

1. Click **Variables** (🔴 Red)
2. Click **Make a Variable**
3. Name it: `score`, `lives`, `timer`, `level`, `high-score`
4. Choose scope:

   - **For all sprites** = shared (one box for everyone)
   - **For this sprite only** = private (each sprite has own)

5. Click OK!

---

### Variable Scope — Who Can See It?

| Scope | Who Sees It | Use For |
|-------|-------------|---------|
| **For all sprites** | Everyone shares ONE box | Score, timer, high score, level |
| **For this sprite only** | Each sprite has own box | Player health, enemy speed, sprite state |

!!! mascot-warning "Mind Where Your Variable Lives"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Pick "for this sprite only" and every other sprite quietly gets its own separate copy — build a shared score that way and it will look broken. If more than one sprite needs to read or change a value, like a score or a timer, make it "for all sprites" instead.

---

### Variable Examples

#### Score System

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

## Show/Hide Variables — Control the Display!

### Show Variable

<div class="scratch">
show variable [score v]
</div>

**Displays the variable** on the stage (top-left by default).

### Hide Variable

<div class="scratch">
hide variable [score v]
</div>

**Removes from stage** — but value still exists!

---

### When to Show/Hide

| Situation | Action |
|-----------|--------|
| Game starts | `show variable [score]`, `show variable [lives]` |
| Menu screen | `hide variable [score]`, `show variable [high-score]` |
| Game over | `hide variable [lives]`, `show variable [final-score]` |
| Pause menu | `hide variable [timer]` |

!!! mascot-tip "Show What Matters!"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Only show the variables your player needs to see right now — hide the rest so the stage doesn't turn into clutter. A clean stage with just a score and a lives counter reads far better than five stacked numbers nobody asked for.

---

## Lists — Collections of Values!

<div class="scratch">
add [thing v] to [my list v]
</div>

### What Is a List?

A **list** is like a variable, but holds **MULTIPLE values** in order — like a shopping list!

!!! mascot-thinking "One Box vs. Many Boxes"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A variable is a single box that holds one value at a time — set a new value, and the old one is gone forever. A list is a whole shelf of numbered boxes that all exist at once, in order, so you can keep every high score instead of just the latest one. Once you can picture that difference, you'll know instantly whether a piece of data belongs in a variable or a list.

```
List: inventory
1: "sword"
2: "shield"
3: "potion"
4: "key"
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

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
add [thing v] to [list v]
</div>

Append to the end.
</div>

<div class="card" markdown>
<div class="scratch">
delete (1) of [list v]
</div>

Remove the item at a position.
</div>

<div class="card" markdown>
<div class="scratch">
delete all of [list v]
</div>

Clear everything.
</div>

<div class="card" markdown>
<div class="scratch">
insert [thing v] at (1) of [list v]
</div>

Insert at a position.
</div>

<div class="card" markdown>
<div class="scratch">
replace item (1) of [list v] with [thing v]
</div>

Change an existing item.
</div>

<div class="card" markdown>
<div class="scratch">
item (1) of [list v]
</div>

Reporter: get the value at a position.
</div>

<div class="card" markdown>
<div class="scratch">
length of [list v]
</div>

Reporter: how many items are in the list.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;[list v] contains [thing v]?&gt;
</div>

Boolean: is it in the list?
</div>

<div class="card" markdown>
<div class="scratch">
show list [list v]
</div>

Display the list on stage.
</div>

<div class="card" markdown>
<div class="scratch">
hide list [list v]
</div>

Hide the list from stage.
</div>

</div>

!!! mascot-warning "Lists Start at 1, Not 0!"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Unlike many programming languages, Scratch lists number their first item position (1), not position (0) — ask for `item (0) of [list v]` and you'll just get nothing. When you need the first item, always reach for `item (1) of [list v]`.

---

### List Examples

#### Inventory System

<div class="scratch">
when green flag clicked
delete all of [inventory v]
add [sword v] to [inventory v]
add [shield v] to [inventory v]
show list [inventory v]

when I receive [found-potion v]
add [potion v] to [inventory v]
</div>

#### High Score List

<div class="scratch">
when green flag clicked
delete all of [high-scores v]
repeat (5)
    add (0) to [high-scores v]
end

when I receive [new-score v]
if &lt;(score) > (item (1) of [high-scores v])&gt; then
    insert (score) at (1) of [high-scores v]
    delete (6) of [high-scores v]  // Keep top 5
end
</div>

---

## Block Parameters — Custom Block Inputs!

### What Are Parameters?

<div class="scratch">
define jump (height)
change y by (height)
wait (0.2) seconds
change y by ((height) * (-1))
</div>

**Parameters** are **inputs** for your custom blocks — like function arguments!

**Use it:** `jump (100)` → jumps high! `jump (20)` → small hop!

!!! mascot-encourage "Parameters Take Practice"
    ![Scratch the Cat giving an encouraging thumbs-up](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If custom block parameters feel confusing at first, that's completely normal — you're combining two big ideas, custom blocks and changeable inputs, at once. You already mastered variables, so try building a single one-parameter block, like `jump (height)`, before adding a second input.

---

### Adding Parameters

1. **Make a Block** in My Blocks (🩷 Pink)
2. Click **Options** (gear icon)
3. Click **Add number input** or **Add string input**
4. Name it: `height`, `speed`, `name`, `color`
5. Click OK — parameter appears in `define` hat!

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

<div class="scratch">
define jump (height)
change y by (height)
wait (0.2) seconds
change y by ((height) * (-1))
</div>

**Use:** `jump (100)` = high jump, `jump (20)` = small hop

#### Draw Polygon

<div class="scratch">
define polygon (sides) (size)
repeat (sides)
    move (size) steps
    turn right ((360) / (sides)) degrees
end
</div>

**Use:** `polygon (5) (100)` = pentagon, `polygon (8) (50)` = octagon!

#### Glide to Position

<div class="scratch">
define glide-to (target-x) (target-y) (seconds)
glide (seconds) secs to x: (target-x) y: (target-y)
</div>

**Use:** `glide-to (100) (50) (2)` — smooth move to (100, 50) in 2 secs!

---

## Abstraction — Hiding Complexity!

### What Is Abstraction?

**Abstraction** = hiding complex details behind a simple name.

**Analogy:** You press "Start" on a microwave. You don't need to know how magnetrons work — you just press "Start"!

### In Scratch: Custom Blocks = Abstraction!

<div class="scratch">
define draw-house (size)
repeat (4)
    move (size) steps
    turn right (90) degrees
end
move (size) steps
turn right (30) degrees
repeat (3)
    move (size) steps
    turn right (120) degrees
end
</div>

**User just types:** `draw-house (100)` — doesn't need to know the math!

!!! mascot-thinking "Abstraction: Hiding the How"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice how `draw-house (100)` hides an entire sequence of moves and turns behind one simple name — the person using the block doesn't need to know the math inside it at all. That's the same idea behind pressing "Start" on a microwave: a simple interface hiding a complicated mechanism. Every custom block you write from now on is really a tiny act of abstraction.

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

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
pen down
</div>

Start drawing a trail.
</div>

<div class="card" markdown>
<div class="scratch">
pen up
</div>

Stop drawing.
</div>

<div class="card" markdown>
<div class="scratch">
erase all
</div>

Clear all pen marks.
</div>

<div class="card" markdown>
<div class="scratch">
set pen color to [#0000ff]
</div>

Set an exact color.
</div>

<div class="card" markdown>
<div class="scratch">
change pen color by (10)
</div>

Cycle through colors.
</div>

<div class="card" markdown>
<div class="scratch">
set pen size to (5)
</div>

Set the line thickness.
</div>

<div class="card" markdown>
<div class="scratch">
change pen size by (5)
</div>

Make the line thicker or thinner.
</div>

<div class="card" markdown>
<div class="scratch">
stamp
</div>

Leave a costume copy as a drawing.
</div>

</div>

---

### Pen Down / Pen Up

<div class="scratch">
pen down      // Start drawing
move (100) steps
pen up        // Stop drawing
move (50) steps // No trail
</div>

**Only draws when pen is DOWN!**

---

### Pen Color

<div class="scratch">
set pen color to [#0000ff]
</div>

Pick an exact color.

<div class="scratch">
change pen color by (10)
</div>

Cycle through the color spectrum (0–200).

### Pen Size

<div class="scratch">
set pen size to (10)     // Thick line
change pen size by (5)   // Thicker
set pen size to (1)      // Thin line
</div>

---

### Clear Graphics

<div class="scratch">
erase all
</div>

**Clears every pen mark** on the stage — sprites and backdrops are untouched, only pen trails and stamps disappear. "Clear Graphics" is just another name for this same action; Scratch's actual block is called `erase all`.

---

### Pen Examples

#### Rainbow Spiral

<div class="scratch">
when green flag clicked
erase all
pen down
set pen size to (5)
repeat (360)
    move (5) steps
    turn right (1) degrees
    change pen color by (1)
end
pen up
</div>

#### Stamp Circle

<div class="scratch">
when green flag clicked
erase all
pen up
repeat (12)
    go to x: (0) y: (0)
    move (100) steps
    stamp
    turn right (30) degrees
end
</div>

---

## Motion Detection — Camera Magic!

### Video Sensing Recap (Extensions → Video Sensing)

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
turn video [on v]
</div>

Start or stop the camera.
</div>

<div class="card" markdown>
<div class="scratch">
video [on v] on [stage v]
</div>

Show or hide the video.
</div>

<div class="card" markdown>
<div class="scratch">
set video transparency to (50)
</div>

Set the see-through amount.
</div>

<div class="card" markdown>
<div class="scratch">
video [motion v] on [this sprite v]
</div>

Reporter: motion amount (0–100).
</div>

<div class="card" markdown>
<div class="scratch">
when video [motion v] > (50)
</div>

Hat: triggers on motion.
</div>

</div>

---

### Motion Detection Example

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

---

## Talking Sprites — Text to Speech!

### Text to Speech Recap (Extensions → Text to Speech)

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
speak [Hello!]
</div>

Speaks immediately.
</div>

<div class="card" markdown>
<div class="scratch">
speak [Hello!] and wait
</div>

Speaks, then waits for it to finish.
</div>

<div class="card" markdown>
<div class="scratch">
set voice to [alto v]
</div>

Choose a voice.
</div>

<div class="card" markdown>
<div class="scratch">
set language to [English v]
</div>

Choose a language.
</div>

</div>

### Voices: `alto`, `tenor`, `soprano`, `random`
### Languages: English, Spanish, French, German, Chinese, Japanese, Korean...

---

### Text to Speech Example

<div class="scratch">
when green flag clicked
set voice to [tenor v]
set language to [English v]
speak [Welcome to my game!] and wait
speak [Use arrow keys to move.]
</div>

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

<div class="scratch">
when green flag clicked
set language to [Spanish v]
speak (translate [Welcome!] to [Spanish v]) and wait
</div>

### Supported Languages

English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Russian, Arabic, Hindi, and many more!

---

### Multilingual Example

<div class="scratch">
when green flag clicked
set language to [Spanish v]
speak (translate [Welcome to my game!] to [Spanish v]) and wait
wait (1) seconds
set language to [French v]
speak (translate [Bienvenue dans mon jeu!] to [French v]) and wait
wait (1) seconds
set language to [Japanese v]
speak (translate [ようこそ！] to [Japanese v]) and wait
</div>

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

!!! mascot-tip "Remix = Free Tutorial!"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Every remixed project is a free masterclass — open "See Inside" on a game you love and study exactly how they built it. Look specifically at their variables and lists; that's usually where the real logic lives.

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

!!! mascot-celebration "You're a Data Master!"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just leveled up from single-value variables to full inventory and high-score lists, and you even built your own custom blocks with parameters. That's real abstraction — hiding complexity behind a simple name — one of the harder ideas in this whole book, and you've got it!

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

**Challenge 7:** Make your game **multilingual** — at least 3 languages

---

## What's Next?

In **Chapter 8**, you'll explore **Animation, Parallelism, and Debugging** — bringing your games to life with smooth animations, multiple things happening at once, and fixing bugs like a pro!

[**→ Next Chapter: Animation, Parallelism, and Debugging**](../08-animation-parallelism-debugging/index.md)
