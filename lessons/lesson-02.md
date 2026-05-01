---
layout: lesson
title: "Lesson 02 — Blink"
lesson_number: 2
description: "Control an external LED with a resistor on a breadboard — digital output, Ohm's law basics."
prev_lesson:
  url: /lessons/lesson-01/
  title: "Lesson 01 — What is Arduino?"
next_lesson:
  url: /lessons/lesson-03/
  title: "Lesson 03 — Multiple LEDs"
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
- Wire an LED and resistor on a breadboard
- Understand why resistors protect LEDs
- Control an external LED using digital output
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x LED (any color)
- 1x 220 ohm resistor (red-red-brown or similar)
- 2x jumper wires (male-to-male)
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

In the previous lesson you blinked the LED that is built into the Arduino board. Now you will connect your own external LED to a breadboard.

An LED (Light Emitting Diode) is a component that produces light when current flows through it in one direction. Diodes only work in one direction — if you wire it backwards, it will not light up (and in some cases could be damaged).

LEDs must always be used with a resistor. Without a resistor, too much current flows through the LED and it burns out quickly or immediately. A 220 ohm resistor is a safe choice for a red or green LED powered by the Arduino's 5 V pin. Use the LED Resistor Calculator in the Tools section if you want to calculate the exact value for a different LED.

A breadboard lets you make temporary connections without soldering. The rows of holes are connected horizontally in the middle section. The long rails on the sides (marked + and -) run vertically and are used for power and ground.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-02-wiring.png' | relative_url }}"
    alt="Lesson 02 wiring diagram — Blink"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>Insert the LED into the breadboard. The longer leg (anode, +) goes into one row; the shorter leg (cathode, -) into an adjacent row.</li>
<li>Connect one leg of the 220 ohm resistor to the same row as the long leg of the LED.</li>
<li>Connect the other leg of the resistor to pin 9 on the Arduino using a jumper wire.</li>
<li>Connect the short leg of the LED to a GND pin on the Arduino using a jumper wire.</li>
<li>Open Arduino IDE 2 and start a new sketch (<strong>File &gt; New</strong>).</li>
<li>Delete any existing code and type in the code below.</li>
<li>Select <strong>Board: Arduino Uno</strong> and the correct <strong>Port</strong>.</li>
<li>Click <strong>Upload</strong>.</li>
<li>The LED on your breadboard should blink.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// External LED Blink
// LED connected to pin 9 through a 220 ohm resistor

const int LED_PIN = 9;  // Give the pin a name

void setup() {
  pinMode(LED_PIN, OUTPUT);  // Set pin 9 as output
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // LED on
  delay(500);                   // Wait 0.5 seconds
  digitalWrite(LED_PIN, LOW);   // LED off
  delay(500);                   // Wait 0.5 seconds
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
      <td class="def-term">const int LED_PIN = 9</td>
      <td class="def-body">Creates a named constant for the pin number. Using a name instead of 9 directly makes the code easier to read and easier to change later.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">pinMode(LED_PIN, OUTPUT)</td>
      <td class="def-body">Configures pin 9 to send signals.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">digitalWrite(LED_PIN, HIGH)</td>
      <td class="def-body">Sends 5V to pin 9, pushing current through the resistor and LED, lighting it up.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">delay(500)</td>
      <td class="def-body">Pauses for 500 ms (half a second).</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">digitalWrite(LED_PIN, LOW)</td>
      <td class="def-body">Sets pin 9 to 0V, stopping current flow and turning the LED off.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you make the LED blink a pattern — for example, three short blinks and then a long one? Adjust the delay values and add more <code>digitalWrite</code> and <code>delay</code> lines to create your pattern.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. Why does an LED need a resistor in series with it?
2. What is the difference between the long leg and the short leg of an LED?
3. If you wanted the LED to blink three times per second, what delay value would you use?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| LED does not light up | LED wired backwards | Flip the LED in the breadboard |
| LED lights but does not blink | Code not uploaded | Click Upload in the IDE |
| Upload error | Wrong port | Go to Tools > Port and select the correct one |
| LED very dim | Resistor too high in value | Check resistor color bands or swap to 220 ohm |
{: .trouble-table}
</div>
