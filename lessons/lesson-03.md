---
layout: lesson
title: "Lesson 03 — Multiple LEDs"
lesson_number: 3
description: "Wire multiple LEDs and create sequences and timing patterns with digital output."
prev_lesson:
  url: /lessons/lesson-02/
  title: "Lesson 02 — Blink"
next_lesson:
  url: /lessons/lesson-04/
  title: "Lesson 04 — Button Input"
toc:
  - label: "Objectives"
    anchor: "#objectives"
  - label: "Materials"
    anchor: "#materials"
  - label: "Background"
    anchor: "#background"
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
- Wire three LEDs with resistors on a breadboard
- Use arrays to manage multiple pins
- Create timed LED sequences and patterns
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 3x LEDs (different colors if possible)
- 3x 220 ohm resistors
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

Controlling one LED is useful, but most real projects involve multiple outputs. In this lesson you will wire three LEDs and control them in sequence — the basis of everything from traffic lights to status indicators.

When you have multiple pins doing similar things, it helps to use an array. An array is a list of values stored under one name. Instead of writing `pin1 = 3; pin2 = 4; pin3 = 5;` separately, you write `int pins[] = {3, 4, 5};`. You can then use a loop to apply the same action to every element in the array.

The `for` loop is one of the most important structures in programming. It runs a block of code a set number of times. With three LEDs and a `for` loop, you can write the setup and pattern logic once instead of repeating it three times.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-03-wiring.png' | relative_url }}"
    alt="Lesson 03 wiring diagram — Multiple LEDs"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>Wire LED 1: long leg through 220 ohm resistor to pin 3, short leg to GND.</li>
<li>Wire LED 2: long leg through 220 ohm resistor to pin 4, short leg to GND.</li>
<li>Wire LED 3: long leg through 220 ohm resistor to pin 5, short leg to GND.</li>
<li>Connect all three short legs to the GND rail on the breadboard, then run one wire from the GND rail to a GND pin on the Arduino.</li>
<li>Open a new sketch in Arduino IDE 2.</li>
<li>Enter the code below.</li>
<li>Upload and observe the sequence.</li>
<li>Experiment with the delay values to change the speed.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// Multiple LED sequence
// Three LEDs on pins 3, 4, 5

const int NUM_LEDS = 3;
int ledPins[] = {3, 4, 5};  // Array of pin numbers

void setup() {
  // Set all LED pins as output using a loop
  for (int i = 0; i < NUM_LEDS; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Turn each LED on in sequence, then off
  for (int i = 0; i < NUM_LEDS; i++) {
    digitalWrite(ledPins[i], HIGH);  // Turn LED on
    delay(300);                      // Wait 300 ms
    digitalWrite(ledPins[i], LOW);   // Turn LED off
  }

  // All on together briefly
  for (int i = 0; i < NUM_LEDS; i++) {
    digitalWrite(ledPins[i], HIGH);
  }
  delay(500);

  // All off together
  for (int i = 0; i < NUM_LEDS; i++) {
    digitalWrite(ledPins[i], LOW);
  }
  delay(500);
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
      <td class="def-term">int ledPins[] = {3, 4, 5}</td>
      <td class="def-body">Declares an array of three integers. Index 0 = pin 3, index 1 = pin 4, index 2 = pin 5.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">for (int i = 0; i &lt; NUM_LEDS; i++)</td>
      <td class="def-body">Runs three times: i = 0, then 1, then 2. Stops when i reaches NUM_LEDS (3).</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">ledPins[i]</td>
      <td class="def-body">Accesses the element at position i in the array. When i = 0 this is pin 3; when i = 1 it is pin 4; and so on.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">All-on / all-off loops</td>
      <td class="def-body">The second and third loops turn all LEDs on together, wait, then turn them all off — creating a chase-then-flash pattern.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you make a Knight Rider scanner? The LEDs should light up one at a time from left to right, then bounce back from right to left — continuously. Try modifying the <code>for</code> loop to run forwards and then backwards through the <code>ledPins</code> array.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. What is an array, and why is it useful when controlling multiple pins?
2. What does `i < NUM_LEDS` mean in the `for` loop condition?
3. How would you add a fourth LED to this sketch with minimal changes?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| One LED never lights up | Wiring error on that LED | Check polarity and resistor connection for that LED |
| All LEDs off | Wrong pins in array | Compare array values to actual wiring |
| LEDs flicker erratically | Loose breadboard connection | Press components firmly into the breadboard |
{: .trouble-table}
</div>
