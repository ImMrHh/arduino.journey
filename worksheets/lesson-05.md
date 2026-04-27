---
layout: default
title: "Worksheet 05 — Buzzer and Sound"
---

<div class="print-page">

# Worksheet 05 — Buzzer and Sound

<div class="ws-header-fields">
<div><label>Name</label><div class="ws-field"></div></div>
<div><label>Date</label><div class="ws-field"></div></div>
<div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Passive buzzer | |
| Frequency | |
| tone() | |
| noTone() | |
| Hz | |

---

## Circuit Diagram Space

Draw the circuit: passive buzzer from pin 8 to GND, button from pin 2 to GND.

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to play a tone at 440 Hz for 500 ms when the button is pressed:

```cpp
const int BUZZER_PIN = ___;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    ___(BUZZER_PIN, ___, 500);
    delay(600);
  }
  ___(BUZZER_PIN);
}
```

---

## Reflection

1. What is the difference between an active and a passive buzzer?

<div class="ws-box"></div>

2. What does the frequency number in tone() control?

<div class="ws-box"></div>

3. Why do we call noTone() after the melody finishes?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire a passive buzzer to an Arduino pin
- [ ] I understand the difference between active and passive buzzers
- [ ] I can use tone() with frequency and duration arguments
- [ ] I can create a simple melody using arrays
- [ ] I know why noTone() is needed

</div>
