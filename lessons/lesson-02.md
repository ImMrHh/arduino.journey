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
---


## Learning Objectives
<div class="objectives-box" markdown="1">
- Wire an LED and resistor on a breadboard
- Understand why resistors protect LEDs
- Control an external LED using digital output
</div>


## Materials for This Lesson
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x LED (any color)
- 1x 220 ohm resistor (red-red-brown or similar)
- 2x jumper wires (male-to-male)
- USB cable
</div>


## Background

In the previous lesson you blinked the LED that is built into the Arduino board. Now you will connect your own external LED to a breadboard.

An LED (Light Emitting Diode) is a component that produces light when current flows through it in one direction. Diodes only work in one direction — if you wire it backwards, it will not light up (and in some cases could be damaged).

LEDs must always be used with a resistor. Without a resistor, too much current flows through the LED and it burns out quickly or immediately. A 220 ohm resistor is a safe choice for a red or green LED powered by the Arduino's 5 V pin. Use the LED Resistor Calculator in the Tools section if you want to calculate the exact value for a different LED.

A breadboard lets you make temporary connections without soldering. The rows of holes are connected horizontally in the middle section. The long rails on the sides (marked + and -) run vertically and are used for power and ground.


## Wiring

*(See /images/lesson02-wiring.png)*

1. Insert the LED into the breadboard. The longer leg (anode, +) goes into one row; the shorter leg (cathode, -) into an adjacent row.
2. Connect one leg of the 220 ohm resistor to the same row as the long leg of the LED.
3. Connect the other leg of the resistor to pin 9 on the Arduino using a jumper wire.
4. Connect the short leg of the LED to a GND pin on the Arduino using a jumper wire.


## Step-by-Step Build

1. Wire the circuit as described above.
2. Open Arduino IDE 2 and start a new sketch (File > New).
3. Delete any existing code and type in the code below.
4. Select Board: Arduino Uno and the correct Port.
5. Click Upload.
6. The LED on your breadboard should blink.


## Code

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


## Understanding the Code

`const int LED_PIN = 9` — creates a named constant to store the pin number. Using a name instead of the number 9 directly makes the code easier to read and easier to change later.

`pinMode(LED_PIN, OUTPUT)` — configures pin 9 to send signals.

`digitalWrite(LED_PIN, HIGH)` — sends 5 V to pin 9, pushing current through the resistor and then through the LED, lighting it up.

`delay(500)` — pauses for 500 ms (half a second).

`digitalWrite(LED_PIN, LOW)` — sets pin 9 to 0 V, stopping current flow and turning the LED off.

<div class="challenge-box" markdown="1">
<div class="challenge-label">Try This</div>
Can you make the LED blink a pattern — for example, three short blinks and then a long one? Adjust the delay values and add more `digitalWrite` and `delay` lines to create your pattern.
</div>


## Reflection Questions

1. Why does an LED need a resistor in series with it?
2. What is the difference between the long leg and the short leg of an LED?
3. If you wanted the LED to blink three times per second, what delay value would you use?
{: .reflection-list}


## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| LED does not light up | LED wired backwards | Flip the LED in the breadboard |
| LED lights but does not blink | Code not uploaded | Click Upload in the IDE |
| Upload error | Wrong port | Go to Tools > Port and select the correct one |
| LED very dim | Resistor too high in value | Check resistor color bands or swap to 220 ohm |
{: .trouble-table}
