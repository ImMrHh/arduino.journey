# Lesson: LCD Jumpman Game

## Overview
In this robotics lesson, students will build a simple game on an LCD screen using Arduino. The activity introduces how character LCDs display information, how timing loops create animation, and how to simulate motion with discrete characters.

## Learning Objectives
- Understand how LCDs refresh and why animation looks discrete.
- Practice coding loops, delays, and state machines.
- Apply physics concepts (gravity, velocity) to a game mechanic.
- Debug hardware quirks and optimize redraws.

## Materials
- Arduino Uno (or equivalent)
- 16×2 or 20×4 LCD with I2C backpack
- Push button + resistor
- Breadboard and jumper wires

## Lesson Flow
1. **Introduction (5 min)**  
   Discuss how LCDs differ from pixel displays and why animation looks step‑based.
2. **Setup (10 min)**  
   Wire the LCD and button, test with a “Hello World” sketch.
3. **Coding (15 min)**  
   Walk through the Jumpman sketch, explaining functions like `drawPlayer()` and `updateObstacles()`.
4. **Play & Debug (10 min)**  
   Students test the game, identify quirks, and adjust timing or glyphs.
5. **Reflection (5 min)**  
   Compare LCD animation to pixel displays. Brainstorm improvements.

## Extensions
- Add sound feedback with a buzzer at the jump peak.
- Create custom glyphs for “jumping” and “standing.”
- Adjust obstacle speed for difficulty levels.
- Extend the jump sequence for higher jumps.

## Reflection Questions
- What did you notice about how LCDs handle animation compared to pixel displays?
- How could you improve the illusion of motion?
