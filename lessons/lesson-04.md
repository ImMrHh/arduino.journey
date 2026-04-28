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
---


## Learning Objectives
<div class="objectives-box" markdown="1">
- Wire a push button to an Arduino digital pin
- Use `digitalRead()` to detect button presses
- Understand what a pull-up resistor does
</div>


## Materials for This Lesson
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x push button (momentary)
- 1x LED and 220 ohm resistor (from Lesson 02)
- Jumper wires
- USB cable
</div>


## Background

So far the Arduino has only been sending signals (output). Now it will also receive signals (input). A push button is one of the simplest input devices — it either connects two points or it doesn't.

When a button is not pressed and the pin is connected to nothing, the pin's value is undefined — it can float between HIGH and LOW randomly. To fix this, you use a pull-up resistor. A pull-up resistor connects the pin to 5 V through a high resistance, so when the button is open, the pin reads HIGH. When you press the button and connect the pin to GND, it reads LOW. This is called "active LOW" logic.

The Arduino Uno has built-in pull-up resistors on every digital pin. You activate them in software with `INPUT_PULLUP` instead of `INPUT`. This means you don't need to add an external resistor for the button.


## Wiring

*(See /images/lesson04-wiring.png)*

1. Connect one leg of the button to pin 2 on the Arduino.
2. Connect the other leg of the button to GND on the Arduino.
3. Wire the LED through a 220 ohm resistor to pin 9, short leg to GND (as in Lesson 02).


## Step-by-Step Build

1. Wire the button and LED as described.
2. Open a new sketch in Arduino IDE 2.
3. Enter the code below and upload it.
4. Press the button — the LED should turn on while it is held.


## Code

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


## Understanding the Code

`pinMode(BUTTON_PIN, INPUT_PULLUP)` — configures pin 2 as an input and activates the internal pull-up resistor. The pin reads HIGH when the button is open.

`digitalRead(BUTTON_PIN)` — reads the current state of pin 2. Returns either HIGH (1) or LOW (0).

`if (buttonState == LOW)` — because of the pull-up, the button reads LOW when pressed. This if-statement turns the LED on when the button is down.

`else` — runs when the button is not pressed. Turns the LED off.

<div class="challenge-box" markdown="1">
<div class="challenge-label">Try This</div>
Can you make the button toggle the LED instead of holding it? The LED should turn on the first press and stay on, then turn off on the second press. You will need to track the LED state in a variable and detect when the button first goes from HIGH to LOW.
</div>


## Reflection Questions

1. Why does a floating pin give unreliable readings without a pull-up resistor?
2. Why is button input described as "active LOW" when using INPUT_PULLUP?
3. What is the difference between `INPUT` and `INPUT_PULLUP`?
{: .reflection-list}


## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| LED stays on all the time | Button legs bridging incorrectly on breadboard | Check which pairs of legs on the button are connected |
| LED never turns on | Button not reaching GND | Check GND jumper wire connection |
| Erratic LED behavior | Floating pin | Confirm INPUT_PULLUP is used in the sketch |
{: .trouble-table}
