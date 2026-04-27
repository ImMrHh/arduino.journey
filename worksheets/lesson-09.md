---
layout: default
title: "Worksheet 09 — DFPlayer Mini Setup"
---

<div class="print-page">

# Worksheet 09 — DFPlayer Mini Setup

<div class="ws-header-fields">
  <div><label>Name</label><div class="ws-field"></div></div>
  <div><label>Date</label><div class="ws-field"></div></div>
  <div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| DFPlayer Mini | |
| SoftwareSerial | |
| FAT32 | |
| SD card | |
| Serial communication | |

---

## Circuit Diagram Space

Draw the DFPlayer Mini wiring: VCC, GND, RX (through 1k resistor to pin 11), TX (to pin 10), speaker connections.

<div class="ws-box"></div>

---

## SD Card Checklist

Before testing, verify each step:

- [ ] SD card formatted as FAT32
- [ ] Folder named exactly `mp3` created at root
- [ ] MP3 files renamed to `0001.mp3`, `0002.mp3`, etc.
- [ ] SD card inserted into DFPlayer Mini
- [ ] DFRobotDFPlayerMini library installed

---

## Code Challenge

Fill in the blanks to initialize and play a track:

```cpp
#include <SoftwareSerial.h>
#include <DFRobotDFPlayerMini.h>

SoftwareSerial dfSerial(___, 11);
DFRobotDFPlayerMini dfPlayer;

void setup() {
  Serial.begin(9600);
  dfSerial.begin(___);

  if (!dfPlayer.___(dfSerial)) {
    while (true);
  }

  dfPlayer.volume(___);
  dfPlayer.___(1);
}
```

---

## Reflection

1. Why must we use SoftwareSerial instead of the hardware serial pins (0 and 1)?

<div class="ws-box"></div>

2. What format must the SD card and file names be in for the DFPlayer to work?

<div class="ws-box"></div>

3. What happens if dfPlayer.begin() returns false?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire the DFPlayer Mini correctly including the 1k resistor
- [ ] I can prepare an SD card with the correct folder and file names
- [ ] I understand why SoftwareSerial is used
- [ ] I can set the volume and play a specific track
- [ ] I know how to debug if the DFPlayer is not found

</div>
