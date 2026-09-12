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

!!! mascot-welcome "Let's Make a Real Game!"
    ![Scratch the Cat waving hello](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Ready to turn your sprites into an actual GAME? In this chapter you'll give your project real stakes — lists to track inventory and high scores, win conditions that celebrate victory, and lose conditions that know exactly when it's game over. By the end, you'll build a complete playable game with scoring, lives, and a proper ending. Let's build something purr-fect!

## List Item Access — Getting Specific Items! 📋

### List Item Block (Variables → Dark Red)

<div class="scratch">
item (1) of [inventory v]
</div>

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

<div class="scratch">
say (item (1) of [inventory v]) for (2) seconds // Says first item
</div>

#### Loop Through All Items

<div class="scratch">
repeat (length of [inventory v])
    say (item (loop-counter) of [inventory v]) for (1) seconds
end
</div>

#### Get Last Item

<div class="scratch">
set [last-item v] to (item (length of [list v]) of [list v])
</div>

---

### List Item Safety

**Always check bounds before accessing!**

<div class="scratch">
if &lt;(index) &gt; (length of [list v])&gt; then
    say [Invalid index!] for (2) seconds
else
    say (item (index) of [list v]) for (2) seconds
end
</div>

---

### List Item in Game Mechanics

#### Use Item from Inventory

<div class="scratch">
when I receive [use-item v]
if &lt;(length of [inventory v]) &gt; (0)&gt; then
    set [item-to-use v] to (item (1) of [inventory v])
    delete (1) of [inventory v]
    // Use the item...
end
</div>

#### Equip Best Weapon

<div class="scratch">
set [best-damage v] to (0)
repeat (length of [weapons v])
    if &lt;(item (loop-counter) of [weapons v]) &gt; (best-damage)&gt; then
        set [best-damage v] to (item (loop-counter) of [weapons v])
        set [best-weapon-index v] to (loop-counter)
    end
end
</div>

---

## Delete From List — Removing Items! 🗑️

### Delete Block (Variables → Dark Red)

<div class="scratch">
delete (1) of [inventory v]
</div>

**Removes item at specified position** — remaining items shift down!

### Delete Examples

#### Remove Used Item

<div class="scratch">
when I receive [use-potion v]
delete (1) of [inventory v]  // Remove first item
</div>

#### Remove Specific Item

<div class="scratch">
delete (3) of [inventory v]  // Remove 3rd item
</div>

#### Clear Entire List

<div class="scratch">
delete all of [inventory v]
</div>

#### Remove by Value (Search + Delete)

<div class="scratch">
repeat (length of [inventory v])
    if &lt;(item (loop-counter) of [inventory v]) = [rotten-apple]&gt; then
        delete (loop-counter) of [inventory v]
    end
end
</div>

---

### Delete + High Score List

<div class="scratch">
when I receive [new-score v]
if &lt;(score) &gt; (item (1) of [high-scores v])&gt; then
    insert (score) at (1) of [high-scores v]
    if &lt;(length of [high-scores v]) &gt; (5)&gt; then
        delete (6) of [high-scores v]  // Keep top 5
    end
end
</div>

---

## List Contains — Is It In There? 🔍

### List Contains Block (Variables → Dark Red)

<div class="scratch">
[inventory v] contains [apple]?
</div>

**Boolean: TRUE if item exists in list, FALSE otherwise.**

### Contains Examples

#### Check for Item

<div class="scratch">
if &lt;[inventory v] contains [key]?&gt; then
    say [Door unlocked!] for (2) seconds
    broadcast [door-open v]
else
    say [You need a key!] for (2) seconds
end
</div>

#### Check for Duplicate Before Adding

<div class="scratch">
if &lt;not &lt;[inventory v] contains [sword]?&gt;&gt; then
    add [sword] to [inventory v]
    say [Got a sword!] for (2) seconds
else
    say [Already have a sword!] for (2) seconds
end
</div>

#### Check for Quest Item

<div class="scratch">
if &lt;[inventory v] contains [ancient-scroll]?&gt; then
    broadcast [quest-complete v]
end
</div>

---

### Contains vs Item Access

| Block | Returns | Use For |
|-------|---------|---------|
| `item (1) of [list]` | **Value** at position | Get the actual item |
| `[list] contains (thing)?` | **True/False** | Check existence |

---

## High Score List — Top Players! 🏆

### High Score List Structure

```
high-scores list:
[1] 10500  (1st place)
[2] 9800   (2nd place)
[3] 8750   (3rd place)
[4] 7200   (4th place)
[5] 5500   (5th place)
```

### High Score Logic

<div class="scratch">
when green flag clicked
delete all of [high-scores v]
repeat (5)
    add (0) to [high-scores v]
end
show list [high-scores v]

when I receive [game-over v]
if &lt;(score) &gt; (item (1) of [high-scores v])&gt; then
    // New high score!
    insert (score) at (1) of [high-scores v]
    delete (6) of [high-scores v]  // Keep top 5
    say [NEW HIGH SCORE!] for (3) seconds
end
</div>

---

### High Score Display

<div class="scratch">
show list [high-scores v]
</div>

**List on stage.** Shows the list directly on the stage for everyone to see.

<div class="scratch">
say (join [#] (join (loop-counter) (join [: ] (item (loop-counter) of [high-scores v])))) for (2) seconds
</div>

**Custom display.** Builds one formatted row of text per list item.

<div class="scratch">
add (join [name] (join [: ] (score))) to [high-scores v]
</div>

**With names.** Stores a player's name and score together as one entry.

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

<div class="scratch">
define test-movement // Test: Player moves right
go to x: (0) y: (0)
repeat (10)
    change x by (5)
end
if &lt;(x position) = (50)&gt; then
    say [TEST PASS: Movement] for (2) seconds
else
    say [TEST FAIL: Movement] for (2) seconds
end

define test-collision // Test: Wall collision
go to x: (220) y: (0)
if &lt;touching color [#FF0000]?&gt; then
    say [TEST PASS: Collision] for (2) seconds
else
    say [TEST FAIL: Collision] for (2) seconds
end
</div>

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

<div class="scratch">
forever
    say (join [x: ] (x position)) for (0.1) seconds
    say (join [y: ] (y position)) for (0.1) seconds
    say (join [vel-x: ] (velocity-x)) for (0.1) seconds
    say (join [onGround: ] (touching [ground v]?)) for (0.1) seconds
    wait (0.1) seconds
end
</div>

**Live dashboard of all important values!** 📊

!!! mascot-tip "Print Everything, Then Clean Up"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    When a bug won't show itself, add a `say (variable)` block after every suspicious line so you can watch values change in real time. Just remember to delete or disable those debug `say` blocks before you share your project — nobody wants to play a game that's narrating its own variables!

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

<div class="scratch">
when green flag clicked
broadcast [chapter1 v] and wait    // Setup
broadcast [chapter2 v] and wait    // Rising action
broadcast [chapter3 v] and wait    // Climax
broadcast [ending v]               // Resolution

when I receive [chapter1 v]
switch backdrop to [village v]
say [Our village was peaceful...] for (2) seconds
say [Until the Shadow King came...] for (2) seconds
broadcast [chapter1-done v]

when I receive [chapter2 v]
switch backdrop to [forest v]
say [You must find the three crystals...] for (2) seconds // Gameplay: collect 3 crystals
</div>

---

## Synchronous Broadcast — Wait for Everyone! 🤝

### Broadcast And Wait Recap

<div class="scratch">
broadcast [message v] and wait
</div>

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

<div class="scratch">
when green flag clicked
broadcast [initialize v] and wait
wait (1) seconds
broadcast [spawn-player v] and wait
broadcast [spawn-enemies v] and wait
broadcast [spawn-ui v] and wait
broadcast [game-ready v]

when I receive [initialize v]
set [score v] to (0)
set [lives v] to (3)

when I receive [spawn-player v]
go to x: (-200) y: (-100)
show

when I receive [spawn-enemies v]
repeat (5)
    create clone of [enemy v]
    wait (0.2) seconds
end
</div>

!!! mascot-warning "Reset Score and Lives on Green Flag"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    If `score` and `lives` only get set inside a `when I receive [initialize]` script, clicking the green flag a second time can start a new game with last game's leftover numbers. Always set every game variable back to its starting value in a `when green flag clicked` script too, so every playthrough truly starts fresh.

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

<div class="scratch">
forever
    broadcast [update v]    // STORM! Thousands per second
end
</div>

### Broadcast Storm Fix (GOOD!)

<div class="scratch">
forever
    broadcast [update v]
    wait (0.1) seconds   // Rate limited!
end
</div>

!!! mascot-warning "Broadcasts Need a Speed Limit"
    ![Scratch the Cat waving a warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A `broadcast` sent from inside a `forever` loop with no `wait` fires hundreds of times a second — that's a broadcast storm, and it will lag or crash your project. Always pair a looping broadcast with a `wait` block, even a tiny one, to give Scratch room to breathe between messages.

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

<div class="scratch">
stop [this script v]
</div>

**Stops only the current script** — every other script keeps running.

<div class="scratch">
stop [all v]
</div>

**Stops EVERYTHING** in the whole project.

<div class="scratch">
stop [other scripts in sprite v]
</div>

**Stops other scripts** running in this same sprite, but leaves the current one going.

!!! mascot-thinking "Stop Has a Blast Radius"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Think of the three `stop` blocks as circles of different sizes: `stop [this script v]` only affects the train of blocks currently running, while `stop [all v]` reaches every script in every sprite at once. Reach for the smallest circle that gets the job done, and save `stop [all v]` for true game-over moments.

---

### Loop Termination Examples

#### Break Out of Forever

<div class="scratch">
forever
    if &lt;key [escape v] pressed?&gt; then
        stop [this script v]
    end
    // Game loop code
end
</div>

#### Exit Nested Loop

<div class="scratch">
repeat (10)
    repeat (10)
        if &lt;touching [target v]?&gt; then
            stop [this script v]  // Exits BOTH loops!
        end
    end
end
</div>

#### Stop All (Game Over)

<div class="scratch">
when I receive [game-over v]
stop [all v]
</div>

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

<div class="scratch">
&lt;&gt; and &lt;&gt;
</div>

**AND** — true only when BOTH conditions are true.

<div class="scratch">
&lt;&gt; or &lt;&gt;
</div>

**OR** — true when AT LEAST ONE condition is true.

<div class="scratch">
not &lt;&gt;
</div>

**NOT** — flips true to false, and false to true.

---

### Complex Boolean Combinations

#### Three Conditions (AND)

<div class="scratch">
if &lt;&lt;(score) &gt; (100)&gt; and &lt;&lt;(lives) &gt; (0)&gt; and &lt;not &lt;touching [spike v]?&gt;&gt;&gt;&gt; then
    broadcast [bonus-level v]
end
</div>

#### Complex Condition

<div class="scratch">
if &lt;&lt;&lt;(distance) &lt; (50)&gt; or &lt;touching [player v]?&gt;&gt; and &lt;not &lt;(invincible)&gt;&gt;&gt; then
    broadcast [player-hit v]
end
</div>

!!! mascot-encourage "Nested Booleans Take a Second Look"
    ![Scratch the Cat giving an encouraging thumbs-up](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If stacking `and`, `or`, and `not` inside each other made your eyes cross, that's completely normal — even experienced programmers build these one condition at a time. You already handled if/else and comparisons just fine in earlier chapters, so try building a nested condition piece by piece: get one comparison working, then wrap the next one around it.

---

### De Morgan's Laws (Simplify!)

| Original | Equivalent (Simplified) |
|----------|------------------------|
| `not (A or B)` | `(not A) and (not B)` |
| `not (A and B)` | `(not A) or (not B)` |

---

### Boolean Combination Examples

#### Complex Jump Condition

<div class="scratch">
if &lt;&lt;key [space v] pressed?&gt; and &lt;&lt;touching [ground v]?&gt; and &lt;not &lt;(in-air)&gt;&gt;&gt;&gt; then
    set [velocity-y v] to (15)
end
</div>

#### Enemy AI Decision

<div class="scratch">
if &lt;&lt;(distance to [player v]) &lt; (100)&gt; and &lt;not &lt;(stunned)&gt;&gt;&gt; then
    if &lt;(player-x) &gt; (x position)&gt; then
        set [velocity-x v] to (3)
    else
        set [velocity-x v] to (-3)
    end
end
</div>

---

## Win Condition — Victory! 🏆

<div class="scratch">
if &lt;(score) &gt; (1000)&gt; then
    broadcast [win v]
end
</div>

!!! mascot-thinking "Your Game Is Always in One State"
    ![Scratch the Cat thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that a game is never "playing" AND "won" at the same time — it's always in exactly one state: menu, playing, won, or lost. Every `forever` loop that checks win and lose conditions is really just asking "which state are we in right now?" and broadcasting the answer to every sprite that needs to react.

### What Is a Win Condition?

**Win condition** = the specific goal that makes the player **win the game**!

### Common Win Conditions

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
&lt;(score) &gt; (1000)&gt;
</div>

**Score target.** Collect 100 coins — score passes 1000.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(length of [coins v]) = (0)&gt;
</div>

**All collected.** Every item is gone from the list.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;&lt;(x position) &gt; (200)&gt; and &lt;(y position) &gt; (150)&gt;&gt;
</div>

**Reach location.** The sprite crosses both an X and a Y threshold.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(boss-health) = (0)&gt;
</div>

**Defeat boss.** The boss's health reaches zero.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(timer) &gt; (300)&gt;
</div>

**Survive time.** The timer passes 300 seconds (5 minutes).
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(length of [enemies v]) = (0)&gt;
</div>

**All enemies gone.** The enemies list is empty.
</div>

</div>

Most games check several of these every frame — and playtesting is how you find the right target number.

!!! mascot-tip "Playtest to Find the Right Difficulty"
    ![Scratch the Cat pointing at a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A win condition that's too easy feels boring, and one that's too hard feels unfair — the only way to know which is to watch someone else play. Hand your game to a friend, say nothing, and watch where they get stuck or breeze through; that's your cue for what number to change.

---

### Win Condition Implementation

<div class="scratch">
forever // Check win conditions each frame
    if &lt;(score) &gt; (1000)&gt; then
        broadcast [win v]
        stop [this script v]
    end
    if &lt;(length of [coins v]) = (0)&gt; then
        broadcast [win v]
        stop [this script v]
    end
    if &lt;(boss-health) = (0)&gt; then
        broadcast [win v]
        stop [this script v]
    end
end
</div>

---

### Win Sequence

<div class="scratch">
when I receive [win v]
stop [all v]
switch backdrop to [victory v]
play sound [fanfare v]
say [YOU WIN!] for (5) seconds
wait (3) seconds
show variable [final-score v]
wait (5) seconds
broadcast [return-to-menu v]
</div>

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

<div class="scratch">
if &lt;(lives) = (0)&gt; then
    broadcast [game-over v]
end
</div>

### What Is a Lose Condition?

**Lose condition** = specific situation where the player **fails** and game ends!

### Common Lose Conditions

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
&lt;(lives) = (0)&gt;
</div>

**No lives.** Three hits and the game ends.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(timer) = (0)&gt;
</div>

**Time out.** The countdown reaches zero before the goal is met.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;(y position) &lt; (-200)&gt;
</div>

**Fall off world.** The sprite drops below the bottom of the stage.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;touching [lava v]?&gt;
</div>

**Touch hazard.** One touch of lava or spikes is instant death.
</div>

<div class="card" markdown>
<div class="scratch">
&lt;not &lt;(npc-protected)&gt;&gt;
</div>

**Fail objective.** An escort mission ends the moment the NPC doesn't survive.
</div>

</div>

---

### Lose Condition Implementation

<div class="scratch">
forever // Check lose conditions
    if &lt;(lives) = (0)&gt; then
        broadcast [game-over v]
        stop [this script v]
    end
    if &lt;(timer) = (0)&gt; then
        broadcast [game-over v]
        stop [this script v]
    end
    if &lt;(y position) &lt; (-200)&gt; then
        broadcast [game-over v]
        stop [this script v]
    end
    if &lt;touching [lava v]?&gt; then
        broadcast [game-over v]
        stop [this script v]
    end
end
</div>

---

### Game Over Sequence

<div class="scratch">
when I receive [game-over v]
stop [all v]
switch backdrop to [game-over v]
play sound [game-over-sound v]
say [GAME OVER] for (3) seconds
wait (2) seconds
say (join [Final Score: ] (score)) for (5) seconds
wait (3) seconds
broadcast [return-to-menu v]
</div>

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
[1] "health-potion"
[2] "iron-sword"
[3] "gold-key"
[4] "magic-scroll"
```

---

### Inventory Operations

<div class="grid" markdown>

<div class="card" markdown>
<div class="scratch">
add [potion] to [inventory v]
</div>

**Add item.** Adds a new item to the end of the list.
</div>

<div class="card" markdown>
<div class="scratch">
delete (1) of [inventory v]
</div>

**Remove item.** Removes the item at a specific position.
</div>

<div class="card" markdown>
<div class="scratch">
set [item-to-use v] to (item (1) of [inventory v])
delete (1) of [inventory v]
</div>

**Use item.** Reads the item, then removes it from the list.
</div>

<div class="card" markdown>
<div class="scratch">
[inventory v] contains [potion]?
</div>

**Check item.** True or false — is this item in the list?
</div>

<div class="card" markdown>
<div class="scratch">
length of [inventory v]
</div>

**Count items.** How many items are currently in the list.
</div>

<div class="card" markdown>
<div class="scratch">
show list [inventory v]
</div>

**Show inventory.** Displays the list on the stage.
</div>

</div>

---

### Inventory Systems

#### Simple Inventory (Stack)

<div class="scratch">
when I receive [pickup-item v]
add [item-name] to [inventory v]
say (join [Got: ] (item-name)) for (2) seconds
</div>

#### Categorized Inventory

Group pickups into separate lists — weapons, potions, keys, and quest items:

<div class="scratch">
when I receive [pickup v]
if &lt;(item-type) = [weapon]&gt; then
    add (item) to [weapons v]
else
    if &lt;(item-type) = [potion]&gt; then
        add (item) to [potions v]
    end
end
</div>

#### Weight/Slot Limit

<div class="scratch">
if &lt;(length of [inventory v]) &lt; (20)&gt; then
    add [item] to [inventory v]
else
    say [Inventory full!] for (2) seconds
end
</div>

---

### Inventory UI

<div class="scratch">
when green flag clicked
hide list [inventory v]

when key [i v] pressed
if &lt;(showing-inventory)&gt; then
    hide list [inventory v]
    set [showing-inventory v] to (false)
else
    show list [inventory v]
    set [showing-inventory v] to (true)
end
</div>

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

!!! mascot-celebration "You Just Built a Complete Game!"
    ![Scratch the Cat celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just mastered list-based inventories and high scores, wrote real win and lose conditions, coordinated sprites with synchronous broadcasts, and learned to test and debug like a pro. That's every system a finished game needs — score, lives, victory, defeat, and quality control — all working together in one project!

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
