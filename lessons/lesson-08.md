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
---

<div class="section-label">Learning Objectives</div>
## Learning Objectives
<div class="objectives-box" markdown="1">
- Apply digital input, output, and timing in a complete small project
- Work as a team to plan, build, and test a circuit
- Debug a real project from scratch
</div>

<div class="section-label">Materials</div>
## Materials for This Lesson
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

<div class="section-label">Background</div>
## Background

This lesson is a design challenge. Your group will choose one of two projects and build it using the skills from Lessons 1–7. There is no single correct answer — your group decides the wiring and the code structure.

**Option A — Reaction Timer**
One LED turns on at a random time. The player must press a button as fast as possible. The Arduino measures the time between the LED turning on and the button press, and displays the result in milliseconds in the Serial Monitor. A faster time is better.

**Option B — Traffic Light Sequence**
Wire three LEDs (red, yellow, green) and program them to run through a realistic UK traffic light sequence: Red — Red+Yellow — Green — Yellow — Red. Each phase lasts a different amount of time. Bonus: add a button that requests a pedestrian crossing (green holds for extra time).

<div class="section-label">Step-by-Step Build</div>
## Step-by-Step Build

1. As a group, choose Option A or Option B.
2. Sketch the wiring on paper before touching any components.
3. Wire the circuit on the breadboard.
4. Write the code in Arduino IDE 2 — start with `setup()` and `loop()` only.
5. Test one part at a time: get the LEDs working before adding the button.
6. Upload and debug.

<div class="section-label">Code — Option A: Reaction Timer</div>
## Code — Option A: Reaction Timer

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

<div class="section-label">Code — Option B: Traffic Light</div>
## Code — Option B: Traffic Light

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

<div class="section-label">Understanding the Code</div>
## Understanding the Code

**Reaction Timer:**
`randomSeed(analogRead(A0))` — seeds the random number generator with electrical noise from an unconnected analog pin, so the timing is different each run.

`random(2000, 5000)` — returns a random long integer between 2000 and 4999 (milliseconds).

`millis()` — returns the number of milliseconds since the Arduino was powered on. This is how you measure elapsed time.

`while (digitalRead(BUTTON_PIN) == HIGH)` — an empty loop that keeps running until the button is pressed.

**Traffic Light:**
`allOff()` — a helper function that turns all three LEDs off at once, making the main code cleaner.

<div class="section-label">Challenge</div>
<div class="challenge-box" markdown="1">
<div class="challenge-label">Try This</div>
For Option A: Can you add a buzzer that plays a short tone when the LED turns on as an audio cue? Does this make the reaction time faster or slower?

For Option B: Can you add a push button that acts as a pedestrian crossing request? When pressed, the traffic light should complete its current phase and then hold on red for 5 seconds.
</div>

<div class="section-label">Reflection Questions</div>
## Reflection Questions

1. How did your group divide the work for this project?
2. What was the hardest part to get working, and how did you fix it?
3. What would you change if you had more time?
{: .reflection-list}

<div class="section-label">Troubleshooting</div>
## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Reaction timer starts immediately | Button pressed during setup | Make sure button is released when sketch starts |
| Traffic light stays on one phase | Delay too long or missing | Check delay values match intended timing |
| millis() readings look wrong | Long integer overflow (very long session) | Restart the board to reset millis() |
{: .trouble-table}
