---
layout: lesson
title: "Lesson 08 — Mini Challenge"
lesson_number: 8
description: "Apply everything learned so far — build a reaction timer or traffic light as a team project."
prev_lesson:
  url: /lessons/lesson-07/
  title: "Lesson 07 — Sensors"
next_lesson:
  url: /lessons/lesson-09/
  title: "Lesson 09 — DFPlayer Mini Setup"
toc:
  - label: "Objectives"
    anchor: "#objectives"
  - label: "Materials"
    anchor: "#materials"
  - label: "Background"
    anchor: "#background"
  - label: "Build"
    anchor: "#build"
  - label: "Code — Option A"
    anchor: "#code"
  - label: "Code — Option B"
    anchor: "#code-b"
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
- Apply digital input, output, and timing in a complete small project
- Work as a team to plan, build, and test a circuit
- Debug a real project from scratch
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 3x LEDs (red, yellow/orange, green recommended for traffic light)
- 3x 220 ohm resistors
- 1x push button
- 1x passive buzzer
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

This lesson is a design challenge. Your group will choose one of two projects and build it using the skills from Lessons 1–7. There is no single correct answer — your group decides the wiring and the code structure.

<strong>Option A — Reaction Timer:</strong> One LED turns on at a random time. The player must press a button as fast as possible. The Arduino measures the time between the LED turning on and the button press, and displays the result in milliseconds in the Serial Monitor.

<strong>Option B — Traffic Light Sequence:</strong> Wire three LEDs (red, yellow, green) and program them to run through a realistic traffic light sequence: Red — Red+Yellow — Green — Yellow — Red. Each phase lasts a different amount of time. Bonus: add a button that requests a pedestrian crossing.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-08-wiring.png' | relative_url }}"
    alt="Lesson 08 wiring diagram — Mini Challenge"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>As a group, choose Option A or Option B.</li>
<li>Sketch the wiring on paper before touching any components.</li>
<li>Wire the circuit on the breadboard.</li>
<li>Open Arduino IDE 2 and start a new sketch.</li>
<li>Write your code — start with <code>setup()</code> and <code>loop()</code> only, then build up.</li>
<li>Test one part at a time: get the LEDs working before adding the button.</li>
<li>Upload and debug until it works.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code &mdash; Option A</span>

## Code — Option A: Reaction Timer
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// Reaction Timer
// LED on pin 9, button on pin 2

const int LED_PIN    = 9;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(9600);
  randomSeed(analogRead(A0));  // Seed random with floating pin noise
}

void loop() {
  Serial.println("Get ready...");
  digitalWrite(LED_PIN, LOW);

  // Random delay before LED turns on: 2 to 5 seconds
  long waitTime = random(2000, 5000);
  delay(waitTime);

  // Turn on LED and record the time
  digitalWrite(LED_PIN, HIGH);
  long startTime = millis();

  // Wait for button press
  while (digitalRead(BUTTON_PIN) == HIGH) {
    // Do nothing — just wait
  }

  long reactionTime = millis() - startTime;
  digitalWrite(LED_PIN, LOW);

  Serial.print("Reaction time: ");
  Serial.print(reactionTime);
  Serial.println(" ms");

  delay(2000);  // Pause before next round
}
```
</div>


<div class="lesson-section">
<span class="section-kicker">Code &mdash; Option B</span>

## Code — Option B: Traffic Light
{: #code-b}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// Traffic Light Sequence
// Red = pin 3, Yellow = pin 4, Green = pin 5

const int RED    = 3;
const int YELLOW = 4;
const int GREEN  = 5;

void allOff() {
  digitalWrite(RED, LOW);
  digitalWrite(YELLOW, LOW);
  digitalWrite(GREEN, LOW);
}

void setup() {
  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
  allOff();
}

void loop() {
  // Red phase
  allOff();
  digitalWrite(RED, HIGH);
  delay(3000);

  // Red + Yellow (prepare to go)
  digitalWrite(YELLOW, HIGH);
  delay(1000);

  // Green phase
  allOff();
  digitalWrite(GREEN, HIGH);
  delay(3000);

  // Yellow (prepare to stop)
  allOff();
  digitalWrite(YELLOW, HIGH);
  delay(1000);
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
      <td class="def-term">randomSeed(analogRead(A0))</td>
      <td class="def-body">Seeds the random number generator with electrical noise from an unconnected analog pin, so timing is different each run.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">random(2000, 5000)</td>
      <td class="def-body">Returns a random long integer between 2000 and 4999 milliseconds.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">millis()</td>
      <td class="def-body">Returns the number of milliseconds since the Arduino was powered on. This is how you measure elapsed time.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">while (digitalRead(BUTTON_PIN) == HIGH)</td>
      <td class="def-body">An empty loop that keeps running until the button is pressed.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">allOff()</td>
      <td class="def-body">A helper function that turns all three LEDs off at once, making the main code cleaner.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p><strong>Option A:</strong> Can you add a buzzer that plays a short tone when the LED turns on as an audio cue?<br>
<strong>Option B:</strong> Can you add a push button that acts as a pedestrian crossing request? When pressed, the traffic light should complete its current phase and then hold on red for 5 seconds.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. How did your group divide the work for this project?
2. What was the hardest part to get working, and how did you fix it?
3. What would you change if you had more time?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Reaction timer starts immediately | Button pressed during setup | Make sure button is released when sketch starts |
| Traffic light stays on one phase | Delay too long or missing | Check delay values match intended timing |
| millis() readings look wrong | Long integer overflow (very long session) | Restart the board to reset millis() |
{: .trouble-table}
</div>
