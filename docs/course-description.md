# Course Description

This file is the seed document used by the learning-graph-generator skill to
enumerate concepts, build the dependency graph, and assign concepts to a
taxonomy. Keep it focused, concrete, and free of marketing language.

A good course description includes:

- **Title** — same as `site_name` in `mkdocs.yml`
- **Audience** — who this book is for and what they already know
- **Prerequisites** — concepts the reader is assumed to have mastered
- **Topics** — the major areas the book covers (typically 8–20 topics)
- **Bloom's Taxonomy outcomes** — what the reader should be able to *remember,
  understand, apply, analyze, evaluate,* and *create* by the end

Run the `course-description-analyzer` skill to validate completeness, then run
`learning-graph-generator` to enumerate ~200 concepts with dependencies.

---

## Title

Scratch Programming for Kids

## Audience

**Primary audience:** Children ages 8–12 (Grades 3–6) with no prior programming experience.

**Secondary audience:** Parents, teachers, and mentors guiding young learners; absolute beginners of any age curious about visual programming.

**Assumed background:**
- Basic computer literacy: using a mouse/trackpad, keyboard typing, navigating a web browser
- Reading level: comfortable with simple sentences and short paragraphs (approx. 3rd grade reading level)
- No coding, math beyond basic arithmetic, or logic background required
- Access to a computer with internet (for Scratch web editor at scratch.mit.edu) or offline editor

**Learning style:** Visual, hands-on, project-based. Learners build by exploring, tinkering, and creating shareable projects (games, stories, animations). The book follows the Creative Computing framework: *Imagine → Create → Play → Share → Reflect*.

## Prerequisites

| Prerequisite | Description |
|--------------|-------------|
| **Basic computer use** | Click, drag, type, open/close browser tabs |
| **Reading fluency** | Read short instructions independently; images/icons support comprehension |
| **Curiosity & playfulness** | Willingness to experiment, make mistakes, and try again |
| **Internet access** | For Scratch community, saving/sharing projects (offline editor works for core content) |

**No prior knowledge needed of:**
- Programming concepts (loops, variables, conditionals)
- Coordinate geometry (x/y positions — introduced gently)
- Boolean logic (true/false — introduced via sensing blocks)
- File management (Scratch handles project saving)

## Topics

The book is organized into **8 major units** that spiral through computational concepts, each culminating in a creative project. Topics progress from concrete/visual to abstract/logical.

### Unit 0: Welcome to Scratch — Getting Started
1. **What is Scratch?** — Visual programming, sprites, stage, blocks palette
2. **Scratch Editor Tour** — Code / Costumes / Sounds tabs, toolbar, zoom
3. **Creating an Account** — Joining the community, studio, commenting, remixing
4. **Your First Script** — Drag blocks, snap together, green flag, stop sign
5. **Saving & Sharing** — "File → Save now", "Share" button, project page

### Unit 1: Sequencing & Motion — "About Me" Interactive Collage
6. **Sequences of Instructions** — Order matters; step-by-step thinking
7. **Motion Blocks** — `move`, `turn`, `go to`, `glide`, x/y coordinates
8. **Events: When Green Flag Clicked** — Starting scripts, multiple sprites
9. **Looks Blocks** — `say`, `think`, `switch costume`, `next costume`, `size`
10. **Costumes & Animation Basics** — Frame-by-frame, costume center
11. **Debugging: "My sprite didn't move!"** — Reading scripts top-to-bottom, highlighted blocks

### Unit 2: Loops & Animation — Music Video
12. **Forever Loop** — Continuous motion, backgrounds that scroll
13. **Repeat Loop (Counted)** — Exact repetitions, counting with variables preview
14. **Repeat Until Loop** — Condition-controlled loops (intro to Boolean)
15. **Parallelism** — Multiple scripts running at once (broadcast preview)
16. **Sound Blocks** — `play sound`, `start sound`, `change tempo`, beats
17. **Synchronizing Motion & Sound** — Dance to the beat, lip-sync
18. **Extension: Pen** — Drawing trails, rainbow lines, geometric patterns

### Unit 3: Events, Broadcast & Stories — "Pass It On"
19. **Event Blocks** — `when this sprite clicked`, `when key pressed`, `when backdrop switches`
20. **Broadcast Messages** — `broadcast`, `when I receive` — sprite-to-sprite communication
21. **Broadcast and Wait** — Coordinated scenes, dialogue timing
22. **Backdrops & Scene Changes** — `switch backdrop`, `next backdrop`, storytelling flow
23. **Remixing & Collaboration** — Exploring community projects, giving credit, pair programming
24. **Storyboarding** — Planning scenes before coding, algorithmic thinking

### Unit 4: Conditionals, Operators & Variables — Games
25. **If / If-Else Blocks** — Decision making, branches
26. **Sensing Blocks** — `touching?`, `touching color?`, `key pressed?`, `distance to`
27. **Operators: Comparison** — `<`, `>`, `=` with numbers and sensor values
28. **Operators: Boolean Logic** — `and`, `or`, `not` — combining conditions
29. **Variables (Data)** — `make a variable`, `set`, `change by`, `show/hide` — score, lives, timer
30. **Variables for All Sprites vs. This Sprite Only** — Scope introduction
31. **Random Numbers** — `pick random`, dice rolls, unpredictable gameplay
32. **Game Mechanics** — Player control, enemy movement, collision, win/lose screens

### Unit 5: Advanced Features — Clones, Lists & Extensions
33. **Cloning** — `create clone of`, `when I start as a clone`, `delete this clone` — many similar objects
34. **Lists (Arrays)** — `make a list`, `add`, `delete`, `item #`, `length`, `contains?` — inventory, high scores
35. **Video Sensing Extension** — Motion detection, interactive camera games
36. **Text-to-Speech Extension** — Talking sprites, accessibility
37. **Translate Extension** — Multilingual projects
38. **Hardware Extensions (micro:bit, Makey Makey)** — Physical computing bridge
39. **Custom Blocks (My Blocks)** — `define`, parameters, `run without screen refresh` — abstraction, reusability

### Unit 6: Capstone Project — Design Studio
40. **Design Process** — Imagine → Plan → Create → Test → Improve → Share
41. **Project Planning** — Pseudocode, flowchart, storyboard, asset list
42. **Iterative Development** — Versioning, testing, debugging strategies
43. **Polishing** — Instructions screen, credits, sound effects, visual juice
44. **Sharing & Community** — Tags, description, remix tree, feedback, studios
45. **Reflection** — What I learned, what was hard, what I'm proud of, what's next

---

## Learning Outcomes

By the end of this book, the reader will be able to:

### Remember
- Identify all **10 Scratch block categories** (Motion, Looks, Sound, Events, Control, Sensing, Operators, Variables, List, My Blocks) and their color codes
- Name the **three main editor tabs** (Code, Costumes, Sounds) and their purposes
- Recall **key vocabulary**: sprite, stage, script, costume, backdrop, block, hat block, stack block, reporter block, Boolean block, clone, variable, list, broadcast
- State the **coordinate system**: stage is 480×360, center is (0,0), x ranges –240 to 240, y ranges –180 to 180
- List the **6 units** of the Creative Computing progression (Exploring → Animations → Stories → Games → Diving Deeper → Hackathon)

### Understand
- Explain the **difference between sequential, parallel, and event-driven execution** in Scratch
- Describe **why order matters** in a script (top-to-bottom execution)
- Interpret **what a script does** by reading blocks aloud in plain language
- Distinguish **hat blocks** (event starters) from **stack blocks** (actions) and **reporter/Block** (values)
- Summarize **how broadcasting enables multi-sprite coordination** without direct references
- Clarify **the difference between a variable (single value) and a list (collection of values)**
- Explain **what a clone is** and how it differs from duplicating a sprite

### Apply
- Build a **multi-sprite animated scene** using sequences, loops, costume changes, and sound
- Program a **controllable player sprite** using keyboard events, motion, and boundary checking
- Implement **score, timer, and lives** using variables with proper initialization and updates
- Create **conditional game logic**: "if touching enemy then lose life", "if score > 10 then win"
- Use **broadcast and wait** to choreograph a multi-scene story with dialogue
- Generate **repeating patterns** with the Pen extension (spirographs, polygons, spirals)
- Build a **clone-based system**: falling stars, enemy swarms, particle effects
- Record and play **custom sounds**; use Text-to-Speech for narration

### Analyze
- **Debug a broken script** by single-stepping, checking block highlighting, and testing hypotheses
- Compare **two solutions** to the same problem (e.g., repeat vs. forever + if) and justify which is better
- **Deconstruct a community project** by reading its scripts and identifying concepts used
- **Trace variable values** through a loop to predict final score or counter value
- **Identify infinite loops, race conditions, and broadcast storms** in their own or others' code
- **Categorize blocks** in an unfamiliar script by type (hat, stack, reporter, Boolean, cap)

### Evaluate
- **Assess a project's usability**: Are controls intuitive? Is feedback clear? Is difficulty appropriate?
- **Critique their own code** for redundancy (e.g., repeated block stacks → custom block opportunity)
- **Decide when to use clones vs. separate sprites** based on behavior similarity and performance
- **Choose appropriate data structure**: variable vs. list vs. multiple variables for game state
- **Evaluate a remix**: What did the remixer add/change? Does it improve the original? Is credit given?

### Create
- **Design and build an original game** (maze, platformer, clicker, quiz, simulation) from scratch
- **Author an interactive story** with branching paths, multiple endings, and player choices
- **Construct a learning tool** for a school subject (math quiz, vocabulary flashcards, science simulation)
- **Develop a multiplayer or two-player game** using cloud variables or shared keyboard
- **Compose a music video or animation** synced to beats with multiple characters
- **Invent a new Scratch block** (My Block) with parameters that solves a repeated need
- **Remix a community project** substantially: new mechanics, art, story, or audience
- **Document and share a complete project** with instructions, credits, and reflective notes

---

*This course description aligns with the **Harvard Creative Computing Curriculum** (ScratchEd), **CSTA K–12 CS Standards** (1A/1B/2-AP), and **Bloom's Revised Taxonomy**. It is designed to feed the learning-graph-generator for ~200 concept nodes with prerequisite edges.*