---
layout: lesson
title: "Lesson 06 — Analog Input"
lesson_number: 6
description: "Read a potentiometer with analogRead() and use the value to control LED brightness via PWM."
prev_lesson:
  url: /lessons/lesson-05/
  title: "Lesson 05 — Buzzer and Sound"
next_lesson:
  url: /lessons/lesson-07/
  title: "Lesson 07 — Sensors"
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
- Wire a potentiometer to an analog input pin
- Use `analogRead()` to read a range of values
- Use `analogWrite()` to control LED brightness with PWM
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x potentiometer (any value, 10k ohm recommended)
- 1x LED and 220 ohm resistor
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

So far, all inputs have been digital — HIGH or LOW, pressed or not pressed. Analog inputs can have any value in a range. A potentiometer is a variable resistor with three legs: two ends and a wiper in the middle. As you turn the knob, the wiper moves, changing the resistance and the voltage at the middle leg.

The Arduino Uno has a 10-bit analog-to-digital converter (ADC). It reads voltages from 0 V to 5 V and converts them to integers from 0 to 1023. `analogRead(A0)` returns a value between 0 and 1023.

PWM (Pulse Width Modulation) lets a digital pin simulate an analog output. The pin switches on and off very fast — too fast to see. The ratio of on-time to total time is the duty cycle. `analogWrite(pin, value)` accepts values from 0 (always off) to 255 (always on). To use PWM, the pin must be one of the PWM-capable pins on the Uno: 3, 5, 6, 9, 10, or 11 (marked with ~ on the board).
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-06-wiring.png' | relative_url }}"
    alt="Lesson 06 wiring diagram — Analog Input"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>Left leg of potentiometer to 5V.</li>
<li>Right leg of potentiometer to GND.</li>
<li>Middle leg (wiper) to A0.</li>
<li>Long leg of LED through 220 ohm resistor to pin 9.</li>
<li>Short leg of LED to GND.</li>
<li>Open a new sketch in Arduino IDE 2.</li>
<li>Enter the code below and upload.</li>
<li>Open Serial Monitor: <strong>Tools &gt; Serial Monitor</strong>. Set the baud rate to <strong>9600</strong> and the line ending to <strong>No line ending</strong>.</li>
<li>Turn the potentiometer knob and observe the LED brightness change and values updating in the Serial Monitor.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// Analog input — potentiometer controls LED brightness
// Potentiometer on A0, LED on pin 9 (PWM)

const int POT_PIN = A0;
const int LED_PIN = 9;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);  // Start Serial Monitor at 9600 baud
}

void loop() {
  int potValue = analogRead(POT_PIN);          // 0 to 1023
  int brightness = map(potValue, 0, 1023, 0, 255);  // Remap to 0-255

  analogWrite(LED_PIN, brightness);            // Set LED brightness

  Serial.print("Pot: ");
  Serial.print(potValue);
  Serial.print("  Brightness: ");
  Serial.println(brightness);

  delay(50);  // Small delay to avoid flooding Serial Monitor
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
      <td class="def-term">analogRead(POT_PIN)</td>
      <td class="def-body">Reads the analog voltage on pin A0 and returns a value from 0 to 1023.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">map(potValue, 0, 1023, 0, 255)</td>
      <td class="def-body">Remaps a value from one range to another. Here it converts 0–1023 to 0–255 so it matches the range <code>analogWrite()</code> expects.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">analogWrite(LED_PIN, brightness)</td>
      <td class="def-body">Sends a PWM signal on pin 9. A value of 0 = fully off, 255 = fully on, 128 = about half brightness.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">Serial.begin(9600)</td>
      <td class="def-body">Opens the serial connection at 9600 bits per second so you can see data in the Serial Monitor.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">Serial.print() / Serial.println()</td>
      <td class="def-body">Print text and numbers to the Serial Monitor. <code>println</code> adds a new line at the end.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you use the potentiometer to control the speed of a blinking LED instead of its brightness? When the pot is turned all the way up, the LED should blink fast; all the way down, it should blink slowly.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. What range of values does `analogRead()` return, and why?
2. What is PWM, and why can a digital pin simulate analog output using it?
3. What does the `map()` function do, and why is it needed here?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| analogRead always returns 0 | Pot wired incorrectly | Check that 5V and GND are on the outer legs, wiper on A0 |
| LED brightness doesn't change | LED not on a PWM pin | Move LED to pin 9, 10, or 11 |
| Serial Monitor shows garbage | Wrong baud rate | Make sure Serial Monitor is set to 9600 baud |
| Pot reading jumps erratically | Poor contact on breadboard | Reseat potentiometer legs firmly |
{: .trouble-table}
</div>
