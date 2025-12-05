---
layout: default
title: Week 1 – Intro to Arduino & Blink
---

# 🟢 Week 1: Intro to Arduino & Blink

## 🎯 Objectives
- Understand what Arduino is (a microcontroller) and how it controls inputs/outputs.
- Wire an LED with a current‑limiting resistor safely to a digital pin.
- Upload the Blink sketch and successfully modify timing.
- Use Ohm’s Law to justify resistor choices.

---

## 🧠 Core Concepts
- **Microcontroller basics:** Arduino is a small computer that reads inputs and drives outputs.
- **Digital output:** HIGH ≈ 5 V, LOW ≈ 0 V.
- **Pin modes:** `pinMode(pin, OUTPUT)` sets a pin as output.
- **Program structure:** `setup()` runs once, `loop()` repeats forever.
- **Resistor safety:** Prevents too much current through the LED.

---

## 🧰 Breadboard Overview
Here’s a diagram showing how the breadboard is internally connected:

![Annotated Breadboard Diagram](/images/breadboardinit.png)
- Power rails run along the sides (red = +, blue = –).
- Each row of 5 holes in the middle is connected internally.
- The center gap separates the left and right halves, useful for ICs

---

## 🔌 Materials
- Arduino Uno (or compatible)
- Breadboard
- LED (any color)
- 330 Ω resistor
- Jumper wires
- USB cable + Arduino IDE

---

## 🛠️ Wiring Guide
Pin 8 → resistor → LED anode (long leg)  
LED cathode (short leg) → GND

![Week 1 Wiring Diagram](images/week1-wiring.png)

---

## 💻 Starter Code
```cpp
// Week 1: Blink (Pin 8)
void setup() {
  pinMode(8, OUTPUT); // Set pin 8 as output
}

void loop() {
  digitalWrite(8, HIGH); // LED on
  delay(500);            // Wait 0.5 seconds
  digitalWrite(8, LOW);  // LED off
  delay(500);            // Wait 0.5 seconds
}
```
