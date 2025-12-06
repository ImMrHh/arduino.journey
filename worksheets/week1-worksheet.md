## Week 1 Worksheet – Intro to Arduino & Blink

### 🧩 Interactive Clickable Hotspot Activity

Click on the correct parts of the LED circuit in the wiring diagram below. When you click a hotspot, it will show the component name.

<div style="position: relative; width: 400px; height: 300px; background-image: url('images/week1-wiring.png'); background-size: contain; background-repeat: no-repeat; border: 1px solid #ccc; margin-bottom: 1em;">
  <button onclick="alert('LED Anode (long leg)')" style="position: absolute; top: 40px; left: 290px; width: 140px; height: 30px; opacity: 0; cursor: pointer;" aria-label="LED Anode hotspot"></button>
  <button onclick="alert('LED Cathode (short leg)')" style="position: absolute; top: 120px; left: 290px; width: 140px; height: 30px; opacity: 0; cursor: pointer;" aria-label="LED Cathode hotspot"></button>
  <button onclick="alert('Resistor')" style="position: absolute; top: 80px; left: 160px; width: 140px; height: 30px; opacity: 0; cursor: pointer;" aria-label="Resistor hotspot"></button>
  <button onclick="alert('Digital Pin 8')" style="position: absolute; top: 10px; left: 160px; width: 140px; height: 30px; opacity: 0; cursor: pointer;" aria-label="Digital Pin 8 hotspot"></button>
  <button onclick="alert('Ground (GND)')" style="position: absolute; top: 160px; left: 160px; width: 140px; height: 30px; opacity: 0; cursor: pointer;" aria-label="Ground hotspot"></button>
</div>

*Tip: If a label disappears after clicking, refresh the page to try again.*


---

## 🎯 Objectives

- Understand what Arduino is and how it controls inputs/outputs.
- Wire an LED with a current-limiting resistor safely to a digital pin.
- Upload the Blink sketch and successfully modify timing.
- Use Ohm’s Law to justify resistor choices.

---

## 🔌 Wiring Guide

- Pin 8 → resistor → LED anode (long leg)  
- LED cathode (short leg) → GND
![Blink Wiring Diagram](../images/week1-wiring.png)
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