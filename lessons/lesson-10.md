---
layout: lesson
title: "Lesson 10 — MP3 Player Final Build"
lesson_number: 10
description: "Build a complete MP3 player with play/pause, next, previous, and volume controls using buttons and DFPlayer Mini."
prev_lesson:
  url: /lessons/lesson-09/
  title: "Lesson 09 — DFPlayer Mini Setup"
toc:
  - label: "Objectives"
    anchor: "#objectives"
  - label: "Materials"
    anchor: "#materials"
  - label: "Background"
    anchor: "#background"
  - label: "Build"
    anchor: "#build"
  - label: "Code"
    anchor: "#code"
  - label: "Understanding"
    anchor: "#understanding"
  - label: "Reflect"
    anchor: "#reflect"
  - label: "Troubleshooting"
    anchor: "#troubleshooting"
  - label: "What You Built"
    anchor: "#course-complete"
---


<div class="lesson-section">
<span class="section-kicker">Objectives</span>

## Learning Objectives
{: #objectives}
<div class="objectives-box" markdown="1">
- Combine everything from the course into one complete project
- Implement play/pause, next track, previous track, and volume controls
- Understand how to manage state (playing/paused) in code
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- DFPlayer Mini with SD card loaded (from Lesson 09)
- 5x push buttons
- 5x 220 ohm resistors (optional, for button debouncing — or use INPUT_PULLUP)
- Small speaker (4 or 8 ohm)
- LED + 220 ohm resistor (status indicator)
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

This is the capstone project. You will build a functional MP3 player that responds to five buttons: play/pause, next track, previous track, volume up, and volume down. A status LED shows whether the player is playing or paused.

Managing state is a key concept in this lesson. The word state means "what condition is the system in right now?" Your player can be in one of two states: playing or paused. You store this in a boolean variable (<code>true</code> = playing, <code>false</code> = paused) and check it every time the play/pause button is pressed.

Debouncing is also important here. Mechanical buttons bounce — they make and break contact several times in the first few milliseconds of a press. Without debouncing, one press can register as many presses. The simplest software debounce is to wait a short time (50–100 ms) after detecting a press before reading again.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-10-wiring.png' | relative_url }}"
    alt="Lesson 10 wiring diagram — MP3 Player Final Build"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>VCC of DFPlayer to 5V, GND to GND.</li>
<li>RX of DFPlayer to pin 11 through a 1k ohm resistor.</li>
<li>TX of DFPlayer to pin 10 (direct).</li>
<li>Speaker on SPK_1 / SPK_2.</li>
<li>Play/Pause button: one leg to pin 2, other leg to GND.</li>
<li>Next track button: one leg to pin 3, other leg to GND.</li>
<li>Previous track button: one leg to pin 4, other leg to GND.</li>
<li>Volume up button: one leg to pin 5, other leg to GND.</li>
<li>Volume down button: one leg to pin 6, other leg to GND.</li>
<li>Status LED: long leg through 220 ohm resistor to pin 9, short leg to GND.</li>
<li>Enter the code below and upload.</li>
<li>Test each button one at a time — play/pause first, then next/previous, then volume.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

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

  if (buttonPressed(PIN_NEXT, 1)) {
    dfPlayer.next();
    isPlaying = true;
    setLED();
    Serial.println("Next track");
  }

  if (buttonPressed(PIN_PREV, 2)) {
    dfPlayer.previous();
    isPlaying = true;
    setLED();
    Serial.println("Previous track");
  }

  if (buttonPressed(PIN_VOL_UP, 3)) {
    volume = min(volume + 2, VOL_MAX);
    dfPlayer.volume(volume);
    Serial.print("Volume: ");
    Serial.println(volume);
  }

  if (buttonPressed(PIN_VOL_DOWN, 4)) {
    volume = max(volume - 2, VOL_MIN);
    dfPlayer.volume(volume);
    Serial.print("Volume: ");
    Serial.println(volume);
  }
}
```
</div>


<div class="lesson-section">
<span class="section-kicker">Understanding</span>

## Understanding the Code
{: #understanding}

<table class="def-list">
  <tbody>
    <tr class="def-item">
      <td class="def-term">bool isPlaying = false</td>
      <td class="def-body">A global variable that tracks whether audio is playing. Booleans are either <code>true</code> or <code>false</code>.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">buttonPressed(pin, index)</td>
      <td class="def-body">A helper function that checks if a button is pressed and debounces it. Returns <code>true</code> only if the button has been LOW for more than DEBOUNCE_MS since the last press.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">millis() for debouncing</td>
      <td class="def-body">Using <code>millis()</code> for debouncing is better than <code>delay()</code> because the program does not stop and miss other button presses.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">dfPlayer.pause() / dfPlayer.start()</td>
      <td class="def-body">Pause and resume playback without resetting track position.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">dfPlayer.next() / dfPlayer.previous()</td>
      <td class="def-body">Skip to next or previous track on the SD card.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">isPlaying ? HIGH : LOW</td>
      <td class="def-body">The ternary operator — a shorthand if-else. Turns the LED on if playing, off if paused.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you add a small OLED or LCD display that shows the current track number? Use the <code>dfPlayer.readCurrentFileNumber()</code> function and an I2C display library. This is an advanced challenge — ask your teacher for guidance.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. What does "state" mean in programming, and how is it used in the play/pause logic?
2. Why is debouncing necessary for physical buttons?
3. Looking back at all 10 lessons — which concept was hardest to understand, and which project was most fun to build?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Play/pause button skips multiple tracks | No debounce | Make sure DEBOUNCE_MS is at least 200 |
| Volume buttons do nothing | Pins not set to INPUT_PULLUP | Check setup() for pinMode declarations |
| Player stops after first track | SD card has only one file | Add more MP3 files to the mp3 folder |
| LED stays off even when playing | LED polarity wrong or wrong pin | Check wiring; confirm PIN_LED = 9 |
{: .trouble-table}
</div>


<div class="lesson-section">
<span class="section-kicker">Course Complete</span>

## What You Built
{: #course-complete}

You have built a working MP3 player from scratch using Arduino.

Over these ten lessons you went from blinking a single LED to managing hardware state, serial communication, and external libraries. You learned to read inputs, control outputs, work with sensors, and structure code around real-world constraints. The same principles — setup, loop, state, input, output — are the foundation of every embedded system ever built.

If you want to keep going, try adding an OLED display, building a custom enclosure, or exploring other Arduino-compatible boards like the ESP32 (which has built-in Wi-Fi and Bluetooth). The skills you have now are the starting point for all of it.
</div>
