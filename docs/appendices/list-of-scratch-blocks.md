# List of Scratch Blocks Sorted By Function

<!---
Sample Prompt:

Please generate a list of all the scratch blocks sorted by function.
Please the list in @docs/appendices/list-of-scratch-blocks.md
Order the list grouped by function type.  Put the Function type name in a level 2 markdown hader.
Place the block name in a level 3 header
Use the scrachblock inline rendering for each block image
Then give a brief description of the block and give a short example of how that block is used
List other blocks that this block is related to using See Also: and then a Markdown link to those other blocks

-->

This appendix lists all 121 core blocks in the Scratch 3.0 palette, grouped
by the ten function categories in the blocks palette: Motion, Looks, Sound,
Events, Control, Sensing, Operators, Variables, Lists, and My Blocks (custom
blocks).

## Motion

Motion blocks move a sprite around the stage — changing its position,
direction, and rotation.

### Move () Steps

<div class="scratch">
move (10) steps
</div>

Moves the sprite forward the given number of steps in the direction it is
currently facing. A negative number moves it backward.

Example: `move (10) steps` inside a `forever` loop makes a sprite glide
continuously across the stage.

**See Also:** [Turn Right () Degrees](#turn-right-degrees), [Point in Direction ()](#point-in-direction), [Go to X: () Y: ()](#go-to-x-y)

---

### Turn Right () Degrees

<div class="scratch">
turn right (15) degrees
</div>

Rotates the sprite clockwise by the given number of degrees.

Example: repeating `turn right (15) degrees` inside a loop makes the sprite
spin in place.

**See Also:** [Turn Left () Degrees](#turn-left-degrees), [Point in Direction ()](#point-in-direction), [Direction](#direction)

---

### Turn Left () Degrees

<div class="scratch">
turn left (15) degrees
</div>

Rotates the sprite counter-clockwise by the given number of degrees.

Example: `turn left (90) degrees` spins a sprite a quarter turn to the left.

**See Also:** [Turn Right () Degrees](#turn-right-degrees), [Point in Direction ()](#point-in-direction)

---

### Go to ()

<div class="scratch">
go to [random position v]
</div>

Instantly moves the sprite to a random position, the mouse-pointer, or
another sprite, chosen from a dropdown.

Example: `go to [random position v]` at the start of a script scatters a
sprite somewhere new every time the green flag is clicked.

**See Also:** [Go to X: () Y: ()](#go-to-x-y), [Glide () Secs to ()](#glide-secs-to), [Point Towards ()](#point-towards)

---

### Go to X: () Y: ()

<div class="scratch">
go to x: (0) y: (0)
</div>

Instantly moves the sprite to an exact x/y coordinate on the stage.

Example: `go to x: (0) y: (0)` sends a sprite back to the center of the
stage, a common "reset" step at the start of a script.

**See Also:** [Change X by ()](#change-x-by), [Set X to ()](#set-x-to), [X Position](#x-position)

---

### Glide () Secs to ()

<div class="scratch">
glide (1) secs to [random position v]
</div>

Smoothly slides the sprite to a random position, the mouse-pointer, or
another sprite over the given number of seconds, instead of jumping there
instantly.

Example: `glide (1) secs to [mouse-pointer v]` makes a sprite drift smoothly
toward the cursor.

**See Also:** [Go to ()](#go-to), [Glide () Secs to X: () Y: ()](#glide-secs-to-x-y)

---

### Glide () Secs to X: () Y: ()

<div class="scratch">
glide (1) secs to x: (0) y: (0)
</div>

Smoothly slides the sprite to the exact x/y coordinate given, over the
number of seconds given.

Example: `glide (2) secs to x: (200) y: (0)` eases a sprite across the stage
instead of teleporting it there.

**See Also:** [Glide () Secs to ()](#glide-secs-to), [Go to X: () Y: ()](#go-to-x-y)

---

### Point in Direction ()

<div class="scratch">
point in direction (90)
</div>

Sets the sprite's facing angle directly (0 = up, 90 = right, 180 = down,
-90 = left), rather than turning relative to its current direction.

Example: `point in direction (90)` always makes the sprite face right, no
matter which way it was already facing.

**See Also:** [Turn Right () Degrees](#turn-right-degrees), [Direction](#direction), [Point Towards ()](#point-towards)

---

### Point Towards ()

<div class="scratch">
point towards [mouse-pointer v]
</div>

Rotates the sprite so it faces the mouse-pointer or another sprite.

Example: `point towards [mouse-pointer v]` combined with `move (5) steps` in
a `forever` loop makes a sprite chase the cursor.

**See Also:** [Point in Direction ()](#point-in-direction), [Go to ()](#go-to), [Distance to ()](#distance-to)

---

### Change X by ()

<div class="scratch">
change x by (10)
</div>

Moves the sprite horizontally by the given amount, added to its current x
position.

Example: `change x by (10)` repeated in a loop slides a sprite steadily to
the right.

**See Also:** [Set X to ()](#set-x-to), [Change Y by ()](#change-y-by), [X Position](#x-position)

---

### Set X to ()

<div class="scratch">
set x to (0)
</div>

Sets the sprite's horizontal position directly, without changing its
y position.

Example: `set x to (0)` resets a sprite's left/right position back to the
center column of the stage.

**See Also:** [Change X by ()](#change-x-by), [Go to X: () Y: ()](#go-to-x-y), [X Position](#x-position)

---

### Change Y by ()

<div class="scratch">
change y by (10)
</div>

Moves the sprite vertically by the given amount, added to its current
y position.

Example: `change y by (10)` repeated in a loop makes a sprite rise up the
stage, which is useful for a jump script.

**See Also:** [Set Y to ()](#set-y-to), [Change X by ()](#change-x-by), [Y Position](#y-position)

---

### Set Y to ()

<div class="scratch">
set y to (0)
</div>

Sets the sprite's vertical position directly, without changing its
x position.

Example: `set y to (0)` returns a sprite to the vertical middle of the
stage after a jump.

**See Also:** [Change Y by ()](#change-y-by), [Go to X: () Y: ()](#go-to-x-y), [Y Position](#y-position)

---

### If on Edge, Bounce

<div class="scratch">
if on edge, bounce
</div>

Reverses the sprite's direction when it touches the edge of the stage, like
a ball bouncing off a wall.

Example: placing `if on edge, bounce` after `move (10) steps` inside a
`forever` loop makes a sprite bounce back and forth across the stage.

**See Also:** [Move () Steps](#move-steps), [Set Rotation Style ()](#set-rotation-style), [Direction](#direction)

---

### Set Rotation Style ()

<div class="scratch">
set rotation style [left-right v]
</div>

Controls how the sprite's costume turns: rotating freely, flipping only
left-right, or not rotating at all.

Example: setting `left-right` rotation style keeps a walking character
right-side up while it still faces the direction it moves.

**See Also:** [If on Edge, Bounce](#if-on-edge-bounce), [Point in Direction ()](#point-in-direction)

---

### X Position

<div class="scratch">
x position
</div>

Reports the sprite's current horizontal position, a number between -240 and
240.

Example: `go to x: (x position) y: (0)` uses the reporter to keep the
current x while resetting y to the middle.

**See Also:** [Set X to ()](#set-x-to), [Change X by ()](#change-x-by), [Y Position](#y-position)

---

### Y Position

<div class="scratch">
y position
</div>

Reports the sprite's current vertical position, a number between -180 and
180.

Example: `if <(y position) &lt; (-170)> then` checks whether a sprite has
fallen near the bottom of the stage.

**See Also:** [Set Y to ()](#set-y-to), [Change Y by ()](#change-y-by), [X Position](#x-position)

---

### Direction

<div class="scratch">
direction
</div>

Reports the sprite's current facing angle, a number from -179 to 180.

Example: `say (direction)` displays the sprite's current facing angle in a
speech bubble, useful for debugging movement scripts.

**See Also:** [Point in Direction ()](#point-in-direction), [Turn Right () Degrees](#turn-right-degrees)

---

## Looks

Looks blocks control what a sprite looks like and what it displays —
costumes, speech, size, visual effects, and layering.

### Say () for () Seconds

<div class="scratch">
say [Hello!] for (2) seconds
</div>

Shows a speech bubble with the given text for the given number of seconds,
then removes it automatically.

Example: `say [Hello!] for (2) seconds` greets the player and then clears
itself without needing a separate `wait` block.

**See Also:** [Say ()](#say), [Think () for () Seconds](#think-for-seconds)

---

### Say ()

<div class="scratch">
say [Hello!]
</div>

Shows a speech bubble with the given text that stays until replaced or
cleared with another `say` or `say []`.

Example: chaining `say [Ready?]` then `wait (1) seconds` then `say [Go!]`
creates a simple two-line dialogue.

**See Also:** [Say () for () Seconds](#say-for-seconds), [Think ()](#think)

---

### Think () for () Seconds

<div class="scratch">
think [Hmm...] for (2) seconds
</div>

Shows a thought bubble with the given text for the given number of seconds.

Example: `think [Hmm...] for (2) seconds` shows a sprite pondering before it
acts.

**See Also:** [Think ()](#think), [Say () for () Seconds](#say-for-seconds)

---

### Think ()

<div class="scratch">
think [Hmm...]
</div>

Shows a thought bubble with the given text that stays visible until
changed or cleared.

Example: `think [I wonder...]` followed later by `think []` shows and then
clears a thought bubble.

**See Also:** [Think () for () Seconds](#think-for-seconds), [Say ()](#say)

---

### Switch Costume to ()

<div class="scratch">
switch costume to (costume2)
</div>

Changes the sprite's current costume to the one selected from the dropdown.

Example: switching between two costumes named `walk1` and `walk2` inside a
loop creates a simple walking animation.

**See Also:** [Next Costume](#next-costume), [Costume # or Name](#costume-or-name)

---

### Next Costume

<div class="scratch">
next costume
</div>

Switches the sprite to the next costume in its costume list, wrapping back
to the first costume after the last.

Example: calling `next costume` each time through a `forever` loop with a
short `wait` cycles through all of a sprite's costumes to animate it.

**See Also:** [Switch Costume to ()](#switch-costume-to), [Costume # or Name](#costume-or-name)

---

### Switch Backdrop to ()

<div class="scratch">
switch backdrop to (backdrop2)
</div>

Changes the stage's current backdrop to the one selected from the dropdown.

Example: `switch backdrop to (game-over v)` changes the scene when a player
loses, and can also trigger a "when backdrop switches to" script.

**See Also:** [Next Backdrop](#next-backdrop), [When Backdrop Switches to ()](#when-backdrop-switches-to)

---

### Next Backdrop

<div class="scratch">
next backdrop
</div>

Switches the stage to the next backdrop in its list, wrapping around after
the last one.

Example: calling `next backdrop` on a timer creates a simple slideshow
effect.

**See Also:** [Switch Backdrop to ()](#switch-backdrop-to), [Backdrop # or Name](#backdrop-or-name)

---

### Change Size by ()

<div class="scratch">
change size by (10)
</div>

Changes the sprite's size by the given percentage, relative to its current
size.

Example: `change size by (10)` repeated in a loop makes a sprite grow
larger and larger, useful for a "power up" effect.

**See Also:** [Set Size to ()%](#set-size-to), [Size](#size)

---

### Set Size to ()%

<div class="scratch">
set size to (100)%
</div>

Sets the sprite's size to an exact percentage of its original costume size.

Example: `set size to (100)%` at the start of a script restores a sprite to
its normal size.

**See Also:** [Change Size by ()](#change-size-by), [Size](#size)

---

### Change Graphic Effect by ()

<div class="scratch">
change [color v] effect by (25)
</div>

Changes a visual effect (color, fisheye, whirl, pixelate, mosaic,
brightness, or ghost) on the sprite by the given amount.

Example: `change [ghost v] effect by (10)` repeated in a loop slowly fades
a sprite out.

**See Also:** [Set Graphic Effect to ()](#set-graphic-effect-to), [Clear Graphic Effects](#clear-graphic-effects)

---

### Set Graphic Effect to ()

<div class="scratch">
set [color v] effect to (0)
</div>

Sets a visual effect on the sprite to an exact value, rather than changing
it relative to its current value.

Example: `set [ghost v] effect to (50)` makes a sprite exactly half
transparent.

**See Also:** [Change Graphic Effect by ()](#change-graphic-effect-by), [Clear Graphic Effects](#clear-graphic-effects)

---

### Clear Graphic Effects

<div class="scratch">
clear graphic effects
</div>

Removes all visual effects from the sprite, returning it to its normal
appearance.

Example: running `clear graphic effects` when a script restarts undoes any
color, ghost, or other effects left over from before.

**See Also:** [Change Graphic Effect by ()](#change-graphic-effect-by), [Set Graphic Effect to ()](#set-graphic-effect-to)

---

### Show

<div class="scratch">
show
</div>

Makes the sprite visible on the stage.

Example: `show` at the start of a script ensures a sprite that was
previously hidden becomes visible again.

**See Also:** [Hide](#hide)

---

### Hide

<div class="scratch">
hide
</div>

Makes the sprite invisible on the stage. A hidden sprite can still run
scripts and detect some sensing, but cannot be seen or clicked.

Example: `hide` is often used to remove a sprite after it has been "caught"
or "collected" in a game.

**See Also:** [Show](#show)

---

### Go to Front or Back Layer

<div class="scratch">
go to [front v] layer
</div>

Moves the sprite to the very front or very back of the stacking order of
all sprites.

Example: `go to [front v] layer` ensures the player sprite always draws on
top of background decorations.

**See Also:** [Go Forward or Backward () Layers](#go-forward-or-backward-layers)

---

### Go Forward or Backward () Layers

<div class="scratch">
go forward (1) layers
</div>

Moves the sprite forward or backward a given number of layers in the
stacking order, relative to its current layer.

Example: `go backward (1) layers` sends a sprite one step behind whatever
is currently in front of it.

**See Also:** [Go to Front or Back Layer](#go-to-front-or-back-layer)

---

### Costume # or Name

<div class="scratch">
costume [number v]
</div>

Reports the current costume's number or name, depending on the dropdown
choice.

Example: `if <(costume [number v]) = (3)> then` runs a script only while a
specific costume is showing.

**See Also:** [Switch Costume to ()](#switch-costume-to), [Next Costume](#next-costume)

---

### Backdrop # or Name

<div class="scratch">
backdrop [number v]
</div>

Reports the stage's current backdrop number or name, depending on the
dropdown choice.

Example: `if <(backdrop [name v]) = [game-over]> then` checks which scene
is currently showing.

**See Also:** [Switch Backdrop to ()](#switch-backdrop-to), [When Backdrop Switches to ()](#when-backdrop-switches-to)

---

### Size

<div class="scratch">
size
</div>

Reports the sprite's current size as a percentage of its original costume
size.

Example: `if <(size) &lt; (20)> then` can trigger a "sprite is too small"
event, such as removing it from the game.

**See Also:** [Set Size to ()%](#set-size-to), [Change Size by ()](#change-size-by)

---

## Sound

Sound blocks play and control audio — sound effects, music, volume, and
audio effects like pitch and pan.

### Play Sound () Until Done

<div class="scratch">
play sound [pop v] until done
</div>

Plays the selected sound and waits for it to finish before running the
next block.

Example: `play sound [pop v] until done` is used for dialogue or effects
that must finish before the script continues.

**See Also:** [Start Sound ()](#start-sound), [Stop All Sounds](#stop-all-sounds)

---

### Start Sound ()

<div class="scratch">
start sound [pop v]
</div>

Starts playing the selected sound and immediately continues to the next
block, without waiting.

Example: `start sound [background-music v]` at the start of a game lets
music play in the background while other scripts keep running.

**See Also:** [Play Sound () Until Done](#play-sound-until-done), [Stop All Sounds](#stop-all-sounds)

---

### Stop All Sounds

<div class="scratch">
stop all sounds
</div>

Immediately stops every sound currently playing, on every sprite and the
stage.

Example: `stop all sounds` is often placed in a "game over" script to cut
off music and effects at once.

**See Also:** [Start Sound ()](#start-sound), [Play Sound () Until Done](#play-sound-until-done)

---

### Change Sound Effect by ()

<div class="scratch">
change [pitch v] effect by (10)
</div>

Changes an audio effect (pitch or pan left/right) by the given amount,
relative to its current value.

Example: `change [pitch v] effect by (10)` repeated in a loop raises the
pitch of subsequent sounds, like a "chipmunk voice" effect.

**See Also:** [Set Sound Effect to ()](#set-sound-effect-to), [Clear Sound Effects](#clear-sound-effects)

---

### Set Sound Effect to ()

<div class="scratch">
set [pitch v] effect to (0)
</div>

Sets an audio effect to an exact value, rather than changing it relative to
its current value.

Example: `set [pan left/right v] effect to (-100)` makes a sound play
entirely from the left speaker.

**See Also:** [Change Sound Effect by ()](#change-sound-effect-by), [Clear Sound Effects](#clear-sound-effects)

---

### Clear Sound Effects

<div class="scratch">
clear sound effects
</div>

Removes all pitch and pan effects, returning sounds to their normal pitch
and balance.

Example: `clear sound effects` resets audio back to normal after a
temporary pitch-shift gag.

**See Also:** [Change Sound Effect by ()](#change-sound-effect-by), [Set Sound Effect to ()](#set-sound-effect-to)

---

### Change Volume by ()

<div class="scratch">
change volume by (-10)
</div>

Changes the sprite's (or stage's) volume by the given amount, relative to
its current volume.

Example: `change volume by (-10)` repeated in a loop fades music out
gradually.

**See Also:** [Set Volume to ()%](#set-volume-to), [Volume](#volume)

---

### Set Volume to ()%

<div class="scratch">
set volume to (100)%
</div>

Sets the sprite's (or stage's) volume to an exact percentage.

Example: `set volume to (50)%` halves the loudness of everything that
sprite plays afterward.

**See Also:** [Change Volume by ()](#change-volume-by), [Volume](#volume)

---

### Volume

<div class="scratch">
volume
</div>

Reports the current volume level as a percentage.

Example: `if <(volume) = (0)> then` can trigger a "muted" icon to appear.

**See Also:** [Set Volume to ()%](#set-volume-to), [Change Volume by ()](#change-volume-by)

---

## Events

Event blocks start scripts running, either in response to something
happening (a hat block) or by broadcasting a message to trigger other
scripts.

### When Green Flag Clicked

<div class="scratch">
when green flag clicked
</div>

Starts the attached script when the green flag above the stage is clicked.
This is the most common way to start a Scratch program.

Example: nearly every project starts with `when green flag clicked`
followed by blocks that reset the sprite's position and costume.

**See Also:** [When This Sprite Clicked](#when-this-sprite-clicked), [Broadcast ()](#broadcast)

---

### When () Key Pressed

<div class="scratch">
when [space v] key pressed
</div>

Starts the attached script whenever the chosen key is pressed on the
keyboard.

Example: `when [space v] key pressed` paired with `change y by (50)` makes
a sprite jump whenever the space bar is pressed.

**See Also:** [Key () Pressed?](#key-pressed), [When This Sprite Clicked](#when-this-sprite-clicked)

---

### When This Sprite Clicked

<div class="scratch">
when this sprite clicked
</div>

Starts the attached script whenever the player clicks directly on this
sprite.

Example: `when this sprite clicked` followed by `change [score v] by (1)`
turns a sprite into a clickable button.

**See Also:** [When Stage Clicked](#when-stage-clicked), [When Green Flag Clicked](#when-green-flag-clicked)

---

### When Stage Clicked

<div class="scratch">
when stage clicked
</div>

Starts the attached script whenever the player clicks anywhere on the
stage background (not on a sprite).

Example: `when stage clicked` can be used to dismiss an instructions screen
when the player clicks to begin.

**See Also:** [When This Sprite Clicked](#when-this-sprite-clicked)

---

### When Backdrop Switches to ()

<div class="scratch">
when backdrop switches to [backdrop2 v]
</div>

Starts the attached script whenever the stage's backdrop changes to the one
chosen in the dropdown.

Example: `when backdrop switches to [game-over v]` can trigger the ending
music and score display.

**See Also:** [Switch Backdrop to ()](#switch-backdrop-to), [Backdrop # or Name](#backdrop-or-name)

---

### When Loudness or Timer Greater Than ()

<div class="scratch">
when [loudness v] &gt; (10)
</div>

Starts the attached script the moment the microphone loudness or the timer
rises above the given value.

Example: `when [loudness v] &gt; (50)` can start a script when the player
claps or shouts into the microphone.

**See Also:** [Loudness](#loudness), [Timer](#timer)

---

### When I Receive ()

<div class="scratch">
when I receive [message1 v]
</div>

Starts the attached script whenever the chosen message is broadcast by any
script in the project.

Example: `when I receive [game-over v]` lets every sprite react to a single
broadcast, such as hiding themselves or stopping their movement.

**See Also:** [Broadcast ()](#broadcast), [Broadcast () and Wait](#broadcast-and-wait)

---

### Broadcast ()

<div class="scratch">
broadcast [message1 v]
</div>

Sends a message to every script in the project immediately, without
waiting for the receiving scripts to finish.

Example: `broadcast [game-over v]` tells every sprite listening for that
message to react at the same time.

**See Also:** [When I Receive ()](#when-i-receive), [Broadcast () and Wait](#broadcast-and-wait)

---

### Broadcast () and Wait

<div class="scratch">
broadcast [message1 v] and wait
</div>

Sends a message to every script and pauses this script until all the
receiving scripts have finished running.

Example: `broadcast [start-round v] and wait` makes sure every sprite has
finished its setup before the main script continues.

**See Also:** [Broadcast ()](#broadcast), [When I Receive ()](#when-i-receive)

---

## Control

Control blocks direct the flow of a script — waiting, repeating, branching
with conditions, stopping scripts, and working with clones.

### Wait () Seconds

<div class="scratch">
wait (1) seconds
</div>

Pauses the script for the given number of seconds before continuing to the
next block.

Example: `wait (1) seconds` between two `say` blocks gives the player time
to read each line.

**See Also:** [Wait Until ()](#wait-until), [Repeat Until ()](#repeat-until)

---

### Repeat ()

<div class="scratch">
repeat (10)
move (10) steps
end
</div>

Runs the blocks inside it a fixed number of times, then continues to the
blocks after it.

Example: `repeat (4)` wrapped around `move (100) steps` and `turn right
(90) degrees` draws a square.

**See Also:** [Forever](#forever), [Repeat Until ()](#repeat-until)

---

### Forever

<div class="scratch">
forever
move (2) steps
end
</div>

Runs the blocks inside it over and over, with no set number of times — the
loop only stops when the script is stopped or the project ends.

Example: `forever` wrapped around `if on edge, bounce` and `move (5)
steps` keeps a ball bouncing for as long as the project runs.

**See Also:** [Repeat ()](#repeat), [Repeat Until ()](#repeat-until)

---

### If () Then

<div class="scratch">
if &lt;touching [edge v]?&gt; then
change x by (-10)
end
</div>

Runs the blocks inside it only if the given condition is true; otherwise it
skips straight to the blocks after it.

Example: `if <(score) > (10)> then` followed by `broadcast [win v]` reacts
only when the score reaches a threshold.

**See Also:** [If () Then, Else](#if-then-else), [Wait Until ()](#wait-until), [Repeat Until ()](#repeat-until)

---

### If () Then, Else

<div class="scratch">
if &lt;(score) &gt; (10)&gt; then
say [You win!]
else
say [Keep trying!]
end
</div>

Runs one set of blocks if the condition is true, and a different set of
blocks if it is false.

Example: checking `<touching [Enemy v]?>` and saying "Ouch!" in the true
branch while doing nothing in the false branch reacts only to a collision.

**See Also:** [If () Then](#if-then), [Wait Until ()](#wait-until)

---

### Wait Until ()

<div class="scratch">
wait until &lt;key [space v] pressed?&gt;
</div>

Pauses the script until the given condition becomes true, then continues
to the next block.

Example: `wait until <key [space v] pressed?>` holds a script at a "press
space to start" screen until the player is ready.

**See Also:** [If () Then](#if-then), [Repeat Until ()](#repeat-until)

---

### Repeat Until ()

<div class="scratch">
repeat until &lt;touching [edge v]?&gt;
move (10) steps
end
</div>

Runs the blocks inside it over and over until the given condition becomes
true, then continues to the blocks after it.

Example: `repeat until <(lives) = (0)>` runs the main game loop until the
player has no lives left.

**See Also:** [Forever](#forever), [Wait Until ()](#wait-until), [Repeat ()](#repeat)

---

### Stop ()

<div class="scratch">
stop [all v]
</div>

Stops scripts, chosen from a dropdown: all scripts in the project, just
this script, or all other scripts running on this sprite.

Example: `stop [all v]` in a "game over" script halts every other running
script at once.

**See Also:** [When I Start as a Clone](#when-i-start-as-a-clone), [Delete This Clone](#delete-this-clone)

---

### When I Start as a Clone

<div class="scratch">
when I start as a clone
</div>

Starts the attached script whenever a clone of this sprite is created, in
addition to the original sprite's own scripts.

Example: `when I start as a clone` followed by `go to (random position v)`
gives each new clone its own random starting spot.

**See Also:** [Create Clone of ()](#create-clone-of), [Delete This Clone](#delete-this-clone)

---

### Create Clone of ()

<div class="scratch">
create clone of [myself v]
</div>

Creates a temporary copy of this sprite (or another sprite), which runs its
own "when I start as a clone" scripts.

Example: `create clone of [myself v]` inside a `repeat` loop spawns several
copies of a sprite, such as a row of enemies.

**See Also:** [When I Start as a Clone](#when-i-start-as-a-clone), [Delete This Clone](#delete-this-clone)

---

### Delete This Clone

<div class="scratch">
delete this clone
</div>

Removes this clone from the project, freeing the memory it used. Has no
effect on the original sprite.

Example: `delete this clone` after `if <touching [Player v]?> then` removes
a clone as soon as it hits the player.

**See Also:** [Create Clone of ()](#create-clone-of), [When I Start as a Clone](#when-i-start-as-a-clone)

---

## Sensing

Sensing blocks detect what is happening around a sprite — touching, mouse
and keyboard input, timers, and questions asked of the player.

### Touching ()?

<div class="scratch">
touching [mouse-pointer v]?
</div>

Reports true if the sprite is touching the mouse-pointer, the edge, or
another sprite chosen from the dropdown.

Example: `if <touching [Enemy v]?> then` checks for a collision with a
specific sprite.

**See Also:** [Touching Color ()?](#touching-color), [Color () Is Touching ()?](#color-is-touching), [Distance to ()](#distance-to)

---

### Touching Color ()?

<div class="scratch">
touching color [#ff0000]?
</div>

Reports true if the sprite is touching the given color anywhere on the
stage.

Example: `if <touching color [#ff0000]?> then` can detect when a sprite
touches a red "lava" area drawn on the backdrop.

**See Also:** [Touching ()?](#touching), [Color () Is Touching ()?](#color-is-touching)

---

### Color () Is Touching ()?

<div class="scratch">
color [#ff0000] is touching [#0000ff]?
</div>

Reports true if a specific color on the sprite's own costume is touching a
specific color anywhere else, which is more precise than checking the
whole sprite.

Example: checking whether a sprite's "wheel" color is touching the "road"
color can confirm exact contact points for a driving game.

**See Also:** [Touching Color ()?](#touching-color), [Touching ()?](#touching)

---

### Distance to ()

<div class="scratch">
distance to [mouse-pointer v]
</div>

Reports the distance, in steps, between this sprite and the mouse-pointer
or another sprite.

Example: `if <(distance to [Player v]) &lt; (50)> then` checks whether an
enemy has gotten close to the player.

**See Also:** [Point Towards ()](#point-towards), [Touching ()?](#touching)

---

### Ask () and Wait

<div class="scratch">
ask [What is your name?] and wait
</div>

Shows a text box on the stage with the given question, and pauses the
script until the player types an answer and presses Enter.

Example: `ask [What is your name?] and wait` followed by `say (join
[Hello, ] (answer))` greets the player by the name they typed.

**See Also:** [Answer](#answer)

---

### Answer

<div class="scratch">
answer
</div>

Reports the text the player most recently typed in response to an `ask`
block.

Example: `if <(answer) = [yes]> then` checks how the player responded to a
yes/no question.

**See Also:** [Ask () and Wait](#ask-and-wait)

---

### Key () Pressed?

<div class="scratch">
key [space v] pressed?
</div>

Reports true for as long as the chosen key is being held down.

Example: `if <key [right arrow v] pressed?> then` followed by `change x by
(10)` moves a sprite right while the arrow key is held.

**See Also:** [When () Key Pressed](#when-key-pressed), [Mouse Down?](#mouse-down)

---

### Mouse Down?

<div class="scratch">
mouse down?
</div>

Reports true for as long as the mouse button is being held down.

Example: `if <mouse down?> then` followed by `go to (mouse-pointer v)`
lets a sprite be dragged around while the mouse button is held.

**See Also:** [Mouse X](#mouse-x), [Mouse Y](#mouse-y), [Key () Pressed?](#key-pressed)

---

### Mouse X

<div class="scratch">
mouse x
</div>

Reports the mouse-pointer's current horizontal position on the stage.

Example: `set x to (mouse x)` makes a sprite always line up under the
cursor horizontally, like a paddle.

**See Also:** [Mouse Y](#mouse-y), [Mouse Down?](#mouse-down)

---

### Mouse Y

<div class="scratch">
mouse y
</div>

Reports the mouse-pointer's current vertical position on the stage.

Example: `set y to (mouse y)` makes a sprite track the cursor vertically.

**See Also:** [Mouse X](#mouse-x), [Mouse Down?](#mouse-down)

---

### Set Drag Mode ()

<div class="scratch">
set drag mode [draggable v]
</div>

Controls whether the player can pick up and drag the sprite with the mouse
while the project is running.

Example: `set drag mode [draggable v]` lets players rearrange puzzle piece
sprites by hand.

**See Also:** [Mouse Down?](#mouse-down), [Mouse X](#mouse-x)

---

### Loudness

<div class="scratch">
loudness
</div>

Reports the current volume detected by the microphone, from 0 to 100.

Example: `set size to (loudness)` makes a sprite grow and shrink with the
sound of the player's voice.

**See Also:** [When Loudness or Timer Greater Than ()](#when-loudness-or-timer-greater-than)

---

### Timer

<div class="scratch">
timer
</div>

Reports the number of seconds since the project started, or since the
timer was last reset.

Example: `say (timer)` displays how many seconds have elapsed, useful for
building a stopwatch.

**See Also:** [Reset Timer](#reset-timer), [When Loudness or Timer Greater Than ()](#when-loudness-or-timer-greater-than)

---

### Reset Timer

<div class="scratch">
reset timer
</div>

Sets the timer back to zero.

Example: `reset timer` at the start of a level lets the next `timer`
reading measure exactly how long that level took.

**See Also:** [Timer](#timer)

---

### Property () of ()

<div class="scratch">
[x position v] of [Sprite1 v]
</div>

Reports a chosen property (such as x position, costume number, or a
variable) belonging to another sprite or the stage.

Example: `[y position v] of [Enemy v]` lets one sprite's script read
another sprite's position directly.

**See Also:** [X Position](#x-position), [Y Position](#y-position)

---

### Current Time Unit ()

<div class="scratch">
current [minute v]
</div>

Reports part of the current date or time — year, month, date, day of the
week, hour, minute, or second — chosen from the dropdown.

Example: `current [hour v]` can be used to change a backdrop to "night"
after 6pm.

**See Also:** [Days Since 2000](#days-since-2000), [Timer](#timer)

---

### Days Since 2000

<div class="scratch">
days since 2000
</div>

Reports the number of days that have passed since January 1, 2000, which is
useful as a simple, ever-increasing counter.

Example: comparing two readings of `days since 2000` can measure how many
days apart two events were.

**See Also:** [Current Time Unit ()](#current-time-unit)

---

### Username

<div class="scratch">
username
</div>

Reports the Scratch username of the person currently viewing the project,
or an empty string if the project is not running on the Scratch website
while logged in.

Example: `say (join [Hi, ] (username))` can personalize a greeting for a
logged-in player.

**See Also:** [Answer](#answer)

---

## Operators

Operator blocks do math, compare values, combine booleans, and work with
text.

### Addition (+)

<div class="scratch">
(1) + (1)
</div>

Reports the sum of two numbers.

Example: `change [score v] by ((points) + (bonus))` adds two values
together before applying them to a variable.

**See Also:** [Subtraction (−)](#subtraction), [Multiplication (×)](#multiplication)

---

### Subtraction (−)

<div class="scratch">
(1) - (1)
</div>

Reports the result of subtracting the second number from the first.

Example: `set [lives v] to ((lives) - (1))` reduces a variable by one when
the player is hit.

**See Also:** [Addition (+)](#addition), [Division (÷)](#division)

---

### Multiplication (×)

<div class="scratch">
(1) * (1)
</div>

Reports the product of two numbers.

Example: `set [area v] to ((width) * (height))` computes an area from two
variables.

**See Also:** [Division (÷)](#division), [Addition (+)](#addition)

---

### Division (÷)

<div class="scratch">
(1) / (1)
</div>

Reports the result of dividing the first number by the second.

Example: `set [average v] to ((total) / (count))` computes an average from
two variables.

**See Also:** [Multiplication (×)](#multiplication), [Modulo (mod)](#modulo-mod)

---

### Pick Random () to ()

<div class="scratch">
pick random (1) to (10)
</div>

Reports a random number between the two given values, inclusive.

Example: `go to x: (pick random (-200) to (200)) y: (150)` drops a sprite
at a random horizontal position along the top of the stage.

**See Also:** [Addition (+)](#addition), [Modulo (mod)](#modulo-mod)

---

### Less Than (<)

<div class="scratch">
(1) &lt; (2)
</div>

Reports true if the first value is less than the second.

Example: `if <(lives) &lt; (1)> then` checks whether the player has run out
of lives.

**See Also:** [Greater Than (>)](#greater-than), [Equals (=)](#equals)

---

### Equals (=)

<div class="scratch">
(1) = (1)
</div>

Reports true if the two values are equal.

Example: `if <(answer) = [yes]> then` checks whether the player's typed
answer matches exactly.

**See Also:** [Less Than (<)](#less-than), [Greater Than (>)](#greater-than)

---

### Greater Than (>)

<div class="scratch">
(1) &gt; (2)
</div>

Reports true if the first value is greater than the second.

Example: `if <(score) &gt; (highscore)> then` checks whether the player has
beaten the previous high score.

**See Also:** [Less Than (<)](#less-than), [Equals (=)](#equals)

---

### And

<div class="scratch">
&lt;(1) = (1)&gt; and &lt;(1) = (1)&gt;
</div>

Reports true only if both of the two given conditions are true.

Example: `if <<key [up arrow v] pressed?> and <not <touching [edge
v]?>>> then` moves a sprite up only while it is not already at the edge.

**See Also:** [Or](#or), [Not](#not)

---

### Or

<div class="scratch">
&lt;(1) = (1)&gt; or &lt;(1) = (1)&gt;
</div>

Reports true if at least one of the two given conditions is true.

Example: `if <<key [space v] pressed?> or <mouse down?>> then` reacts to
either the space key or a mouse click.

**See Also:** [And](#and), [Not](#not)

---

### Not

<div class="scratch">
not &lt;(1) = (1)&gt;
</div>

Reverses a condition — reports true if the given condition is false, and
false if it is true.

Example: `if <not <touching [edge v]?>> then` runs only while the sprite is
away from the edge.

**See Also:** [And](#and), [Or](#or)

---

### Join () ()

<div class="scratch">
join [hello ] [world]
</div>

Reports one piece of text made by sticking the two given pieces of text
together.

Example: `say (join [Score: ] (score))` combines a label with a variable's
value into a single line of text.

**See Also:** [Letter () of ()](#letter-of), [Length of () (String)](#length-of-string)

---

### Letter () of ()

<div class="scratch">
letter (1) of [world]
</div>

Reports the single character at the given position in a piece of text.

Example: `letter (1) of (answer)` reads just the first letter the player
typed.

**See Also:** [Join () ()](#join), [Length of () (String)](#length-of-string)

---

### Length of () (String)

<div class="scratch">
length of [world]
</div>

Reports how many characters are in the given piece of text.

Example: `if <(length of (answer)) &gt; (10)> then` checks whether the
player typed a long answer.

**See Also:** [Letter () of ()](#letter-of), [String Contains ()?](#string-contains)

---

### String Contains ()?

<div class="scratch">
[hello world] contains [world]?
</div>

Reports true if the first piece of text contains the second piece of text
anywhere inside it.

Example: `if <(answer) contains [yes]?> then` checks for the word "yes"
anywhere in the player's typed answer.

**See Also:** [Length of () (String)](#length-of-string), [Join () ()](#join)

---

### Modulo (mod)

<div class="scratch">
(1) mod (1)
</div>

Reports the remainder after dividing the first number by the second — for
example, `(7) mod (2)` reports 1.

Example: `if <((counter) mod (2)) = (0)> then` runs a script only on even
numbers, alternating an effect every other time through a loop.

**See Also:** [Division (÷)](#division), [Round ()](#round)

---

### Round ()

<div class="scratch">
round (3.7)
</div>

Reports the given number rounded to the nearest whole number.

Example: `set [score v] to (round (score))` cleans up a score that may have
picked up decimal places from earlier math.

**See Also:** [Math Function () of ()](#math-function-of), [Modulo (mod)](#modulo-mod)

---

### Math Function () of ()

<div class="scratch">
[sqrt v] of (9)
</div>

Reports the result of applying a math function — absolute value, floor,
ceiling, square root, sine, cosine, tangent, or others — to the given
number.

Example: `[abs v] of ((x1) - (x2))` computes the absolute distance between
two x positions.

**See Also:** [Round ()](#round), [Distance to ()](#distance-to)

---

## Variables

Variable blocks store and change single named values that a project can
read and update while it runs.

### Set Variable to ()

<div class="scratch">
set [score v] to (0)
</div>

Sets the named variable to the given value, replacing whatever it held
before.

Example: `set [score v] to (0)` at the start of a game resets the score
before play begins.

**See Also:** [Change Variable by ()](#change-variable-by), [Variable Reporter](#variable-reporter)

---

### Change Variable by ()

<div class="scratch">
change [score v] by (1)
</div>

Adds the given amount to the named variable's current value. Use a
negative number to subtract.

Example: `change [score v] by (1)` inside a collision check increases the
score each time the player collects an item.

**See Also:** [Set Variable to ()](#set-variable-to), [Variable Reporter](#variable-reporter)

---

### Show Variable ()

<div class="scratch">
show variable [score v]
</div>

Displays the named variable's value in a small monitor on the stage.

Example: `show variable [score v]` at the start of a game keeps the score
visible to the player throughout.

**See Also:** [Hide Variable ()](#hide-variable), [Variable Reporter](#variable-reporter)

---

### Hide Variable ()

<div class="scratch">
hide variable [score v]
</div>

Removes the named variable's monitor from the stage, without deleting the
variable itself.

Example: `hide variable [debug-x v]` keeps an internal variable used for
testing off the screen that the player sees.

**See Also:** [Show Variable ()](#show-variable)

---

### Variable Reporter

<div class="scratch">
score
</div>

Reports the current value stored in the named variable. Scratch creates one
of these oval reporter blocks automatically for every variable you make.

Example: `say (score)` displays the current value of the `score` variable
in a speech bubble.

**See Also:** [Set Variable to ()](#set-variable-to), [Change Variable by ()](#change-variable-by)

---

## Lists

List blocks store and manipulate an ordered collection of values, such as a
list of high scores or player names.

### Add () to List

<div class="scratch">
add [thing] to [my list v]
</div>

Adds the given value to the end of the named list.

Example: `add (answer) to [names v]` appends whatever the player just typed
onto the end of a list.

**See Also:** [Delete () of List](#delete-of-list), [Item () of List (Reporter)](#item-of-list-reporter)

---

### Delete () of List

<div class="scratch">
delete (1) of [my list v]
</div>

Removes the item at the given position from the named list.

Example: `delete (1) of [my list v]` removes the first item, shifting every
later item up by one position.

**See Also:** [Delete All of List](#delete-all-of-list), [Add () to List](#add-to-list)

---

### Delete All of List

<div class="scratch">
delete all of [my list v]
</div>

Removes every item from the named list, leaving it empty.

Example: `delete all of [high-scores v]` clears the list before rebuilding
it from saved data.

**See Also:** [Delete () of List](#delete-of-list), [Length of List](#length-of-list)

---

### Insert () at () of List

<div class="scratch">
insert [thing] at (1) of [my list v]
</div>

Inserts the given value into the named list at the given position, shifting
later items back by one.

Example: `insert (answer) at (1) of [names v]` puts the newest entry at the
very front of the list instead of the end.

**See Also:** [Add () to List](#add-to-list), [Replace Item () of List with ()](#replace-item-of-list-with)

---

### Replace Item () of List with ()

<div class="scratch">
replace item (1) of [my list v] with [thing]
</div>

Replaces the value at the given position in the named list with a new
value, without changing the list's length.

Example: `replace item (1) of [high-scores v] with (score)` overwrites the
top score entry with a new value.

**See Also:** [Insert () at () of List](#insert-at-of-list), [Item () of List (Reporter)](#item-of-list-reporter)

---

### Item () of List (Reporter)

<div class="scratch">
item (1) of [my list v]
</div>

Reports the value stored at the given position in the named list.

Example: `say (item (1) of [names v])` announces the first name stored in
the list.

**See Also:** [Item Number of () in List](#item-number-of-in-list), [Replace Item () of List with ()](#replace-item-of-list-with)

---

### Item Number of () in List

<div class="scratch">
item # of [thing] in [my list v]
</div>

Reports the position of the first matching value in the named list, or 0 if
the value is not found.

Example: `item # of (answer) in [names v]` looks up where a typed name sits
in the list.

**See Also:** [Item () of List (Reporter)](#item-of-list-reporter), [List Contains ()?](#list-contains)

---

### Length of List

<div class="scratch">
length of [my list v]
</div>

Reports how many items are currently in the named list.

Example: `repeat (length of [names v])` loops once for every name currently
stored in the list.

**See Also:** [Delete All of List](#delete-all-of-list), [Item () of List (Reporter)](#item-of-list-reporter)

---

### List Contains ()?

<div class="scratch">
[my list v] contains [thing]?
</div>

Reports true if the named list contains the given value anywhere in it.

Example: `if <[names v] contains (answer)?> then` checks whether the
player has already been added to the list.

**See Also:** [Item Number of () in List](#item-number-of-in-list), [Add () to List](#add-to-list)

---

### Show List ()

<div class="scratch">
show list [my list v]
</div>

Displays the named list's contents in a monitor on the stage.

Example: `show list [high-scores v]` keeps a scoreboard visible to the
player throughout the game.

**See Also:** [Hide List ()](#hide-list)

---

### Hide List ()

<div class="scratch">
hide list [my list v]
</div>

Removes the named list's monitor from the stage, without deleting the
list itself.

Example: `hide list [debug-log v]` keeps an internal list used for testing
off the screen the player sees.

**See Also:** [Show List ()](#show-list)

---

## My Blocks (Custom Blocks)

My Blocks let a creator define a brand-new, reusable block out of other
blocks, optionally with its own number, text, or boolean inputs.

### Define () (Custom Block)

<div class="scratch">
define star (size) (points)
repeat (points)
move (size) steps
turn right (144) degrees
end
</div>

The hat block that starts the definition of a custom block, naming its
inputs. It only appears attached to the stack of blocks that make up the
custom block's own script.

Example: `define star (size) (points)` followed by a `repeat` loop builds a
reusable "draw a star" block that any script in the project can call.

**See Also:** [Custom Block Call](#custom-block-call)

---

### Custom Block Call

<div class="scratch">
star (100) (5)
</div>

Runs a custom block that has already been defined, passing in values for
each of its inputs.

Example: `star (100) (5)` calls the `star` custom block defined above,
drawing a five-pointed star with a size of 100.

**See Also:** [Define () (Custom Block)](#define-custom-block)

---
