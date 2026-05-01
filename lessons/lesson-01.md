---
layout: lesson
title: "Lesson 01 — What is Arduino?"
lesson_number: 1
description: "Introduction to the Arduino Uno board, the Arduino IDE 2, and uploading your first sketch."
next_lesson:
  url: /lessons/lesson-02/
  title: "Lesson 02 — Blink"
toc:
  - label: "Objectives"
    anchor: "#objectives"
  - label: "Materials"
    anchor: "#materials"
  - label: "Background"
    anchor: "#background"
  - label: "Meet the Board"
    anchor: "#meet-the-board"
  - label: "Build"
    anchor: "#build"
  - label: "Code"
    anchor: "#code"
  - label: "Understanding"
    anchor: "#understanding"
  - label: "Reflect"
    anchor: "#reflect"
  - label: "Troubleshooting"
    anchor: "#troubleshooting"
---


<div class="lesson-section">
<span class="section-kicker">Objectives</span>

## Learning Objectives
{: #objectives}
<div class="objectives-box" markdown="1">
- Identify the main parts of the Arduino Uno board
- Install and navigate Arduino IDE 2
- Upload the Blink example sketch and confirm it runs
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno board
- USB-A to USB-B cable
- Computer with Arduino IDE 2 installed
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

Arduino is an open-source electronics platform made up of two things: a small circuit board (the microcontroller) and software (the IDE) that lets you write programs for it. The Arduino Uno is the most common board and the one we use throughout this course.

Arduino programs are called sketches. Every sketch has two main functions: `setup()` runs once when the board powers on, and `loop()` runs over and over as long as the board has power. You write your code inside these two functions.

When you click Upload in the IDE, your code is compiled (converted to machine language) and sent to the Arduino over the USB cable. Once uploaded, the program stays on the board even when you unplug the USB — it runs from the board's own memory.
</div>


<div class="lesson-section">
<span class="section-kicker">Meet the Board</span>

## Meet the Board
{: #meet-the-board}

Before writing any code, take a moment to find these parts on your Arduino Uno:

| Part | Location | What it does |
|------|----------|--------------|
| Digital pins 0–13 | Right side | Send or receive on/off signals |
| Analog pins A0–A5 | Left side | Read a range of values (e.g. from a sensor) |
| USB port | Top edge | Connects to your computer for programming and power |
| Power jack | Top edge | Powers the board from a wall adapter |
| Built-in LED (L) | Next to pin 13 | Orange LED wired to pin 13 — we use this in Lesson 01 |
| Reset button | Top edge | Restarts the current sketch |
| 5V and GND pins | Right side | Provide power and ground to external components |
{: .trouble-table}
<div class="wiring-placeholder" style="margin-top: 1.25rem;">
  <img src="{{ '/assets/img/lesson-01-board.png' | relative_url }}" alt="Arduino Uno board — top view" />
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

*No external wiring needed for this lesson — the LED on pin 13 is built into the board.*

<ol class="step-list">
<li>Connect the Arduino Uno to your computer using the USB cable.</li>
<li>Confirm the green power LED on the board lights up.</li>
<li>Open Arduino IDE 2.</li>
<li>Go to <strong>File &gt; Examples &gt; 01.Basics &gt; Blink</strong>.</li>
<li>Look at the code. Find <code>setup()</code> and <code>loop()</code>.</li>
<li>In the IDE toolbar, select <strong>Board: Arduino Uno</strong>.</li>
<li>Select the correct <strong>Port</strong> (usually the only one listed when the board is connected).</li>
<li>Click the <strong>Upload</strong> button (right-arrow icon).</li>
<li>Wait for "Done uploading" in the status bar.</li>
<li>Observe the orange LED labeled L on the board — it should blink once per second.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

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
</div>


<div class="lesson-section">
<span class="section-kicker">Understanding</span>

## Understanding the Code
{: #understanding}

<table class="def-list">
  <tbody>
    <tr class="def-item">
      <td class="def-term">pinMode(13, OUTPUT)</td>
      <td class="def-body">Tells the Arduino that pin 13 will be used as an output. Without this, the pin doesn't know whether to send or receive signals.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">digitalWrite(13, HIGH)</td>
      <td class="def-body">Sends 5V to pin 13, turning the LED on. HIGH means full voltage.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">delay(1000)</td>
      <td class="def-body">Pauses the program for 1000 milliseconds (1 second). During a delay, the Arduino does nothing else.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">digitalWrite(13, LOW)</td>
      <td class="def-body">Removes voltage from pin 13, turning the LED off. The <code>loop()</code> then repeats forever: on, off, on, off.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you make the LED blink twice as fast? Try changing the delay values. What happens if you use <code>delay(100)</code> instead of <code>delay(1000)</code>?</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. What is the difference between `setup()` and `loop()` in an Arduino sketch?
2. What does `HIGH` mean when used with `digitalWrite()`?
3. If you change the delay to 500, how many times will the LED blink in 10 seconds?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| "Port not found" in IDE | Driver not installed or cable is charge-only | Install CH340 driver; try a different USB cable |
| "Board not detected" | Wrong board selected | Go to Tools > Board and select Arduino Uno |
| Upload fails with error | Wrong port selected | Go to Tools > Port and select the Arduino port |
| LED does not blink after upload | Code has a typo | Double-check the code matches exactly; look at error messages in the console |
{: .trouble-table}
</div>
