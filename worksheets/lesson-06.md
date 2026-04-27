---
layout: default
title: "Worksheet 06 — Analog Input"
---

<div class="print-page">

# Worksheet 06 — Analog Input

<div class="ws-header-fields">
<div><label>Name</label><div class="ws-field"></div></div>
<div><label>Date</label><div class="ws-field"></div></div>
<div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Potentiometer | |
| analogRead() | |
| PWM | |
| analogWrite() | |
| map() | |

---

## Circuit Diagram Space

Draw the potentiometer (outer legs to 5V and GND, middle leg to A0) and LED (pin 9 through resistor to GND).

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to control LED brightness with a potentiometer:

```cpp
const int POT_PIN = ___;
const int LED_PIN = 9;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(___);
}

void loop() {
  int potValue = ___(POT_PIN);
  int brightness = map(potValue, 0, ___, 0, ___);
  analogWrite(LED_PIN, ___);
  delay(50);
}
```

---

## Reflection

1. What range of values does analogRead() return, and why?

<div class="ws-box"></div>

2. What is PWM, and why can a digital pin simulate analog output using it?

<div class="ws-box"></div>

3. What does the map() function do, and why is it needed here?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire a potentiometer correctly (3 legs: VCC, GND, wiper)
- [ ] I know that analogRead() returns 0 to 1023
- [ ] I understand what PWM is
- [ ] I can use map() to convert between ranges
- [ ] I can read values in Serial Monitor

</div>
