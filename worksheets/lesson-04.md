---
layout: default
title: "Worksheet 04 — Button Input"
---

<div class="print-page">

# Worksheet 04 — Button Input

<div class="ws-header-fields">
  <div><label>Name</label><div class="ws-field"></div></div>
  <div><label>Date</label><div class="ws-field"></div></div>
  <div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Digital input | |
| Pull-up resistor | |
| INPUT_PULLUP | |
| Active LOW | |
| digitalRead() | |

---

## Circuit Diagram Space

Draw the circuit: button from pin 2 to GND, LED through resistor from pin 9 to GND.

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to make a button control an LED:

```cpp
const int BUTTON_PIN = 2;
const int LED_PIN    = 9;

void setup() {
  pinMode(BUTTON_PIN, ___);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  int buttonState = ___(BUTTON_PIN);

  if (buttonState == ___) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, ___);
  }
}
```

---

## Reflection

1. Why does a floating pin give unreliable readings without a pull-up resistor?

<div class="ws-box"></div>

2. Why is button input described as "active LOW" when using INPUT_PULLUP?

<div class="ws-box"></div>

3. What is the difference between INPUT and INPUT_PULLUP?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire a push button to an Arduino pin
- [ ] I understand what INPUT_PULLUP does
- [ ] I understand why the button reads LOW when pressed
- [ ] I can use digitalRead() in an if statement
- [ ] I can explain what "active LOW" means

</div>
