---
title: "Week 2: Button Control"
layout: default
---

# Week 2: Button Control

In this lesson, we’ll learn how to use a pushbutton as a digital input to control an LED.

---

## 🧰 Components
- Arduino board
- Breadboard
- LED
- 220Ω resistor
- Pushbutton
- Jumper wires

---

## ⚡ Circuit Setup
- Connect one side of the button to **pin 2** on the Arduino.
- Connect the other side of the button to **GND**.
- Connect the LED to **pin 8** with a resistor to **GND**.
- Use Arduino’s **internal pull-up resistor** to simplify wiring.

![Week 2 Wiring Diagram](../images/week2-wiring.png)

---

## 💻 Example Code

```cpp
// Week 2: Button Control
const int buttonPin = 2;
const int ledPin = 8;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP); // internal pull-up resistor
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) { // button pressed
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```