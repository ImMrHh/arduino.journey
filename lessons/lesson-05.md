---
layout: lesson
title: "Lesson 05 — Buzzer and Sound"
lesson_number: 5
description: "Generate tones and simple melodies using the tone() function with a passive buzzer."
prev_lesson:
  url: /lessons/lesson-04/
  title: "Lesson 04 — Button Input"
next_lesson:
  url: /lessons/lesson-06/
  title: "Lesson 06 — Analog Input"
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
---


<div class="lesson-section">
<span class="section-kicker">Objectives</span>

## Learning Objectives
{: #objectives}
<div class="objectives-box" markdown="1">
- Wire a passive buzzer to an Arduino pin
- Use `tone()` and `noTone()` to produce sounds
- Combine button input with sound output
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x passive buzzer (NOT an active buzzer)
- 1x push button
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

Sound is produced by vibrations in the air. A buzzer converts an electrical signal into mechanical vibrations that we hear as sound. There are two types of buzzers: active buzzers produce a fixed tone when given power; passive buzzers require a rapidly changing signal to produce different pitches.

For this lesson you must use a passive buzzer. The Arduino's `tone()` function generates a square wave at a specified frequency on a digital pin, which drives the passive buzzer.

Frequency determines pitch. 440 Hz is the musical note A4 (concert A). Lower frequencies sound lower; higher frequencies sound higher. The `tone()` function accepts the pin, the frequency in Hz, and an optional duration in milliseconds. If no duration is given, the tone plays until you call `noTone()`.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-05-wiring.png' | relative_url }}"
    alt="Lesson 05 wiring diagram — Buzzer and Sound"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>Connect the positive leg of the buzzer (longer leg or marked +) to pin 8.</li>
<li>Connect the negative leg to GND.</li>
<li>Connect a button: one leg to pin 2, other leg to GND (same as Lesson 04).</li>
<li>Open a new sketch in Arduino IDE 2.</li>
<li>Enter the code below and upload.</li>
<li>Press the button to hear the melody.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

```cpp
// Buzzer melody with button trigger
// Passive buzzer on pin 8, button on pin 2

const int BUZZER_PIN = 8;
const int BUTTON_PIN = 2;

// Simple melody: frequencies in Hz (0 = rest)
int melody[]   = {262, 294, 330, 349, 392, 440, 494, 523};
int noteDur[]  = {300, 300, 300, 300, 300, 300, 300, 600};
const int NOTES = 8;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    playMelody();
    delay(500);  // Debounce pause after melody
  }
}

void playMelody() {
  for (int i = 0; i < NOTES; i++) {
    if (melody[i] == 0) {
      noTone(BUZZER_PIN);
    } else {
      tone(BUZZER_PIN, melody[i], noteDur[i]);
    }
    delay(noteDur[i] + 30);  // Note duration + small gap
  }
  noTone(BUZZER_PIN);
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
      <td class="def-term">tone(BUZZER_PIN, melody[i], noteDur[i])</td>
      <td class="def-body">Plays a tone on pin 8 at the frequency <code>melody[i]</code> Hz for <code>noteDur[i]</code> milliseconds.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">noTone(BUZZER_PIN)</td>
      <td class="def-body">Stops any tone on pin 8.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">melody[]</td>
      <td class="def-body">Stores the note frequencies. 262 Hz = C4, 294 = D4, 330 = E4, and so on up the C major scale.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">noteDur[]</td>
      <td class="def-body">Stores how long each note plays in milliseconds.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">delay(noteDur[i] + 30)</td>
      <td class="def-body">Waits for the note to finish plus a small gap so notes are distinct and not blurred together.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">playMelody()</td>
      <td class="def-body">A custom function defined outside <code>loop()</code>. When called, the Arduino jumps to it, runs it, and returns.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you play the first few notes of a recognizable melody — for example, the Super Mario Bros. theme or Happy Birthday? Look up the note frequencies online and replace the <code>melody[]</code> array.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. What is the difference between an active and a passive buzzer?
2. What does the frequency number in `tone()` control?
3. Why do we call `noTone()` after the melody finishes?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| No sound | Active buzzer used instead of passive | Check your buzzer type; passive buzzers need the tone() signal |
| Constant tone | noTone() not called | Check that noTone() is called after the melody |
| Very quiet sound | Poor breadboard connection | Reseat the buzzer legs firmly |
| Button doesn't trigger | Wrong pin or no INPUT_PULLUP | Check wiring and confirm INPUT_PULLUP in setup() |
{: .trouble-table}
</div>
