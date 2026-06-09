---
title: Advanced Control and Operators
description: Explores complex loops, Boolean logic, clone management, and physical computing extensions for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-10 10:00:00
version: 0.08
---

# Advanced Control and Operators

## Summary

Explores complex loops, Boolean logic, clone management, and physical computing extensions. This chapter covers 25 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Reusability
2. Run Without Screen Refresh
3. Drawing Trails
4. Rainbow Lines
5. Camera Games
6. Credit Attribution
7. Remix Tree
8. Pseudocode
9. Stamp
10. Unpredictable Gameplay
11. Error Detection
12. Infinite Loop Detection
13. Lip Sync Animation
14. Scene Coordination
15. Dialogue Timing
16. Delete This Clone
17. Clone Behavior
18. Event Queue
19. Condition Controlled Loop
20. And Operator
21. Or Operator
22. Not Operator
23. Score Variable
24. Lives Variable
25. Timer Variable

## Prerequisites

This chapter builds on concepts from:

- [1. Welcome to Scratch](../01-welcome-to-scratch/index.md)
- [2. Sprites, Stage, and the Coordinate System](../02-sprites-stage-coordinates/index.md)
- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)
- [5. Sounds, Extensions, and Sharing Projects](../05-sounds-extensions-sharing/index.md)
- [6. Broadcasting, Conditionals, and Sensing](../06-broadcasting-conditionals-sensing/index.md)
- [7. Variables, Lists, and Data Management](../07-variables-lists-data/index.md)
- [8. Animation, Parallelism, and Debugging](../08-animation-parallelism-debugging/index.md)

---

## Reusability — Write Once, Use Everywhere!

### What Is Reusability?

**Reusability** = writing code **once** and using it **many times** in different places or projects!

### The Reusability Ladder

| Level | What It Looks Like | Benefit |
|-------|-------------------|---------|
| **Copy-paste** | Duplicate blocks everywhere | Fast but hard to fix |
| **Custom blocks** | `define jump` used 10 times | Fix once, updates everywhere |
| **Backpack** | Save to 🎒, use in any project | Universal tools |
| **Extensions** | Share with community | Help others too! |

---

### Making Code Reusable

#### 1. Custom Blocks (Best for Same Project)

```
define jump (height)
change y by (height)
wait 0.2 secs
change y by (height * -1)
```

**Use anywhere:** `jump (100)`, `jump (20)`, `jump (50)`

#### 2. Backpack (Best for Across Projects)

1. Build perfect script
2. Drag to 🎒 Backpack
3. Open new project → drag from Backpack

#### 3. Remix + Modify

1. Find project with cool feature
2. Remix it
3. Extract just what you need
4. Save to Backpack

---

### Reusability Checklist

| ✅ Reusable Code... | ❌ Not Reusable... |
|---------------------|-------------------|
| Has parameters (inputs) | Hardcoded values everywhere |
| Does ONE thing well | Does 5 things at once |
| Clear name: `draw-polygon` | Vague name: `script1` |
| Works standalone | Depends on specific sprites |
| Commented! | Mystery code |

---

## Run Without Screen Refresh — Turbo Mode! ⚡

### What Is "Run Without Screen Refresh"?

**Turbo mode** for custom blocks — runs **instantly in one frame** instead of animating step-by-step!

### How to Enable

1. **Make a Block** in My Blocks (🩷 Pink)
2. Click **Options** (gear icon)
3. Check **"Run without screen refresh"**
4. Click OK

---

### When to Use Turbo Mode ✅

| Use Case | Why Turbo |
|----------|-----------|
| **Math calculations** | Instant result, no animation needed |
| **Setup/initialization** | Instant ready state |
| **Level generation** | Build entire level in one frame |
| **Data processing** | Sort lists, filter arrays |
| **Complex math** | Physics calculations, pathfinding |

---

### When NOT to Use Turbo ❌

| Use Case | Why Not Turbo |
|----------|---------------|
| **Animations** | Player WON'T see movement! |
| **Visual effects** | Particles, trails need time |
| **Player feedback** | Jump, hit effects need to be seen |
| **Step-by-step tutorials** | Player needs to see each step |

---

### Turbo Mode Example

```
define generate-level (width) (height)  // Turbo ON!
// Generates entire 100x100 platformer level in 1 frame
repeat (width)
    repeat (height)
        if < (pick random 1 to 10) < 3 > then
            add [platform] to [level-data v]
        else
            add [empty] to [level-data v]
        end
    end
end
```

**Generates 10,000 tiles in ONE frame!** ⚡

---

### Turbo + Backpack = Universal Tools!

```
define quick-sort (list)  // Turbo ON!
// Sort any list instantly
```

**Save to Backpack → use in ANY project for instant sorting!**

---

## Drawing Trails — Pen Magic! 🎨

### Pen Extension Recap

**Extensions → Pen → Add** → green **Pen** category!

### Pen Drawing Blocks

| Block | What It Does |
|-------|--------------|
| `pen down` | Start drawing |
| `pen up` | Stop drawing |
| `erase all` | Clear everything |
| `stamp` | Leave costume copy as drawing |
| `set pen color to [color]` | Set exact color |
| `change pen color by (10)` | Cycle colors |
| `set pen size to (5)` | Line thickness |

---

### Drawing Trails = Move + Pen Down!

```
pen down
repeat (360)
    move 10 steps
    turn 1 degrees
end
pen up
```

**Every step leaves a trail!** Creates a circle.

---

### Trail Patterns

| Pattern | Code | Result |
|---------|------|--------|
| **Circle** | `repeat 360: move 1, turn 1` | Perfect circle |
| **Spiral** | `repeat 360: move 2, turn 1, change color by 1` | Colorful spiral |
| **Polygon** | `repeat sides: move size, turn 360/sides` | Any polygon |
| **Star** | `repeat 5: move 100, turn 144` | 5-pointed star |
| **Flower** | `repeat 36: move 100, turn 170` | Flower pattern |

---

### Trail Effects

| Effect | Code |
|--------|------|
| **Rainbow trail** | `change pen color by 1` each step |
| **Fading trail** | `change pen size by -0.1` each step |
| **Dotted line** | `pen down, move 5, pen up, move 5` |
| **Thick to thin** | `change pen size by -0.1` each step |

---

## Rainbow Lines — Colorful Drawing! 🌈

### Change Pen Color by (10)

```
change pen color by (10)
```

**Cycles through color spectrum** (0-200) — creates rainbow!

---

### Rainbow Pen Pattern

```
when green flag clicked
erase all
pen down
set pen size to 5
repeat 720
    move 5 steps
    turn 1 degrees
    change pen color by 1
end
pen up
```

**Draws a beautiful rainbow spiral!** 🌈

---

### Rainbow Variations

| Variation | Code Change |
|-----------|-------------|
| **Thick rainbow** | `set pen size to 10` |
| **Thin rainbow** | `set pen size to 1` |
| **Double rainbow** | Two spirals, opposite directions |
| **Rainbow star** | `repeat 5: move 100, turn 144, change color by 40` |
| **Rainbow flower** | `repeat 36: move 100, turn 170, change color by 10` |

---

### Rainbow + Stamp = Magic! ✨

```
repeat 60
    move 50 steps
    stamp
    turn 6 degrees
    change pen color by 3
    change pen size by -0.1
end
```

**Stamps leave rainbow copies of sprite!** 🌈✨

---

## Camera Games — Body as Controller! 📷

### Video Sensing Extension

**Extensions → Video Sensing → Add** → purple **Video Sensing** category!

### Video Sensing Blocks Recap

| Block | What It Does |
|-------|--------------|
| `turn video [on v]` | Start camera |
| `video [on v] on [stage v]` | Show/hide video |
| `video transparency (50)` | See-through amount |
| `video [motion v] on [this sprite v]` | Motion amount (0-100) |
| `when video [motion] > (50)` | Hat: motion detected |

---

### Camera Game Ideas

| Game Type | How It Works |
|-----------|--------------|
| **Body Pong** | Paddle follows your hand |
| **Dance Game** | Copy poses on screen |
| **Virtual Mirror** | Sprite copies your moves |
| **Motion Dodge** | Lean left/right to dodge |
| **Conduct Music** | Wave arms = change tempo |
| **Pop Bubbles** | Pop bubbles with hands |

---

### Camera Game Examples

#### Simple Motion Mirror

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

**Wave at camera → sprite reacts!** 👋

---

#### Hand-Controlled Sprite

```
when green flag clicked
turn video on
forever
    // Sprite follows motion
    if <video [motion] on [this sprite] > 20> then
        // Move toward motion center
        // (Requires additional logic for position)
        change color effect by 5
    end
end
```

---

#### Beat Detection (Advanced)

```
when green flag clicked
turn video on
forever
    if <video [motion] on [this sprite] > 50> then
        change color effect by 25
        play sound [drum v]
        wait 0.2 secs
        clear graphic effects
    end
end
```

**Dance to the beat!** 🎵🕺

---

## Credit Attribution — Give Credit! 🙏

### Why Credit Matters

**Remixing** = building on others' work. **Credit** = acknowledging their contribution!

### Scratch Auto-Credit

When you **Remix** a project, Scratch **automatically adds**:

> "Remixed from [Original Project] by [Creator]"

---

### Manual Credit (When Building from Scratch)

| Source | How to Credit |
|--------|---------------|
| **Code pattern** | "Jump physics from @CoderJane's tutorial" |
| **Art/Sprites** | "Character art by @PixelArtist on Scratch" |
| **Music/Sounds** | "Music: 'Adventure' by Kevin MacLeod (incompetech.com)" |
| **Sound Effects** | "Coin sound from freesound.org user @AudioMaker" |
| **Ideas/Mechanics** | "Enemy AI inspired by @GameDevPro's 'Enemy AI' project" |

---

### Credit in Project Page

```
## Credits
- **Programming**: Me
- **Art**: Me (except enemy sprites by @PixelArtist)
- **Music**: "Adventure" by Kevin MacLeod (CC BY 4.0)
- **Sounds**: Coin sound from freesound.org
- **Inspiration**: Enemy AI pattern from @GameDevPro's "Enemy AI"
- **Tutorials**: Jump physics from @CoderJane's "Platformer Physics"
```

---

### Credit in Code (Comments)

```
define jump (height)  // Jump physics adapted from @CoderJane's platformer tutorial
change y by (height)
wait 0.2 secs
change y by (height * -1)
```

---

### Credit Etiquette

| ✅ Do | ❌ Don't |
|-------|----------|
| Credit in project notes | Claim 100% original |
| Credit in code comments | Remove original credits when remixing |
| Link to original | Hide credits in hard-to-find places |
| Thank creators | Claim others' work as yours |

---

## Remix Tree — Your Project's Family Tree! 🌳

### What Is a Remix Tree?

**Remix Tree** = visual family tree showing **your project → its remixes → their remixes → etc.!**

### Viewing Remix Tree

1. Go to your **project page**
2. Click **Remix Tree** button (tree icon)
3. Explore the family!

---

### Remix Tree Features

| Feature | What It Shows |
|---------|---------------|
| **Direct remixes** | Projects directly remixed from yours |
| **Grand-remixes** | Remixes of remixes (2nd generation) |
| **Stats** | Views, loves, favorites for each branch |
| **Timeline** | When each remix was created |

---

### Why Remix Tree Matters

| Insight | Value |
|---------|-------|
| **Impact** | How far your idea spread |
| **Inspiration** | See how others extended your idea |
| **Community** | Connect with remixers |
| **Learning** | See different takes on your concept |

---

## Pseudocode — Plan Before Code! 📝

### What Is Pseudocode?

**Pseudocode** = writing your algorithm in **plain English** (or your language) **before** coding!

### Why Pseudocode?

| Benefit | Explanation |
|---------|-------------|
| **Think first** | Plan logic without syntax errors |
| **Share with team** | Non-coders can review |
| **Catch bugs early** | Logic errors caught before coding |
| **Language agnostic** | Works for any programming language |

---

### Pseudocode Examples

#### Player Jump (Pseudocode)

```
WHEN green flag clicked:
    SET velocity-y to 0
    FOREVER:
        IF space pressed AND onGround:
            SET velocity-y to JUMP_POWER
        END IF
        
        // Apply gravity
        CHANGE velocity-y by GRAVITY
        
        // Move player
        CHANGE y by velocity-y
        
        // Ground check
        IF touching ground:
            SET velocity-y to 0
            SET onGround to TRUE
        ELSE:
            SET onGround to FALSE
        END IF
    END FOREVER
```

#### Enemy Patrol (Pseudocode)

```
WHEN green flag clicked:
    FOREVER:
        MOVE forward 2 steps
        IF touching EDGE OR NOT touching ground:
            TURN 180 degrees
        END IF
        
        IF distance to PLAYER < 200:
            BROADCAST "chase-player"
        END IF
    END FOREVER
```

---

### Pseudocode → Scratch Blocks

| Pseudocode | Scratch Blocks |
|------------|----------------|
| `IF condition:` | `if <condition> then` |
| `ELSE:` | `else` |
| `END IF` | `end` |
| `FOREVER:` | `forever` |
| `REPEAT N times:` | `repeat (N)` |
| `SET var TO value:` | `set [var] to (value)` |
| `CHANGE var BY amount:` | `change [var] by (amount)` |
| `BROADCAST message:` | `broadcast [message]` |
| `WAIT seconds:` | `wait (secs) secs` |

---

### Pseudocode Template

```
PROJECT: [Game Name]
GOAL: [What player does]

MAIN LOOP (when green flag clicked):
    SETUP: initialize variables, positions
    FOREVER:
        INPUT: check keys, sensors
        UPDATE: physics, AI, movement
        CHECK: collisions, win/lose
        RENDER: costumes, effects, UI
    END FOREVER

FUNCTIONS (custom blocks):
- define jump (height): ...
- define spawn-enemy (type): ...
- define check-collision (sprite): ...
```

---

## Stamp — Leave Your Mark! 🖼️

### Stamp Block (Pen → Green)

```
stamp
```

**Leaves a copy of current costume** as a permanent drawing on stage!

---

### Stamp vs Pen Down

| Feature | `stamp` | `pen down` |
|---------|---------|------------|
| **What it draws** | Current costume | Line trail |
| **Sprite orientation** | Matches sprite rotation | Follows movement path |
| **Size** | Matches sprite size | Pen size setting |
| **Color effects** | Includes ghost, color, etc. | Pen color only |

---

### Stamp Examples

#### Stamp Circle (Flower)

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

**12 stamps in a circle = flower!** 🌸

#### Stamp Trail (Particle Effect)

```
when I start as a clone
go to x: (pick random -200 to 200) y: 180
repeat 20
    stamp
    change y by -10
    change ghost effect by 5
    wait 0.05 secs
end
delete this clone
```

**Falling particle trail!** ✨

---

### Stamp Patterns

| Pattern | Code |
|---------|------|
| **Circle** | `repeat 12: move 100, stamp, turn 30` |
| **Spiral** | `repeat 50: move 10, stamp, turn 20, change size by -2` |
| **Grid** | `repeat 5: repeat 5: move 50, stamp, turn 0, end, go to next row` |
| **Explosion** | `repeat 20: stamp, turn 18, change ghost by 5` |

---

## Unpredictable Gameplay — Randomness = Replayability! 🎲

### Why Unpredictability?

**Predictable games get boring. Randomness = infinite replayability!**

### Sources of Randomness

| Source | Block | Use For |
|--------|-------|---------|
| **Random position** | `pick random -200 to 200` | Spawn locations |
| **Random timing** | `pick random 1 to 5` | Spawn intervals |
| **Random type** | `pick random 1 to 3` | Enemy variety |
| **Random reward** | `pick random 1 to 100` | Loot tables |
| **Random movement** | `pick random -10 to 10` | Wandering AI |

---

### Controlled Randomness

**Pure randomness can feel unfair. Control it!**

| Technique | How |
|-----------|-----|
| **Weighted random** | `if <pick random 1 to 100 < 20> then rare else common` |
| **Guaranteed drops** | `if <kills = 10> then guaranteed rare` |
| **Shuffle bag** | Fill list, shuffle, pull sequentially |
| **Pseudo-random seed** | Same seed = same sequence (for replays) |

---

### Unpredictable Gameplay Examples

#### Random Enemy Spawner

```
when green flag clicked
forever
    wait (pick random 1 to 3) secs
    create clone of [enemy v]
end

when I start as a clone
go to x: (pick random -200 to 200) y: 180
set [type v] to (pick random 1 to 3)  // 1=fast, 2=strong, 3=fast+strong
```

#### Random Loot (Weighted)

```
set [roll v] to (pick random 1 to 100)
if < (roll) < 50 > then
    add [common-sword] to [inventory v]      // 50%
else
    if < (roll) < 80 > then
        add [uncommon-shield] to [inventory v]  // 30%
    else
        if < (roll) < 95 > then
            add [rare-potion] to [inventory v]   // 15%
        else
            add [legendary-ring] to [inventory v] // 5%
        end
    end
end
```

#### Procedural Level Generation

```
define generate-level
delete all of [level-data v]
repeat (20)    // 20 columns
    set [height v] to (pick random 2 to 8)
    repeat (height)
        add [block] to [level-data v]
    end
    repeat (10 - height)
        add [empty] to [level-data v]
    end
end
```

---

## Error Detection — Catch Bugs Early! 🐛

### What Is Error Detection?

**Error detection** = code that **notices when something's wrong** and handles it!

### Common Error Types

| Error Type | Example | Detection |
|------------|---------|-----------|
| **Division by zero** | `10 / (score - score)` | Check denominator ≠ 0 |
| **List index out of range** | `item (10) of [list]` when length=5 | Check `length of list` first |
| **Variable not initialized** | Using `score` before `set score to 0` | Check `score` exists |
| **Infinite loop** | `forever` without `wait` | Add `wait 0.01 secs` |
| **Division by zero** | `10 / (x - x)` | Check denominator ≠ 0 |

---

### Defensive Coding Patterns

#### Check Before Divide

```
if < (denominator) = 0 > then
    set [result v] to (0)    // Or handle error
else
    set [result v] to ( (numerator) / (denominator) )
end
```

#### Check List Bounds

```
if < (index) > (length of [list v]) > then
    say [Index out of range!] for 2 secs
else
    set [item v] to (item (index) of [list v])
end
```

#### Initialize Variables

```
when green flag clicked
set [score v] to (0)        // ALWAYS initialize!
set [lives v] to (3)
set [level v] to (1)
```

---

### Error Detection in Game Loops

```
forever
    // Safe movement
    if < (x position) > 220 > then
        set x to 220
    end
    if < (x position) < -220 > then
        set x to -220
    end
    
    // Safe variable access
    if < (length of [inventory v]) > 0 > then
        // Safe to access items
    end
end
```

---

## Infinite Loop Detection — Stop the Freeze! ⚠️

### What Causes Infinite Loops?

| Cause | Example | Fix |
|-------|---------|-----|
| **`forever` without `wait`** | `forever { change x by 1 }` | Add `wait 0.01 secs` |
| **`repeat until` never true** | `repeat until <x > 100>` but x never changes | Ensure variable changes |
| **Recursive broadcast** | A broadcasts B, B broadcasts A | Use flags to prevent cycles |
| **Clone explosion** | `forever { create clone }` no limit | Add spawn limit/cooldown |

---

### Infinite Loop Prevention

| Pattern | Safe Version |
|---------|--------------|
| `forever { move 10 }` | `forever { move 10, wait 0.01 secs }` |
| `repeat until <x > 100> { }` | Ensure x changes inside! |
| `forever { broadcast [A] }` | `forever { broadcast [A], wait 1 secs }` |

---

### Infinite Loop Detection Script

```
when green flag clicked
forever
    if < (frame-count) > 10000 > then
        say [Possible infinite loop!] for 2 secs
        stop [all v]
    end
    change [frame-count v] by (1)
    wait 0.01 secs
end
```

**Frame counter watchdog** — stops project if too many frames!

---

## Lip Sync Animation — Talking Characters! 👄

### What Is Lip Sync?

**Lip sync** = animating sprite's mouth to match speech!

### Lip Sync Approaches

| Method | How It Works |
|--------|--------------|
| **Costume swap** | Switch mouth costumes (closed, open, wide) |
| **Text to Speech + timing** | Estimate duration, swap mouths |
| **Sound analysis** | (Advanced) Analyze sound volume |

---

### Simple Lip Sync (Costume Swap)

```
define speak (text)
switch costume to [mouth-open v]
speak (text)
wait (length of text * 0.1) secs  // Estimate duration
switch costume to [mouth-closed v]
```

### Costume Setup for Lip Sync

| Costume Name | Mouth Shape |
|--------------|-------------|
| `mouth-closed` | Neutral/closed |
| `mouth-open` | Wide open (A, O) |
| `mouth-small` | Small open (E, I) |
| `mouth-wide` | Very wide (Ah, Oh) |

---

### Lip Sync with Text to Speech

```
define say-with-lip-sync (text)
switch costume to [mouth-open v]
speak (text) and wait
switch costume to [mouth-closed v]
```

**Costume changes sync with speech!** 🗣️

---

## Scene Coordination — Multi-Scene Stories!

### What Is Scene Coordination?

**Scene coordination** = managing transitions between scenes, levels, cutscenes!

### Scene Coordination Patterns

| Pattern | How It Works |
|---------|--------------|
| **Broadcast chain** | `broadcast [scene1] and wait` → `broadcast [scene2]` |
| **Backdrop switch** | `switch backdrop to [scene2]` + `broadcast [scene2-ready]` |
| **State variable** | `set [scene v] to [2]` → scripts check `scene` variable |
| **Scene manager sprite** | One sprite controls all transitions |

---

### Scene Coordination Example

```
when green flag clicked
broadcast [intro-scene v] and wait
wait 2 secs
broadcast [level1-load v] and wait
broadcast [game-start v]

when I receive [intro-scene v]
switch backdrop to [intro v]
speak [Welcome to Adventure!] and wait
broadcast [intro-done v]

when I receive [level1-load v]
switch backdrop to [level1 v]
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
```

---

## Dialogue Timing — Conversations That Flow! 💬

### What Is Dialogue Timing?

**Dialogue timing** = making character conversations feel natural with proper pauses!

### Dialogue Timing Techniques

| Technique | Code |
|---------|------|
| **Speak and wait** | `speak [Hello!] and wait` |
| **Speak, pause, speak** | `speak [Hi!] and wait, wait 1 secs, speak [How are you?]` |
| **Character switching** | `broadcast [char1-speak] and wait, broadcast [char2-speak] and wait` |
| **Interrupt** | `speak [Wait!] for 0.5 secs` (short, urgent) |

---

### Dialogue Timing Example

```
when I receive [start-dialogue v]
speak [Hello there, traveler!] and wait
wait 1 secs
speak [What brings you to our village?] and wait
wait 0.5 secs
broadcast [player-response v] and wait
speak [Ah, I see!] and wait
wait 0.5 secs
speak [Well, good luck on your journey!] and wait
```

---

### Natural Dialogue Tips

| Tip | Code |
|-----|------|
| **Vary pause length** | `wait (pick random 0.5 to 1.5) secs` |
| **Short for urgency** | `speak [Run!] for 0.3 secs` |
| **Long for thought** | `wait 2 secs, speak [Hmm...]` |
| **Overlap (advanced)** | `speak [Hi] and wait` + simultaneous `broadcast [nod]` |

---

## Delete This Clone — Clean Up! 🗑️

### Delete This Clone Block

```
delete this clone
```

**Removes the clone running this script** — only works inside clone scripts!

---

### When to Delete Clones

| Situation | Delete Code |
|-----------|-------------|
| **Off-screen** | `if < (y position) < -200 > then delete this clone` |
| **Hit something** | `if <touching [player v]?> then delete this clone` |
| **Lifetime expired** | `wait 10 secs, delete this clone` |
| **Reached target** | `if <distance to [target] < 5> then delete this clone` |

---

### Delete This Clone Examples

#### Falling Debris (Delete on Ground)

```
when I start as a clone
go to x: (pick random -200 to 200) y: 180
forever
    change y by -5
    if <touching [ground v]?> then
        wait 1 secs
        delete this clone
    end
end
```

#### Projectile (Delete on Hit)

```
when I start as a clone
point towards [player v]
forever
    move 10 steps
    if <touching [player v]?> then
        broadcast [player-hit v]
        delete this clone
    end
    if <touching [edge v]?> then
        delete this clone
    end
end
```

#### Particle Effect (Lifetime)

```
when I start as a clone
repeat 30
    stamp
    change ghost effect by 3
    change y by -2
    wait 0.05 secs
end
delete this clone
```

---

### ⚠️ Delete This Clone Rules

| Rule | Explanation |
|------|-------------|
| **Only in clone scripts** | Won't work in original sprite scripts |
| **Stops script immediately** | Code after `delete this clone` won't run |
| **Original unaffected** | Only deletes the clone running it |

---

## Clone Behavior — Smart Clones!

### What Is Clone Behavior?

**Clone behavior** = the logic that runs for **each clone** (via `when I start as a clone`).

### Clone Behavior Patterns

| Pattern | Description |
|---------|-------------|
| **Physics object** | Gravity, velocity, collision, delete on ground |
| **Particle** | Short life, fade out, stamp trail |
| **Enemy** | AI: patrol, chase, shoot, delete on death |
| **Projectile** | Move forward, delete on hit/wall |
| **Follower** | Follow leader with offset |

---

### Clone Behavior Template

```
when I start as a clone
// 1. INITIALIZE
go to x: (random) y: (random)
set [velocity-x v] to (0)
set [velocity-y v] to (0)
switch costume to [default v]
show

// 2. MAIN LOOP
forever
    // PHYSICS
    change [velocity-y v] by (-0.5)   // Gravity
    change x by (velocity-x)
    change y by (velocity-y)
    
    // BEHAVIOR
    // ... specific to clone type ...
    
    // CLEANUP CHECKS
    if <touching [edge v]?> then
        delete this clone
    end
    if <touching [player v]?> then
        broadcast [player-hit v]
        delete this clone
    end
end
```

---

### Clone Behavior Types

| Type | Key Behaviors |
|------|---------------|
| **Falling debris** | Gravity → delete on ground |
| **Particle** | Short life → fade → delete |
| **Projectile** | Move forward → delete on hit/wall |
| **Enemy** | AI → chase/patrol → delete on death |
| **Power-up** | Float → bob → delete on collect |

---

## Event Queue — Order of Events! 📋

### What Is an Event Queue?

**Event queue** = the internal list of events waiting to be processed. Scratch processes events **in order received**.

### Event Processing Order

| Priority | Event Type |
|----------|------------|
| 1 | Green flag (highest) |
| 2 | Key pressed / Sprite clicked |
| 3 | Broadcast received |
| 4 | Clone created |
| 5 | Video motion / Sensor events |

### Event Queue Behavior

| Behavior | Explanation |
|----------|-------------|
| **FIFO** | First In, First Out — order received |
| **Broadcast and wait** | Pauses sender until ALL receivers done |
| **Async broadcast** | Sender continues, receivers queued |
| **Simultaneous events** | Processed in queue order |

---

### Event Queue Example

```
when green flag clicked
broadcast [setup v] and wait    // Waits for ALL receivers
broadcast [spawn v] and wait    // Waits for ALL receivers  
broadcast [go v]                // Fire and forget

when I receive [setup v]
set [score v] to (0)

when I receive [spawn v]
create clone of [enemy v]

when I receive [go v]
forever
    // Game loop
end
```

**Order: setup → spawn → go (sequential due to "and wait")**

---

## Condition Controlled Loop — Repeat Until!

### Repeat Until Loop (Control → Orange)

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

#### Chase Until Close

```
repeat until <distance to [target v] < 20>
    point towards [target v]
    move 3 steps
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

| Loop | Stops When... |
|------|---------------|
| `repeat (10)` | After exactly 10 times |
| `forever` | Never (manual stop) |
| `repeat until <cond>` | Condition becomes TRUE |

---

## And Operator — Both Must Be True!

### And Block (Operators → Green)

```
< <condition1> and <condition2> >
```

**TRUE only if BOTH conditions are TRUE.**

### And Examples

#### Both Conditions Required

```
if <touching [coin v]?> and < (lives) > 0 > then
    change [score v] by (10)
end
```

#### Multiple Safety Checks

```
if <key [space] pressed?> and <touching [ground v]?> then
    // Jump only if on ground AND space pressed
end
```

#### Complex Conditions

```
if < (score) > 100 > and < (lives) > 0 > and <not <touching [spike v]?>> then
    broadcast [bonus-level v]
end
```

---

### And Truth Table

| A | B | A AND B |
|---|---|---------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

---

## Or Operator — At Least One True!

### Or Block (Operators → Green)

```
< <condition1> or <condition2> >
```

**TRUE if AT LEAST ONE condition is TRUE.**

### Or Examples

#### Either Condition Works

```
if <touching [spike v]?> or <touching [lava v]?> then
    broadcast [player-hit v]
end
```

#### Multiple Triggers

```
if <key [space] pressed?> or <key [w] pressed?> then
    // Jump with Space OR W
end
```

#### Alternate Conditions

```
if <touching [enemy v]?> or < (lives) = 0 > then
    broadcast [game-over v]
end
```

---

### Or Truth Table

| A | B | A OR B |
|---|---|--------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

---

## Not Operator — Flip It!

### Not Block (Operators → Green)

```
not <condition>
```

**Flips TRUE ↔ FALSE.**

### Not Examples

#### Invert Condition

```
if <not <touching [ground v]?>> then
    // In the air!
    change [velocity-y v] by (-1)   // Apply gravity
end
```

#### Invert Sensor

```
if <not <key [space] pressed?>> then
    // Space NOT pressed
    set [running v] to (false)
end
```

#### Double Negative (Avoid!)

```
if <not <not <touching [ground v]?>>> then
    // Confusing! Just use: touching ground?
end
```

---

### Not Truth Table

| A | NOT A |
|---|-------|
| T | F |
| F | T |

---

## Score Variable — Tracking Points! 🏆

### Score Variable Setup

```
when green flag clicked
set [score v] to (0)
show variable [score v]
```

### Score Patterns

| Pattern | Code |
|---------|------|
| **Basic points** | `change [score v] by (10)` |
| **Bonus multiplier** | `change [score v] by ( (level) * 100 )` |
| **Combo bonus** | `change [score v] by ( (combo) * 50 )` |
| **Time bonus** | `change [score v] by ( (300 - timer) * 10 )` |

---

### Score Display

| Display | Code |
|---------|------|
| **On stage** | `show variable [score v]` |
| **In speech bubble** | `say (join [Score: ] (score)) for 2 secs` |
| **Custom display** | Custom block `update-score-display` |

---

### High Score System

```
when green flag clicked
set [high-score v] to (0)
show variable [high-score v]

when I receive [game-over v]
if < (score) > (high-score) > then
    set [high-score v] to (score)
    say [NEW HIGH SCORE!] for 3 secs
end
```

---

## Lives Variable — Player Health! ❤️

### Lives Variable Setup

```
when green flag clicked
set [lives v] to (3)
show variable [lives v]
```

### Lives Patterns

| Pattern | Code |
|---------|------|
| **Lose life** | `change [lives v] by (-1)` |
| **Gain life** | `change [lives v] by (1)` (cap at max) |
| **Invincibility** | `set [invincible v] to (true), wait 2 secs, set [invincible v] to (false)` |

---

### Lives Logic

```
when I receive [player-hit v]
if <not < (invincible) >> then
    change [lives v] by (-1)
    if < (lives) = 0 > then
        broadcast [game-over v]
    else
        set [invincible v] to (true)
        wait 2 secs
        set [invincible v] to (false)
    end
end
```

---

### Lives Display

| Display | Code |
|---------|------|
| **Number** | `show variable [lives v]` |
| **Hearts** | Custom: `repeat (lives): stamp heart` |
| **Speech** | `say (join [Lives: ] (lives)) for 1 secs` |

---

## Timer Variable — Count Time! ⏱️

### Timer Variable Setup

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

### Timer Patterns

| Pattern | Code |
|---------|------|
| **Count up** | `change [timer v] by (1)` each second |
| **Count down** | `set [timer v] to (60), forever { wait 1, change by -1 }` |
| **Level timer** | `set [level-timer v] to (300), count down` |
| **Cooldown** | `set [cooldown v] to (60), forever { if >0: change by -1 }` |

---

### Timer Uses

| Use | Code |
|-----|------|
| **Survival time** | `set [timer] to 0, forever { wait 1, change by 1 }` |
| **Level time limit** | `set [timer] to 120, repeat until <timer = 0> { wait 1, change by -1 }` |
| **Speedrun timer** | `set [timer] to 0, forever { wait 0.01, change by 0.01 }` |
| **Cooldown** | `set [cooldown] to 30, forever { if >0: change by -1 }` |

---

### Timer Display

```
when green flag clicked
forever
    set [minutes v] to ( (timer) / 60 )
    set [seconds v] to ( (timer) mod 60 )
    say (join (join [Time: ] (minutes)) (join [:] (seconds))) for 0.1 secs
    wait 0.1 secs
end
```

**Live timer display!** ⏱️

---

## Summary

In this chapter, you learned:

- ✅ **Reusability** — Custom blocks, Backpack, remixing for universal tools
- ✅ **Run Without Screen Refresh** — Turbo mode for instant execution
- ✅ **Drawing Trails** — Pen down/up for path drawing
- ✅ **Rainbow Lines** — `change pen color by` for colorful art
- ✅ **Camera Games** — Video Sensing for body-controlled games
- ✅ **Credit Attribution** — Giving proper credit to creators
- ✅ **Remix Tree** — Exploring your project's family tree
- ✅ **Pseudocode** — Planning logic in plain English first
- ✅ **Stamp** — Leaving costume copies as permanent drawings
- ✅ **Unpredictable Gameplay** — Randomness for replayability
- ✅ **Error Detection** — Defensive coding, boundary checks
- ✅ **Infinite Loop Detection** — Preventing freezes with watchdogs
- ✅ **Lip Sync Animation** — Costume swaps synced to speech
- ✅ **Scene Coordination** — Broadcast chains for multi-scene flow
- ✅ **Dialogue Timing** — Natural conversation pacing
- ✅ **Delete This Clone** — Cleanup for runtime clones
- ✅ **Clone Behavior** — Physics, particles, enemies, projectiles
- ✅ **Event Queue** — Order of event processing
- ✅ **Condition Controlled Loop** — `repeat until` smart loops
- ✅ **And/Or/Not Operators** — Complex boolean logic
- ✅ **Score/Lives/Timer Variables** — Core game state management

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **Reusability** | Write once, use many times |
| **Run Without Screen Refresh** | Turbo mode for instant execution |
| **Drawing Trails** | Pen down for path drawing |
| **Rainbow Lines** | `change pen color by` cycling |
| **Camera Games** | Video Sensing motion control |
| **Credit Attribution** | Acknowledging original creators |
| **Remix Tree** | Project family visualization |
| **Pseudocode** | Plain English algorithm planning |
| **Stamp** | Permanent costume copy drawing |
| **Unpredictable Gameplay** | Controlled randomness for replayability |
| **Error Detection** | Defensive coding, boundary checks |
| **Infinite Loop Detection** | Watchdog timers, safe loop patterns |
| **Lip Sync** | Mouth animation synced to speech |
| **Scene Coordination** | Broadcast chains for scenes |
| **Dialogue Timing** | Natural conversation pacing |
| **Delete This Clone** | Clone cleanup command |
| **Clone Behavior** | Physics, AI, particles per clone |
| **Event Queue** | Order of event processing |
| **Condition Controlled Loop** | `repeat until` smart loops |
| **And/Or/Not** | Boolean logic operators |
| **Score/Lives/Timer** | Core game state variables |

---

## Try It Yourself! 🎯

**Challenge 1:** Create a **reusable custom block** `draw-polygon (sides) (size)` with Turbo mode

**Challenge 2:** Draw a **rainbow flower** using `stamp` + `change pen color by`

**Challenge 3:** Build a **camera game** — dodge falling objects by moving your body

**Challenge 4:** **Remix a project** and add proper credits in notes and comments

**Challenge 5:** Write **pseudocode** for a boss battle, then implement it

**Challenge 6:** Create a **particle explosion** using `stamp` + `delete this clone`

**Challenge 7:** Build a **dialogue system** with proper timing between characters

**Challenge 8:** Create a **countdown timer** with minutes:seconds display

**Challenge 9:** Design a **loot table** with weighted randomness (common/uncommon/rare/legendary)

---

## What's Next?

In **Chapter 10**, you'll master **Game Mechanics and Win/Lose Conditions** — collision detection, scoring systems, level progression, player health, and building complete playable games!

[**→ Next Chapter: Game Mechanics and Win/Lose Conditions**](../10-game-mechanics-win-lose/index.md)