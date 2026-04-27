---
layout: lesson
title: "Lesson 10 — MP3 Player Final Build"
lesson_number: 10
description: "Build a complete MP3 player with play/pause, next, previous, and volume controls using buttons and DFPlayer Mini."
---

# Lesson 10 — MP3 Player Final Build

## Learning Objectives
- Combine everything from the course into one complete project
- Implement play/pause, next track, previous track, and volume controls
- Understand how to manage state (playing/paused) in code

---

## Materials for This Lesson
- Arduino Uno
- Breadboard
- DFPlayer Mini with SD card loaded (from Lesson 09)
- 5x push buttons
- 5x 220 ohm resistors (optional, for button debouncing — or use INPUT_PULLUP)
- Small speaker (4 or 8 ohm)
- LED + 220 ohm resistor (status indicator)
- Jumper wires
- USB cable

---

## Background

This is the capstone project. You will build a functional MP3 player that responds to five buttons: play/pause, next track, previous track, volume up, and volume down. A status LED shows whether the player is playing or paused.

Managing state is a key concept in this lesson. The word state means "what condition is the system in right now?" Your player can be in one of two states: playing or paused. You store this in a boolean variable (`true` = playing, `false` = paused) and check it every time the play/pause button is pressed.

Debouncing is also important here. Mechanical buttons bounce — they make and break contact several times in the first few milliseconds of a press. Without debouncing, one press can register as many presses. The simplest software debounce is to wait a short time (50–100 ms) after detecting a press before reading again.

---

## Wiring

*(See /images/lesson10-wiring.png)*

DFPlayer Mini: same as Lesson 09 (VCC, GND, RX through 1k to pin 11, TX to pin 10, speaker on SPK_1/SPK_2).

Buttons (all using INPUT_PULLUP — one leg to the pin, other leg to GND):
- Play/Pause: pin 2
- Next track: pin 3
- Previous track: pin 4
- Volume up: pin 5
- Volume down: pin 6

Status LED: long leg through 220 ohm resistor to pin 9, short leg to GND.

---

## Step-by-Step Build

1. Complete the DFPlayer Mini wiring from Lesson 09.
2. Add all five buttons to the breadboard.
3. Wire the status LED.
4. Enter and upload the code below.
5. Test each button one at a time.

---

## Code

```cpp
// MP3 Player Final Build
// DFPlayer Mini on pins 10 (RX) and 11 (TX through 1k resistor)
// Buttons: Play/Pause=2, Next=3, Prev=4, VolUp=5, VolDown=6
// Status LED on pin 9

#include <SoftwareSerial.h>
#include <DFRobotDFPlayerMini.h>

SoftwareSerial dfSerial(10, 11);
DFRobotDFPlayerMini dfPlayer;

const int PIN_PLAY_PAUSE = 2;
const int PIN_NEXT       = 3;
const int PIN_PREV       = 4;
const int PIN_VOL_UP     = 5;
const int PIN_VOL_DOWN   = 6;
const int PIN_LED        = 9;

bool isPlaying = false;
int  volume    = 20;
const int VOL_MIN = 0;
const int VOL_MAX = 30;

// Debounce: track last time each button was pressed
unsigned long lastPress[5] = {0, 0, 0, 0, 0};
const unsigned long DEBOUNCE_MS = 200;

bool buttonPressed(int pin, int index) {
  if (digitalRead(pin) == LOW) {
    unsigned long now = millis();
    if (now - lastPress[index] > DEBOUNCE_MS) {
      lastPress[index] = now;
      return true;
    }
  }
  return false;
}

void setLED() {
  digitalWrite(PIN_LED, isPlaying ? HIGH : LOW);
}

void setup() {
  Serial.begin(9600);
  dfSerial.begin(9600);

  pinMode(PIN_PLAY_PAUSE, INPUT_PULLUP);
  pinMode(PIN_NEXT,       INPUT_PULLUP);
  pinMode(PIN_PREV,       INPUT_PULLUP);
  pinMode(PIN_VOL_UP,     INPUT_PULLUP);
  pinMode(PIN_VOL_DOWN,   INPUT_PULLUP);
  pinMode(PIN_LED,        OUTPUT);

  if (!dfPlayer.begin(dfSerial)) {
    Serial.println("DFPlayer not found");
    while (true);
  }

  dfPlayer.volume(volume);
  dfPlayer.play(1);
  isPlaying = true;
  setLED();

  Serial.println("MP3 Player ready");
}

void loop() {
  // Play / Pause
  if (buttonPressed(PIN_PLAY_PAUSE, 0)) {
    if (isPlaying) {
      dfPlayer.pause();
      isPlaying = false;
    } else {
      dfPlayer.start();
      isPlaying = true;
    }
    setLED();
    Serial.println(isPlaying ? "Playing" : "Paused");
  }

  // Next track
  if (buttonPressed(PIN_NEXT, 1)) {
    dfPlayer.next();
    isPlaying = true;
    setLED();
    Serial.println("Next track");
  }

  // Previous track
  if (buttonPressed(PIN_PREV, 2)) {
    dfPlayer.previous();
    isPlaying = true;
    setLED();
    Serial.println("Previous track");
  }

  // Volume up
  if (buttonPressed(PIN_VOL_UP, 3)) {
    volume = min(volume + 2, VOL_MAX);
    dfPlayer.volume(volume);
    Serial.print("Volume: ");
    Serial.println(volume);
  }

  // Volume down
  if (buttonPressed(PIN_VOL_DOWN, 4)) {
    volume = max(volume - 2, VOL_MIN);
    dfPlayer.volume(volume);
    Serial.print("Volume: ");
    Serial.println(volume);
  }
}
```

---

## Understanding the Code

`bool isPlaying = false` — a global variable that tracks whether audio is playing. Booleans are either `true` or `false`.

`buttonPressed(pin, index)` — a helper function that checks if a button is pressed and debounces it. It returns `true` only if the button has been LOW for more than `DEBOUNCE_MS` milliseconds since the last press.

`millis()` — returns elapsed milliseconds. Using millis() for debouncing is better than `delay()` because the program does not stop and miss other button presses.

`dfPlayer.pause()` and `dfPlayer.start()` — pause and resume playback without resetting track position.

`dfPlayer.next()` and `dfPlayer.previous()` — skip to next or previous track on the SD card.

`dfPlayer.volume(volume)` — sets the volume immediately. `min()` and `max()` keep the value within allowed bounds.

`setLED()` — turns the LED on if playing, off if paused. The ternary operator `isPlaying ? HIGH : LOW` is a shorthand if-else.

---

## Challenge

Can you add a small OLED or LCD display that shows the current track number? Use the `dfPlayer.readCurrentFileNumber()` function and an I2C display library to show it. This is an advanced challenge — ask your teacher for guidance.

---

## Reflection Questions

1. What does "state" mean in programming, and how is it used in the play/pause logic?
2. Why is debouncing necessary for physical buttons?
3. Looking back at all 10 lessons — which concept was hardest to understand, and which project was most fun to build?

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Play/pause button skips multiple tracks | No debounce | Make sure DEBOUNCE_MS is at least 200 |
| Volume buttons do nothing | Pins not set to INPUT_PULLUP | Check setup() for pinMode declarations |
| Player stops after first track | SD card has only one file | Add more MP3 files to the mp3 folder |
| LED stays off even when playing | LED polarity wrong or wrong pin | Check wiring; confirm PIN_LED = 9 |

---

Course complete. You have built a working MP3 player from scratch using Arduino.

[Back to Lessons]({{ '/lessons/' | relative_url }})
