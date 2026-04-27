---
layout: default
title: "Worksheet 08 — Mini Challenge"
---

<div class="print-page">

# Worksheet 08 — Mini Challenge

<div class="ws-header-fields">
  <div><label>Name</label><div class="ws-field"></div></div>
  <div><label>Date</label><div class="ws-field"></div></div>
  <div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| State | |
| millis() | |
| random() | |
| while loop | |
| Reaction time | |

---

## Project Choice

Which option did your group choose?

- [ ] Option A — Reaction Timer
- [ ] Option B — Traffic Light Sequence

---

## Planning Space

Sketch your circuit plan and describe what each part of the code needs to do before you start building.

<div class="ws-box"></div>

---

## Code Challenge

For the Reaction Timer — fill in the blanks:

```cpp
randomSeed(___(A0));

long waitTime = ___(2000, 5000);
delay(waitTime);

digitalWrite(LED_PIN, HIGH);
long startTime = ___();

while (digitalRead(BUTTON_PIN) == ___) { }

long reactionTime = millis() - ___;
Serial.println(reactionTime);
```

---

## Reflection

1. How did your group divide the work for this project?

<div class="ws-box"></div>

2. What was the hardest part to get working, and how did you fix it?

<div class="ws-box"></div>

3. What would you change if you had more time?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] My group planned the circuit on paper before wiring
- [ ] We tested one part at a time
- [ ] We fixed at least one bug ourselves
- [ ] The project works as intended
- [ ] I can explain how millis() measures time

</div>
