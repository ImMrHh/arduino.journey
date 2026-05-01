---
layout: lesson
title: "Lesson 04 — Button Input"
lesson_number: 4
description: "Read digital input from a push button using the internal pull-up resistor."
prev_lesson:
  url: /lessons/lesson-03/
  title: "Lesson 03 — Multiple LEDs"
next_lesson:
  url: /lessons/lesson-05/
  title: "Lesson 05 — Buzzer and Sound"
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
- Wire a push button to an Arduino digital pin
- Use `digitalRead()` to detect button presses
- Understand what a pull-up resistor does
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x push button (momentary)
- 1x LED and 220 ohm resistor (from Lesson 02)
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

So far the Arduino has only been sending signals (output). Now it will also receive signals (input). A push button is one of the simplest input devices — it either connects two points or it doesn't.

When a button is not pressed and the pin is connected to nothing, the pin's value is undefined — it can float between HIGH and LOW randomly. To fix this, you use a pull-up resistor. A pull-up resistor connects the pin to 5 V through a high resistance, so when the button is open, the pin reads HIGH. When you press the button and connect the pin to GND, it reads LOW. This is called "active LOW" logic.

The Arduino Uno has built-in pull-up resistors on every digital pin. You activate them in software with `INPUT_PULLUP` instead of `INPUT`. This means you don't need to add an external resistor for the button.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-04-wiring.png' | relative_url }}"
    alt="Lesson 04 wiring diagram — Button Input"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>Connect one leg of the button to pin 2 on the Arduino.</li>
<li>Connect the other leg of the button to GND on the Arduino.</li>
<li>Wire the LED through a 220 ohm resistor to pin 9, short leg to GND (as in Lesson 02).</li>
<li>Open a new sketch in Arduino IDE 2.</li>
<li>Enter the code below and upload it.</li>
<li>Press the button — the LED should turn on while it is held.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// Button controls LED
// Button on pin 2 (internal pull-up), LED on pin 9

const int BUTTON_PIN = 2;
const int LED_PIN    = 9;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);  // Internal pull-up: HIGH when not pressed
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);  // Read the button

  if (buttonState == LOW) {
    // Button is pressed (active LOW)
    digitalWrite(LED_PIN, HIGH);  // Turn LED on
  } else {
    // Button is not pressed
    digitalWrite(LED_PIN, LOW);   // Turn LED off
  }
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
      <td class="def-term">pinMode(BUTTON_PIN, INPUT_PULLUP)</td>
      <td class="def-body">Configures pin 2 as an input and activates the internal pull-up resistor. The pin reads HIGH when the button is open.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">digitalRead(BUTTON_PIN)</td>
      <td class="def-body">Reads the current state of pin 2. Returns either HIGH (1) or LOW (0).</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">if (buttonState == LOW)</td>
      <td class="def-body">Because of the pull-up, the button reads LOW when pressed. This turns the LED on when the button is down.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">else</td>
      <td class="def-body">Runs when the button is not pressed. Turns the LED off.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you make the button toggle the LED instead of holding it? The LED should turn on with the first press and stay on, then turn off on the second press. You will need to track the LED state in a variable and detect when the button first goes from HIGH to LOW.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. Why does a floating pin give unreliable readings without a pull-up resistor?
2. Why is button input described as "active LOW" when using INPUT_PULLUP?
3. What is the difference between `INPUT` and `INPUT_PULLUP`?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| LED stays on all the time | Button legs bridging incorrectly on breadboard | Check which pairs of legs on the button are connected |
| LED never turns on | Button not reaching GND | Check GND jumper wire connection |
| Erratic LED behavior | Floating pin | Confirm INPUT_PULLUP is used in the sketch |
{: .trouble-table}
</div>
