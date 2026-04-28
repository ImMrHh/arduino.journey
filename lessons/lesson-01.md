---
layout: lesson
title: "Lesson 01 — What is Arduino?"
lesson_number: 1
description: "Introduction to the Arduino Uno board, the Arduino IDE 2, and uploading your first sketch."
next_lesson:
  url: /lessons/lesson-02/
  title: "Lesson 02 — Blink"
---


## Learning Objectives
<div class="objectives-box" markdown="1">
- Identify the main parts of the Arduino Uno board
- Install and navigate Arduino IDE 2
- Upload the Blink example sketch and confirm it runs
</div>


## Materials for This Lesson
<div class="materials-card" markdown="1">
- Arduino Uno board
- USB-A to USB-B cable
- Computer with Arduino IDE 2 installed
</div>


## Background

Arduino is an open-source electronics platform made up of two things: a small circuit board (the microcontroller) and software (the IDE) that lets you write programs for it. The Arduino Uno is the most common board and the one we use throughout this course.

The board has several important parts. The digital pins (0–13) can read or send on/off signals. The analog pins (A0–A5) can read a range of values, like from a sensor. The USB port connects to your computer for programming. The power jack or USB connection provides electricity to the board.

Arduino programs are called sketches. Every sketch has two main functions: `setup()` runs once when the board powers on, and `loop()` runs over and over as long as the board has power. You write your code inside these two functions.

When you click Upload in the IDE, your code is compiled (converted to machine language) and sent to the Arduino over the USB cable. Once uploaded, the program stays on the board even when you unplug the USB — it runs from the board's own memory.


## Wiring

*(No external wiring needed for this lesson — the LED on pin 13 is built into the board.)*

1. Connect the Arduino Uno to your computer using the USB cable.
2. Confirm the green power LED on the board lights up.


## Step-by-Step Build

1. Open Arduino IDE 2.
2. Go to **File > Examples > 01.Basics > Blink**.
3. Look at the code. Find `setup()` and `loop()`.
4. In the IDE toolbar, select **Board: Arduino Uno**.
5. Select the correct **Port** (usually the only one listed when the board is connected).
6. Click the **Upload** button (right-arrow icon).
7. Wait for "Done uploading" in the status bar.
8. Observe the orange LED labeled L on the board — it should blink once per second.


## Code

```cpp
// Blink — the Hello World of Arduino
// Built-in LED is on pin 13

void setup() {
  // Set pin 13 as an output so we can control it
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);  // Turn the LED on
  delay(1000);             // Wait 1 second (1000 ms)
  digitalWrite(13, LOW);   // Turn the LED off
  delay(1000);             // Wait 1 second
}
```


## Understanding the Code

`pinMode(13, OUTPUT)` — tells the Arduino that pin 13 will be used as an output. Without this, the pin doesn't know whether to send or receive signals.

`digitalWrite(13, HIGH)` — sends 5 V to pin 13, which turns the LED on. HIGH means "on" or "full voltage".

`delay(1000)` — pauses the program for 1000 milliseconds (1 second). During a delay, the Arduino does nothing else.

`digitalWrite(13, LOW)` — removes the voltage from pin 13, turning the LED off.

The whole `loop()` function repeats forever: on for 1 second, off for 1 second.

<div class="challenge-box" markdown="1">
<div class="challenge-label">Try This</div>
Can you make the LED blink twice as fast? Try changing the delay values. What happens if you use `delay(100)` instead of `delay(1000)`?
</div>


## Reflection Questions

1. What is the difference between `setup()` and `loop()` in an Arduino sketch?
2. What does `HIGH` mean when used with `digitalWrite()`?
3. If you change the delay to 500, how many times will the LED blink in 10 seconds?
{: .reflection-list}


## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| "Port not found" in IDE | Driver not installed or cable is charge-only | Install CH340 driver; try a different USB cable |
| "Board not detected" | Wrong board selected | Go to Tools > Board and select Arduino Uno |
| Upload fails with error | Wrong port selected | Go to Tools > Port and select the Arduino port |
| LED does not blink after upload | Code has a typo | Double-check the code matches exactly; look at error messages in the console |
{: .trouble-table}
