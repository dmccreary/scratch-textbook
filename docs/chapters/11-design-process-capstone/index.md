---
title: Design Process and Capstone Project
description: Guides students through the complete design cycle: imagine, plan, create, test, improve, share, and reflect for young learners
generated_by: claude skill chapter-content-generator
date: 2026-06-10 14:00:00
version: 0.08
---

# Design Process and Capstone Project

## Summary

Guides students through the complete design cycle: imagine, plan, create, test, improve, share, and reflect. This chapter covers 16 concepts from the learning graph, building on prerequisite concepts from earlier chapters.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

1. Storyboard
2. Plan Phase
3. Create Phase
4. Asset List
5. Test Phase
6. Improve Phase
7. Design Journal
8. Share Phase
9. Polishing
10. Design Process
11. Iterative Development
12. Reflection
13. Instructions Screen
14. Credits
15. Sound Effects
16. Visual Juice

## Prerequisites

This chapter builds on concepts from:

- [3. Motion Blocks and Block Categories](../03-motion-blocks-categories/index.md)
- [4. Events, Sequences, and First Scripts](../04-events-sequences-first-scripts/index.md)
- [5. Sounds, Extensions, and Sharing Projects](../05-sounds-extensions-sharing/index.md)
- [6. Broadcasting, Conditionals, and Sensing](../06-broadcasting-conditionals-sensing/index.md)
- [8. Animation, Parallelism, and Debugging](../08-animation-parallelism-debugging/index.md)
- [9. Advanced Control and Operators](../09-advanced-control-operators/index.md)
- [10. Game Mechanics and Win/Lose Conditions](../10-game-mechanics-win-lose/index.md)

---

## The Design Process — Your Creative Roadmap! 🗺️

### What Is the Design Process?

**The Design Process** = a **step-by-step method** for turning ideas into finished projects. Professional game developers, engineers, artists, and inventors ALL use it!

### The 6 Stages

```
IMAGINE → PLAN → CREATE → TEST → IMPROVE → SHARE
     ↑_____________REFLECT_____________↓
```

**Reflection happens at EVERY stage!** 🔄

---

## Stage 1: IMAGINE — Dream Big! 💭

### What Is Imagine?

**Imagine** = let your creativity run wild! No limits, no "that's impossible" — just pure ideas!

### Imagine Activities

| Activity | Description |
|----------|-------------|
| **Brainstorm** | Write 20 game ideas in 5 minutes |
| **Mind Map** | Central idea → branches of features |
| **Mashup** | Combine two games: "Mario + Tetris" |
| **What If?** | "What if gravity reversed?" "What if you played as the villain?" |
| **Inspiration Board** | Collect images, colors, music that inspire you |

### Imagine Questions

| Question | Purpose |
|----------|---------|
| **What's the core fun?** | What makes the player smile? |
| **Who is the player?** | Kid, teen, adult, family? |
| **What's the hook?** | Why keep playing after 5 minutes? |
| **What's unique?** | What makes YOUR game special? |
| **What's the feeling?** | Joy, tension, wonder, mastery? |

### Imagine Output

**One-sentence Game Concept:**

> "A [genre] game where you [core action] to [goal] while [challenge], featuring [unique twist]."

**Example:**

> "A platformer where you **dash through time** to **collect chrono-shards** while **avoiding paradox monsters**, featuring **past/future world switching**."

---

## Stage 2: PLAN — Blueprint Your Game! 📐

### What Is Plan?

**Plan** = turn your wild idea into a **buildable blueprint** with clear steps!

### Plan Deliverables

| Document | Purpose |
|----------|---------|
| **Game Design Document (GDD)** | Complete game specification |
| **Storyboard** | Visual scene-by-scene plan |
| **Asset List** | Every sprite, sound, backdrop needed |
| **Flowchart** | Logic flow for complex systems |
| **Task List** | Ordered steps with priorities |
| **Milestones** | Checkpoints: v0.1, v1.0, v2.0... |

---

### Game Design Document (GDD) Template

```
GAME DESIGN DOCUMENT
====================
Title: [Game Name]
Genre: [Platformer/Puzzle/RPG/etc.]
Target Audience: [Ages 8-12 / All Ages]
Core Mechanic: [One-sentence description]
Win Condition: [How to win]
Lose Condition: [How to lose]
Controls: [Key mappings]
Levels: [Number, themes, progression]
Sprites: [Player, enemies, items, UI]
Sounds: [Music, SFX, voice]
Extensions: [Pen, Video, micro:bit, etc.]
Milestones:
  v0.1 - Core movement
  v0.5 - First playable level
  v1.0 - Complete game
  v1.1 - Polish & bug fixes
```

---

### Storyboard — Visual Script! 🎬

**Storyboard** = comic-strip style plan of your game's scenes!

| Panel | What to Draw | Notes |
|-------|--------------|-------|
| 1 | Title screen | "Press SPACE to start" |
| 2 | Level 1 start | "Tutorial: Move with arrows" |
| 3 | First challenge | "Jump over spikes" |
| 4 | First reward | "Coin gives 10 points" |
| 5 | Mid-level twist | "New enemy type appears" |
| 6 | Level complete | "All coins collected!" |
| 7 | Level 2 start | "New mechanic: Double jump" |
| ... | ... | ... |
| Final | Victory screen | "YOU WIN! Final score: ___" |

---

### Asset List — Shopping List! 🛒

| Category | Assets Needed |
|----------|---------------|
| **Sprites** | Player (idle, walk1-4, jump), Enemy1, Enemy2, Coin, Spike, Platform, UI hearts |
| **Backdrops** | Title, Level1, Level2, Boss, GameOver, Victory |
| **Sounds** | Jump, Coin, Hit, Music-L1, Music-L2, GameOver, Victory |
| **Costumes** | Player idle, walk1-4, jump, hurt; Enemy walk1-2, hurt |
| **UI** | Score display, Lives hearts, Timer, Pause menu |

---

### Flowchart — Logic Map! 🗺️

```
START → Initialize Variables → MAIN LOOP
                    ↓
            Check Input (Keys)
                    ↓
            Update Physics (Gravity, Velocity)
                    ↓
            Check Collisions (Ground, Enemies, Coins)
                    ↓
            Update Animations
                    ↓
            Check Win/Lose
                    ↓
            Update UI
                    ↓
            WAIT 0.01s → LOOP
```

---

### Task List — Prioritized Steps!

| Priority | Task | Milestone |
|----------|------|-----------|
| 🔴 Critical | Player movement (left/right/jump) | v0.1 |
| 🔴 Critical | Ground collision | v0.1 |
| 🔴 Critical | Camera follow | v0.1 |
| 🟡 High | Coin collection + score | v0.2 |
| 🟡 High | Enemy patrol AI | v0.2 |
| 🟡 High | Level design (3 levels) | v0.5 |
| 🟢 Medium | Boss fight | v0.8 |
| 🟢 Medium | Sound effects + music | v0.9 |
| 🔵 Low | Particle effects | v1.0 |
| 🔵 Low | Unlockable skins | v1.1 |

---

## Stage 3: CREATE — Build It! 🛠️

### What Is Create?

**Create** = write the code, draw the art, record the sounds — **make it real!**

### Create Best Practices

| Practice | Why |
|----------|-----|
| **One thing at a time** | Build movement, test, THEN add coins |
| **Test constantly** | Run after EVERY change |
| **Use versioning** | Save v0.1, v0.2, v0.3... |
| **Comment your code** | Future you will thank you |
| **Clean up regularly** | Right-click → Clean up |

### Create Order (Suggested)

1. **Core movement** (player controller)
2. **Camera follow** (if scrolling)
3. **Ground collision** (platforms)
4. **Collectibles** (coins, score)
5. **Enemies** (patrol, chase)
6. **Hazards** (spikes, lava)
5. **Lives/Game Over** (health system)
6. **Level transitions** (broadcasts)
6. **UI** (score, lives, timer)
6. **Sound effects** (jump, coin, hit)
6. **Music** (level themes)
6. **Polish** (particles, juice, menus)

---

## Stage 4: TEST — Does It Work? 🧪

### What Is Test?

**Test** = systematically verify **every feature works** and **find bugs**!

### Test Phases

| Phase | Focus | Who |
|-------|-------|-----|
| **Self-test** | You play your own game | You |
| **Target audience test** | Kids play your game | Friends/siblings |
| **Stress test** | Push limits (100 clones, 30 min) | You |
| **Edge case test** | Weird inputs, rapid clicks | You |
| **Regression test** | Old features after changes | You |

---

### Test Checklist

| Category | Specific Tests |
|----------|----------------|
| **Movement** | All directions, speeds, jumping, edges |
| **Collision** | Ground, walls, ceilings, slopes, enemies |
| **Collectibles** | Score adds, sound plays, item disappears |
| **Enemies** | Patrol, chase, damage, defeat |
| **Hazards** | Spikes, lava, pits, falling |
| **Lives** | Lose life, invincibility, game over |
| **Levels** | Transitions, spawns, completion |
| **UI** | Score, lives, timer, menus, pause |
| **Audio** | Music loops, SFX volume, mute |
| **Performance** | 100 clones, 30 min, save/load |

---

### Test Documentation

```
TEST LOG - v0.5
===============
Date: 2026-06-10
Tester: Me

PASSED:
✅ Player moves left/right smoothly
✅ Jump works from ground only
✅ Coin collection adds 10 points
✅ Enemy patrol turns at edges

FAILED:
❌ Player gets stuck in wall corner
❌ Enemy sometimes walks through platform
❌ Music doesn't loop properly

NOTES:
- Wall sticking: need better corner collision
- Enemy: check ground detection
- Music: check loop points
```

---

## Stage 5: IMPROVE — Make It Better! ⬆️

### What Is Improve?

**Improve** = fix bugs, add polish, balance difficulty, add "juice"!

### Improvement Categories

| Category | Examples |
|----------|----------|
| **Bug Fixes** | Wall sticking, enemy clipping, music loops |
| **Balance** | Enemy speed, jump height, coin values |
| **Juice** | Screen shake, particle effects, screen flash |
| **Accessibility** | Colorblind mode, adjustable speed |
| **Quality of Life** | Checkpoints, level select, skip cutscene |
| **Performance** | Reduce clones, optimize loops |

---

### The "Juice" Checklist 🍹

| Juice Element | Implementation | Impact |
|---------------|----------------|--------|
| **Screen shake** | `change x by (pick random -5 to 5)` on hit | Impact feel |
| **Screen flash** | `change color effect by 50, wait, clear` | Damage feedback |
| **Particle burst** | Clones + stamp + fade on collect/hit | Satisfaction |
| **Sound variation** | `pick random pitch` on repeated SFX | Less repetition |
| **Screen pause** | `wait 0.05 secs` on big events | Weight/impact |
| **Coyote time** | Allow jump 0.1s after leaving ground | Forgiving jumps |
| **Jump buffering** | Queue jump if pressed slightly early | Responsive feel |

---

### Balancing Difficulty

| Too Easy | Too Hard | Just Right |
|----------|----------|------------|
| Enemies never hit | Instant death traps | Fair challenge |
| Infinite lives | One-hit kills | 3 lives + checkpoints |
| No time pressure | Impossible time limits | Generous but present |
| Boring repetition | Impossible jumps | Variety + progression |

---

### Iterative Development — Cycle Until Perfect! 🔄

```
PLAN → CREATE → TEST → IMPROVE → TEST → IMPROVE → TEST...
```

**Each cycle makes the game better!** Most pro games go through 50+ iterations.

---

## Stage 6: SHARE — Show the World! 🌍

### What Is Share?

**Share** = publish your game so others can play, enjoy, and remix!

### Before Sharing Checklist

| ✅ Ready to Share? | Check |
|--------------------|-------|
| **No game-breaking bugs** | Played 10 min without crash |
| **Clear instructions** | "Arrows move, Space jumps" |
| **Credits included** | Art, music, code sources |
| **Tags added** | "platformer, pixel-art, fun" |
| **Thumbnail set** | Eye-catching project image |
| **Notes complete** | Changelog, controls, credits |

---

### Sharing Steps

1. Click **Share** (📤) in toolbar
2. Add **clear title**: "Super Coin Collector v1.2"
3. Write **instructions**: "Arrows move, Space jumps, Collect all coins!"
4. Add **credits**: "Music by Kevin MacLeod. Art by me."
5. Add **tags**: "platformer, pixel-art, coin-collector, fun"
6. Choose **visibility**: Anyone / Link only / Private
7. Click **Share**!

---

### After Sharing

| Action | Why |
|--------|-----|
| **Send to friends** | Get first players |
| **Post in studios** | "Cool Platformers" studio |
| **Ask for feedback** | "What's too hard/easy?" |
| **Watch remixes** | See how others extend your game |
| **Respond to comments** | Build community |
| **Update based on feedback** | v1.1, v1.2, v1.3... |

---

## Extra Polish: The Final 10%! ✨

### Instructions Screen — Teach the Player! 📋

**Instructions Screen** = first thing player sees — teaches controls!

### Instructions Screen Elements

| Element | Example |
|---------|---------|
| **Title** | "SUPER COIN COLLECTOR" |
| **Controls** | "← → Move    SPACE Jump    I Inventory" |
| **Goal** | "Collect all 20 coins to win!" |
| **Hazards** | "Avoid spikes ⚡ and enemies 👾" |
| **Tips** | "Hold SPACE for higher jump!" |
| **Start Button** | "Press SPACE to Begin" |

### Instructions Screen Code

```
when I receive [show-instructions v]
switch costume to [instructions-screen v]
show
when [space] key pressed
hide
broadcast [game-start v]
```

---

### Credits — Honor Your Sources! 🙏

**Credits Screen** = thank everyone who helped!

### Credits Template

```
CREDITS
=======

PROGRAMMING
- [Your Name] - All code

ART & ANIMATION
- [Your Name] - Player, enemies, UI
- @PixelArtist - Background tiles (CC BY 4.0)
- @SpriteMaster - Enemy sprites (remixed)

MUSIC
- "Adventure Theme" by Kevin MacLeod (incompetech.com) - CC BY 4.0
- "Boss Battle" by Eric Matyas (soundimage.org) - CC BY 4.0

SOUND EFFECTS
- Coin, Jump, Hit - freesound.org users
- Explosion - Generated with Bfxr

TOOLS
- Scratch 3.0 (scratch.mit.edu)
- Bfxr (sound generator)
- Piskel (sprite editor)

SPECIAL THANKS
- @CoderJane for platformer physics tutorial
- @GameDevPro for enemy AI patterns
- My playtesters: Alex, Sam, Jordan

THANK YOU FOR PLAYING!
```

---

### Sound Effects — Audio Polish! 🔊

### Sound Effect Categories

| Category | Examples | Tips |
|----------|----------|------|
| **Player** | Jump, Land, Hurt, Death, Dash | Short, distinct |
| **Collectibles** | Coin, Gem, Power-up, Heart | Satisfying "ping" |
| **Enemies** | Spawn, Hurt, Death, Attack | Threatening |
| **Environment** | Water, Wind, Fire, Door | Atmospheric |
| **UI** | Menu select, Pause, Error, Success | Subtle, clear |
| **Music** | Level themes, Boss, Menu, Game Over | Loopable |

---

### Sound Design Tips

| Tip | Why |
|-----|-----|
| **Pitch variation** | `change pitch by (pick random -10 to 10)` — less repetitive |
| **Layer sounds** | Jump + land = two sounds = more impact |
| **Volume balance** | Music quieter than SFX |
| **Silence is powerful** | Pause music for tension |
| **Test on phone speaker** | Many kids play on tablets |

---

### Visual Juice — Eye Candy! 👁️

### What Is "Juice"?

**Juice** = visual/audio feedback that makes actions feel **satisfying, powerful, alive!**

### Juice Techniques

| Technique | Code | Effect |
|-----------|------|--------|
| **Screen shake** | `repeat 5: change x by (pick random -5 to 5), wait 0.02, end` | Impact |
| **Screen flash** | `change color effect by 50, wait 0.05, clear graphic effects` | Hit flash |
| **Scale pop** | `set size to 120%, wait 0.05, set size to 100%` | Bounce feel |
| **Color flash** | `change color effect by 50, wait 0.05, clear` | Damage/collect |
| **Particles** | Clones + stamp + `change ghost by 5` + delete | Explosion |
| **Screen pause** | `wait 0.05 secs` on big events | Weight |
| **Trail effect** | `pen down` on fast movement | Speed feel |

---

### Juice Examples

#### Coin Collect Juice

```
when I receive [coin-collected v]
change [score v] by (10)
play sound [coin v]
create clone of [coin-particle v]
change color effect by 50
wait 0.05 secs
clear graphic effects
```

#### Enemy Hit Juice

```
when I receive [enemy-hit v]
broadcast [screen-shake v]
change color effect by 100
play sound [hit v]
wait 0.1 secs
clear graphic effects
```

#### Screen Shake (Broadcast)

```
when I receive [screen-shake v]
repeat 5
    change x by (pick random -5 to 5)
    change y by (pick random -5 to 5)
    wait 0.02 secs
end
go to x: (original-x) y: (original-y)
```

---

## Reflection — Learn and Grow! 🧠

### What Is Reflection?

**Reflection** = looking back at your project to **learn what worked, what didn't, and how to improve next time!**

### Reflection Questions

| Question | Purpose |
|----------|---------|
| **What am I most proud of?** | Celebrate success |
| **What was hardest?** | Identify learning gaps |
| **What would I do differently?** | Improve process |
| **What did I learn?** | Cement knowledge |
| **What's next?** | Plan future projects |

### Reflection Template

```
PROJECT REFLECTION
==================
Game: [Name]
Version: [v1.2]
Date Completed: [Date]

WHAT WENT WELL:
- Smooth player movement felt great
- Enemy AI was challenging but fair
- Juice effects made collecting coins satisfying
- Music fit the theme perfectly

CHALLENGES OVERCOME:
- Wall sticking bug → fixed with raycast collision
- Enemy AI too aggressive → tuned detection radius
- Music looping click → fixed with seamless loop points

WHAT I LEARNED:
- Broadcast and wait is essential for level loading
- Variable scope (global vs local) matters a lot
- Juice effects make huge difference in feel
- Testing with actual kids reveals real issues

NEXT TIME I'LL:
- Plan asset list more carefully upfront
- Use versioning from day 1 (lost v0.3!)
- Add automated tests for core mechanics
- Design juice effects earlier in process

NEXT PROJECT IDEAS:
- Metroidvania with map system
- Multiplayer co-op platformer
- Level editor for players
```

---

## The Capstone Project — Your Masterpiece! 🏆

### What Is the Capstone?

**Capstone Project** = your **final, polished game** that demonstrates **everything you've learned!**

### Capstone Requirements

| Requirement | Details |
|-------------|---------|
| **Core mechanics** | Movement, collision, physics |
| **At least 3 levels** | Progressive difficulty |
| **Win + Lose conditions** | Clear goals, fair failure |
| **Score/Lives/Timer** | At least 2 systems |
| **Enemies + Hazards** | At least 2 enemy types |
| **Collectibles** | Coins, gems, power-ups |
| **Sound + Music** | SFX + at least 1 music track |
| **Polish** | Juice, UI, instructions, credits |
| **No major bugs** | Tested 30+ minutes |
| **Shared publicly** | On Scratch with tags |

---

### Capstone Project Ideas

| Idea | Core Mechanic | Unique Twist |
|------|---------------|--------------|
| **Time Dash** | Platformer | Switch past/future worlds |
| **Color Shift** | Puzzle-platformer | Change color to pass obstacles |
| **Gravity Flip** | Platformer | Reverse gravity on command |
| **Shadow Clone** | Puzzle | Record/replay your moves |
| **Neon Runner** | Endless runner | Rhythm-based obstacles |
| **Tiny World** | Exploration | Shrink/grow to explore |

---

### Your Capstone Journey

```
WEEK 1: IMAGINE + PLAN
  - Brainstorm 10 ideas → pick 1
  - Write GDD, storyboard, asset list
  - Set up Scratch project, versioning
  
WEEK 2: CREATE (Core)
  - Player movement + camera
  - Collision system
  - Level 1 layout
  
WEEK 3: CREATE (Systems)
  - Enemies, hazards, collectibles
  - Score, lives, timer
  - Level 2 & 3
  
WEEK 4: TEST + IMPROVE + POLISH
  - Playtest with friends
  - Fix bugs, balance difficulty
  - Add juice, UI, sound, music
  
WEEK 5: SHARE + REFLECT
  - Write instructions, credits
  - Share on Scratch with tags
  - Write reflection
  - Submit capstone!
```

---

## You Are a Game Developer Now! 🎮

### Skills You've Mastered

| Category | Skills |
|----------|--------|
| **Programming** | Variables, loops, conditionals, events, clones, lists |
| **Game Design** | Mechanics, balance, level design, progression |
| **Art & Animation** | Sprites, costumes, backdrops, animation |
| **Audio** | SFX, music, voice, dynamic audio |
| **Engineering** | Debugging, testing, versioning, optimization |
| **Design Process** | Imagine, plan, create, test, improve, share, reflect |
| **Collaboration** | Remixing, crediting, feedback, community |

---

### What's Next?

| Path | Resources |
|------|-----------|
| **Keep making games!** | Scratch, then GameMaker, Unity, Godot |
| **Learn coding** | Python, JavaScript, C# |
| **Game jams** | Ludum Dare, GMTK, Brackeys |
| **Communities** | Scratch forums, r/gamedev, Discord |
| **Education** | CS degrees, game design programs |
| **Career** | Game dev, software eng, UX design, art |

---

## Final Challenge: Your Capstone! 🏁

### Your Mission

**Create, polish, and share a complete, original game on Scratch that demonstrates everything you've learned.**

### Submission Checklist

- [ ] Game Design Document completed
- [ ] Storyboard drawn
- [ ] Asset list created
- [ ] Core movement + collision working
- [ ] 3+ levels with progression
- [ ] Win condition implemented
- [ ] Lose condition implemented
- [ ] Score + Lives + Timer systems
- [ ] 2+ enemy types with AI
- [ ] Collectibles + hazards
- [ ] Sound effects for all actions
- [ ] Background music (loops properly)
- [ ] Instructions screen
- [ ] Credits screen
- [ ] Juice effects (shake, flash, particles)
- [ ] Tested 30+ minutes without crashes
- [ ] Playtested by 2+ people
- [ ] Shared on Scratch with tags
- [ ] Reflection written

---

## Congratulations! 🎉

**You've completed the Scratch Programming for Kids textbook!**

You've journeyed from:
- **Hello World** → **Capstone Game Developer**

### Remember:

> **"The best way to learn game development is to make games."**

So keep making games. Keep learning. Keep sharing. Keep having fun!

---

## Thank You! 🙏

Thank you for joining this journey through Scratch programming. 

**Keep creating. Keep coding. Keep playing.**

---

*The Scratch Programming for Kids Team*

---

*This textbook was created with love for young creators everywhere. May your code be bug-free, your frame rates high, and your imagination limitless!*

---

*Scratch is developed by the Lifelong Kindergarten Group at the MIT Media Lab. Scratch is a trademark of MIT. This textbook is not affiliated with MIT or the Scratch Team.*