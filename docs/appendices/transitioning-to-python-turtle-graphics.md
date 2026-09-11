# Transitioning to Python Turtle Graphics

With 121 blocks you can see that Scratch is a powerful programming tool.
However, in the real world, students need to be able to use
a real text editor. Although block programming has its place
as a good way to introduce young students to computational thinking
ideas, there is a time to move on from Scratch to a real
programming language like Python.

We have successfully transitioned many students from Scratch
to another visually oriented system: Turtle Graphics programming with
Python.

This appendix is written for instructors, not students. It gives you the
signals to watch for, a concept-by-concept map from Scratch to Python
Turtle Graphics, and a suggested sequence for making the move without
losing a student's confidence along the way.

## Why Turtle Graphics Is the Right Next Step

Turtle Graphics is the ideal bridge out of Scratch because it keeps the one
thing that makes Scratch work for beginners — **immediate visual
feedback** — while swapping drag-and-drop blocks for typed statements.  A
student who moves a Scratch sprite with `move (10) steps` and `turn (15)
degrees` is already thinking exactly like a turtle: an object on a
[coordinate system](../glossary.md#coordinate-system) with a position and a
heading, moving forward and turning by an angle. Turtle Graphics does not
ask a student to learn a new mental model — it asks them to learn a new
*notation* for a model they already have.

That matters pedagogically. Jumping straight from Scratch to a
text-heavy, non-visual first Python program (reading CSV files, building a
command-line calculator) throws away the visual feedback loop that made
Scratch motivating in the first place, right at the moment a student is
also coping with new syntax. Turtle Graphics lets you change only one
variable at a time: keep the visual, spatial, immediate-feedback style of
programming the student already trusts, and introduce typed syntax as the
new challenge.

## Readiness Signals at a Glance

No single sign means a student is ready to move on — look for several of
these together before making the switch:

| Signal | What it looks like in practice |
|---|---|
| Keyboard fluency | Can find letter, number, and symbol keys without hunting, and uses Shift, Copy, Cut, and Paste without help |
| Outgrowing the block palette | Reaches for a feature Scratch doesn't have, or builds workarounds with My Blocks and lists to fake what a real language would do directly |
| Deep nesting | Scripts have loops nested three or more levels deep, or several stacked `if/else` blocks, and scrolling/dragging blocks has become the bottleneck, not the logic |
| Error tolerance | Doesn't give up when a program fails to run the first time, and is willing to read an error message and try again |
| Reading fluency | Comfortable reading a full sentence or short paragraph of instructions or an error message without help |
| Curiosity about "real code" | Asks what "real" programmers use, or wants to know how a game or app they use was built |

If most of a student's scripts still fit comfortably on one screen and
they're still discovering what blocks exist, that's a sign to stay in
Scratch longer — the transition works best when it feels like a step
forward, not a rescue from a tool that's failing them.

## Keyboarding Skills

Scratch is ideal when students have difficulty navigating the keyboard.
If they have not mastered the "Shift" key and the Copy/Cut and Paste
functions then Scratch is the right environment. Once students can
learn to quickly find the right keys and understand copy/cut and paste
it is time for them to move on to another system like Turtle Graphics.

Turtle Graphics programs are short — a few lines will draw a shape — so a
student does not need touch-typing speed to succeed. What they *do* need is:

- **Locating symbol keys** — parentheses, the period, the comma, and the
  colon appear in nearly every Turtle Graphics line (`forward(100)`,
  `t.penup()`, `for i in range(4):`). A student who cannot find these
  keys will spend more time typing than thinking.
- **Consistent capitalization and spacing** — Python is case-sensitive and
  whitespace-sensitive in a way Scratch never is. A block snaps together
  correctly no matter how a student clicks; a line of Python does not
  run if it's indented one space differently than its neighbor.
- **Copy, cut, and paste** — students who already reach for `Ctrl/Cmd+C`
  and `Ctrl/Cmd+V` instead of retyping a repeated line will be much
  faster fixing and reusing code than those who don't.

## Reading, Typing, and Syntax Tolerance

This is the readiness dimension instructors most often underestimate.
Scratch's drag-and-drop blocks make most syntax errors *physically
impossible* — a number-shaped input only accepts a number-shaped block. In
Python, nothing stops a student from typing `forward 100` instead of
`forward(100)`, and the program simply won't run until the missing
parentheses are added back.

Before moving a student to Turtle Graphics, make sure they can:

- Read an error message and locate the line number it refers to, even if
  they don't yet understand every word of the message itself.
- Accept that a program can be "almost right" and still not run at all —
  a very different experience from Scratch, where a script always runs,
  even if it doesn't do what was intended.
- Re-read their own typed code carefully, character by character, to spot
  a missing colon, an extra space, or a misspelled word — a skill Scratch
  never requires because there's nothing to misspell.

Students who melt down at the first red error message usually need more
time in Scratch, or a few short guided Turtle Graphics exercises done
together as a class before working independently.

## Program Complexity

Although we have seen some large scratch programs, at some point
the program size and the limited libraries offered by Scratch
start to hold students back.

Watch for these concrete signs that a project has outgrown Scratch:

- **Custom block sprawl** — a student has built many "My Blocks" that
  really amount to hand-rolled functions with parameters, which is
  exactly what Python functions do more directly.
- **List gymnastics** — using Scratch lists to simulate data structures
  (grids, records, simple databases) that a few lines of Python would
  express far more naturally.
- **Repeated, error-prone dragging** — a student spends more time
  scrolling the script area and hunting for the right block than thinking
  about logic. When the *interface* becomes the bottleneck instead of the
  *idea*, it's a strong signal to move on.
- **Wanting math Scratch doesn't expose well** — trigonometry, more
  precise numeric formatting, or working with lists of coordinates all
  read more clearly as Python expressions than as chains of operator
  blocks.

None of this means Scratch is "too simple" as a language — it means a
specific student's specific project has reached the edge of what
drag-and-drop can comfortably express.

## Cognitive and Developmental Readiness

This book's audience spans roughly ages 8–12, a range where readiness for
typed syntax varies enormously from student to student. A few guideposts:

- **Concrete-to-abstract thinking.** Younger students (roughly ages 8–9)
  often still reason best about concrete, visible objects — which is
  exactly what a turtle moving on screen provides, unlike an abstract
  variable holding a number they can't see. Turtle Graphics is forgiving
  here because the turtle itself stays concrete even as the code becomes
  more abstract.
- **Tolerance for delayed gratification.** Typing several lines of setup
  code before anything appears on screen requires more patience than
  clicking a single block. Students who already sit through building a
  multi-block Scratch script before testing it are usually ready for this.
- **Comfort with symbolic notation.** Students who have started using
  variables, coordinates, or negative numbers in math class (typically by
  4th–5th grade) tend to pick up Python's variables and coordinate calls
  (`t.goto(x, y)`) faster than those who haven't yet met these ideas.

Use your judgment alongside these guideposts — a confident 8-year-old who
reads well and doesn't mind mistakes can succeed with Turtle Graphics
earlier than a hesitant 12-year-old who is new to programming altogether.

## Mapping Scratch Concepts to Python Turtle Graphics

The fastest way to build a student's confidence is to show them that they
already know most of the ideas — only the notation is new.

| Scratch block | Python Turtle Graphics equivalent |
|---|---|
| `move (10) steps` | `t.forward(10)` |
| `turn ↻ (15) degrees` | `t.right(15)` |
| `turn ↺ (15) degrees` | `t.left(15)` |
| [Pen Down](../glossary.md#pen-down) | `t.pendown()` |
| [Pen Up](../glossary.md#pen-up) | `t.penup()` |
| `go to x: () y: ()` | `t.goto(x, y)` |
| `point in direction (90)` | `t.setheading(90)` |
| `repeat (4)` | `for i in range(4):` |
| `repeat until <>` | `while not (...):` |
| `set pen color to ()` | `t.pencolor("red")` |
| `set pen size to ()` | `t.pensize(3)` |
| Sprite's [x position](../glossary.md#x-coordinate) / [y position](../glossary.md#y-coordinate) | `t.xcor()` / `t.ycor()` |

Showing this table to students directly — or building it with them as a
class exercise — turns "learning Python" into "translating what I already
know," which is a much less intimidating framing.

## Availability of Python Turtle Graphics

We strongly suggest giving student exposure to turtle graphics
examples with Python. A good example is our Learning Python
turtle graphics examples here:

[Draw a Square with Python and Turtle Graphics](https://dmccreary.github.io/learning-python/python-labs/02-simple-square/#try-it-now)

Turtle Graphics ships as part of Python's standard library, so it runs
anywhere Python runs — no extra packages to install. That gives instructors
a few practical options, roughly ordered from lowest to highest setup
effort:

- **In-browser, no install** — sites like the linked example above, or
  services such as Trinket.io and Replit, run Turtle Graphics directly in
  a browser tab. This is the lowest-friction option for a classroom and
  mirrors how students already reach Scratch through a browser.
- **IDLE, bundled with Python** — Python's own editor comes with every
  Python installation and can run Turtle Graphics scripts with no
  additional setup once Python itself is installed on school computers.
- **A full code editor** (VS Code, Thonny, etc.) — the eventual target for
  students heading toward general-purpose Python programming, but more
  setup than is needed for a first exposure to Turtle Graphics.

For a first transition, prefer the browser-based option — it removes
installation as a variable and lets you focus entirely on the syntax
change.

## Promoting Turtle Graphics with Scratch

Using the `pen down` and `pen up` blocks is a great way to get students
warmed up to turtle graphics. Show students Scratch and Python side-by-side
helps them keeps the in familiar territory.

A few concrete ways to build that bridge before a student ever opens a
Python editor:

- **Draw shapes with the pen blocks first.** Have students draw a square
  or triangle in Scratch using [Pen Down](../glossary.md#pen-down),
  `move`, and `turn` blocks before showing them the equivalent Python. The
  Scratch version and the Python version will use almost the identical
  sequence of moves and turns.
- **Point out the shared coordinate system.** Scratch's stage and Python's
  turtle canvas both center on (0, 0), with x increasing to the right and
  y increasing upward — reinforce this using the
  [Coordinate System](../glossary.md#coordinate-system) concept students
  already learned in Scratch.
- **Project code side-by-side.** Put a finished Scratch script on one half
  of the screen and its Python Turtle Graphics translation on the other.
  Let students find the pattern themselves — most will spot the mapping
  in the table above without being told.

## A Suggested Transition Path

1. **Confirm readiness** using the signals above — keyboarding, error
   tolerance, and an outgrown Scratch project are the three strongest
   indicators together.
2. **Draw the same shape twice** — once in Scratch with the pen blocks,
   once in Python Turtle Graphics from the linked example — so the student
   sees the mapping directly rather than being told about it.
3. **Start with drawing, not logic.** Squares, triangles, and stars keep
   the "visual feedback loop" intact while the student adjusts to typed
   syntax, before introducing variables, functions, or conditionals in
   Python.
4. **Reintroduce Scratch concepts by name.** As loops, variables, and
   events reappear in Python, explicitly name them as "the same idea as
   `repeat` in Scratch" so the student's existing computational thinking
   transfers instead of feeling like it has to be relearned.
5. **Let capable students keep one foot in each tool for a while.** There
   is no requirement to drop Scratch entirely on day one — some students
   benefit from prototyping an idea in Scratch and then "translating" it
   to Python as a deliberate exercise.

## Decision Guide for Instructors

| If you observe... | Consider... |
|---|---|
| Confident keyboarding, but still exploring new blocks | Staying in Scratch — there's more to learn there first |
| Frequent My Blocks that act like functions, or list-based workarounds | Introducing Turtle Graphics functions and variables |
| A student gives up at the first Python error message | Pausing the transition; do a few guided exercises together before independent work |
| A student asks "how do real programmers do this?" | A great moment to introduce Turtle Graphics — motivation is already there |
| No computer/browser access outside of school | An in-browser Turtle Graphics option (see Availability, above) to avoid an install requirement |
| A student is more interested in hardware/robots than on-screen drawing | The [Block Programming for Physical Computing](physical-computing/index.md) appendix may be a better next step than Turtle Graphics |

## Common Pitfalls During the Transition

- **Expecting Scratch-speed typing.** A student who took a few minutes to
  drag blocks together may take much longer to type the equivalent Python
  at first. This is normal and improves quickly with practice — don't
  mistake it for a sign the student isn't ready.
- **Indentation confusion.** Python uses indentation to group statements
  (inside a `for` loop, for example) the way Scratch uses physical
  nesting of blocks. Point this out explicitly — it is the single most
  common source of early errors.
- **Missing parentheses or colons.** The two most common typos for new
  Turtle Graphics students are forgetting the parentheses on a command
  like `forward(100)` and forgetting the colon at the end of a `for` or
  `while` line.
- **Losing motivation in the syntax, not the ideas.** If a student
  understands exactly what they want the turtle to do but can't get the
  syntax right, that's a typing/syntax problem, not a comprehension
  problem — treat it accordingly rather than reteaching the underlying
  concept.

Turtle Graphics is a bridge, not a destination — the goal is a student who
can read a Python error message, fix their own syntax, and recognize that
the loops, variables, and events they mastered in Scratch were never
Scratch-specific ideas in the first place.
