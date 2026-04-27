---
layout: lesson
title: "Lesson 05 — Buzzer and Sound"
lesson_number: 5
description: "Generate tones and simple melodies using the tone() function with a passive buzzer."
---

# Lesson 05 — Buzzer and Sound

## Learning Objectives
- Wire a passive buzzer to an Arduino pin
- Use `tone()` and `noTone()` to produce sounds
- Combine button input with sound output

---

## Materials for This Lesson
- Arduino Uno
- Breadboard
- 1x passive buzzer (NOT an active buzzer)
- 1x push button
- Jumper wires
- USB cable

---

## Background

Sound is produced by vibrations in the air. A buzzer converts an electrical signal into mechanical vibrations that we hear as sound. There are two types of buzzers: active buzzers produce a fixed tone when given power; passive buzzers require a rapidly changing signal to produce different pitches.

For this lesson you must use a passive buzzer. The Arduino's `tone()` function generates a square wave at a specified frequency on a digital pin, which drives the passive buzzer.

Frequency determines pitch. 440 Hz is the musical note A4 (concert A). Lower frequencies sound lower; higher frequencies sound higher. The `tone()` function accepts the pin, the frequency in Hz, and an optional duration in milliseconds. If no duration is given, the tone plays until you call `noTone()`.

---

## Wiring

*(See /images/lesson05-wiring.png)*

1. Connect the positive leg of the buzzer (longer leg or marked +) to pin 8.
2. Connect the negative leg to GND.
3. Connect a button: one leg to pin 2, other leg to GND (same as Lesson 04).

---

## Step-by-Step Build

1. Wire the buzzer and button as described.
2. Open a new sketch in Arduino IDE 2.
3. Enter the code below and upload.
4. Press the button to hear the melody.

---

## Code

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

---

## Understanding the Code

`tone(BUZZER_PIN, melody[i], noteDur[i])` — plays a tone on pin 8 at the frequency `melody[i]` Hz for `noteDur[i]` milliseconds.

`noTone(BUZZER_PIN)` — stops any tone on pin 8.

`melody[]` — stores the note frequencies. 262 Hz = C4, 294 = D4, 330 = E4, and so on up the C major scale.

`noteDur[]` — stores how long each note plays in milliseconds.

`delay(noteDur[i] + 30)` — waits for the note to finish plus a small gap so notes are distinct and not blurred together.

`playMelody()` — a custom function defined outside `loop()`. When you call `playMelody()` inside `loop()`, the Arduino jumps to that function, runs it, and comes back.

---

## Challenge

Can you play the first few notes of a recognizable melody — for example, the Super Mario Bros. theme or Happy Birthday? Look up the note frequencies online and replace the `melody[]` array.

---

## Reflection Questions

1. What is the difference between an active and a passive buzzer?
2. What does the frequency number in `tone()` control?
3. Why do we call `noTone()` after the melody finishes?

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| No sound | Active buzzer used instead of passive | Check your buzzer type; passive buzzers need the tone() signal |
| Constant tone | noTone() not called | Check that noTone() is called after the melody |
| Very quiet sound | Poor breadboard connection | Reseat the buzzer legs firmly |
| Button doesn't trigger | Wrong pin or no INPUT_PULLUP | Check wiring and confirm INPUT_PULLUP in setup() |

---

[Next Lesson: Analog Input](../lesson-06/)
