---
title: Game Mechanics and Win/Lose Conditions
description: Builds complete game mechanics with collision detection, scoring, lives, and win/lose states for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-10 12:00:00
version: 0.08
---

# Game Mechanics and Win/Lose Conditions

## Summary

Builds complete game mechanics with collision detection, scoring, lives, and win/lose states. This chapter covers 20 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. List Item Access
2. Testing Strategies
3. Debugging Strategies
4. Storytelling Flow
5. Synchronous Broadcast
6. Broadcast Storm
7. Loop Termination
8. Boolean Combination
8. Win Condition
9. Lose Condition
10. Delete From List
11. List Contains
12. High Score List
13. Storyboarding
14. Clone Performance
14. Inventory System
15. Pair Programming
16. Scene Planning
17. Imagine Phase
18. Flowchart

## Prerequisites

This chapter builds on concepts from:

- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)
- [7. Variables, Lists, and Data Management](../07-variables-lists-data/index.md)
- [8. Animation, Parallelism, and Debugging](../08-animation-parallelism-debugging/index.md)
- [9. Advanced Control and Operators](../09-advanced-control-operators/index.md)

---

## List Item Access — Getting Specific Items! 📋

### List Item Block (Variables → Dark Red)

```
item (1) of [inventory v]
```

**Reporter: gets the value at a specific position in the list.**

### List Position Numbers

**Lists are 1-indexed** — first item is position 1, not 0!

| Position | Item |
|----------|------|
| 1 | First item |
| 2 | Second item |
| 3 | Third item |
| ... | ... |
| (length of list) | Last item |

### List Item Examples

#### Access Specific Item

```
say (item (1) of [inventory v]) for 2 secs  // Says first item
```

#### Loop Through All Items

```
repeat (length of [inventory v])
    say (item (loop-counter) of [inventory v]) for 1 secs
end
```

#### Get Last Item

```
set [last-item v] to (item (length of [list v]) of [list v])
```

---

### List Item Safety

**Always check bounds before accessing!**

```
if < (index) > (length of [list v]) > then
    say [Invalid index!] for 2 secs
else
    say (item (index) of [list v]) for 2 secs
end
```

---

### List Item in Game Mechanics

#### Use Item from Inventory

```
when I receive [use-item v]
if < (length of [inventory v]) > 0 > then
    set [item-to-use v] to (item (1) of [inventory v])
    delete (1) of [inventory v]
    // Use the item...
end
```

#### Equip Best Weapon

```
set [best-damage v] to (0)
repeat (length of [weapons v])
    if < (item (loop-counter) of [weapons v]) > (best-damage) > then
        set [best-damage v] to (item (loop-counter) of [weapons v])
        set [best-weapon-index v] to (loop-counter)
    end
end
```

---

## Delete From List — Removing Items! 🗑️

### Delete Block (Variables → Dark Red)

```
delete (1) of [inventory v]
```

**Removes item at specified position** — remaining items shift down!

### Delete Examples

#### Remove Used Item

```
when I receive [use-potion v]
delete (1) of [inventory v]  // Remove first item
```

#### Remove Specific Item

```
delete (3) of [inventory v]  // Remove 3rd item
```

#### Clear Entire List

```
delete all of [inventory v]
```

#### Remove by Value (Search + Delete)

```
repeat (length of [inventory v])
    if < (item (loop-counter) of [inventory v]) = [rotten-apple] > then
        delete (loop-counter) of [inventory v]
    end
end
```

---

### Delete + High Score List

```
when I receive [new-score v]
if < (score) > (item (1) of [high-scores v]) > then
    insert (score) at (1) of [high-scores v]
    if < (length of [high-scores v]) > 5 > then
        delete (6) of [high-scores v]  // Keep top 5
    end
end
```

---

## List Contains — Is It In There? 🔍

### List Contains Block (Variables → Dark Red)

```
[apple v] in [inventory v]?
```

**Boolean: TRUE if item exists in list, FALSE otherwise.**

### Contains Examples

#### Check for Item

```
if < [key v] in [inventory v]? > then
    say [Door unlocked!] for 2 secs
    broadcast [door-open v]
else
    say [You need a key!] for 2 secs
end
```

#### Check for Duplicate Before Adding

```
if <not < [sword v] in [inventory v]? >> then
    add [sword] to [inventory v]
    say [Got a sword!] for 2 secs
else
    say [Already have a sword!] for 2 secs
end
```

#### Check for Quest Item

```
if < [ancient-scroll v] in [inventory v]? > then
    broadcast [quest-complete v]
end
```

---

### Contains vs Item Access

| Block | Returns | Use For |
|-------|---------|---------|
| `item (1) of [list]` | **Value** at position | Get the actual item |
| `[item] in [list]?` | **True/False** | Check existence |

---

## High Score List — Top Players! 🏆

### High Score List Structure

```
high-scores list:
[0] 10500  (1st place)
[1] 9800   (2nd place)
[2] 8750   (3rd place)
[2] 7200   (4th place)
[3] 5500   (5th place)
```

### High Score Logic

```
when green flag clicked
delete all of [high-scores v]
repeat 5
    add (0) to [high-scores v]
end
show list [high-scores v]

when I receive [game-over v]
if < (score) > (item (1) of [high-scores v]) > then
    // New high score!
    insert (score) at (1) of [high-scores v]
    delete (6) of [high-scores v]  // Keep top 5
    say [NEW HIGH SCORE!] for 3 secs
end
```

---

### High Score Display

| Display Method | Code |
|----------------|------|
| **List on stage** | `show list [high-scores]` |
| **Custom display** | `repeat 5: say (join [#] (join (loop-counter) (join [: ] (item (loop-counter) of [high-scores])))) for 2 secs` |
| **With names** | Store `join [name] (join [: ] (score))` in list |

---

### High Score Features

| Feature | Implementation |
|---------|----------------|
| **Top 5/10** | `delete (6) of [list]` to trim |
| **Names + Scores** | Store `join [name] (join [: ] (score))` |
| **Date achieved** | Add timestamp to entry |
| **Level-specific** | Separate list per level |

---

## Testing Strategies — Quality Assurance! 🧪

### What Are Testing Strategies?

**Testing strategies** = systematic ways to **find bugs** and **verify your game works**!

### Testing Levels

| Level | What It Tests | When |
|-------|---------------|------|
| **Unit test** | Single script/block | While coding |
| **Integration test** | Multiple scripts together | After adding feature |
| **Playtest** | Full game experience | Before sharing |
| **Regression test** | Old features still work | After changes |
| **Edge case test** | Extreme/unusual inputs | Before release |

---

### Testing Strategies

| Strategy | How To Do It |
|----------|--------------|
| **Boundary testing** | Test edges: 0, 1, max, min, -1 |
| **Invalid input** | Wrong keys, empty lists, divide by 0 |
| **Stress test** | Spawn 100 clones, run 10 minutes |
| **Permutation test** | Try all key combinations |
| **Save/load test** | Save, reload, continue game |
| **Multiplayer test** | Two keyboards, two players |

---

### Testing Checklist

| Category | Tests |
|----------|-------|
| **Movement** | All directions, edges, collisions, jumping |
| **Controls** | All keys, key combos, rapid presses |
| **Physics** | Gravity, jumping, falling, slopes |
| **Combat** | Damage, knockback, invincibility, death |
| **Scoring** | Points, high scores, combos, multipliers |
| **Lives** | Lose, gain, game over, invincibility |
| **Levels** | Transitions, spawns, completion, secrets |
| **UI** | Menus, pause, menus, displays |
| **Audio** | Music, SFX, volume, mute |
| **Performance** | 100 clones, 10 min play, save/load |

---

### Automated Testing (Custom Blocks)

```
define test-movement
// Test: Player moves right
go to x: 0 y: 0
repeat 10
    change x by 5
end
if < (x position) = 50 > then
    say [TEST PASS: Movement] for 2 secs
else
    say [TEST FAIL: Movement] for 2 secs
end

define test-collision
// Test: Wall collision
go to x: 220 y: 0
if <touching color [#FF0000]? > then
    say [TEST PASS: Collision] for 2 secs
else
    say [TEST FAIL: Collision] for 2 secs
end
```

---

## Debugging Strategies — Fix Bugs Like a Pro! 🐛

### Debugging Workflow

```
1. REPRODUCE → Make bug happen every time
2. ISOLATE → Which script? Which block?
3. HYPOTHESIZE → "I think the 'change x by' is wrong"
4. TEST → Change ONE thing, test again
5. FIX → Apply correction
6. VERIFY → Test thoroughly, check for new bugs
```

---

### Debugging Tools in Scratch

| Tool | How to Use |
|------|------------|
| **Block Highlighting** | Watch which block glows during execution |
| **Variable Watchers** | `show variable` — see values live on stage |
| **`say` Debugging** | `say (variable) for 0.1 secs` — live values |
| **`wait` for Timing** | `wait 1 secs` to slow down and observe |
| **Single Step** | Some Scratch versions: step through blocks |
| **Clean Up** | Right-click → "Clean up" — aligns blocks |

---

### Debugging with `say` (Live Values!)

```
forever
    say (join [x: ] (x position)) for 0.1 secs
    say (join [y: ] (y position)) for 0.1 secs
    say (join [vel-x: ] (velocity-x)) for 0.1 secs
    say (join [onGround: ] (touching [ground v]?)) for 0.1 secs
    wait 0.1 secs
end
```

**Live dashboard of all important values!** 📊

---

### Common Bug Patterns & Fixes

| Bug Symptom | Likely Cause | Debug Steps |
|-------------|--------------|-------------|
| **Sprite frozen** | `forever` without `wait` | Add `wait 0.01 secs` |
| **Moves wrong way** | Wrong sign (+/-) | Check `change x by` sign |
| **Jumps infinitely** | No ground check | Add `touching ground?` |
| **Stuck in wall** | No collision check | Add `touching color?` |
| **Score not updating** | Wrong variable name | Check `score` vs `Score` |
| **Clone explosion** | No spawn limit | Add cooldown/limit |
| **Lag/freeze** | Too many loops | Combine loops, add `wait` |

---

### Debugging Strategies

| Strategy | How To Apply |
|----------|--------------|
| **Divide and conquer** | Disable half the code, test, narrow down |
| **Rubber duck debugging** | Explain code to a rubber duck (or friend) |
| **Binary search** | Disable half scripts, test, narrow to one script |
| **Minimal reproduction** | Create new project with just the buggy part |
| **Print everything** | `say` all variables at each step |
| **Check assumptions** | "Is this variable actually 0?" — verify with `say` |

---

## Storytelling Flow — Games That Tell Stories! 📖

### What Is Storytelling Flow?

**Storytelling flow** = how your game **guides the player** through a narrative experience!

### Story Structure in Games

| Act | Purpose | Game Elements |
|-----|---------|---------------|
| **Setup (Act 1)** | Introduce world, character, goal | Tutorial, first level, intro cutscene |
| **Confrontation (Act 2)** | Challenges, rising action | Harder levels, new mechanics, mid-boss |
| **Climax (Act 3)** | Final challenge, resolution | Final boss, final level, ending cutscene |

---

### Storytelling Through Gameplay

| Story Element | Game Mechanic |
|---------------|---------------|
| **Character** | Player sprite, customization |
| **Setting** | Backdrops, level design |
| **Conflict** | Enemies, obstacles, puzzles |
| **Progression** | Levels, upgrades, new abilities |
| **Resolution** | Win screen, credits, epilogue |

---

### Storytelling Through Code

```
when green flag clicked
broadcast [chapter1 v] and wait    // Setup
broadcast [chapter2 v] and wait    // Rising action
broadcast [chapter3 v] and wait    // Climax
broadcast [ending v]               // Resolution

when I receive [chapter1 v]
switch backdrop to [village v]
speak [Our village was peaceful...] and wait
speak [Until the Shadow King came...] and wait
broadcast [chapter1-done v]

when I receive [chapter2 v]
switch backdrop to [forest v]
speak [You must find the three crystals...] and wait
// Gameplay: collect 3 crystals
```

---

## Synchronous Broadcast — Wait for Everyone! 🤝

### Broadcast And Wait Recap

```
broadcast [message v] and wait
```

**Pauses sender until ALL `when I receive` scripts FINISH.**

---

### When to Use Synchronous Broadcast

| Scenario | Why Sync |
|----------|----------|
| **Level start** | All sprites initialized before gameplay |
| **Cutscene steps** | Each line finishes before next |
| **Save game** | All data saved before continuing |
| **Multi-phase boss** | Phase 1 done before phase 2 starts |
| **Cutscene dialogue** | Each character finishes speaking |

---

### Synchronous Broadcast Example

```
when green flag clicked
broadcast [initialize v] and wait
wait 1 secs
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [spawn-ui v] and wait
broadcast [game-ready v]

when I receive [initialize v]
set [score v] to (0)
set [lives v] to (3)

when I receive [spawn-player v]
go to x: -200 y: -100
show

when I receive [spawn-enemies v]
repeat 5
    create clone of [enemy v]
    wait 0.2 secs
end
```

---

## Broadcast Storm — Too Many Messages! ⚡

### What Is a Broadcast Storm?

**Broadcast storm** = too many broadcasts sent **too quickly** = lag, crashes, unpredictable behavior!

### Causes of Broadcast Storms

| Cause | Example |
|-------|---------|
| **Broadcast in forever loop** | `forever { broadcast [update] }` |
| **Recursive broadcasts** | A → B, B → A, A → B... |
| **Too many clones broadcasting** | 100 clones each broadcast |
| **Broadcast in `when I receive`** | Chain reaction |

---

### Preventing Broadcast Storms

| Prevention | How |
|------------|-----|
| **Rate limit** | `wait 0.1 secs` between broadcasts |
| **Flags** | `if <not <broadcasting>> then broadcast` |
| **Cooldown** | `set [cooldown v] to (10), change by -1 each frame` |
| **Single broadcaster** | One "manager" sprite handles all broadcasts |

---

### Broadcast Storm Example (BAD!)

```
forever
    broadcast [update v]    // STORM! Thousands per second
end
```

### Broadcast Storm Fix (GOOD!)

```
forever
    broadcast [update v]
    wait 0.1 secs   // Rate limited!
end
```

---

## Loop Termination — Exiting Loops Properly! 🛑

### How Loops End

| Loop Type | Terminates When... |
|-----------|-------------------|
| `repeat (N)` | After N iterations |
| `forever` | `stop [this script]` or `stop [all]` |
| `repeat until <cond>` | Condition becomes TRUE |
| `repeat while` (custom) | Condition becomes FALSE |

---

### Loop Termination Blocks

| Block | Stops |
|-------|-------|
| `stop [this script v]` | Current script only |
| `stop [all v]` | EVERYTHING in project |
| `stop [other scripts in sprite v]` | Other scripts in same sprite |

---

### Loop Termination Examples

#### Break Out of Forever

```
forever
    if <key [escape] pressed?> then
        stop [this script v]
    end
    // Game loop code
end
```

#### Exit Nested Loop

```
repeat (10)
    repeat (10)
        if <touching [target v]?> then
            stop [this script v]  // Exits BOTH loops!
        end
    end
end
```

#### Stop All (Game Over)

```
when I receive [game-over v]
stop [all v]
```

---

### Loop Termination Best Practices

| Practice | Why |
|----------|-----|
| **Always have exit condition** | `forever` must have `stop` or `broadcast [stop]` |
| **Use `stop [this script]`** | Prefer over `stop [all]` |
| **Clean up before stop** | `hide`, `delete this clone`, `stop sounds` |
| **Avoid `stop [all]` in libraries** | Kills everything including UI |

---

## Boolean Combination — Complex Conditions! 🧠

### Combining Booleans (And/Or/Not)

| Operator | Block | True When... |
|----------|-------|--------------|
| **AND** | `< > and < >` | BOTH true |
| **OR** | `< > or < >` | AT LEAST ONE true |
| **NOT** | `not < >` | Flips true/false |

---

### Complex Boolean Combinations

#### Three Conditions (AND)

```
if < (score) > 100 > and < (lives) > 0 > and <not <touching [spike v]?>> then
    broadcast [bonus-level v]
end
```

#### Complex Condition

```
if < < (distance) < 50 > or <touching [player v]?> > and <not < (invincible) >> then
    broadcast [player-hit v]
end
```

#### De Morgan's Laws (Simplify!)

| Original | Equivalent (Simplified) |
|----------|------------------------|
| `not (A or B)` | `(not A) and (not B)` |
| `not (A and B)` | `(not A) or (not B)` |

---

### Boolean Combination Examples

#### Complex Jump Condition

```
if <key [space] pressed?> and <touching [ground v]?> and <not < (in-air) >> then
    set [velocity-y v] to (15)
end
```

#### Enemy AI Decision

```
if < (distance to player) < 100 > and <not < (stunned) >> then
    if < (player-x) > (x position) > then
        set [velocity-x v] to (3)
    else
        set [velocity-x v] to (-3)
    end
end
```

---

## Win Condition — Victory! 🏆

### What Is a Win Condition?

**Win condition** = the specific goal that makes the player **win the game**!

### Common Win Conditions

| Type | Condition | Example |
|------|-----------|---------|
| **Score target** | `score > 1000` | Collect 100 coins |
| **All collected** | `length of [coins] = 0` | Get all items |
| **Reach location** | `x > 200 and y > 150` | Reach exit |
| **Defeat boss** | `boss-health = 0` | Defeat final boss |
| **Survive time** | `timer > 300` | Survive 5 minutes |
| **All enemies gone** | `length of [enemies] = 0` | Clear room |

---

### Win Condition Implementation

```
forever
    // Check win conditions each frame
    if < (score) > 1000 > then
        broadcast [win v]
        stop [this script v]
    end
    
    if < (length of [coins v]) = 0 > then
        broadcast [win v]
        stop [this script v]
    end
    
    if < (boss-health) = 0 > then
        broadcast [win v]
        stop [this script v]
    end
end
```

---

### Win Sequence

```
when I receive [win v]
stop [all v]
switch backdrop to [victory v]
play sound [fanfare v]
say [YOU WIN!] for 5 secs
wait 3 secs
show variable [final-score v]
wait 5 secs
broadcast [return-to-menu v]
```

---

### Multiple Win Paths

| Game Type | Win Conditions |
|-----------|----------------|
| **Platformer** | Reach flag, all coins, defeat boss |
| **Puzzle** | All pieces placed, all switches hit |
| **Survival** | Timer reaches target |
| **RPG** | Defeat final boss, complete main quest |
| **Racing** | Cross finish line first |

---

## Lose Condition — Game Over! 💀

### What Is a Lose Condition?

**Lose condition** = specific situation where the player **fails** and game ends!

### Common Lose Conditions

| Type | Condition | Example |
|-------|-----------|---------|
| **No lives** | `lives = 0` | 3 hits = game over |
| **Time out** | `timer = 0` | Didn't finish in time |
| **Fall off world** | `y < -200` | Fell in pit |
| **Touch hazard** | `touching lava/spikes` | Instant death |
| **Fail objective** | `failed to protect NPC` | Escort mission failed |

---

### Lose Condition Implementation

```
forever
    // Check lose conditions
    if < (lives) = 0 > then
        broadcast [game-over v]
        stop [this script v]
    end
    
    if < (timer) = 0 > then
        broadcast [game-over v]
        stop [this script v]
    end
    
    if < (y position) < -200 > then
        broadcast [game-over v]
        stop [this script v]
    end
    
    if <touching [lava v]?> then
        broadcast [game-over v]
        stop [this script v]
    end
end
```

---

### Game Over Sequence

```
when I receive [game-over v]
stop [all v]
switch backdrop to [game-over v]
play sound [game-over-sound v]
say [GAME OVER] for 3 secs
wait 2 secs
say (join [Final Score: ] (score)) for 5 secs
wait 3 secs
broadcast [return-to-menu v]
```

---

### Lose Condition Best Practices

| Practice | Why |
|----------|-----|
| **Clear feedback** | Show WHY player lost |
| **Quick restart** | One click to try again |
| **Progress saving** | Don't lose all progress |
| **Fair warning** | "Low health!" before death |
| **Learn from failure** | Show what killed you |

---

## Inventory System — Player's Bag! 🎒

### What Is an Inventory System?

**Inventory** = a **list** that holds **items the player collects**!

### Inventory List Structure

```
inventory list:
[0] "health-potion"
[1] "iron-sword"
[2] "gold-key"
[3] "magic-scroll"
```

---

### Inventory Operations

| Operation | Code |
|-----------|------|
| **Add item** | `add [potion] to [inventory v]` |
| **Remove item** | `delete (1) of [inventory v]` |
| **Use item** | `item (1) of [inventory v]`, then `delete (1)` |
| **Check item** | `[potion] in [inventory v]?` |
| **Count items** | `length of [inventory v]` |
| **Show inventory** | `show list [inventory v]` |

---

### Inventory Systems

#### Simple Inventory (Stack)

```
when I receive [pickup-item v]
add [item-name] to [inventory v]
say (join [Got: ] (item-name)) for 2 secs
```

#### Categorized Inventory

```
Categories: weapons, potions, keys, quest

when I receive [pickup v]
if < (item-type) = [weapon] > then
    add (item) to [weapons v]
else
    if < (item-type) = [potion] > then
        add (item) to [potions v]
    end
end
```

#### Weight/Slot Limit

```
if < (length of [inventory v]) < 20 > then
    add [item] to [inventory v]
else
    say [Inventory full!] for 2 secs
end
```

---

### Inventory UI

```
when green flag clicked
hide list [inventory v]

when [i] key pressed
if < (showing-inventory) > then
    hide list [inventory v]
    set [showing-inventory v] to (false)
else
    show list [inventory v]
    set [showing-inventory v] to (true)
end
```

---

## Summary

In this chapter, you learned:

- ✅ **List Item Access** — `item (N) of [list]` for specific items
- ✅ **Delete From List** — Remove items, trim lists
- ✅ **List Contains** — Check if item exists
- ✅ **High Score List** — Top scores with trimming
- ✅ **Testing Strategies** — Unit, integration, playtest, regression
- ✅ **Debugging Strategies** — Reproduce, isolate, hypothesize, test, fix
- ✅ **Storytelling Flow** — Three-act structure in games
- ✅ **Synchronous Broadcast** — `broadcast and wait` for coordination
- ✅ **Broadcast Storm** — Prevention and fixes
- ✅ **Loop Termination** — `stop` blocks for clean exits
- ✅ **Boolean Combination** — And/Or/Not for complex logic
- ✅ **Win Condition** — Score, collection, boss, survival, location
- ✅ **Lose Condition** — Lives, time, hazards, objectives
- ✅ **Inventory System** — Lists for items, categories, limits
- ✅ **Testing Strategies** — Unit, integration, playtest, edge cases
- ✅ **Debugging Strategies** — Reproduce, isolate, hypothesize, test, fix
- ✅ **Storytelling Flow** — Three-act game narrative
- ✅ **Synchronous Broadcast** — Coordinated multi-sprite starts
- ✅ **Broadcast Storm** — Rate limiting, cooldowns
- ✅ **Loop Termination** — Clean `stop` usage
- ✅ **Boolean Combination** — And/Or/Not for complex conditions

---

## Key Terms to Remember

| Term | Definition |
|------|------------|
| **List Item Access** | `item (N) of [list]` — get specific value |
| **Delete From List** | Remove item at position |
| **List Contains** | Boolean check for item existence |
| **High Score List** | Sorted top scores list |
| **Testing Strategies** | Systematic bug-finding approaches |
| **Debugging Strategies** | Reproduce, isolate, hypothesize, test, fix |
| **Storytelling Flow** | Narrative structure in gameplay |
| **Synchronous Broadcast** | `broadcast and wait` coordination |
| **Broadcast Storm** | Message overload, prevention methods |
| **Loop Termination** | `stop this script/all/other scripts` |
| **Boolean Combination** | And/Or/Not for complex conditions |
| **Win Condition** | Goal that ends game in victory |
| **Lose Condition** | Condition that ends game in defeat |
| **Inventory System** | List-based item management |
| **List Item Access** | Getting specific list values |
| **Delete From List** | Removing items from collections |
| **List Contains** | Boolean membership check |
| **High Score List** | Persistent top scores |
| **Testing Strategies** | Quality assurance methodologies |
| **Debugging Strategies** | Systematic bug fixing |
| **Storytelling Flow** | Narrative pacing in games |
| **Synchronous Broadcast** | Coordinated multi-sprite messaging |
| **Broadcast Storm** | Message flooding prevention |
| **Loop Termination** | Clean script exit patterns |
| **Boolean Combination** | Compound logical conditions |

---

## Try It Yourself! 🎯

**Challenge 1:** Build a **complete platformer** with win (reach flag) and lose (3 lives) conditions

**Challenge 2:** Create an **inventory system** with categories (weapons, potions, keys)

**Challenge 3:** Implement **high score list** that saves top 10 scores

**Challenge 4:** Write **test cases** for your movement, collision, and scoring systems

**Challenge 5:** Debug a **broken script** using `say` to watch variable values

**Challenge 6:** Design a **game story** with 3 acts and implement with broadcasts

**Challenge 7:** Create a **broadcast system** for level loading without storms

**Challenge 8:** Design **complex boolean conditions** for enemy AI decisions

**Challenge 9:** Implement **multiple win/lose conditions** in one game

**Challenge 10:** Build a **complete playable game** with all mechanics learned!

---

## What's Next?

In **Chapter 11**, you'll master the **Design Process and Capstone Project** — the complete creative journey from idea to polished game, including planning, iteration, testing, polishing, and sharing your masterpiece!

[**→ Next Chapter: Design Process and Capstone Project**](../11-design-process-capstone/index.md)