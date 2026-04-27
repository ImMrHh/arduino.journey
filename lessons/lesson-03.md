---
layout: lesson
title: "Lesson 03 — Multiple LEDs"
lesson_number: 3
description: "Wire multiple LEDs and create sequences and timing patterns with digital output."
---

# Lesson 03 — Multiple LEDs

## Learning Objectives
- Wire three LEDs with resistors on a breadboard
- Use arrays to manage multiple pins
- Create timed LED sequences and patterns

---

## Materials for This Lesson
- Arduino Uno
- Breadboard
- 3x LEDs (different colors if possible)
- 3x 220 ohm resistors
- Jumper wires
- USB cable

---

## Background

Controlling one LED is useful, but most real projects involve multiple outputs. In this lesson you will wire three LEDs and control them in sequence — the basis of everything from traffic lights to status indicators.

When you have multiple pins doing similar things, it helps to use an array. An array is a list of values stored under one name. Instead of writing `pin1 = 3; pin2 = 4; pin3 = 5;` separately, you write `int pins[] = {3, 4, 5};`. You can then use a loop to apply the same action to every element in the array.

The `for` loop is one of the most important structures in programming. It runs a block of code a set number of times. With three LEDs and a `for` loop, you can write the setup and pattern logic once instead of repeating it three times.

---

## Wiring

*(See /images/lesson03-wiring.png)*

Wire each LED the same way as in Lesson 02:
1. LED 1: long leg through 220 ohm resistor to pin 3, short leg to GND.
2. LED 2: long leg through 220 ohm resistor to pin 4, short leg to GND.
3. LED 3: long leg through 220 ohm resistor to pin 5, short leg to GND.
4. All three short legs share the GND rail on the breadboard. Connect the GND rail to one GND pin on the Arduino.

---

## Step-by-Step Build

1. Wire all three LEDs as described.
2. Open a new sketch in Arduino IDE 2.
3. Enter the code below.
4. Upload and observe the sequence.
5. Experiment with the delay values to change the speed.

---

## Code

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

---

## Understanding the Code

`int ledPins[] = {3, 4, 5}` — declares an array of three integers. Index 0 = pin 3, index 1 = pin 4, index 2 = pin 5.

`for (int i = 0; i < NUM_LEDS; i++)` — this loop runs three times: i = 0, then i = 1, then i = 2. It stops when i reaches NUM_LEDS (3).

`ledPins[i]` — accesses the element at position i in the array. When i = 0, this is pin 3; when i = 1, it is pin 4; and so on.

The second and third loops turn all LEDs on together, wait, then turn them all off together. This creates a chase-then-flash pattern.

---

## Challenge

Can you program a traffic light sequence? Try: Red on for 3 seconds, then Green on for 2 seconds, then Yellow on for 1 second, then repeat. You will need to turn off one LED before turning on the next.

---

## Reflection Questions

1. What is an array, and why is it useful when controlling multiple pins?
2. What does `i < NUM_LEDS` mean in the `for` loop condition?
3. How would you add a fourth LED to this sketch with minimal changes?

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| One LED never lights up | Wiring error on that LED | Check polarity and resistor connection for that LED |
| All LEDs off | Wrong pins in array | Compare array values to actual wiring |
| LEDs flicker erratically | Loose breadboard connection | Press components firmly into the breadboard |

---

[Next Lesson: Button Input](../lesson-04/)
