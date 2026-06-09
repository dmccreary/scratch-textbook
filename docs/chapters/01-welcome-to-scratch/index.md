---
title: Welcome to Scratch
description: Introduces the Scratch interface, visual programming basics, and community features for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-09 10:30:00
version: 0.08
---

# Welcome to Scratch

## Summary

Introduces the Scratch interface, visual programming basics, and community features. This chapter covers 17 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 17 concepts from the learning graph:

1. Visual Programming
2. Scratch Account
3. Block Highlighting
4. Sprite
5. Stage
6. Blocks Palette
7. Code Tab
8. Costumes Tab
9. Sounds Tab
9. Toolbar
10. Zoom Controls
11. File Menu
12. Community Guidelines
13. Studio
14. Commenting
15. Remixing
16. Saving Projects
17. Sharing Projects

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

## What Is Scratch?

Scratch is a **visual programming language** designed especially for kids like you! Instead of typing complicated text code, you snap together colorful blocks — like LEGO® bricks — to create your own interactive stories, games, and animations.

### Why Visual Programming?

Think about how you build with LEGO® bricks. You don't need to know how plastic is made — you just snap bricks together to build something amazing. **Visual programming** works the same way:

- **No typing code** — You drag and drop blocks instead of typing
- **No syntax errors** — Blocks only fit together in ways that work
- **See your program run** — Watch your creation come to life instantly
- **Learn real concepts** — The ideas you learn here are used by professional programmers!

!!! tip "Did You Know?"
    Scratch was created by the **MIT Media Lab** — the same people who work on robots, new kinds of computers, and cool inventions! Over **100 million** people around the world use Scratch.

---

## The Scratch Editor — Your Creative Workspace

When you open Scratch at [scratch.mit.edu](https://scratch.mit.edu), you'll see the **editor**. Think of it as your digital art studio where you build programs.

#### Diagram: Scratch Editor Overview

<iframe src="../../sims/editor-overview/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Scratch Editor Overview</summary>
Type: diagram
**sim-id:** editor-overview<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Help students identify the main parts of the Scratch editor before they start building

Components to show:
- **Stage area** (top right) — Where your project runs
- **Sprite pane** (below stage) — Shows all your characters
- **Blocks palette** (left) — Color-coded categories of blocks
- **Code area** (center) — Where you snap blocks together
- **Tabs** (top of code area) — Code / Costumes / Sounds
- **Toolbar** (top) — File menu, save, share, green flag, stop sign

Connections:
- Arrows from blocks palette to code area showing "drag blocks here"
- Arrows from code area to stage showing "run your program"
- Arrows from sprite pane to code area showing "select sprite to program"

Style: Clean labeled diagram with color-coded regions matching Scratch's actual colors

Labels:
- "Stage (480 × 360 pixels)" on stage area
- "Drag blocks from here →" on blocks palette
- "Snap blocks together here" on code area
- "Code / Costumes / Sounds tabs" on tab bar

Color scheme: Match Scratch's actual UI colors (blue Motion, purple Looks, pink Sound, yellow Events, orange Control, light blue Sensing, green Operators, red Variables, dark red Lists, pink My Blocks)

Implementation: p5.js diagram with hover tooltips on each region. Click a region to highlight it and show a brief definition in a side panel.
</details>

---

### The Three Main Areas

The editor has **three big sections** you'll use all the time:

| Area | What It Does | How to Use It |
|------|--------------|---------------|
| **Blocks Palette** (left) | Holds all the programming blocks, organized by color and category | Click a category to see its blocks. Drag blocks into the code area. |
| **Code Area** (center) | Where you build scripts by snapping blocks together | Click a sprite first, then drag blocks here to program that sprite. |
| **Stage** (top right) | Where your project runs and you see the action | Click the green flag to start. Click the stop sign to stop. |

!!! info "💡 Pro Tip"
    The **Stage** is 480 pixels wide by 360 pixels tall. The exact center is position **(0, 0)**. X goes from -240 (left) to +240 (right). Y goes from -180 (bottom) to +180 (top).

---

### The Three Tabs — Code, Costumes, Sounds

At the top of the code area, you'll see **three tabs**. Each tab lets you work on a different part of your sprite:

#### Diagram: Three Tabs Explained

<iframe src="../../sims/three-tabs/main.html" width="100%" height="400px" scrolling="no"></iframe>

<details markdown="1">
<summary>Three Tabs Explained</summary>
Type: diagram
**sim-id:** three-tabs<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show the three tabs (Code, Costumes, Sounds) and what each is for

Components to show:
- **Code tab** (selected by default) — Scripts area, blocks palette visible
- **Costumes tab** — Costume editor with drawing tools, costume list on left
- **Sounds tab** — Sound editor with waveform, recording, and library

Connections:
- Arrow from sprite in sprite pane to each tab showing "each sprite has its own"
- Arrows between tabs showing "click to switch"

Style: Side-by-side comparison of the three tab views

Labels:
- "Program your sprite here" on Code tab
- "Draw and animate your sprite here" on Costumes tab
- "Add and edit sounds here" on Sounds tab

Color scheme: Match Scratch tab colors (Code=gray, Costumes=purple, Sounds=pink)

Implementation: p5.js interactive diagram. Click each tab to see a detailed view with labels. Hover over tools in Costumes/Sounds tabs to see tool names.
</details>

| Tab | Purpose | What You'll Do Here |
|-----|---------|---------------------|
| **Code** | Program your sprite's behavior | Snap blocks together to make your sprite move, talk, react |
| **Costumes** | Draw and edit how your sprite looks | Draw new costumes, edit existing ones, create animations |
| **Sounds** | Add and edit audio | Record your voice, choose from library, edit sound clips |

---

## Your First Sprite and the Stage

### What Is a Sprite?

A **sprite** is a character or object in your Scratch project. Every sprite can:

- **Move** around the stage
- **Change appearance** (switch costumes)
- **Make sounds**
- **React to events** (like being clicked or a key pressed)
- **Remember things** (using variables)

!!! note "🎭 Sprite Fact"
    A Scratch project can have **many sprites** — each with its own scripts, costumes, and sounds. They all share the same stage!

### The Stage

The **stage** is the background where all your sprites perform. You can:

- **Change backdrops** to set different scenes
- **Add backdrops** from the library or draw your own
- **Program the stage** itself (it can have scripts too!)

#### Diagram: Stage Coordinate System

<iframe src="../../sims/stage-coordinates/main.html" width="100%" height="450px" scrolling="no"></iframe>

<details markdown="1">
<summary>Stage Coordinate System</summary>
Type: microsim
**sim-id:** stage-coordinates<br/>
**Library:** p5.js<br/>
**Status:** Specified

Learning objective: Understand the Scratch coordinate system (x from -240 to 240, y from -180 to 180, center at 0,0)

Canvas layout:
- Full stage area (480×360) with grid overlay
- Movable sprite that shows current (x, y) coordinates
- Click anywhere on stage to move sprite and see coordinates

Visual elements:
- Stage rectangle with grid lines every 60 pixels
- X axis labeled from -240 to 240
- Y axis labeled from -180 to 180
- Center point (0, 0) marked clearly
- Sprite (cat or custom) that follows mouse or clicks
- Live coordinate display: "x: ___ y: ___"

Interactive controls:
- Click on stage to teleport sprite and see coordinates
- Toggle grid on/off
- Toggle axis labels on/off
- "Go to center" button (0, 0)
- "Go to corner" buttons (-240, 180), (240, 180), (-240, -180), (240, -180)

Default parameters:
- Grid: ON
- Labels: ON
- Sprite: Scratch cat

Data Visibility Requirements:
  Stage 1: Show empty stage with grid and axes
  Stage 2: Show sprite at center (0, 0) with coordinates displayed
  Stage 3: Show sprite at various positions with coordinate updates

Instructional Rationale: Step-through with concrete coordinate values is appropriate because the Remember/Identify objective requires learners to associate positions with specific x,y values. Interactive exploration with immediate feedback reinforces the coordinate mapping.

Implementation notes:
- Use p5.js for rendering
- Draw grid and axes with light gray lines
- Coordinate display in top-left corner
- Responsive canvas that resizes with window
</details>

---

## The Blocks Palette — Your Programming Toolbox

The **blocks palette** on the left holds all the blocks you'll use to program. Blocks are organized into **10 categories** by color:

#### Diagram: Block Categories

<iframe src="../../sims/block-categories/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Block Categories</summary>
Type: infographic
**sim-id:** block-categories<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show all 10 block categories with their colors, names, and example blocks

Layout: Vertical list of category cards, each showing:
- Category color bar
- Category name
- 3-4 example blocks with icons
- Brief description of what the category does

Categories:
1. **Motion** (medium blue) — Move, turn, glide, go to position
2. **Looks** (purple) — Say, think, switch costume, size, effects
3. **Sound** (pink) — Play sound, change tempo, volume
4. **Events** (yellow) — When green flag clicked, when key pressed, broadcast
5. **Control** (orange) — Loops, if/else, wait, stop
6. **Sensing** (light blue) — Touching, distance, key pressed, timer
7. **Operators** (green) — Math, comparison, boolean logic, random
8. **Variables** (red) — Make variable, set, change, show/hide
9. **Lists** (dark red) — Make list, add, delete, item, length
10. **My Blocks** (pink) — Define custom blocks with parameters

Interactive elements:
- Hover a category to highlight it and show more example blocks
- Click a category to expand/collapse details
- Search box to filter categories by keyword

Visual style: Modern card layout matching Scratch's actual colors
Color scheme: Exact Scratch category colors
</details>

---

| Category | Color | What It Controls |
|----------|-------|------------------|
| **Motion** | 🔵 Medium Blue | Moving, turning, positioning sprites |
| **Looks** | 🟣 Purple | Speech bubbles, costumes, size, visual effects |
| **Sound** | 🩷 Pink | Playing sounds, changing tempo, volume |
| **Events** | 🟡 Yellow | Starting scripts (green flag, clicks, keys, messages) |
| **Control** | 🟠 Orange | Loops, decisions (if/else), waiting, stopping |
| **Sensing** | 🔷 Light Blue | Detecting touches, keys, distances, timers |
| **Operators** | 🟢 Green | Math, comparisons, true/false logic, random numbers |
| **Variables** | 🔴 Red | Storing numbers (score, lives, timer) |
| **Lists** | 🟤 Dark Red | Storing collections of items (inventory, high scores) |
| **My Blocks** | 🩷 Dark Pink | Creating your own custom blocks |

!!! tip "🎯 Color Coding Helps You!"
    The **colors aren't just for looks** — they help you find blocks fast. When you see an orange block, you know it controls **program flow** (loops, decisions). When you see a green block, you know it does **math or logic**.

---

## Block Shapes — What Shape Means What Job

Blocks come in **different shapes** that tell you how they work:

#### Diagram: Block Shapes

<iframe src="../../sims/block-shapes/main.html" width="100%" height="450px" scrolling="no"></iframe>

<details markdown="1">
<summary>Block Shapes</summary>
Type: diagram
**sim-id:** block-shapes<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show the 5 block shapes and what each shape means

Components to show:
- **Hat blocks** (rounded top, flat bottom) — "When something happens, start this script"
- **Stack blocks** (puzzle piece top and bottom) — "Do this action, then go to next block"
- **Reporter blocks** (rounded rectangle, output a value) — "Give me a number or text"
- **Boolean blocks** (hexagon, output true/false) — "Answer a yes/no question"
- **Cap blocks** (flat top, rounded bottom) — "Stop this script or all scripts"

Connections:
- Arrows showing hat → stack → stack → cap (typical script flow)
- Arrows showing reporter/boolean fitting into slots in other blocks

Style: Large clear illustrations of each shape with labels

Labels:
- "Hat = STARTS a script" with examples (when green flag clicked, when key pressed)
- "Stack = DOES an action" with examples (move 10 steps, say Hello)
- "Reporter = GIVES a value" with examples (x position, pick random 1 to 10)
- "Boolean = ANSWERS true/false" with examples (touching mouse-pointer?, 5 > 3)
- "Cap = ENDS a script" with examples (stop all, stop this script)

Color scheme: Match block colors from actual Scratch

Implementation: p5.js diagram. Hover a block shape to see explanation and examples. Click to enlarge.
</details>

| Shape | Name | Job | Examples |
|-------|------|-----|----------|
| ⌢▔▔▔ | **Hat block** | **Starts** a script when something happens | `when green flag clicked`, `when this sprite clicked` |
| ▔▔▔▁ | **Stack block** | **Does** an action, then passes to next block | `move 10 steps`, `say Hello!`, `change x by 5` |
| ⬭ | **Reporter block** | **Gives** a value (number or text) | `x position`, `pick random 1 to 10`, `timer` |
| ⬡ | **Boolean block** | **Answers** true or false | `touching mouse-pointer?`, `5 > 3`, `key space pressed?` |
| ▔▔▔⌣ | **Cap block** | **Ends** a script | `stop all`, `stop this script` |

!!! note "🧩 Puzzle Pieces Fit Together"
    - **Hat blocks** only go at the **top** of a script
    - **Stack blocks** snap **together** in a chain
    - **Reporter** and **Boolean** blocks fit **inside** the white holes of other blocks
    - **Cap blocks** only go at the **bottom**

---

## Your First Script — Let's Make the Cat Move!

### Step-by-Step: Make the Cat Walk

Let's build your very first program together!

1. **Open Scratch** at [scratch.mit.edu](https://scratch.mit.edu) and click **Create**
2. **Find the Events category** (yellow) and drag `when green flag clicked` into the code area
3. **Find the Motion category** (blue) and drag `move 10 steps` under the hat block
4. **Click the green flag** 🟢 at the top of the stage
5. **Watch the cat move!** 🐱

!!! success "🎉 You Did It!"
    You just wrote your first computer program! The cat moved 10 steps to the right because `move 10 steps` means "move forward 10 pixels in the direction you're facing."

### Try These Variations

Now experiment! Try changing your script:

| Change | What Happens |
|--------|--------------|
| Change `10` to `50` | Cat moves farther each click |
| Add `turn 15 degrees` after move | Cat walks in a circle! |
| Add `wait 1 seconds` between blocks | Cat moves... pauses... moves... |
| Wrap in `forever` loop (Control) | Cat keeps walking forever! |

#### Diagram: Script Anatomy

<iframe src="../../sims/script-anatomy/main.html" width="100%" height="400px" scrolling="no"></iframe>

<details markdown="1">
<summary>Script Anatomy</summary>
Type: diagram
**sim-id:** script-anatomy<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Label the parts of a simple script so students learn the vocabulary

Components to show:
- A simple script: when green flag clicked → move 10 steps → turn 15 degrees → wait 1 seconds
- Labels pointing to each part:
  - "Hat block (starts the script)"
  - "Stack block (does an action)"
  - "Stack block (does another action)"
  - "Stack block (waits)"
  - "White bumps/holes show where blocks snap"
- Numbered order: 1, 2, 3, 4 (top to bottom)

Connections:
- Vertical flow arrows showing execution order
- Highlight showing "blocks run top to bottom"

Style: Clean annotation overlay on actual-looking Scratch blocks

Labels:
- "1. Hat block — STARTS the script"
- "2. Stack block — first action"
- "3. Stack block — second action"
- "4. Stack block — third action"
- "Blocks run in ORDER from top to bottom"

Color scheme: Match actual Scratch block colors
</details>

---

## The Toolbar — Save, Share, and More

At the very top of the editor, the **toolbar** has important buttons:

| Button | What It Does |
|--------|--------------|
| **File** | New project, save, save as, load from computer |
| **Edit** | Undo, redo, find blocks |
| **Tutorials** | Step-by-step guides for beginners |
| **🟢 Green Flag** | Start your project (runs all hat blocks) |
| **🛑 Stop Sign** | Stop everything immediately |
| **👁️ Presentation Mode** | Full-screen view for showing off |
| **💾 Save Now** | Save your work to Scratch servers |
| **📤 Share** | Publish your project for the world to see |
| **📁 Folder Icon** | See your projects |

!!! warning "⚠️ Save Often!"
    Scratch auto-saves sometimes, but **always click "Save Now" (💾)** before you close the browser or take a break. You don't want to lose your hard work!

---

## Creating a Scratch Account

To save projects online, share them with the world, and join the community, you need a **free Scratch account**:

### How to Create an Account

1. Click **Join Scratch** at the top right of the website
2. Choose a **username** (don't use your real name!)
3. Create a **password** (make it strong and memorable)
4. Enter your **birth month and year** (for safety)
5. Choose your **country**
6. Enter a **parent/guardian email** (for account recovery)
7. Click **Create Account**
8. Check your email and **confirm your account**

### Why Have an Account?

| Benefit | What You Can Do |
|---------|-----------------|
| **Save automatically** | Projects save to the cloud |
| **Access anywhere** | Log in from any computer |
| **Share projects** | Let others play and remix your work |
| **Join studios** | Collaborate with other creators |
| **Comment & heart** | Give feedback on projects you like |
| **Remix** | Build on other people's projects |

!!! info "🎨 Your Profile"
    Your profile page shows projects you've shared, studios you follow, and projects you've favorited. You can also write an "About Me" to tell people about yourself!

---

## Community Guidelines — Be Kind Online

The Scratch community is **friendly, creative, and respectful**. When you join, you agree to follow these guidelines:

#### The Scratch Community Guidelines

| Rule | What It Means |
|------|---------------|
| **Be respectful** | Treat others how you want to be treated. No bullying, teasing, or mean comments. |
| **Be constructive** | Give helpful feedback. Instead of "this is bad," try "I like this part, maybe you could add..." |
| **Share and credit** | If you remix someone's project, Scratch adds credit automatically. Always give thanks! |
| **Keep it appropriate** | No scary, violent, or inappropriate content. Scratch is for all ages. |
| **Protect privacy** | Don't share real names, addresses, phone numbers, passwords, or school names. |
| **Be honest** | Don't pretend to be someone else. Don't claim others' work as your own. |

!!! tip "🛡️ Stay Safe"
    If someone makes you feel uncomfortable, **tell a trusted adult** and **report** the user using the "Report" button. The Scratch Team reviews all reports.

---

## Studios — Collaborate and Curate

A **studio** is like a gallery or a club where people collect projects around a theme.

### What You Can Do in Studios

- **Add your projects** to studios you like
- **Follow studios** to see new projects in your "What's Happening" feed
- **Curate studios** (if you're a manager) by adding/removing projects
- **Start discussions** in the studio comments

### Studio Roles

| Role | Can Do |
|-------|--------|
| **Owner** | Everything — delete studio, promote/demote managers |
| **Manager** | Add/remove projects, invite curators, edit studio description |
| **Curator** | Add projects, comment, follow |
| **Follower** | See updates, comment |

!!! example "🎨 Studio Ideas"
    - "Best Platformer Games"
    - "Animations About Space"
    - "Projects Using Clones"
    - "My School's Coding Club"

---

## Commenting — Share Your Thoughts

You can **comment** on projects and studios to:

- **Give compliments** — "I love how you made the cat jump!"
- **Ask questions** — "How did you make the score counter?"
- **Give suggestions** — "Maybe add a high score list?"
- **Report bugs** — "The game freezes when I press space"

### Good Commenting Tips

| Do | Don't |
|----|-------|
| Be specific about what you liked | Say "cool" without details |
| Ask polite questions | Demand features |
| Suggest ideas kindly | Criticize harshly |
| Use emojis to show tone 😊 | Use all caps (IT LOOKS LIKE SHOUTING) |

!!! warning "🚫 No Spam"
    Don't post the same comment many times. Don't advertise your projects in other people's comments. That's called "spam" and it's not allowed.

---

## Remixing — Build on Others' Ideas

**Remixing** means taking someone else's project, making your own changes, and sharing it as a new project. It's how programmers learn from each other!

### How to Remix

1. Find a project you like
2. Click **See Inside** to view the code
3. Click **Remix** (creates your own copy)
4. Make changes — add levels, change sprites, fix bugs, add features
5. **Share** your remix with a new name
6. **Credit automatically added** — Scratch adds "Remixed from [original project]" 

### Why Remix?

| Reason | Example |
|--------|---------|
| **Learn by example** | See how a platformer game works, then build your own |
| **Add your twist** | Turn a maze game into a space adventure |
| **Fix bugs** | Found a glitch? Fix it and share the improvement |
| **Collaborate** | Take turns adding features with friends |

!!! note "⚖️ Remixing Etiquette"
    - Always **credit the original creator** (Scratch does this automatically)
    - Make **meaningful changes** — don't just change the name
    - **Thank the creator** in your project notes
    - Check if the creator allows remixing (most do!)

---

## Saving and Sharing Projects

### Saving Your Work

| Method | How To | When to Use |
|--------|--------|-------------|
| **Save Now** (💾) | Click the save icon in toolbar | Every 10-15 minutes, before closing browser |
| **File → Save Now** | Menu option | Same as above |
| **File → Save As** | Save a copy with new name | Before making big changes, so you have a backup |

!!! tip "💾 Keyboard Shortcut"
    Press **Ctrl+S** (Windows/Linux) or **Cmd+S** (Mac) to save quickly!

### Sharing Your Project

When your project is ready for the world:

1. Click **Share** (📤) in the toolbar
2. Add a **title** and **instructions** (how to play/use)
3. Add **tags** (like "game", "animation", "music") so people can find it
4. Choose **visibility** (anyone, only people with link, or private)
5. Click **Share**

### What Happens When You Share?

- Your project gets its own **project page** with a unique URL
- Others can **play, heart, comment, and remix** it
- It appears in **search results** and **category pages**
- You can **embed it** on websites with the embed code

!!! success "🌟 You're a Creator Now!"
    Sharing your first project is a big moment. Be proud! Every expert programmer started with a simple "Hello World" project.

---

## The File Menu — More Options

Click **File** in the toolbar for these options:

| Option | What It Does |
|--------|--------------|
| **New** | Start a fresh project (clears current) |
| **Save Now** | Save to Scratch servers |
| **Save As** | Save a copy with a new name |
| **Load from Computer** | Open a `.sb3` file you downloaded |
| **Download to Computer** | Save project as `.sb3` file (backup!) |
| **Project Info** | Edit title, description, tags, visibility |

!!! tip "📥 Backup Your Work"
    Use **File → Download to Computer** to save a `.sb3` file on your computer. If something happens to your online account, you still have your project!

---

## Zoom Controls — See More or See Closer

In the bottom-right of the code area, you'll see **zoom controls**:

| Control | What It Does |
|---------|--------------|
| **+ (plus)** | Zoom in (blocks get bigger) |
| **− (minus)** | Zoom out (see more blocks at once) |
| **Reset (100%)** | Back to normal size |

!!! tip "🔍 Zoom Tips"
    - **Zoom in** when building detailed scripts
    - **Zoom out** when you have lots of blocks and want to see the whole script
    - Double-click empty space in code area to **center** your script

---

## Block Highlighting — See Your Code Run

When you click the green flag, Scratch **highlights each block** as it runs:

- The **current block** glows bright yellow
- You can **see the flow** of your program
- If something goes wrong, you can **spot where it stopped**

!!! info "🐞 Debugging Superpower"
    Block highlighting is your best debugging tool! If your sprite doesn't do what you expect, watch the highlighting. The bug is usually at the last highlighted block or the one right after it.

---

## Summary

In this chapter, you learned:

- ✅ **What Scratch is** — visual programming with colorful blocks
- ✅ **The editor layout** — stage, sprite pane, blocks palette, code area, toolbar
- ✅ **Three tabs** — Code (program), Costumes (draw), Sounds (audio)
- ✅ **Sprites and Stage** — characters and background with x,y coordinates
- ✅ **10 block categories** — color-coded by function
- ✅ **5 block shapes** — hat, stack, reporter, boolean, cap
- ✅ **Your first script** — make the cat move with green flag + move block
- ✅ **Toolbar** — save, share, green flag, stop sign, zoom
- ✅ **Scratch account** — save online, share, join community
- ✅ **Community guidelines** — be kind, constructive, safe
- ✅ **Studios** — curated collections for collaboration
- ✅ **Commenting** — give helpful feedback
- ✅ **Remixing** — learn by building on others' work
- ✅ **Saving & sharing** — save often, share when proud
- ✅ **File menu** — new, save as, download backup
- ✅ **Zoom & highlighting** — see your code up close and running

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Visual Programming** | Programming by snapping blocks instead of typing text |
| **Sprite** | A character or object you can program in Scratch |
| **Stage** | The background area where sprites perform (480×360 pixels) |
| **Block** | A puzzle-piece command that does something |
| **Script** | A stack of blocks that runs from top to bottom |
| **Hat Block** | Starts a script when an event happens |
| **Stack Block** | Does an action and passes to the next block |
| **Costume** | A picture that shows how a sprite looks |
| **Backdrop** | A picture that shows the stage background |
| **Remix** | Make your own version of someone else's project |

---

## Try It Yourself! 🎯

**Challenge 1:** Make the cat move in a **square** (hint: move, turn 90°, repeat 4 times)

**Challenge 2:** Make the cat **say your name** when you click the green flag (hint: Looks → `say` block)

**Challenge 3:** **Draw a new costume** for the cat in the Costumes tab (hint: click "Convert to Bitmap" to use paint tools)

**Challenge 4:** **Create a Scratch account** and save your first project

---

??? note "🤔 Quick Quiz - Click to Check Answers"
    **Q1:** What shape is a block that *starts* a script?
    **A:** Hat block (rounded top)
    
    **Q2:** What color are Motion blocks?
    **A:** Medium blue 🔵
    
    **Q3:** Where is the center of the stage?
    **A:** x: 0, y: 0
    
    **Q4:** What block shape gives a true/false answer?
    **A:** Boolean block (hexagon ⬡)
    
    **Q5:** What does the green flag do?
    **A:** Starts all scripts that begin with "when green flag clicked"

---

## What's Next?

In **Chapter 2**, you'll learn about **sprites, the stage, and the coordinate system** in detail. You'll discover how to position sprites exactly where you want them, make them glide smoothly, and understand the x,y coordinate system that makes all motion possible!

[**→ Next Chapter: Sprites, Stage, and the Coordinate System**](../02-sprites-stage-coordinates/index.md)