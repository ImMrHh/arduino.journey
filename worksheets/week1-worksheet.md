# Week 1 Worksheet – Intro to Arduino & Blink

## 🎯 Objectives
- Understand what Arduino is and how it controls inputs/outputs.
- Wire an LED with a current‑limiting resistor safely to a digital pin.
- Upload the Blink sketch and successfully modify timing.
- Use Ohm’s Law to justify resistor choices.

---

## 🧠 Core Concepts
- **Digital output:** HIGH ≈ 5 V, LOW ≈ 0 V
- **Pin modes:** `pinMode(pin, OUTPUT)`
- **Program structure:** `setup()` runs once, `loop()` repeats forever
- **Resistor safety:** Prevents too much current through the LED

---

## 🔌 Wiring Guide
- Pin 8 → resistor → LED anode (long leg)  
- LED cathode (short leg) → GND

*(Refer to the wiring diagram provided in class.)*

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
