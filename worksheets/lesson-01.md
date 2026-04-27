---
layout: default
title: "Worksheet 01 — What is Arduino?"
---

<div class="print-page">

# Worksheet 01 — What is Arduino?

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
| Sketch | |
| setup() | |
| loop() | |
| Upload | |
| Pin | |

---

## Circuit Diagram Space

Draw or label the Arduino Uno board below — mark the digital pins, analog pins, USB port, and power pins.

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to make the built-in LED blink every 2 seconds:

```cpp
void setup() {
  pinMode(___, OUTPUT);
}

void loop() {
  digitalWrite(13, ___);
  delay(___);
  digitalWrite(13, ___);
  delay(2000);
}
```

---

## Reflection

Answer these questions in your own words:

1. What is the difference between `setup()` and `loop()`?

<div class="ws-box"></div>

2. What happens when you click Upload in the Arduino IDE?

<div class="ws-box"></div>

3. Could the Arduino run without the USB cable after uploading? Why?

<div class="ws-box"></div>

---

## Self-Assessment

Check each box when you can do it confidently:

- [ ] I can identify the main parts of the Arduino Uno board
- [ ] I can open and navigate Arduino IDE 2
- [ ] I can upload a sketch to the board
- [ ] I understand what setup() and loop() do
- [ ] I can modify the delay to change the blink speed

</div>
