---
title: "Week 6 Worksheet – Buttons & Passive Buzzer"
layout: default
---

# Week 6 Worksheet – Buttons & Passive Buzzer

---

## 🎯 Objectives

* Understanding: Reinforce button input and buzzer output concepts.
* Programming: Practice digitalRead() and tone() functions.
* Troubleshooting: Identify common wiring and coding issues.
* Extension: Use 4 buttons to create music with a buzzer.

---

## 🔌 Wiring Guide

* Connect 4 buttons to pins D2, D3, D4, and D5 using INPUT_PULLUP.
* Connect the passive buzzer positive pin to D9 and negative pin to GND.

---

## 💻 Starter Code

```cpp
const int buttonPins[] = {2, 3, 4, 5};
const int buzzerPin = 9;
const int notes[] = {262, 294, 330, 349}; // C4, D4, E4, F4

void setup() {
  for (int i = 0; i < 4; i++) {
    pinMode(buttonPins[i], INPUT_PULLUP);
  }
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  bool anyButtonPressed = false;
  for (int i = 0; i < 4; i++) {
    if (digitalRead(buttonPins[i]) == LOW) {
      tone(buzzerPin, notes[i]);
      anyButtonPressed = true;
      break; // Play only one note at a time
    }
  }
  if (!anyButtonPressed) {
    noTone(buzzerPin);
  }
}
```

---

## 🧠 Core Concepts

* Button Input: Buttons connected with INPUT_PULLUP read LOW when pressed.
* tone() Function: Generates a square wave of a specified frequency on a pin.
* noTone() Function: Stops the tone on the pin.

---

## 🥹 Challenge Task

* Extend the starter code to add more buttons and notes.
* Create a simple melody by pressing buttons in sequence.
* Experiment with different note frequencies and durations.

---

## 💡 Key Vocabulary

* digitalRead()
* INPUT_PULLUP
* tone()
* noTone()

---

## 🤔 Reflection Questions

* How does INPUT_PULLUP simplify wiring?
* Why must noTone() be called when no buttons are pressed?
* How can you verify your button wiring is correct?
* What challenges arise when adding more buttons?

---

## 🧭 Navigation

[Back to Lessons]({{ "/lessons/" | relative_url }}) [Back to Worksheets]({{ "/worksheets/" | relative_url }})
