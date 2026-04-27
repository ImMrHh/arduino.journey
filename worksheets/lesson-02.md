---
layout: default
title: "Worksheet 02 — Blink"
---

<div class="print-page">

# Worksheet 02 — Blink

<div class="ws-header-fields">
<div><label>Name</label><div class="ws-field"></div></div>
<div><label>Date</label><div class="ws-field"></div></div>
<div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

Match each term to its definition:

| Term | Definition |
|------|-----------|
| LED | |
| Anode | |
| Cathode | |
| Resistor | |
| Digital output | |

---

## Circuit Diagram Space

Draw the circuit for an external LED on pin 9 — include the resistor, LED polarity, and connections to GND.

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to blink an LED on pin 9 every half second:

```cpp
const int LED_PIN = ___;

void setup() {
  pinMode(LED_PIN, ___);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(___);
  digitalWrite(LED_PIN, ___);
  delay(500);
}
```

---

## Reflection

1. Why does an LED need a resistor in series with it?

<div class="ws-box"></div>

2. What is the difference between the long leg and the short leg of an LED?

<div class="ws-box"></div>

3. If you wanted the LED to blink three times per second, what delay value would you use?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire an LED and resistor on a breadboard correctly
- [ ] I understand why the resistor is needed
- [ ] I know which leg of an LED is the anode and which is the cathode
- [ ] I can change the blink speed by modifying the delay value
- [ ] I used a named constant for the pin number

</div>
