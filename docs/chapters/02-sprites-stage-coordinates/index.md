---
title: Sprites, Stage, and the Coordinate System
description: Covers sprites, the stage, coordinate system fundamentals, and motion block basics for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 12:00:00
version: 0.08
---

# Sprites, Stage, and the Coordinate System

## Summary

Covers sprites, the stage, coordinate system fundamentals, and motion block basics. This chapter covers 18 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

1. Multiple Sprites
2. Green Flag
3. Coordinate System
4. Stage Size
5. Motion Blocks
6. Looks Blocks
7. Event Blocks
8. Motion Block Category
9. Looks Block Category
10. Sound Block Category
11. Events Block Category
12. Control Block Category
13. Sensing Block Category
14. Operators Block Category
15. Variables Block Category
16. List Block Category
17. My Blocks Category
18. Block Color Coding

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)

---

## Meeting Your Cast: Sprites!

In Chapter 1, you met the Scratch cat — your first **sprite**. But one sprite gets lonely! Real Scratch projects have **many sprites** working together, just like actors in a play.

### What Is a Sprite? (A Quick Reminder)

A **sprite** is any character or object that can:

- 🎭 **Move** around the stage
- 👗 **Change appearance** (costumes)
- 🔊 **Make sounds**
- 🤔 **React** to clicks, keys, and messages
- 🧠 **Remember** things with variables

Think of sprites like **actors in a movie**. Each actor has their own script (code), their own costumes, and their own lines (sounds).

---

## Multiple Sprites — Building Your Cast

### Adding More Sprites

In the **sprite pane** (bottom right), you have several ways to add sprites:

| Method | How To | When to Use |
|--------|--------|-------------|
| **Choose a Sprite** (🐱 icon) | Click the cat face with + sign → pick from library | Want a ready-made character |
| **Paint** (🎨 brush icon) | Click paintbrush → draw your own | Want a totally unique character |
| **Surprise** (✨ magic wand) | Click magic wand → get random sprite | Feeling lucky! |
| **Upload** (⬆️ arrow icon) | Click upload → choose image file | Have a drawing or photo to use |

!!! tip "🎨 Paint Your Own!"
    The **Paint** option opens a drawing editor where you can create anything — a spaceship, a pizza, your pet dog, or a walking taco!

### Renaming Sprites

**Always rename your sprites!** Default names like "Sprite1", "Sprite2" get confusing fast.

1. Click the sprite in the sprite pane
2. Click the **name field** at the top (where it says "Sprite1")
2. Type a descriptive name: `Player`, `Enemy`, `Coin`, `Background`

!!! info "💡 Naming Tips"
    - Use **capitalizing words**: `MainCharacter`, `EvilRobot`, `GoldenCoin`
    - No spaces — use **camelCase** or **underscores**
    - Be specific: `RedCar` not just `Car`

### Each Sprite Has Its Own Everything!

This is **super important**: Every sprite is **completely independent**:

| What Each Sprite Owns | Example |
|-----------------------|---------|
| **Scripts** (code) | Player has movement code; Enemy has patrol code |
| **Costumes** | Player has walk1, walk2, jump; Coin has spin1, spin2, spin3 |
| **Sounds** | Player has jump sound; Coin has "ching!" sound |
| **Variables** | Player has `lives`; Enemy has `speed` |

!!! note "🔑 Key Concept"
    Code you write for **one sprite does NOT affect other sprites** — unless you use **broadcasts** (coming in Chapter 4!) or **variables for all sprites**.

---

## The Stage — Your Theater

### Stage Size and Boundaries

The **stage** is where all the action happens. Remember from Chapter 1:

| Property | Value |
|----------|-------|
| **Width** | 480 pixels |
| **Height** | 360 pixels |
| **Center** | (0, 0) |

The stage has **edges** — sprites can't go past them (unless you write code to wrap around).

#### Diagram: Stage Layout and Boundaries

<iframe src="../../sims/stage-layout/main.html" width="100%" height="505px" scrolling="no"></iframe>

<details markdown="1">
<summary>Stage Layout and Boundaries</summary>
Type: microsim
**sim-id:** stage-layout<br/>
**Library:** p5.js<br/>
**Status:** Specified

Learning objective: Understand stage dimensions, edges, and what happens when sprites reach boundaries

Canvas layout:
- Full stage (480×360) with visible edge markers
- Draggable sprite that shows distance to each edge
- Edge labels: "Left: -240", "Right: 240", "Top: 180", "Bottom: -180"

Visual elements:
- Stage rectangle with subtle grid
- Four edge zones highlighted in different colors
- Sprite that can be dragged anywhere
- Live display: "Distance to left edge: ___ px"
- Warning glow when sprite touches edge

Interactive controls:
- Drag sprite to explore boundaries
- "Test edge behavior" button — runs a script that moves sprite to each edge
- Toggle "bounce at edges" vs "stop at edges" mode
- Show/hide coordinate axes

Default parameters:
- Sprite at center (0, 0)
- Edges: visible
- Mode: stop at edges

Data Visibility Requirements:
  Stage 1: Show stage with edge markers and center point
  Stage 2: Show sprite at center with distances to all 4 edges
  Stage 3: Show sprite at each edge with distance = 0
  Stage 4: Demonstrate "if touching edge, bounce" behavior

Instructional Rationale: Concrete visualization of boundaries supports the Understand/explain objective. Learners predict what happens at edges before seeing the behavior.

Implementation notes:
- Use p5.js
- Color-code edges: left=red, right=green, top=blue, bottom=orange
- Touch detection using x/y position
</details>

---

### Stage Backdrops — Setting the Scene

The **stage** can wear costumes too — they're called **backdrops**!

#### How to Change Backdrops

1. Click **Stage** in the sprite pane (icon looks like a picture frame)
2. Click **Backdrops** tab
3. Click **Choose a Backdrop** (picture frame + icon)
4. Pick from library, paint, surprise, or upload

#### Backdrop Tips

| Tip | Why It Matters |
|-----|----------------|
| **Match your theme** | Space game → starfield backdrop; Jungle → trees and vines |
| **Keep it simple** | Busy backdrops make sprites hard to see |
| **Contrast colors** | Light sprites on dark backdrops (or vice versa) |
| **Use blank backdrop** | For drawing with Pen extension |

!!! example "🎮 Backdrop Ideas by Game Type"
    | Game Type | Backdrop Idea |
    |-----------|---------------|
    | Platformer | Ground, platforms, sky |
    | Maze | Maze walls, start/finish markers |
    | Space Shooter | Stars, planets, nebula |
    | Story | Different scenes (bedroom, park, school) |

---

## The Coordinate System — Your GPS on Stage

### Understanding X and Y

The stage uses a **coordinate system** — like a map with X and Y numbers that tell you exactly where things are.

| Axis | Direction | Range | Center |
|------|-----------|-------|--------|
| **X (horizontal)** | Left ← → Right | -240 to +240 | 0 |
| **Y (vertical)** | Down ← → Up | -180 to +180 | 0 |

### Reading Coordinates

A position is written as **(x, y)** — always **X first, then Y**!

- **(0, 0)** = **Dead center** of stage
- **(100, 50)** = Right 100, Up 50 from center
- **(-200, -100)** = Left 200, Down 100 from center
- **(240, 180)** = Top-right corner
- **(-240, -180)** = Bottom-left corner

!!! tip "🧭 Remember: X comes before Y in the alphabet!"
    - **X** = horizontal (left/right)
    - **Y** = vertical (up/down)

---

#### Diagram: Interactive Coordinate Explorer

<iframe src="../../sims/coordinate-explorer/main.html" width="100%" height="555px" scrolling="no"></iframe>

<details markdown="1">
<summary>Interactive Coordinate Explorer</summary>
Type: microsim
**sim-id:** coordinate-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Learning objective: Build intuition for the coordinate system by exploring positions interactively

Canvas layout:
- Full stage with coordinate grid (60px major, 20px minor lines)
- Movable target sprite (crosshair or character)
- Click anywhere to place target and see coordinates
- Quadrant labels: I (+,+), II (-,+), III (-,-), IV (+,-)

Visual elements:
- Grid with labeled axes (-240 to 240, -180 to 180)
- Four quadrants shaded in pastel colors
- Target sprite showing live (x, y) coordinates
- Quadrant labels: "Q1: x>0, y>0", "Q2: x<0, y>0", etc.
- Special points marked: center (0,0), corners

Interactive controls:
- Click stage to place target and show coordinates
- "Go to quadrant" buttons (I, II, III, IV)
- "Go to center" button
- "Random position" button
- Toggle grid on/off
- Toggle quadrant shading on/off
- "Quiz mode" — shows coordinate, click where it is

Default parameters:
- Grid: ON
- Quadrant shading: ON
- Target at center

Data Visibility Requirements:
  Stage 1: Show grid with labeled axes and quadrant names
  Stage 2: Show target at (0,0) with coordinate display
  Stage 3: Show target at various positions with live updates
  Stage 4: Quiz mode — "Where is (150, -50)?" → click to answer

Instructional Rationale: Step-through with concrete positions and quadrant visualization supports the Remember/Identify and Understand/Explain objectives. Interactive exploration builds spatial reasoning.

Implementation notes:
- Use p5.js
- Click handler converts mouse position to stage coordinates
- Quadrant detection: x>0 && y>0 = Q1, x<0 && y>0 = Q2, etc.
- Quiz mode generates random valid coordinates
</details>

---

### Positive and Negative Numbers

**Positive X** = Right of center | **Negative X** = Left of center
**Positive Y** = Above center | **Negative Y** = Below center

| Position | X | Y |
|----------|---|---|
| Right side | Positive (+) | Can be + or - |
| Left side | Negative (-) | Can be + or - |
| Top half | Can be + or - | Positive (+) |
| Bottom half | Can be + or - | Negative (-) |
| Center | 0 | 0 |

!!! note "🔢 Quick Practice"
    - **Far right, middle height:** (240, 0)
    - **Far left, top:** (-240, 180)
    - **Middle, bottom:** (0, -180)
    - **A bit right, a bit up:** (50, 30)

---

## Motion Blocks — Making Sprites Move!

Now for the fun part — **making things move!** The **Motion category** (🔵 blue) has all the blocks for movement.

### Motion Blocks at a Glance

| Block | What It Does | Example Use |
|-------|--------------|-------------|
| `move (10) steps` | Move forward in current direction | Walking, flying |
| `turn cw (15) degrees` | Turn clockwise (right) | Steering |
| `turn ccw (15) degrees` | Turn counter-clockwise (left) | Steering |
| `go to x: (0) y: (0)` | Teleport to exact position | Spawning, resetting |
| `go to (mouse-pointer v)` | Teleport to mouse or another sprite | Click-to-move |
| `glide (1) secs to x: (0) y: (0)` | Smooth slide to position | Cutscenes, smooth movement |
| `glide (1) secs to (mouse-pointer v)` | Smooth slide to mouse/sprite | Following |
| `point in direction (90 v)` | Face a specific angle | Setting initial direction |
| `point towards (mouse-pointer v)` | Face mouse or another sprite | Aiming |
| `change x by (10)` | Move horizontally | Side scrolling |
| `change y by (10)` | Move vertically | Jumping, falling |
| `set x to (0)` | Set horizontal position exactly | Positioning |
| `set y to (0)` | Set vertical position exactly | Positioning |
| `x position` | Reporter: current X coordinate | Checking position |
| `y position` | Reporter: current Y coordinate | Checking position |
| `direction` | Reporter: current facing angle | Checking angle |

!!! note "🧭 Direction Numbers"
    Scratch uses **degrees** for direction:
    - **0** = Up (North)
    - **90** = Right (East)
    - **180** = Down (South)
    - **-90** (or 270) = Left (West)

---

#### Diagram: Motion Blocks Visual Guide

<iframe src="../../sims/motion-blocks-guide/main.html" width="100%" height="665px" scrolling="no"></iframe>

<details markdown="1">
<summary>Motion Blocks Visual Guide</summary>
Type: infographic
**sim-id:** motion-blocks-guide<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Visual reference for all motion blocks with examples

Layout: Categorized cards showing:
- **Teleport blocks** (go to, go to mouse-pointer)
- **Smooth movement** (glide, glide to)
- **Step movement** (move, turn)
- **Precise positioning** (set x, set y, change x, change y)
- **Direction blocks** (point in direction, point towards)
- **Reporter blocks** (x position, y position, direction)

Each card shows:
- Block image with color
- Plain English description
- "Try this:" mini-example
- Common parameter values

Interactive elements:
- Hover a block to see animated demo of what it does
- Click "Copy example" to get a script snippet
- Filter by "teleport", "smooth", "step", "precision", "direction", "reporters"

Visual style: Motion blue theme throughout
Color scheme: Match Scratch Motion blue
</details>

---

### Move vs. Glide — What's the Difference?

| Block | Speed | Use When |
|-------|-------|----------|
| `move 10 steps` | **Instant** (1 frame) | Quick response, games |
| `glide 1 sec to x: 100 y: 100` | **Smooth over time** | Cutscenes, animations |

**Try both!** Make two scripts — one with `move`, one with `glide` — and see the difference.

---

### Turning — CW vs. CCW

- **CW** = **Clockwise** (turn right) ⏩
- **CCW** = **Counter-Clockwise** (turn left) ⏪

```
Current direction: 0 (facing up)
turn cw 90 degrees  →  now facing 90 (right)
turn ccw 90 degrees →  now facing 0 (up again)
```

!!! tip "🎯 Pro Tip: `point towards`"
    Use `point towards [mouse-pointer v]` to make a sprite **always face the mouse** — perfect for aiming games!

---

### Going to Specific Positions

#### `go to x: y:` — Instant Teleport

<div class="scratch">
when green flag clicked
go to x: (-200) y: (100) // Teleport to top-left area
</div>

#### `glide secs to x: y:` — Smooth Slide

<div class="scratch">
when green flag clicked
glide (2) secs to x: (200) y: (-100) // Smooth slide to bottom-right
</div>

!!! example "🎮 Platformer Spawn Point"
    <div class="scratch">
    when green flag clicked
    go to x: (-200) y: (-100) // Start at left platform
    </div>

---

## Looks Blocks — Changing How Sprites Look

The **Looks category** (🟣 purple) lets you change appearance, speech, and size.

### Key Looks Blocks

| Block | What It Does | Example |
|-------|--------------|---------|
| `say [Hello!] for (2) secs` | Speech bubble with timer | Dialogue |
| `say [Hello!]` | Speech bubble (stays until changed) | Ongoing text |
| `think [Hmm...] for (2) secs` | Thought bubble | Inner monologue |
| `switch costume to [costume1 v]` | Change to specific costume | Animations |
| `next costume` | Cycle to next costume | Walking animation |
| `change size by (10)` | Grow/shrink gradually | Power-ups |
| `set size to (100%)` | Exact size | Resetting |
| `change [color v] effect by (25)` | Color tint, ghost, pixelate, etc. | Special effects |
| `clear graphic effects` | Reset all effects | Cleanup |
| `show` | Make visible | Revealing |
| `hide` | Make invisible | Secrets, deaths |
| `go to [front v] layer` / `go back (1) layers` | Layer order | Overlapping sprites |

!!! tip "🎭 Costume Animation Secret"
    The **smoothest animations** use `next costume` inside a `forever` loop with a tiny `wait`!

    <div class="scratch">
    when green flag clicked
    forever
    next costume
    wait (0.1) secs
    end
    </div>

---

### Speech vs. Thought Bubbles

| Bubble Type | Block | Looks Like | Use For |
|-------------|-------|------------|---------|
| **Speech** | `say` | Rounded rectangle, pointed at sprite | Talking aloud |
| **Thought** | `think` | Cloud-shaped bubble | Thinking silently |

---

### Graphic Effects — Cool Visual Tricks!

The `change [effect] by` block has **7 effects**:

| Effect | What It Does | Fun Use |
|--------|--------------|---------|
| **color** | Shifts hue (rainbow cycle) | Magic spells |
| **fisheye** | Bulges center | Funhouse mirror |
| **whirl** | Swirls pixels | Teleportation |
| **pixelate** | Makes blocky | Retro/glitch |
| **mosaic** | Tiles the image | Disguise |
| **brightness** | Lighten/darken | Day/night |
| **ghost** | Makes transparent | Invisibility! |

!!! warning "🧹 Clean Up Effects"
    Always use `clear graphic effects` when done, or effects stack up and slow down your project!

---

## Event Blocks — When Things Happen

The **Events category** (🟡 yellow) has the **hat blocks** that start your scripts.

### All Event Blocks

| Block | Triggers When |
|-------|---------------|
| `when green flag clicked` | 🟢 Green flag pressed (start project) |
| `when this sprite clicked` | 👆 Sprite is clicked/tapped |
| `when [space v] key pressed` | ⌨️ Specific key pressed |
| `when backdrop switches to [backdrop1 v]` | 🎭 Backdrop changes |
| `when I receive [message v]` | 📡 Broadcast received |
| `broadcast [message v]` | 📡 Send message to all sprites |
| `broadcast [message v] and wait` | 📡 Send + wait for all to finish |

---

### The Green Flag — Your "Start" Button

The **green flag** is the most common way to start a project. **Put `when green flag clicked` at the top of every main script!**

!!! note "🏁 Green Flag = Go!"
    Think of the green flag like the starting pistol in a race. When it fires (clicked), **all scripts with that hat block start at the same time** — parallel execution!

---

### Clicking Sprites — Interactive Fun!

`when this sprite clicked` makes sprites **react to player clicks**:

<div class="scratch">
when this sprite clicked
play sound [pop v] until done
change [color v] effect by (25)
wait (0.2) secs
clear graphic effects
</div>

!!! example "🎮 Clicker Game Start"
    <div class="scratch">
    when green flag clicked
    set [score v] to (0)
    show

    when this sprite clicked
    change [score v] by (1)
    play sound [pop v] until done
    </div>

---

### Keyboard Control — Player Movement!

`when [key] key pressed` lets players **control sprites**:

<div class="scratch">
when [right arrow v] key pressed
change x by (10)

when [left arrow v] key pressed
change x by (-10)

when [up arrow v] key pressed
change y by (10)

when [down arrow v] key pressed
change y by (-10)
</div>

!!! tip "⌨️ Smooth Movement Trick"
    For **smooth continuous movement**, use `forever` + `if key pressed?` (Sensing) instead of hat blocks — we'll learn this in Chapter 6!

---

### Broadcasts — Sprites Talking to Each Other!

**Broadcasts** let sprites send messages — like walkie-talkies!

| Block | What It Does |
|-------|--------------|
| `broadcast [message]` | Shouts message, continues immediately |
| `broadcast [message] and wait` | Shouts message, **waits for all receivers to finish** |

**Receiver script:**
<div class="scratch">
when I receive [game-over v]
hide
play sound [sad-trombone v] until done
</div>

!!! info "📡 Broadcast = Event"
    Broadcasting **creates an event** that other sprites can listen for with `when I receive`. It's how sprites coordinate!

---

## Block Categories Quick Reference

Here's a **complete review** of all 10 categories and their colors:

### Quick Reference Table

| # | Category | Color | Main Job | Key Blocks |
|---|----------|-------|----------|------------|
| 1 | **Motion** | 🔵 Blue | Move, turn, position | `move`, `turn`, `go to`, `glide` |
| 2 | **Looks** | 🟣 Purple | Appearance, speech, size | `say`, `switch costume`, `change size` |
| 3 | **Sound** | 🩷 Pink | Audio playback | `play sound`, `start sound`, `change tempo` |
| 4 | **Events** | 🟡 Yellow | Start scripts | `when green flag`, `when clicked`, `broadcast` |
| 5 | **Control** | 🟠 Orange | Loops, decisions | `forever`, `repeat`, `if`, `wait` |
| 6 | **Sensing** | 🔷 Light Blue | Detect things | `touching?`, `key pressed?`, `distance to` |
| 7 | **Operators** | 🟢 Green | Math & logic | `+ - * /`, `< > =`, `and or not` |
| 8 | **Variables** | 🔴 Red | Store ONE value | `set`, `change`, `show` (score, lives) |
| 9 | **Lists** | 🟤 Dark Red | Store MANY values | `add`, `delete`, `item`, `length` |
| 10 | **My Blocks** | 🩷 Pink | Custom blocks | `define`, `parameter`, `run without refresh` |

---

### Block Color Coding — Why Colors Matter

The colors aren't random! They **group related functions**:

| Color Family | Categories | What They Share |
|--------------|------------|-----------------|
| **Blue/Blue-Green** | Motion, Sensing | **Movement & detection** (where things are) |
| **Purple/Pink** | Looks, Sound, My Blocks | **Expression & extension** (how things look/sound/custom) |
| **Yellow/Orange** | Events, Control | **Program flow** (when & how scripts run) |
| **Green** | Operators | **Calculation & logic** (math & decisions) |
| **Red/Brown** | Variables, Lists | **Data storage** (remembering things) |

!!! tip "🎨 Color = Category at a Glance"
    When you're hunting for a block, **look for the color first**! Need a loop? Look for **orange**. Need math? Look for **green**.

---

## Summary

In this chapter, you learned:

- ✅ **Multiple sprites** — each has its own scripts, costumes, sounds
- ✅ **Stage size** — 480×360, center at (0,0), edges at ±240/±180
- ✅ **Coordinate system** — X (-240 to 240), Y (-180 to 180), quadrants
- ✅ **Motion blocks** — move, turn, go to, glide, point towards, change x/y
- ✅ **Looks blocks** — say/think, costumes, size, graphic effects, show/hide
- ✅ **Event blocks** — green flag, click, key press, backdrop switch, broadcast
- ✅ **All 10 block categories** — colors, main jobs, key blocks
- ✅ **Why color coding works** — color families group related functions
- ✅ **Backdrops** — stage costumes for scene changes

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Sprite** | A programmable character/object with its own scripts, costumes, sounds |
| **Stage** | The 480×360 background where sprites perform |
| **Backdrop** | A costume for the stage (scene background) |
| **Coordinate System** | X,Y grid for positioning (-240 to 240, -180 to 180) |
| **X Coordinate** | Horizontal position (negative=left, positive=right) |
| **Y Coordinate** | Vertical position (negative=down, positive=up) |
| **Quadrant** | One of 4 stage areas based on X/Y signs |
| **Motion Block** | Blue blocks for movement and positioning |
| **Looks Block** | Purple blocks for appearance and speech |
| **Event Block** | Yellow hat blocks that start scripts |
| **Broadcast** | Sending a message to all sprites |
| `when I receive` | Hat block that runs when a broadcast is received |

---

## Try It Yourself! 🎯

**Challenge 1:** Create **3 sprites** — a Player, an Enemy, and a Coin. Name them properly!

**Challenge 2:** Make the Player **glide smoothly** to all 4 corners of the stage in a square pattern.

**Challenge 3:** Program the Arrow Keys to move a sprite (hint: `when [right arrow] key pressed` + `change x by 10`)

**Challenge 4:** Make a sprite **say "Hello!" for 2 seconds** when clicked, then **think "Hmm..." for 2 seconds**

**Challenge 5:** Use `broadcast [start-game]` when green flag clicked, and make another sprite `when I receive [start-game]` say "Ready!"

**Challenge 6:** Explore the **graphic effects** — make a sprite `change ghost effect by 25` every time it's clicked

---

## What's Next?

In **Chapter 3**, you'll discover **Motion Blocks and Block Categories** in depth. You'll learn how to combine motion blocks for complex movement patterns, create smooth animations with glide, and master the coordinate system for precise positioning!

[**→ Next Chapter: Motion Blocks and Block Categories**](../03-motion-blocks-categories/index.md)