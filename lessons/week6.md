---
layout: default
title: Week 6 - Buttons and Passive Buzzer
---

---

## title: "Week 6 Lesson – Buttons & Passive Buzzer" layout: default

# Week 6 Lesson – Buttons & Passive Buzzer

---

## 🎯 Objectives

* Understand how buttons can trigger sound output.
* Learn to use digitalRead() with INPUT_PULLUP to detect button presses.
* Explore tone() and noTone() functions for generating sound.
* Combine input (button) and output (buzzer) for interactive control.

---

## 📖 Lesson Content

### Buttons as Input

* A button provides a digital signal: HIGH (not pressed) or LOW (pressed).
* With INPUT_PULLUP, wiring is simplified (button connects to GND when pressed).

### Passive Buzzer as Output

* A passive buzzer produces sound when given a square wave signal.
* Arduino’s tone() function generates frequencies (pitch), and noTone() stops them.

### Combining Input and Output

* Pressing a button can trigger a buzzer tone.
* Multiple buttons can trigger different pitches, creating a simple “instrument.”

### Real‑World Applications

* Doorbells, alarms, and musical toys all combine buttons with buzzers.
* This demonstrates how user input can control audio feedback.

---

## 🧪 Demonstration

1. Wire Button 1 → D2, Button 2 → D3.
2. Connect buzzer → D9.
3. Upload starter code: Button 1 plays 440 Hz (A4), Button 2 plays 523 Hz (C5).
4. Press buttons to hear different tones.

---

## 🔄 Extensions

* Add more buttons for more notes (like a mini piano).
* Program a short melody triggered by a button press.

---

## 💡 Key Vocabulary

* **Digital input = Entrada digital**
* **HIGH/LOW = Alto/Bajo**
* **Pull‑up resistor = Resistencia pull‑up**
* **Tone = Tono**
* **Frequency = Frecuencia**

---

## 📝 Reflection Prompt

* How does combining input and output make devices more interactive?
* What happens if you press both buttons at once?
* Where do you encounter buzzers controlled by buttons in everyday life?

---

## 🧭 Navigation



\[Back to Lessons\]

({{ "/lessons/" | relative_url }}) 

\[Back to Worksheets\]

({{ "/worksheets/" | relative_url }})
