# Glossary of Terms

#### Abstraction

Hiding the small details of how something works behind a simple name or block, so it can be reused without rethinking every step.

**Example:** A custom "draw a star" block hides all the turn and move blocks needed to draw one shape.

**See also:** Custom Block Definition, Reusability

#### Accessibility Features

Tools built into Scratch, such as text-to-speech and translate, that help more people use and understand a project regardless of ability or language.

**Example:** Turning on text-to-speech lets a player who cannot read yet still understand what a story sprite is saying.

**See also:** Text To Speech, Translate Extension

#### Add Extension

The button in the Scratch editor used to add extra blocks, such as pen, music, or micro:bit, to a project.

**Example:** Clicking the Add Extension button and choosing Pen adds the pen blocks needed to draw shapes on the stage.

**See also:** Extension Management, Pen Extension

#### Add To List

A list block that puts a new item onto the end of a chosen list.

**Example:** An "add thing to myList" block can add the word "sword" to a player's inventory list after they pick it up.

**See also:** Delete From List, List Length

#### Algorithmic Thinking

Planning a clear, ordered set of steps that will solve a problem or complete a task, before or while writing the actual code.

**Example:** Planning "turn on the game, wait for a key press, move the sprite, then check for a collision" before coding it is algorithmic thinking.

**See also:** Step By Step Thinking, Sequence

#### And Operator

A boolean operator block that reports true only when both of the conditions plugged into it are true.

**Example:** "Key up pressed and not touching wall" lets a sprite move up only when it is not blocked by a wall.

**See also:** Or Operator, Boolean Logic

#### Asset List

A written list of the sprites, costumes, sounds, and backdrops a project will need, made during planning.

**Example:** An asset list for a space game might include a rocket sprite, an asteroid sprite, a starfield backdrop, and a laser sound.

**See also:** Plan Phase

#### Asynchronous Broadcast

A broadcast that lets the sending script keep running immediately, without waiting for the scripts that respond to the message to finish.

**See also:** Broadcast Message, Synchronous Broadcast

#### Backdrop Switch Event

An event that happens the instant the stage's backdrop changes to a specific one, which can start a script beginning with "when backdrop switches to."

**Example:** A "when backdrop switches to level2" block can start new enemy scripts as soon as the game moves to the next level.

**See also:** Switch Backdrop

#### Backpack

A storage tray in the Scratch editor where sprites, scripts, costumes, and sounds can be dragged for reuse across different projects.

**Example:** Dragging a finished "jump" script into the backpack lets a student reuse it in a completely different project later.

**See also:** Copy To Backpack, Paste From Backpack

#### Beat Synchronization

Timing a sprite's motion or costume changes so they line up with the rhythm of music playing in a project.

**Example:** A dancer sprite switches costumes every time a drum beat plays, making it look like it is dancing to the music.

**See also:** Change Tempo, Lip Sync Animation

#### Block Color Coding

The Scratch design choice of giving every block category its own distinct color, so a block's type can be recognized at a glance.

**See also:** Motion Block Category, Looks Block Category

#### Block Highlighting

A yellow glow Scratch draws around a block while it is currently running, helping a user see which part of a script is active.

This is useful for debugging a slow or confusing script by watching exactly where the highlight goes.

**Example:** Watching the yellow glow move from a wait block to a move block shows exactly when a sprite pauses before moving again.

**See also:** Debugging Basics

#### Block Parameters

Extra input slots added to a custom block so it can receive different values, such as a name or number, each time it is used.

**Example:** A custom "jump" block with a height parameter can make a sprite jump higher or lower depending on the number given.

**See also:** Custom Block Definition

#### Blocks Palette

The panel in the Scratch editor that shows all the coding blocks a user can drag into a script, grouped by colored category.

**Example:** Dragging a "move 10 steps" block from the palette into the script area adds it to a sprite's code.

**See also:** Motion Block Category, Drag And Drop

#### Boolean Block Shape

A hexagonal, pointed-end block shape that reports only a true or false value and fits into matching hexagonal slots.

**Example:** The hexagonal "touching Cat1?" block only fits into the hexagon-shaped slot of an if block, not a rounded number slot.

**See also:** Reporter Block Shape, Boolean Logic

#### Boolean Combination

Joining two or more true or false conditions together with and, or, or not blocks to build a single, more detailed condition.

**Example:** "If key up pressed and not touching wall" combines two conditions into one decision.

**See also:** Boolean Logic, And Operator

#### Boolean Introduction

A first look at values that can only ever be true or false, used in Scratch to make decisions and control loops.

**See also:** Boolean Logic, If Block

#### Boolean Logic

Combining true and false values using operators like and, or, and not to build more detailed conditions.

**Example:** Combining blocks to check "lives = 0 or timer = 0" can end a game when either running out of lives or running out of time happens.

**See also:** And Operator, Or Operator, Not Operator

#### Broadcast And Wait

A block that sends a broadcast message and then pauses its own script until every script responding to that message has finished running.

Unlike a plain broadcast, this block waits, which is useful when one action must fully finish before the next one starts.

**Example:** Broadcasting "introScene" and waiting makes sure a whole opening animation finishes before the game's controls turn on.

**See also:** Broadcast Message, Synchronous Broadcast

#### Broadcast Message

A named signal sent to every sprite and the stage in a project, used to start scripts that are waiting for that signal.

**Example:** Broadcasting a message called "game over" can tell every sprite to stop moving and show an ending screen.

**See also:** When I Receive, Message Passing

#### Broadcast Storm

A problem where a message is broadcast repeatedly and rapidly, often from inside a loop, causing so many responses that a project slows down or acts unpredictably.

**Example:** Putting a "broadcast attack" block inside a forever loop can flood a game with so many messages that it starts to lag.

**See also:** Broadcast Message, Debugging Strategies

#### Camera Games

Games that use the video sensing extension so a player's real movement in front of a camera controls the game.

**Example:** A player waves an arm in front of the camera to pop bubbles on the screen without touching a keyboard.

**See also:** Video Sensing, Motion Detection

#### Cap Block Shape

A block shape with a flat bottom and no bump, used for blocks such as "stop all" that end a script and cannot have another block snapped beneath them.

**Example:** A "stop all" block has a flat bottom because it ends a script, so no other block can snap beneath it.

**See also:** Stack Block Shape

#### Change Size

A looks block that makes a sprite bigger or smaller by a chosen percentage compared to its original size.

**Example:** Changing size by negative 10 repeatedly inside a loop makes a sprite shrink until it disappears.

#### Change Tempo

A sound block that speeds up or slows down how fast music blocks play, measured in beats per minute.

**Example:** Setting tempo to 200 makes a drum block play much faster than the default tempo of 60.

**See also:** Beat Synchronization

#### Change Variable

A variables block that adds a chosen amount to a variable's current value, increasing or decreasing it instead of replacing it.

**Example:** A "change score by 1" block run each time a sprite is clicked slowly raises the score.

**See also:** Set Variable, Score Variable

#### Clean Up Blocks

A code tab option that automatically rearranges every script in the script area into a neat, non-overlapping layout.

**See also:** Script Area

#### Clear Graphics

The general action of wiping all pen drawings and stamps off the stage so it looks blank again, often done at the start of a script.

**See also:** Erase All, Pen Extension

#### Clone Behavior

How a clone acts once it is created, including which scripts it runs and how its costume and variables start out matching the original sprite.

**See also:** Cloning, When I Start As Clone

#### Clone Performance

How smoothly a project keeps running as more clones are created, since having too many clones on stage at once can slow a project down.

**Example:** A game that creates hundreds of clones at once without ever deleting them can start to slow down or freeze.

**See also:** Delete This Clone, Cloning

#### Cloning

Making a temporary copy of a sprite while a project is running, starting out with the same costumes and scripts as the original.

**Example:** A single bullet sprite can make many temporary clones of itself, one each time the player shoots.

**See also:** Create Clone, When I Start As Clone

#### Code Tab

The section of the Scratch editor where a user builds scripts by dragging blocks from the blocks palette into the script area.

**Example:** Clicking the Code tab shows the blocks palette and script area for whichever sprite is currently selected.

**See also:** Blocks Palette, Script Area

#### Collision Detection

Checking whether two sprites are touching each other, usually to trigger an action like losing a life or scoring a point.

**Example:** Checking "if touching Ghost then change lives by -1" takes away a life whenever the player's sprite touches a ghost sprite.

**See also:** Touching Sensor, Win Condition, Lose Condition

#### Comment Block

A small note attached to a script in the code tab that explains what the code does, without affecting how the script runs.

This is different from commenting on a project page, which is a message left for other Scratch members rather than a note in the code.

**Example:** A comment saying "this makes the cat jump" attached above a script helps remind a student what that code does later.

**See also:** Script Area, Commenting

#### Commenting

Leaving a short written message on someone's Scratch project page or in a studio to give feedback or ask a question.

This is different from a comment block, which is a note written inside the code itself rather than on a webpage.

**Example:** A viewer might write "I love the music in your game!" as a comment on a shared project's page.

**See also:** Community Feedback, Comment Block

#### Community Feedback

Comments and reactions from other Scratch members about a shared project, which can point out bugs or suggest new ideas.

**Example:** A comment saying "the jump is a little too slow, maybe speed it up?" is community feedback a creator could use to improve their game.

**See also:** Commenting, Reflection

#### Community Guidelines

The rules on the Scratch website that explain how members should treat each other and what kinds of projects and comments are allowed.

Following these rules keeps the Scratch community a safe and welcoming place for young creators to share their work.

**Example:** The guidelines ask members to be respectful, such as not posting mean comments on someone else's shared project.

**See also:** Commenting, Sharing Projects

#### Comparison Operators

Blocks that compare two values and report true or false, such as checking whether one number is less than, greater than, or equal to another.

**Example:** "Score > 10" compares the score variable to the number 10 and reports true once the player passes ten points.

**See also:** Less Than Operator, Greater Than Operator, Equal Operator

#### Concurrent Scripts

Two or more scripts in the same project that are running during the same stretch of time, instead of one after another.

**See also:** Parallelism

#### Condition Controlled Loop

A loop whose number of repeats is decided by whether a condition is true or false, rather than by a fixed count.

**See also:** Repeat Until Loop, Boolean Introduction

#### Conditional Branching

The general idea that a program can follow different paths depending on a condition, instead of always doing the same thing in the same order.

**See also:** If Block, If Else Block, Decision Making

#### Continuous Motion

Movement that keeps happening without pausing, often made in Scratch by placing a motion block inside a forever loop.

**See also:** Forever Loop, Scrolling Background

#### Control Block Category

One of the ten block categories in the blocks palette, color-coded orange, holding blocks for loops, conditionals, waiting, and cloning.

**See also:** Forever Loop, If Block, Cloning

#### Coordinate System

The grid of x and y numbers used to describe every location on the Scratch stage, with the point (0, 0) at the very center.

**Example:** The point (0, 0) is the exact center of the stage, and (100, -50) is a bit to the right and below center.

**See also:** X Coordinate, Y Coordinate, Stage Center

#### Copy To Backpack

Dragging a sprite, script, costume, or sound into the backpack so it is saved for use in another project.

**See also:** Backpack, Paste From Backpack

#### Costume Animation

Making a sprite appear to move or act by rapidly switching between several similar costumes, much like flipping through a picture flip book.

**Example:** A bird sprite with wings-up and wings-down costumes can flap its wings by switching between them every few steps.

**See also:** Switch Costume, Next Costume, Lip Sync Animation

#### Costume Center

The fixed point within a costume image that stays lined up with the sprite's x and y position when the costume rotates or changes size.

**Example:** Setting a spinning top's costume center to its middle point makes it spin in place instead of swinging around a corner.

#### Costumes Tab

The section of the Scratch editor where a user views, edits, and adds the images a sprite can wear to change how it looks.

**Example:** A cat sprite might have two costumes, "cat-a" and "cat-b," that alternate to make it look like it is walking.

**See also:** Switch Costume, Costume Animation

#### Counted Repetition

Repeating a set of actions a known, exact number of times, such as ten, instead of repeating forever or until something happens.

**See also:** Repeat Loop

#### Create Clone

A control block that makes a new clone of a chosen sprite, which then runs its own "when I start as a clone" scripts.

**Example:** A "create clone of myself" block run inside a forever loop can keep spawning new enemy sprites over time.

**See also:** Cloning, When I Start As Clone

#### Create Phase

The stage of the design process where a creator actually builds a project by adding sprites, sounds, and scripts.

**See also:** Plan Phase, Test Phase

#### Credit Attribution

Publicly thanking or naming the original creator of a project, image, sound, or idea that was reused in a new project.

**Example:** A project's credits might say "background music by TunesKid, used with thanks" to recognize someone else's work.

**See also:** Remixing, Credits

#### Credits

A list at the end of a project or on its project page naming the people who made it and anyone whose work was reused.

**Example:** A project's ending screen might list "Coded by Maya, Music by FreeSound, Idea from a remix of SpaceRun."

**See also:** Credit Attribution

#### Custom Block Definition

The script that runs whenever a custom block a user created is used elsewhere in a project.

**Example:** Defining a custom "jump" block once means every sprite that uses "jump" runs the same script stored in that definition.

**See also:** Block Parameters, Abstraction

#### Debugging Basics

The general skill of finding and fixing a mistake in a program that makes it behave differently than expected.

**Example:** If a sprite is supposed to jump but instead disappears, a student checks each block in order to find where things went wrong.

**See also:** Error Detection, Debugging Strategies

#### Debugging Strategies

Organized methods for finding the cause of a problem in a script, such as running it one block at a time or checking a variable's value.

**Example:** A student can click blocks one at a time in a script to run just part of it and see which piece causes the problem.

**See also:** Debugging Basics, Testing Strategies

#### Decision Making

Choosing between different actions in a program based on whether a condition is true or false.

**See also:** If Block, If Else Block

#### Delete Block

Removing a block from a script, usually by dragging it back into the blocks palette or right-clicking it and choosing delete.

#### Delete From List

A list block that removes one item from a chosen list at a specific position.

**Example:** "Delete 1 of myList" removes the very first item stored in a list, shifting the others up.

**See also:** Add To List

#### Delete This Clone

A control block that removes the clone running the current script from the project, freeing up computer memory.

**Example:** A bullet clone can delete itself as soon as it goes off the edge of the stage so it does not keep using memory.

**See also:** When I Start As Clone, Clone Performance

#### Design Journal

A written or drawn record a creator keeps while building a project, noting ideas, problems, and changes along the way.

**See also:** Reflection, Plan Phase

#### Design Process

A repeatable set of stages creators move through to turn an idea into a finished project, including imagining, planning, creating, testing, and improving it.

**Example:** A student might imagine a fishing game, plan its sprites, create the scripts, test it with a friend, improve the confusing parts, then share it.

**See also:** Imagine Phase, Plan Phase, Test Phase

#### Dialogue Timing

Controlling how long each character's speech bubble stays on screen and when the next one begins, so a conversation feels natural to follow.

**Example:** Giving each character's say block about 2 seconds keeps a conversation from flashing by too fast to read.

**See also:** Say Block, Broadcast And Wait

#### Dice Roll

A common project example that uses the pick random block to choose a whole number between one and six, imitating a real die.

**See also:** Pick Random, Unpredictable Gameplay

#### Distance To Sensor

A sensing block that reports the number of steps between a sprite and a chosen point, such as another sprite or the mouse pointer.

**Example:** "Distance to Cat2" can tell an enemy sprite how close it is getting to the player's sprite.

#### Drag And Drop

Clicking a block, moving the mouse while holding the click, and releasing it in a new spot — the main way blocks are added to a script.

**See also:** Snap Together, Script Area

#### Drawing Trails

Lines a sprite leaves behind as it moves across the stage after its pen has been put down.

**Example:** A sprite with its pen down that moves in a circle leaves behind a circular trail on the stage.

**See also:** Pen Down, Pen Extension

#### Duplicate Block

Making an exact copy of a block or a whole stack of blocks, usually by right-clicking it and choosing duplicate.

**Example:** Right-clicking a "move 10 steps" block and choosing duplicate creates an identical copy that can be dragged into another script.

**See also:** Clean Up Blocks

#### Enemy Movement

Scripts that move an opposing sprite in a game, often using loops, random numbers, or sensing blocks so it does not move the exact same way every time.

**Example:** An enemy sprite might use "point towards Cat1" and "move 3 steps" inside a forever loop to slowly chase the player.

**See also:** Unpredictable Gameplay, Collision Detection

#### Equal Operator

An operator block that reports true when two entered values are exactly the same.

**Example:** "Answer = cat" reports true only if a player types exactly the word "cat" into an answer box.

**See also:** Less Than Operator, Greater Than Operator

#### Erase All

The specific pen block labeled "erase all" that removes every drawn line and stamp from the stage in one step.

**Example:** Clicking "erase all" at the start of a drawing project clears any lines left over from the last time it ran.

**See also:** Clear Graphics

#### Error Detection

Noticing that a script is not producing the result a user expected, which is the first step toward fixing it.

**Example:** Noticing that a sprite always starts in the wrong spot is the first clue that a "go to" block might be missing.

**See also:** Debugging Basics, Debugging Strategies

#### Event Blocks

The yellow-colored group of blocks that start scripts in response to something happening, such as a click, a key press, or a message.

**Example:** A "when green flag clicked" block and a "when space key pressed" block can each start their own separate script.

**See also:** Green Flag Event, Broadcast Message

#### Event Driven Programming

A way of writing programs where scripts wait and then run in response to things happening, such as clicks or messages, instead of always running straight through from top to bottom.

**Example:** A game character does nothing until the player presses an arrow key, at which point its "when key pressed" script runs.

**See also:** Event Blocks, Broadcast Message

#### Event Queue

The list Scratch keeps of triggered events and messages that are waiting to start the scripts that respond to them.

**See also:** Broadcast Message, Event Blocks

#### Events Block Category

One of the ten block categories in the blocks palette, color-coded yellow, holding hat blocks that start scripts when something happens.

**See also:** Event Blocks, Block Color Coding

#### Extension Management

Adding, viewing, or removing the extensions loaded into a project.

**See also:** Add Extension

#### File Menu

The menu in the Scratch editor's toolbar with options for starting a new project, loading a file, and saving work.

**Example:** Choosing "New" from the File menu starts a brand new, empty project.

**See also:** Toolbar, Saving Projects

#### Flowchart

A diagram made of shapes and arrows that shows the order of steps and decisions a program will make.

**Example:** A flowchart for a quiz game might show a diamond shape asking "Correct?" with arrows leading to "add point" or "try again."

**See also:** Pseudocode, Decision Making

#### For All Sprites

A variable setting that makes a variable's value shared, so every sprite in the project can see and change it.

Unlike a variable set "for this sprite only," a shared variable has one single value used by the whole project.

**Example:** A shared "score" variable set "for all sprites" updates the same total no matter which sprite changes it.

**See also:** For This Sprite Only, Variable Scope

#### For This Sprite Only

A variable setting that keeps a variable private, so only the sprite that owns it can see or change its value.

**Example:** Each enemy sprite can have its own private health variable, separate from every other enemy's health.

**See also:** For All Sprites, Variable Scope

#### Forever Loop

A control block that repeats the blocks placed inside it without stopping, until the project itself is stopped.

Unlike a repeat loop, which stops after a set number of times, a forever loop keeps going the whole time a project runs.

**Example:** A "forever" loop containing a move block makes a sprite drift across the stage the entire time a project runs.

**See also:** Repeat Loop, Repeat Until Loop

#### Geometric Patterns

Shapes such as stars, spirals, or polygons drawn with the pen extension by repeating move and turn blocks a set number of times.

**Example:** A script with "repeat 5 [move 100 steps, turn 144 degrees]" draws a five-pointed star.

**See also:** Pen Extension, Repeat Loop, Loop Nesting

#### Glide To Position

A motion block that smoothly moves a sprite to a specific coordinate over a chosen number of seconds, instead of jumping there instantly.

**Example:** Gliding a sprite for 2 seconds makes it slide smoothly across the stage rather than teleporting.

**See also:** Go To Position

#### Go To Position

A motion block that instantly moves a sprite to a specific x and y coordinate on the stage.

It jumps a sprite there right away, unlike a glide block, which takes time to arrive.

**Example:** A "go to x: 0 y: 0" block snaps a sprite instantly back to the center of the stage.

**See also:** Glide To Position, Coordinate System

#### Greater Than Operator

An operator block that reports true when the first value entered is larger than the second value.

**Example:** "Timer > 30" reports true once thirty seconds have passed, which could end a timed level.

**See also:** Less Than Operator, Equal Operator

#### Green Flag

The green flag icon above the stage that a user clicks to start every script that begins with a "when green flag clicked" block.

**See also:** Green Flag Event, Stop Sign

#### Green Flag Event

The moment a user clicks the green flag, which triggers every script in a project that starts with a "when green flag clicked" hat block.

**See also:** Green Flag, Event Blocks

#### Hat Block Shape

A rounded-top block shape used for blocks that start a script, such as event blocks, which cannot have another block snapped above them.

**Example:** A "when green flag clicked" block has a rounded top because it is a hat block that starts a script.

**See also:** Stack Block Shape, Event Blocks

#### Hide Variable

A variables block that removes a variable's display box from the stage, without deleting the variable or its stored value.

**See also:** Show Variable

#### High Score List

A list used to keep and display several top scores from a game, instead of just the single most recent score.

**Example:** A high score list might show the top five scores, like 120, 95, 80, 75, and 60, from everyone who has played.

**See also:** Score Variable, List Creation

#### If Block

A control block that runs the blocks inside it only when a chosen condition is true, and otherwise does nothing.

Unlike an if-else block, a plain if block has no alternate set of actions for when the condition is false.

**Example:** "If touching edge, then turn 180 degrees" makes a sprite bounce back only when it reaches the side of the stage.

**See also:** If Else Block, Conditional Branching

#### If Else Block

A control block that runs one set of blocks when a condition is true and a different set of blocks when it is false.

**Example:** "If touching color red, then say 'Ouch!', else say 'Safe!'" reacts differently depending on what the sprite touches.

**See also:** If Block, Decision Making

#### Imagine Phase

The stage of the design process where a creator comes up with an idea for a project before building anything.

**See also:** Plan Phase, Design Process

#### Improve Phase

The stage of the design process where a creator fixes problems found during testing and adds new ideas to make a project better.

**See also:** Test Phase, Share Phase

#### Infinite Loop Detection

Recognizing when a loop will never stop on its own, either because it is a forever loop or because its ending condition can never become true.

**Example:** A "repeat until score = 10" loop will never stop if nothing in the script ever changes the score.

**See also:** Forever Loop, Loop Termination

#### Instructions Screen

A backdrop or sprite in a project that explains to a player how to use or play it before the action starts.

**Example:** A backdrop showing "Use arrow keys to move and space to jump" can appear before a platformer game begins.

#### Inventory System

A list used in a game to keep track of items a player has collected, such as keys, coins, or tools.

**Example:** A list called "inventory" might hold the items "sword," "shield," and "potion" that a player has picked up.

**See also:** List Creation, Add To List

#### Iterative Development

Building a project in small, repeated cycles of creating, testing, and improving instead of trying to finish everything at once.

**See also:** Design Process, Improve Phase

#### Key Pressed Event

An event that happens the instant a user presses a chosen keyboard key, which can start a script beginning with "when key pressed."

This hat block fires once at the moment of the key press, unlike the sensing block that can be checked repeatedly.

**Example:** A "when up arrow key pressed" block can make a sprite jump the instant a player presses that key.

**See also:** Key Pressed Sensor

#### Key Pressed Sensor

A sensing block that reports true while a chosen keyboard key is currently held down, checked at any moment a script asks.

Unlike the key pressed event, which fires once, this block can be checked over and over inside a loop.

**Example:** Checking "key space pressed?" inside a forever loop lets a sprite jump for as long as the space bar stays held down.

**See also:** Key Pressed Event, Player Control

#### Less Than Operator

An operator block that reports true when the first value entered is smaller than the second value.

**Example:** "Lives < 1" reports true once a player's lives variable drops to zero, which can trigger a game over.

**See also:** Greater Than Operator, Equal Operator

#### Lip Sync Animation

Switching a sprite's mouth costumes in time with recorded speech or singing so it looks like the sprite is talking.

**Example:** A singing sprite can switch between mouth-open and mouth-closed costumes in time with a recorded song.

**See also:** Costume Animation, Beat Synchronization

#### List Block Category

One of the ten block categories in the blocks palette, color-coded a darker reddish-orange, holding blocks that create and manage lists.

**See also:** List Creation, Variables Block Category

#### List Contains

A list block that reports true or false depending on whether a chosen value appears anywhere in a list.

**Example:** "Inventory contains key?" reports true only if the word "key" has been added to that list.

**See also:** List Length

#### List Creation

Making a new named storage spot that can hold many values in order, instead of just the single value a variable holds.

**Example:** Creating a list called "highScores" gives a project a place to store many players' scores instead of just one.

**See also:** List Item Access, Variable Creation

#### List Item Access

Getting or using the value stored at a specific position in a list, such as the third item.

**Example:** "Item 3 of highScores" gets whatever score is stored in the third spot of that list.

**See also:** List Creation, List Length

#### List Length

A list block that reports how many items are currently stored in a chosen list.

**Example:** "Length of inventory" reports 4 if a player has collected exactly four items.

**See also:** List Contains, List Item Access

#### Lives Variable

A variable commonly created in games to keep track of how many chances a player has left before losing.

**Example:** A game might start with a lives variable set to 3, subtracting one each time the player's sprite touches an enemy.

**See also:** Lose Condition

#### Looks Block Category

One of the ten block categories in the blocks palette, color-coded purple, holding blocks that change a sprite's costume, size, and speech.

**See also:** Looks Blocks, Block Color Coding

#### Looks Blocks

The purple-colored group of blocks used to change how a sprite appears, such as its costume, size, or spoken words.

**Example:** Combining "say Hello for 2 seconds" with "change size by 10" makes a sprite talk and grow at the same time.

**See also:** Say Block, Switch Costume, Change Size

#### Loop Nesting

Placing one loop entirely inside another loop, so the inner loop finishes completely each time before the outer loop continues.

**Example:** A loop that repeats 4 times, with a loop that repeats 5 times inside it, can draw five squares in a row.

**See also:** Repeat Loop, Geometric Patterns

#### Loop Termination

The point at which a loop stops repeating, either because it reached its set number of repeats or because its condition became true.

**Example:** A "repeat 10" loop stops the moment it finishes its tenth repeat and moves on to the next block below it.

**See also:** Repeat Loop, Repeat Until Loop

#### Lose Condition

The specific situation a program checks for that means a player has failed, such as running out of lives or time.

**Example:** A game might check "if lives = 0, then broadcast game over" to end the game once a player runs out of lives.

**See also:** Win Condition, Lives Variable

#### Makey Makey Extension

An extension that lets everyday conductive objects, connected to a Makey Makey device, act like keyboard keys to control a Scratch project.

**Example:** Bananas connected to a Makey Makey can be tapped like piano keys to play sounds in Scratch.

**See also:** Physical Computing, Micro Bit Extension

#### Message Passing

Sending information from one part of a program to another, in Scratch most often done by broadcasting a named message.

**See also:** Broadcast Message, Sprite Communication

#### Micro Bit Extension

An extension that lets a Scratch project send and receive signals to and from a micro:bit, a small physical computer with buttons, lights, and sensors.

**Example:** Pressing a button on a connected micro:bit can trigger a "when micro:bit button A pressed" script in Scratch.

**See also:** Physical Computing, Makey Makey Extension

#### Motion Block Category

One of the ten block categories in the blocks palette, color-coded blue, holding blocks that move, turn, and position sprites on the stage.

**See also:** Motion Blocks, Block Color Coding

#### Motion Blocks

The blue-colored group of blocks used to move a sprite, turn it, or change where it sits on the stage.

**Example:** Snapping together "move 10 steps" and "turn 15 degrees" makes a sprite walk forward and curve to one side.

**See also:** Move Steps, Turn Degrees, Go To Position

#### Motion Detection

Measuring how much movement the video sensing extension sees in front of the camera, either across the whole stage or in one sprite's area.

**See also:** Video Sensing

#### Move Steps

A motion block that moves a sprite forward a chosen number of steps in the direction it is currently facing.

**Example:** A "move 10 steps" block placed inside a forever loop makes a sprite glide continuously across the stage.

**See also:** Turn Degrees, Continuous Motion

#### Multilingual Projects

Projects built to work in more than one language, often using the translate extension so text and speech change for different players.

**See also:** Translate Extension

#### Multiple Sprites

Having more than one sprite in a project at the same time, each with its own costumes, sounds, and scripts.

**Example:** A game might have a cat sprite the player controls and a separate mouse sprite that runs away from it.

**See also:** Sprite, Parallelism

#### My Blocks Category

The category in the blocks palette, color-coded pink-red, where custom blocks a user has made appear so they can be reused.

**See also:** Custom Block Definition, Abstraction

#### Negative X

An x coordinate value less than zero, which places a point to the left of the stage's center.

**Example:** An x coordinate of -150 places a sprite to the left of center, toward the left edge of the stage.

**See also:** Positive X, X Coordinate

#### Negative Y

A y coordinate value less than zero, which places a point below the stage's center.

**Example:** A y coordinate of -120 places a sprite below center, toward the bottom of the stage.

**See also:** Positive Y, Y Coordinate

#### Next Backdrop

A looks block that changes the stage's background to whichever backdrop comes right after the current one in the backdrop list.

**See also:** Switch Backdrop

#### Next Costume

A looks block that changes a sprite's appearance to whichever costume comes right after its current one in the costume list, looping back to the first after the last.

**Example:** Placing "next costume" inside a loop with a short wait cycles a walking sprite through its walking costumes.

**See also:** Switch Costume, Costume Animation

#### Not Operator

A boolean operator block that flips a condition's value, reporting true when the condition inside it is false, and false when it is true.

**Example:** "Not touching edge" reports true whenever a sprite is safely away from the border of the stage.

**See also:** And Operator, Or Operator

#### Operators Block Category

One of the ten block categories in the blocks palette, color-coded green, holding blocks for math, text, comparisons, and boolean logic.

**See also:** Comparison Operators, Boolean Logic

#### Or Operator

A boolean operator block that reports true when at least one of the two conditions plugged into it is true.

**Example:** "Touching Enemy1 or touching Enemy2" triggers a lose condition if a sprite touches either enemy.

**See also:** And Operator, Boolean Logic

#### Pair Programming

Two people working together at one computer to build a project, with one dragging blocks while the other watches, checks, and suggests ideas.

**Example:** One student drags blocks together while their partner watches the stage and calls out "that block should come first!"

**See also:** Community Feedback

#### Parallelism

The ability of a Scratch project to run more than one script at the same time, so multiple things can happen together.

**Example:** One script makes a sprite move while a second script, running at the same time, plays background music.

**See also:** Concurrent Scripts, Multiple Sprites

#### Paste From Backpack

Dragging a sprite, script, costume, or sound out of the backpack into the current project to reuse it.

**See also:** Backpack, Copy To Backpack

#### Pen Color

A pen block setting that controls what color the line is that a sprite draws while its pen is down.

**Example:** Setting the pen color to blue before drawing makes a sprite leave behind a blue trail instead of the default color.

**See also:** Pen Size, Rainbow Lines

#### Pen Down

A pen block that turns on drawing, so a sprite leaves a trail behind it as it moves.

**Example:** Putting the pen down before a sprite moves in a square pattern draws the outline of a square on the stage.

**See also:** Pen Up, Drawing Trails

#### Pen Extension

An add-on set of blocks that lets a sprite draw lines and stamps on the stage as it moves.

**Example:** Adding the pen extension lets a sprite draw a trail behind it as it moves in a spiral.

**See also:** Add Extension, Drawing Trails, Pen Down

#### Pen Size

A pen block setting that controls how thick or thin the line is that a sprite draws while its pen is down.

**Example:** Setting pen size to 10 draws a thick, bold line instead of a thin one.

**See also:** Pen Color

#### Pen Up

A pen block that turns off drawing, so a sprite can move around without leaving a trail behind it.

**Example:** Lifting the pen up lets a sprite move back to its starting spot without drawing a line across the stage.

**See also:** Pen Down

#### Physical Computing

Connecting a computer program to real objects and devices, such as buttons, sensors, or fruit, so they can send input to or receive output from the program.

**See also:** Micro Bit Extension, Makey Makey Extension

#### Pick Random

An operator block that reports a random number between two chosen values each time it is checked.

**Example:** "Pick random -240 to 240" can choose a random x coordinate to make a sprite appear in a different spot each time.

**See also:** Random Number, Dice Roll

#### Plan Phase

The stage of the design process where a creator decides what sprites, backdrops, and scripts a project will need before building it.

**See also:** Imagine Phase, Storyboarding

#### Play Sound

A sound block that plays a chosen sound and waits until it finishes before the script moves on to the next block.

Unlike the start sound block, this one pauses the script until the sound is done playing.

**Example:** Using "play sound explosion until done" makes a script wait for the whole explosion sound before showing a game over message.

**See also:** Start Sound

#### Player Control

Scripts that let a person steer or move a sprite using inputs like arrow keys, the mouse, or other sensors.

**Example:** Scripts with "when up arrow key pressed, change y by 10," repeated for each arrow key, let a player steer a sprite around the stage.

**See also:** Key Pressed Sensor, Collision Detection

#### Polishing

Making small improvements to a mostly finished project, such as adding sound effects or fixing awkward timing, so it feels more complete.

**Example:** Adding a sound effect when a coin is collected and smoothing out a jerky jump animation are both ways of polishing a finished game.

**See also:** Improve Phase, Visual Juice

#### Positive X

An x coordinate value greater than zero, which places a point to the right of the stage's center.

**Example:** An x coordinate of 150 places a sprite to the right of center, toward the right edge of the stage.

**See also:** Negative X, X Coordinate

#### Positive Y

A y coordinate value greater than zero, which places a point above the stage's center.

**Example:** A y coordinate of 120 places a sprite above center, toward the top of the stage.

**See also:** Negative Y, Y Coordinate

#### Project Description

The written text on a project page that explains what a project is about and, often, how to use it.

**See also:** Instructions Screen, Project Tags

#### Project Page

The webpage on the Scratch website that shows a shared project along with its title, instructions, credits, and comments.

**Example:** A project page for a racing game shows its title, a green flag to play it, and comments from other players.

**See also:** Project Description, Credits

#### Project Tags

Short keywords added to a shared project so it turns up in related searches on the Scratch website.

**Example:** Adding the tags "game," "maze," and "tutorial" helps other members find a project when they search for maze games.

**See also:** Project Description, Sharing Projects

#### Pseudocode

A plain-language description of what a program should do, written in ordinary sentences instead of actual code blocks.

**Example:** "When the flag is clicked, move the cat until it hits the wall" is pseudocode for a simple script.

**See also:** Flowchart, Algorithmic Thinking

#### Rainbow Lines

Pen trails that gradually shift through different colors, usually made by changing the pen color block repeatedly inside a loop.

**Example:** A spinning sprite with its pen down and its color changing each step can draw a rainbow spiral.

**See also:** Pen Color, Drawing Trails

#### Random Number

A number chosen unpredictably from a set range, produced in Scratch by the "pick random" operator block.

**Example:** "Pick random 1 to 10" can produce a different number, such as 7 or 3, each time a script runs.

**See also:** Pick Random

#### Reflection

Thinking back on a finished or in-progress project to consider what worked well, what was hard, and what could be done differently.

**Example:** A student might write "next time I would add a start screen and make the enemies move faster" after finishing a project.

**See also:** Design Journal, Share Phase

#### Remix Exploration

Looking through different remixes of a shared project to see the variety of ways other members changed and improved it.

**Example:** A student can browse several remixes of a popular maze game to see how other kids added new obstacles.

**See also:** Remixing, Remix Tree

#### Remix Tree

A diagram on the Scratch website showing how a project and its remixes are related, tracing back to the original creator.

**Example:** A remix tree might show an original maze game with three branches leading to different students' remade versions.

**See also:** Remixing, Credit Attribution

#### Remixing

Making a copy of someone else's shared Scratch project and changing it to create a new version.

Remixing lets creators learn from each other's code and build on good ideas instead of starting from nothing.

**Example:** A student remixes a maze game to add new levels and a different main character.

**See also:** Remix Tree, Credit Attribution

#### Repeat Loop

A control block that runs the blocks inside it a specific number of times before moving on to the next block in the script.

Unlike a forever loop, a repeat loop stops on its own once it reaches its set count.

**Example:** A "repeat 4" loop containing a turn and move block can draw a square shape.

**See also:** Forever Loop, Repeat Until Loop, Counted Repetition

#### Repeat Until Loop

A control block that repeats the blocks inside it until a chosen condition becomes true, then stops and moves on.

Unlike a repeat loop, it does not use a fixed count; unlike a forever loop, it always has a way to stop.

**Example:** A "repeat until touching edge" loop keeps moving a sprite forward until it reaches the side of the stage.

**See also:** Repeat Loop, Forever Loop, Condition Controlled Loop

#### Reporter Block Shape

A rounded, oval block shape that holds a value, such as a number or piece of text, and fits into the input slots of other blocks.

Unlike a boolean block, a reporter block can hold many kinds of values, not just true or false.

**Example:** The oval "x position" block can be dropped into the input slot of a "say" block to show a sprite's current x value.

**See also:** Boolean Block Shape

#### Reusability

Building a script, block, or sprite so it can be used again in other parts of a project or in different projects.

**See also:** Abstraction, Custom Block Definition

#### Run Without Screen Refresh

A custom block setting that lets its whole script finish before the stage visually updates, useful for drawing many pen lines quickly.

**Example:** Turning this on for a custom drawing block lets a whole spiral finish drawing before it appears, instead of drawing bit by bit.

**See also:** Custom Block Definition, Pen Extension

#### Saving Projects

Storing the current state of a Scratch project, either on the Scratch website or as a file on a computer, so the work is not lost.

**Example:** Choosing File then Save keeps a maze game's current sprites and scripts so they are not lost after closing the browser.

**See also:** Versioning, File Menu

#### Say Block

A looks block that shows a speech bubble with chosen text above a sprite, either for a set number of seconds or until changed.

This is different from the think block, which shows a thought bubble instead of speech.

**Example:** A cat sprite can say "Hello!" for two seconds when the green flag is clicked.

**See also:** Think Block, Talking Sprites

#### Scene Coordination

Using broadcast messages and backdrop changes together to control the order in which different parts of a story or game happen.

**Example:** Broadcasting "scene2" can switch the backdrop and start new dialogue scripts at the same time to move a story forward.

**See also:** Scene Planning, Switch Backdrop

#### Scene Planning

Deciding ahead of time what backdrops, sprites, and events will appear in each part of a project.

**Example:** A student decides ahead of time that scene one needs a bedroom backdrop and a cat sprite, and scene two needs a park backdrop.

**See also:** Storyboarding, Storytelling Flow

#### Score Variable

A variable commonly created in games to keep track of a player's points as they play.

**Example:** A "change score by 1" block run every time a coin sprite is touched slowly builds up a player's score.

**See also:** Change Variable, High Score List

#### Scratch Account

A personal login on the Scratch website that lets a person save projects online, join studios, and leave comments on other members' work.

**Example:** Signing in to a Scratch account lets a student save a half-finished game and come back to it the next day.

**See also:** Saving Projects, Studio

#### Script Area

The large workspace in the code tab where blocks are dragged and connected to build scripts.

**See also:** Code Tab, Drag And Drop

#### Script Reading Order

The practice of reading a script starting at its top hat block and moving downward, in the same order the blocks will actually run.

**See also:** Sequence, Debugging Basics

#### Scrolling Background

A visual trick where a backdrop or image seems to slide across the stage, often used to make a sprite look like it is running or flying a long distance.

**Example:** A road backdrop can slide backward inside a forever loop to make a car sprite look like it is driving forward forever.

**See also:** Continuous Motion

#### Sensing Block Category

One of the ten block categories in the blocks palette, color-coded light blue, holding blocks that detect touching, key presses, and other inputs.

**See also:** Touching Sensor, Key Pressed Sensor

#### Sequence

The order in which coding blocks run, one after another from top to bottom, within a single script.

Changing the order of blocks can completely change what a program does, so getting the sequence right matters.

**Example:** Turning a sprite before moving it makes it walk in a new direction, but moving then turning does not.

**See also:** Script Reading Order, Step By Step Thinking

#### Set Variable

A variables block that gives a variable a specific value, replacing whatever value it held before.

Unlike the change variable block, which adds or subtracts, this block always replaces the old value completely.

**Example:** "Set score to 0" resets a player's score back to zero at the very start of a game.

**See also:** Change Variable

#### Share Phase

The stage of the design process where a creator publishes a finished project for others to see, play, and give feedback on.

**See also:** Improve Phase, Sharing Projects

#### Sharing Projects

Publishing a Scratch project on the Scratch website so other members can view, play, and remix it.

**Example:** Clicking the Share button lets a student's classmates play and comment on their finished cat game.

**See also:** Project Page, Share Phase

#### Show Variable

A variables block that displays a variable's current value in a small box on the stage.

**Example:** Checking the box next to the score variable displays a small scoreboard in the corner of the stage.

**See also:** Hide Variable

#### Snap Together

The way two compatible blocks click into place and connect when dragged close to each other.

**See also:** Drag And Drop, Stack Block Shape

#### Snek Code

A tiny, Python-like programming language built to run directly on microcontrollers too small to run full MicroPython, using only a few kilobytes of flash and RAM.

**Example:** BIPES can generate Snek code instead of MicroPython when the target board's memory is too limited for a full Python interpreter.

**See also:** BIPES, MicroPython

#### Sound Block Category

One of the ten block categories in the blocks palette, color-coded pink, holding blocks that play sounds and adjust volume and tempo.

**See also:** Sound Blocks, Block Color Coding

#### Sound Blocks

The pink-colored group of blocks used to play, start, and adjust audio in a Scratch project.

**Example:** Snapping together "play sound pop" with "change volume by -10" makes a sound play while also getting quieter over time.

**See also:** Play Sound, Start Sound, Change Tempo

#### Sound Effects

Short audio clips added to a project to react to actions, such as a pop when a sprite is clicked or a chime when points are scored.

**Example:** A short "ding" sound played whenever a coin is collected makes collecting feel more rewarding.

**See also:** Sound Blocks, Visual Juice

#### Sounds Tab

The section of the Scratch editor where a user records, imports, and edits the audio clips a sprite can play.

**Example:** A student can click the microphone icon in the Sounds tab to record themselves saying "Ready, set, go!"

**See also:** Play Sound, Sound Effects

#### Sprite

A character or object on the Scratch stage that can be programmed to move, change appearance, and interact with other objects.

Sprites are the main actors in every Scratch project — without at least one sprite, there is nothing to animate or control.

**Example:** A cat, a spaceship, or a soccer ball can all be sprites in a Scratch project.

**See also:** Stage, Costumes Tab

#### Sprite Clicked Event

An event that happens the instant a user clicks directly on a sprite, which can start a script beginning with "when this sprite clicked."

**Example:** A balloon sprite can use this block to pop and disappear the moment a player taps it.

**See also:** Event Blocks

#### Sprite Communication

Sprites sharing information or coordinating their actions with each other, most often done in Scratch through broadcast messages.

**See also:** Broadcast Message, Message Passing

#### Stack Block Shape

A puzzle-piece block shape with a notch on top and a bump on bottom, letting it snap above and below other blocks in a sequence.

**Example:** A "move 10 steps" block has a notch on top and a bump on the bottom so it can snap between other stack blocks.

**See also:** Hat Block Shape, Snap Together

#### Stage

The rectangular area in the Scratch editor where sprites move, appear, and act out a program while it runs.

**Example:** In a game project, the stage might show a backdrop of outer space with a rocket sprite flying across it.

**See also:** Sprite, Stage Size

#### Stage Center

The middle point of the stage, located at x coordinate 0 and y coordinate 0.

**Example:** Using "go to x: 0 y: 0" sends a sprite straight to the exact middle of the stage.

**See also:** Coordinate System, Stage Size

#### Stage Size

The fixed width and height of the Scratch stage, 480 steps wide and 360 steps tall, measured in the coordinate system.

**Example:** A sprite placed at x: 300 would be pushed off the right edge of the stage, since the stage only spans from -240 to 240.

**See also:** Coordinate System, Stage Center

#### Stamp

A pen block that leaves a permanent, unmoving copy of a sprite's current costume on the stage at its current position.

Unlike cloning, a stamp is just a picture — it cannot run scripts or move on its own afterward.

**Example:** A paintbrush sprite can stamp its costume across the stage to leave a trail of unmoving copies, like a rubber stamp.

**See also:** Pen Extension, Cloning

#### Start Sound

A sound block that begins playing a chosen sound and immediately moves on to the next block, without waiting for the sound to finish.

**Example:** Using "start sound footstep" as a sprite walks lets the next block run right away instead of waiting for the sound to finish.

**See also:** Play Sound

#### Step By Step Thinking

Breaking a task into a list of small, ordered actions that happen one at a time, the way a recipe lists cooking steps.

**Example:** Making a peanut butter sandwich can be broken into steps: get bread, open the jar, spread peanut butter, then put the slices together.

**See also:** Sequence, Algorithmic Thinking

#### Stop Sign

The red octagon icon above the stage that immediately stops every script currently running in a project.

**Example:** Clicking the stop sign instantly freezes a sprite mid-jump if a script has a bug that makes it fly off the stage.

**See also:** Green Flag

#### Storyboard

A series of small drawings, usually arranged in a grid, that lays out the scenes and action of a project in order before it is built.

**See also:** Storyboarding, Scene Planning

#### Storyboarding

Sketching a series of small pictures that show the main scenes of a story or game in order, before building it in Scratch.

**Example:** A student draws four boxes showing a cat waking up, eating, playing, and sleeping before building the animation in Scratch.

**See also:** Storyboard, Scene Planning

#### Storytelling Flow

The order in which scenes, dialogue, and actions unfold in an animated story so it makes sense from beginning to end.

**See also:** Scene Coordination, Storyboarding

#### Studio

A shared collection of Scratch projects that different members can add to, gathered around a common theme or purpose.

**Example:** A class might create a studio called "Our Space Games" where every student adds their own rocket game.

**See also:** Sharing Projects, Remixing

#### Switch Backdrop

A looks block that changes the stage's background image to a specific backdrop, chosen by name or number.

**Example:** A "switch backdrop to forest" block changes the stage's background to a forest scene right away.

**See also:** Next Backdrop, Backdrop Switch Event

#### Switch Costume

A looks block that changes a sprite's appearance to a specific costume, chosen by name or number from its costume list.

**Example:** A "switch costume to costume2" block instantly changes a sprite's outfit, like flipping a light switch.

**See also:** Next Costume, Costume Animation

#### Synchronous Broadcast

A broadcast that pauses the sending script until every script responding to the message finishes running, created with the "broadcast and wait" block.

**See also:** Broadcast And Wait, Asynchronous Broadcast

#### Talking Sprites

Sprites that appear to speak, either by showing written text in a say block or by using the text-to-speech extension to make actual sound.

**See also:** Text To Speech, Say Block

#### Test Phase

The stage of the design process where a creator runs a project to see if it works the way it was planned.

**See also:** Create Phase, Improve Phase

#### Testing Strategies

Different planned ways of trying out a project, such as checking every button or trying to break it on purpose, used to find as many problems as possible.

**Example:** A student might test a maze game by trying to walk into every wall on purpose to see if the sprite ever gets stuck.

**See also:** Test Phase, Debugging Strategies

#### Text To Speech

An extension that makes a sprite speak chosen written text out loud in a computer-generated voice.

Unlike the say block, which only shows silent text in a bubble, this extension produces actual sound.

**Example:** A "speak Hello there" block makes a sprite say the words out loud in a computer voice, even without a recorded sound file.

**See also:** Talking Sprites, Say Block

#### Think Block

A looks block that shows a thought bubble with chosen text above a sprite, representing what it is imagining rather than saying out loud.

**Example:** A sprite can show a thought bubble that says "Hmm, which way should I go?" while deciding what to do next.

**See also:** Say Block

#### Timer Variable

A built-in value from the sensing blocks that counts seconds since a project started or was last reset, and can be shown on the stage like a variable.

**Example:** Showing the timer on stage lets players see exactly how many seconds have passed since they clicked the green flag.

**See also:** Show Variable, Test Phase

#### Toolbar

The row of icons and menus at the top of the Scratch editor used for tasks like naming a project, saving it, or changing its language.

**See also:** File Menu, Zoom Controls

#### Touching Color Sensor

A sensing block that reports true when a sprite is touching a chosen color anywhere on the stage.

**Example:** "If touching color green" can check whether a car sprite has driven off the road and onto the grass.

**See also:** Touching Sensor

#### Touching Sensor

A sensing block that reports true when a sprite is touching a chosen sprite, the edge of the stage, or the mouse pointer.

**Example:** "If touching Goalpost" can check whether a soccer ball sprite has reached the goal.

**See also:** Touching Color Sensor, Collision Detection

#### Translate Extension

An extension that changes chosen text from one language into another while a project is running.

**Example:** A "translate Hello to Spanish" block can turn the word "Hello" into "Hola" while a project is running.

**See also:** Multilingual Projects, Accessibility Features

#### Turn Degrees

A motion block that rotates a sprite clockwise or counterclockwise by a chosen number of degrees.

**Example:** A "turn 90 degrees" block rotates a sprite a quarter turn clockwise, like turning a corner.

**See also:** Move Steps

#### Unpredictable Gameplay

Game behavior that changes each time it is played because it depends on random numbers rather than always following the same pattern.

**Example:** An enemy sprite that picks a random direction to move every few seconds makes a game feel different each time it is played.

**See also:** Random Number, Enemy Movement

#### Variable Creation

Making a new named storage spot in a project that can hold a changing number or piece of text while a program runs.

**Example:** Creating a variable called "score" gives a project a place to store and update a player's points.

**See also:** Set Variable, Variable Scope

#### Variable Scope

The range of sprites that are allowed to see and use a particular variable, set in Scratch to either every sprite or just one.

**See also:** For All Sprites, For This Sprite Only

#### Variables Block Category

One of the ten block categories in the blocks palette, color-coded orange, holding blocks that create, set, change, and display variables.

**See also:** Variable Creation, Set Variable

#### Versioning

Keeping track of different saved copies of a project over time so earlier versions can be compared or brought back if needed.

**Example:** Saving copies named "game_v1," "game_v2," and "game_v3" lets a student go back to an earlier version if a new idea breaks something.

**See also:** Saving Projects

#### Video Sensing

An extension that lets a project detect motion seen through a computer's camera.

**Example:** The video sensing extension can detect a player waving their hand in front of the camera to control a sprite.

**See also:** Motion Detection, Camera Games

#### Visual Juice

Small extra effects, like sparkles, wiggles, or flashes, added to a project to make actions feel more exciting without changing how the game actually works.

**Example:** Making a sprite briefly grow bigger and flash a different color when it scores a point adds visual juice without changing the scoring itself.

**See also:** Sound Effects, Polishing

#### Visual Programming

A way of writing computer programs by dragging and snapping together colorful blocks instead of typing lines of text.

It lets beginners build real programs without worrying about spelling, punctuation, or memorizing typed commands.

**Example:** Dragging a "move 10 steps" block into place is visual programming, instead of typing a line like move(10).

**See also:** Sprite, Blocks Palette

#### When I Receive

An event hat block that starts a script as soon as a chosen broadcast message is sent anywhere in the project.

**Example:** Every sprite with a "when I receive game over" block will react the moment any sprite broadcasts that message.

**See also:** Broadcast Message

#### When I Start As Clone

A control hat block that starts a script the moment a new clone is created, running only on that clone rather than the original sprite.

**Example:** A bullet sprite can use this block to make each new clone fly forward on its own as soon as it is made.

**See also:** Create Clone, Delete This Clone

#### Win Condition

The specific situation a program checks for that means a player has succeeded, such as reaching a certain score or touching a goal.

**Example:** A game might check "if score = 10, then broadcast you win" to end the game once a player collects ten coins.

**See also:** Lose Condition, Score Variable

#### X Coordinate

A number that tells how far left or right a point is from the center of the stage, with negative values to the left and positive values to the right.

**Example:** An x coordinate of 200 places a sprite near the right edge of the stage, while -200 places it near the left edge.

**See also:** Y Coordinate, Coordinate System

#### Y Coordinate

A number that tells how far up or down a point is from the center of the stage, with negative values below and positive values above.

**Example:** A y coordinate of 150 places a sprite near the top of the stage, while -150 places it near the bottom.

**See also:** X Coordinate, Coordinate System

#### Zoom Controls

The buttons near the stage that make the stage view appear larger or smaller on screen without changing the size of anything in the project itself.

