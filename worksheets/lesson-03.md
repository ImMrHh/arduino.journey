---
layout: default
title: "Worksheet 03 — Multiple LEDs"
---

<div class="print-page">

# Worksheet 03 — Multiple LEDs

<div class="ws-header-fields">
<div><label>Name</label><div class="ws-field"></div></div>
<div><label>Date</label><div class="ws-field"></div></div>
<div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Array | |
| Index | |
| for loop | |
| Sequence | |
| NUM_LEDS | |

---

## Circuit Diagram Space

Draw the circuit for three LEDs on pins 3, 4, and 5, sharing a common GND rail.

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to complete the LED sequence:

```cpp
const int NUM_LEDS = ___;
int ledPins[] = {3, ___, 5};

void setup() {
  for (int i = 0; i < ___; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < NUM_LEDS; ___) {
    digitalWrite(ledPins[i], HIGH);
    delay(300);
    digitalWrite(ledPins[___], LOW);
  }
}
```

---

## Reflection

1. What is an array, and why is it useful when controlling multiple pins?

<div class="ws-box"></div>

2. What does `i < NUM_LEDS` mean in the for loop condition?

<div class="ws-box"></div>

3. How would you add a fourth LED to this sketch with minimal changes?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire three LEDs with resistors on a breadboard
- [ ] I understand what an array is and how to access elements
- [ ] I can trace through a for loop step by step (i=0, i=1, i=2)
- [ ] I can create a chase pattern using a loop
- [ ] I can add a new LED to the array

</div>
