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

### Snap4Arduino

Built by the same team as S4A, but on top of [Snap!](https://snap.berkeley.edu)
(a more powerful Scratch-derived language with custom blocks and
first-class functions) instead of Scratch itself. It supports live control
of an attached Arduino as well as uploading a standalone program to the
board.

### mBlock

Makeblock's block editor, built on Scratch 3.0. It targets Arduino boards,
the BBC micro:bit, and Makeblock's own robot kits (mBot, mBot2, Codey
Rocky). mBlock has two modes: an "upload" mode that compiles blocks into a
real Arduino sketch, and a live mode for testing sensors interactively.

### PictoBlox

A newer, Scratch 3.0-based editor from STEMpedia/Makeblock that adds AI and
IoT extensions on top of the same physical-computing blocks as mBlock — face
detection, pose detection, and a ChatGPT extension, alongside support for
Arduino, micro:bit, and STEMpedia's own boards (evive, Quarky).

### Tinkercad Circuits Code Editor

Tinkercad's circuit simulator includes a block code editor powered by
Scratch Blocks for programming a *simulated* Arduino Uno before touching
real hardware. Students can toggle between the blocks view and the
generated Arduino C++ at any time, which makes it a useful bridge between
block and text code.

### LEGO Education SPIKE (Word Blocks)

LEGO's programming app for the SPIKE Prime and SPIKE Essential hubs offers
a Scratch-styled block language called Word Blocks, alongside icon blocks
for younger students and a Python mode for the transition to text. It
controls LEGO's own motors, color sensors, and distance sensors built into
the hub.

## Blockly-Based Systems (Non-Scratch)

These tools use [Google Blockly](https://developers.google.com/blockly) as
their block engine rather than Scratch's. The blocks look similar (they
interlock the same way) but come from a different codebase and generally
target boards that run Python variants rather than Arduino C++.

### BIPES

BIPES (Block-based Integrated Platform for Embedded Systems) is the example
in the prompt for this appendix. It runs entirely in the browser — no
software install — and its Blockly-based blocks generate MicroPython,
CircuitPython, or Snek code that is sent to the board over WebREPL via
USB, network, or Bluetooth. It supports boards including the ESP32,
ESP8266, Raspberry Pi Pico, and BBC micro:bit, and can drive LEDs, motors,
and other components wired to those boards.
([bipes.net.br](https://bipes.net.br))

### Microsoft MakeCode

A polished Blockly-derived editor with a side-by-side JavaScript (and
Python) view of every block program. MakeCode powers the official BBC
micro:bit editor, Adafruit's Circuit Playground Express, and several other
boards, compiling blocks down to a `.hex` file that is dragged onto the
board and runs standalone afterward — no ongoing connection needed.
([makecode.microbit.org](https://makecode.microbit.org))

### UIFlow (M5Stack)

M5Stack's cloud-based Blockly editor for its own line of ESP32 devices
(M5Stack Core, M5StickC, and others). Blocks generate MicroPython, and a
connected device fetches and runs the program from M5Stack's flow server —
similar in spirit to BIPES but tied to M5Stack's hardware and cloud
service. ([flow.m5stack.com](https://flow.m5stack.com))

### BlocklyProp (Parallax)

Parallax's Blockly-based editor for boards built around its Propeller
microcontroller, including the ActivityBot and Propeller FLiP module.
Blocks generate Spin or C code that compiles and uploads to the board with
one click, after which the board runs standalone.
([parallax.com/blocklyprop](https://www.parallax.com/education/programming-languages/blocklyprop/))

### VEXcode Blocks

VEX Robotics' Blockly-based editor for its IQ, V5, and GO robotics kits. A
built-in "Convert to Switch" feature lets a student flip a finished blocks
program to equivalent Python, which makes it a common on-ramp from blocks
to text-based code in robotics classrooms.
([vexrobotics.com/vexcode/blocks](https://www.vexrobotics.com/vexcode/blocks))

## Choosing a System for a Lesson

For students who already know Scratch, mBlock, Snap4Arduino, or the
Tinkercad code editor will feel the most familiar, since they reuse
Scratch's own block shapes and categories. For a lesson focused on real
sensors and actuators wired up by hand (breadboard-style circuits), BIPES
and MakeCode are the most widely used because they run in a browser with no
install and target inexpensive, easy-to-source boards (ESP32, Raspberry Pi
Pico, micro:bit).
