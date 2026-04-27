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
---

<div class="section-label">Learning Objectives</div>
## Learning Objectives
<div class="objectives-box" markdown="1">
- Wire a potentiometer to an analog input pin
- Use `analogRead()` to read a range of values
- Use `analogWrite()` to control LED brightness with PWM
</div>

<div class="section-label">Materials</div>
## Materials for This Lesson
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x potentiometer (any value, 10k ohm recommended)
- 1x LED and 220 ohm resistor
- Jumper wires
- USB cable
</div>

<div class="section-label">Background</div>
## Background

So far, all inputs have been digital — HIGH or LOW, pressed or not pressed. Analog inputs can have any value in a range. A potentiometer is a variable resistor with three legs: two ends and a wiper in the middle. As you turn the knob, the wiper moves, changing the resistance and the voltage at the middle leg.

The Arduino Uno has a 10-bit analog-to-digital converter (ADC). It reads voltages from 0 V to 5 V and converts them to integers from 0 to 1023. `analogRead(A0)` returns a value between 0 and 1023.

PWM (Pulse Width Modulation) lets a digital pin simulate an analog output. The pin switches on and off very fast — too fast to see. The ratio of on-time to total time is the duty cycle. `analogWrite(pin, value)` accepts values from 0 (always off) to 255 (always on). To use PWM, the pin must be one of the PWM-capable pins on the Uno: 3, 5, 6, 9, 10, or 11 (marked with ~ on the board).

<div class="section-label">Wiring</div>
## Wiring

*(See /images/lesson06-wiring.png)*

Potentiometer:
1. Left leg to 5V.
2. Right leg to GND.
3. Middle leg (wiper) to A0.

LED:
1. Long leg through 220 ohm resistor to pin 9.
2. Short leg to GND.

<div class="section-label">Step-by-Step Build</div>
## Step-by-Step Build

1. Wire the potentiometer and LED as described.
2. Open a new sketch in Arduino IDE 2.
3. Enter the code below and upload.
4. Open Serial Monitor (Tools > Serial Monitor, 9600 baud).
5. Turn the potentiometer knob and observe the LED brightness change.

<div class="section-label">Code</div>
## Code

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
  int brightness = map(potValue, 0, 1023, 0, 255);  // Remap to 0–255

  analogWrite(LED_PIN, brightness);            // Set LED brightness

  Serial.print("Pot: ");
  Serial.print(potValue);
  Serial.print("  Brightness: ");
  Serial.println(brightness);

  delay(50);  // Small delay to avoid flooding Serial Monitor
}
```

<div class="section-label">Understanding the Code</div>
## Understanding the Code

`analogRead(POT_PIN)` — reads the analog voltage on pin A0 and returns a value from 0 to 1023.

`map(potValue, 0, 1023, 0, 255)` — remaps a value from one range to another. Here it converts 0–1023 to 0–255 so it matches the range `analogWrite()` expects.

`analogWrite(LED_PIN, brightness)` — sends a PWM signal on pin 9. A value of 0 = fully off, 255 = fully on, 128 = about half brightness.

`Serial.begin(9600)` — opens the serial connection at 9600 bits per second so you can see data in the Serial Monitor.

`Serial.print()` and `Serial.println()` — print text and numbers to the Serial Monitor. `println` adds a new line at the end.

<div class="section-label">Challenge</div>
<div class="challenge-box" markdown="1">
<div class="challenge-label">Try This</div>
Can you use the potentiometer to control the speed of a blinking LED instead of its brightness? When the pot is turned all the way up, the LED should blink fast; all the way down, it should blink slowly.
</div>

<div class="section-label">Reflection Questions</div>
## Reflection Questions

1. What range of values does `analogRead()` return, and why?
2. What is PWM, and why can a digital pin simulate analog output using it?
3. What does the `map()` function do, and why is it needed here?
{: .reflection-list}

<div class="section-label">Troubleshooting</div>
## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| analogRead always returns 0 | Pot wired incorrectly | Check that 5V and GND are on the outer legs, wiper on A0 |
| LED brightness doesn't change | LED not on a PWM pin | Move LED to pin 9, 10, or 11 |
| Serial Monitor shows garbage | Wrong baud rate | Make sure Serial Monitor is set to 9600 baud |
| Pot reading jumps erratically | Poor contact on breadboard | Reseat potentiometer legs firmly |
{: .trouble-table}
