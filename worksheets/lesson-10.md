---
layout: default
title: "Worksheet 10 — MP3 Player Final Build"
---

<div class="print-page">

# Worksheet 10 — MP3 Player Final Build

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
| boolean | |
| Debounce | |
| millis() | |
| dfPlayer.pause() | |

---

## Circuit Diagram Space

Draw the complete MP3 player circuit: DFPlayer, 5 buttons (pins 2–6), status LED (pin 9).

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to implement play/pause toggle with debounce:

```cpp
bool isPlaying = ___;
unsigned long lastPress[5] = {0,0,0,0,0};
const unsigned long DEBOUNCE_MS = ___;

bool buttonPressed(int pin, int index) {
  if (digitalRead(pin) == ___) {
    unsigned long now = millis();
    if (now - lastPress[index] > DEBOUNCE_MS) {
      lastPress[___] = now;
      return ___;
    }
  }
  return false;
}

// Inside loop():
if (buttonPressed(PIN_PLAY_PAUSE, 0)) {
  if (isPlaying) {
    dfPlayer.___();
    isPlaying = false;
  } else {
    dfPlayer.start();
    isPlaying = ___;
  }
}
```

---

## Reflection

1. What does "state" mean in programming, and how is it used in the play/pause logic?

<div class="ws-box"></div>

2. Why is debouncing necessary for physical buttons?

<div class="ws-box"></div>

3. Looking back at all 10 lessons — which concept was hardest to understand, and which project was most fun to build?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire 5 buttons and a status LED alongside the DFPlayer
- [ ] I understand how boolean state variables work
- [ ] I can explain what debouncing does and why it is needed
- [ ] My MP3 player responds correctly to all 5 buttons
- [ ] I can describe what every function in the final sketch does

</div>
