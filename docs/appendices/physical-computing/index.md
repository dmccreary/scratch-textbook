# Block Programming for Physical Computing

Physical computing means writing a program that reads sensors and drives
actuators — LEDs, motors, buzzers, displays — on a real microcontroller
instead of just moving a sprite on a screen. Several tools let students do
this with drag-and-drop blocks instead of typed code. Some of these tools
grew directly out of Scratch; others were built on Google's Blockly library
independently and only *look* similar. This appendix lists the main systems
in current use, grouped by their block engine, along with the hardware each
one targets and how the blocks actually reach the board.

## How These Systems Differ

Every system below turns blocks into code for a microcontroller, but they
get the code onto the board in one of three different ways:

- **Upload and run** — the blocks generate a program (often C/C++ or a
  compiled `.hex` file) that is flashed onto the board and then runs on its
  own, with no computer attached afterward. This is how most Arduino- and
  micro:bit-style tools work.
- **Live/tethered** — the board stays connected to the computer over USB or
  Wi-Fi while it runs, and blocks can control it in real time, similar to
  how Scratch controls a sprite. Good for experimenting and debugging.
- **On-device interpreter** — the board already runs a language like
  MicroPython, and the blocks are just a friendlier way to write that
  MicroPython, which is sent to the board's own interpreter.

## Scratch-Based Systems

These tools are modified versions of Scratch or use Scratch's block engine
("Scratch Blocks") directly, so the blocks look and snap together the same
way they do in this textbook.

### S4A (Scratch for Arduino)

One of the earliest physical-computing block languages (2010), built by
modifying Scratch 1.4 itself. S4A adds blocks for reading Arduino sensors
and driving motors/servos while the Arduino stays tethered to the computer
over USB (live/tethered model) — it was designed to teach programming and
electronics together, not to produce a standalone Arduino sketch.

**Adoption:** Niche and largely historical — its own creators moved on to
build Snap4Arduino, and S4A sees little active use or maintenance today.

### Snap4Arduino

Built by the same team as S4A, but on top of [Snap!](https://snap.berkeley.edu)
(a more powerful Scratch-derived language with custom blocks and
first-class functions) instead of Scratch itself. It supports live control
of an attached Arduino as well as uploading a standalone program to the
board.

**Adoption:** A small, dedicated open-source community — used in some
university and hobbyist circles, but far smaller in scale than the
Scratch-based tools below.

### mBlock

Makeblock's block editor, built on Scratch 3.0. It targets Arduino boards,
the BBC micro:bit, and Makeblock's own robot kits (mBot, mBot2, Codey
Rocky). mBlock has two modes: an "upload" mode that compiles blocks into a
real Arduino sketch, and a live mode for testing sensors interactively.

**Adoption:** One of the most widely used Scratch-based tools for STEM
classrooms worldwide, backed by Makeblock's own hardware line — though the
company's headline user-count claims are marketing figures that don't
fully reconcile with independently visible download numbers, so treat
them skeptically.

### PictoBlox

A newer, Scratch 3.0-based editor from STEMpedia/Makeblock that adds AI and
IoT extensions on top of the same physical-computing blocks as mBlock — face
detection, pose detection, and a ChatGPT extension, alongside support for
Arduino, micro:bit, and STEMpedia's own boards (evive, Quarky).

**Adoption:** A real and growing user base among STEM educators — smaller
than mBlock's, but well-documented by STEMpedia's own usage reporting,
particularly for its AI extensions.

### Tinkercad Circuits Code Editor

Tinkercad's circuit simulator includes a block code editor powered by
Scratch Blocks for programming a *simulated* Arduino Uno before touching
real hardware. Students can toggle between the blocks view and the
generated Arduino C++ at any time, which makes it a useful bridge between
block and text code.

**Adoption:** Rides on Tinkercad's enormous overall user base — tens of
millions of accounts across all of Tinkercad's tools — though Autodesk
doesn't break out how many of those specifically use the Circuits block
editor.

### LEGO Education SPIKE (Word Blocks)

LEGO's programming app for the SPIKE Prime and SPIKE Essential hubs offers
a Scratch-styled block language called Word Blocks, alongside icon blocks
for younger students and a Python mode for the transition to text. It
controls LEGO's own motors, color sensors, and distance sensors built into
the hub.

**Adoption:** LEGO doesn't publish SPIKE-specific usage figures, but SPIKE
is the official kit for FIRST LEGO League, a competition with hundreds of
thousands of student participants each season — giving it very wide
indirect reach even without a hard user count.

## Blockly-Based Systems (Non-Scratch)

These tools use [Google Blockly](https://developers.google.com/blockly) as
their block engine rather than Scratch's. The blocks look similar (they
interlock the same way) but come from a different codebase and generally
target boards that run Python variants rather than Arduino C++.

### BIPES

BIPES (Block-based Integrated Platform for Embedded Systems) is another
example of block-oriented physical computing. It runs entirely in the browser — no
software install — and its Blockly-based blocks generate MicroPython,
CircuitPython, or [Snek code](../../glossary.md#snek-code) that is sent to the board over 
WebREPL via USB, network, or Bluetooth. It supports boards including the ESP32,
ESP8266, Raspberry Pi Pico, and BBC micro:bit, and can drive LEDs, motors,
and other components wired to those boards.
([bipes.net.br](https://bipes.net.br))

**Adoption:** A small, actively maintained open-source academic project out
of Brazil — a niche but genuine community rather than a mainstream
classroom tool.

### Microsoft MakeCode

A polished Blockly-derived editor with a side-by-side JavaScript (and
Python) view of every block program. MakeCode powers the official BBC
micro:bit editor, Adafruit's Circuit Playground Express, and several other
boards, compiling blocks down to a `.hex` file that is dragged onto the
board and runs standalone afterward — no ongoing connection needed.
([makecode.microbit.org](https://makecode.microbit.org))

**Adoption:** The most widely used system on this list by a wide margin —
the BBC micro:bit Foundation reports millions of active users and tens of
millions of young people reached worldwide, backed by over a decade of
Microsoft and BBC investment.

### UIFlow (M5Stack)

M5Stack's cloud-based Blockly editor for its own line of ESP32 devices
(M5Stack Core, M5StickC, and others). Blocks generate MicroPython, and a
connected device fetches and runs the program from M5Stack's flow server —
similar in spirit to BIPES but tied to M5Stack's hardware and cloud
service. ([flow.m5stack.com](https://flow.m5stack.com))

**Adoption:** Solid, well-documented adoption within the maker and
IoT-education community, tied to several million M5Stack devices sold —
smaller in scale than MakeCode but a genuine, actively used platform.

### BlocklyProp (Parallax)

Parallax's Blockly-based editor for boards built around its Propeller
microcontroller, including the ActivityBot and Propeller FLiP module.
Blocks generate Spin or C code that compiles and uploads to the board with
one click, after which the board runs standalone.
([parallax.com/blocklyprop](https://www.parallax.com/education/programming-languages/blocklyprop/))

**Adoption:** Niche — a small, long-running community built specifically
around Parallax's own Propeller-based hardware.

### VEXcode Blocks

VEX Robotics' Blockly-based editor for its IQ, V5, and GO robotics kits. A
built-in "Convert to Switch" feature lets a student flip a finished blocks
program to equivalent Python, which makes it a common on-ramp from blocks
to text-based code in robotics classrooms.
([vexrobotics.com/vexcode/blocks](https://www.vexrobotics.com/vexcode/blocks))

**Adoption:** Very wide reach through the VEX Robotics competition
ecosystem, which spans well over a million students and tens of thousands
of registered teams worldwide — VEXcode Blocks is the default entry point
for nearly all of them.

## Choosing a Physical Computing Block Programming System

With over a dozen systems to pick from, the right choice depends on where a
reader is starting from and where they're headed next. This section gives a
decision guide rather than a single recommendation.

### Where This Textbook Series Is Headed

The other books in this series build on **MicroPython running on the
Raspberry Pi Pico**, because the Pico costs about **$4**, which makes it
cheap enough to put in low-cost classroom kits — students (or schools) don't
need to invest in an Arduino, a micro:bit, or a robotics kit just to start
wiring up LEDs and motors. That has a direct consequence for this appendix:
most readers of this book will eventually want to **migrate off
Scratch-style blocks and onto a system that generates real MicroPython for
the Pico**, so their block-programming skills carry forward instead of
being a dead end.

Of the systems listed above, **BIPES** is the closest match to that path: it
explicitly supports the Raspberry Pi Pico, generates real MicroPython (not a
proprietary language), runs in the browser with no install, and is free. A
reader who works through this Scratch textbook and then wants to try real
hardware can move to BIPES on a Pico without changing boards, budgets, or
programming languages, and can later drop the blocks entirely and write the
generated MicroPython by hand — which is exactly the skill the rest of the
series assumes.

### Decision Guide

| If your priority is... | Choose... | Why |
|---|---|---|
| Staying on the path this series is built around (MicroPython, Raspberry Pi Pico, low-cost kits) | **BIPES** | Only Blockly system here with first-class Pico support that generates real MicroPython |
| Keeping the exact block shapes students already know from Scratch | **mBlock**, **PictoBlox**, or **Snap4Arduino** | Built on Scratch Blocks (or Snap!), so muscle memory transfers directly |
| The cheapest possible official board with strong classroom support | **MakeCode** on a **BBC micro:bit** | Free board-specific editor, huge base of lesson plans, no install |
| A student is already in a LEGO or VEX robotics program | **LEGO SPIKE Word Blocks** or **VEXcode Blocks** | Matches the hardware and competition rules the student already uses |
| Simulating a circuit before buying any hardware | **Tinkercad Circuits Code Editor** | Free, in-browser Arduino simulator with a Scratch-style code view |
| AI features (face/pose detection, ChatGPT) alongside physical computing | **PictoBlox** | Only system here with built-in AI/ML extensions |
| Already own M5Stack or Propeller-based hardware | **UIFlow** or **BlocklyProp** | Purpose-built for those specific board families |

### A Suggested Path for Readers of This Book

1. **Learn the concepts here in Scratch** — sequencing, loops, conditionals,
   variables, and events, with no hardware required.
2. **Bridge to physical computing with BIPES on a Raspberry Pi Pico** — the
   blocks look and behave like the ones in this book, but now a real LED or
   motor responds, and the underlying code is genuine MicroPython.
3. **Read the generated MicroPython, then start editing it directly** — this
   is the on-ramp to the rest of this textbook series, which assumes readers
   are writing MicroPython by hand on the Pico.

A reader who instead started on mBlock, MakeCode, or VEXcode Blocks hasn't
wasted anything — the programming *concepts* (loops, conditionals, events,
variables) transfer to any of these systems. What doesn't automatically
transfer is the board and the language, so budget some extra time to switch
to a Pico and MicroPython before starting the next book in the series.
