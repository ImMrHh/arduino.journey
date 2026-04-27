---
layout: teacher
title: "Pacing Guide"
description: "10-lesson pacing guide for Arduino Journey — 40-minute sessions, groups of 3."
---

# Pacing Guide

**Format:** 1 lesson every 2 weeks, 40-minute sessions, groups of 3 students.

---

## Lesson 01 — What is Arduino?

**Session time:** 40 minutes  
**Prep time:** 15 minutes  
**Objectives:** Students identify board parts, install IDE 2, upload Blink.  
**Materials to prepare:** Arduino Uno + USB cable per group, computers with IDE 2 pre-installed if possible.  
**Expected challenges:** IDE installation takes time on student computers — pre-install if possible. Some USB cables are charge-only.  
**Teacher notes:** This is an orientation lesson. Focus on getting everyone to a successful first upload. Don't go deeper than Blink.

---

## Lesson 02 — Blink (External LED)

**Session time:** 40 minutes  
**Prep time:** 10 minutes  
**Objectives:** Students wire an LED with resistor on breadboard, control it from code.  
**Materials to prepare:** Breadboard, 1x LED, 1x 220 ohm resistor, 2x jumper wires per group.  
**Expected challenges:** LED polarity errors are very common. Have spare LEDs ready.  
**Teacher notes:** Spend 5 minutes demonstrating the breadboard layout before groups start wiring.

---

## Lesson 03 — Multiple LEDs

**Session time:** 40 minutes  
**Prep time:** 10 minutes  
**Objectives:** Students wire 3 LEDs, use arrays and for loops.  
**Materials to prepare:** 3x LEDs, 3x 220 ohm resistors, 6+ jumper wires per group.  
**Expected challenges:** for loop indexing confuses students at first. The array concept may need extra time.  
**Teacher notes:** Draw the for loop execution order on the board. Walk through i=0, i=1, i=2 step by step.

---

## Lesson 04 — Button Input

**Session time:** 40 minutes  
**Prep time:** 10 minutes  
**Objectives:** Students wire a button, read digital input, understand pull-up resistors.  
**Materials to prepare:** 1x push button, 1x LED + resistor per group.  
**Expected challenges:** Students often forget INPUT_PULLUP and get floating pin readings. Active LOW logic confuses many.  
**Teacher notes:** Demonstrate floating pin behavior first (without INPUT_PULLUP) so students understand why pull-up is needed.

---

## Lesson 05 — Buzzer and Sound

**Session time:** 40 minutes  
**Prep time:** 10 minutes  
**Objectives:** Students wire a passive buzzer, use tone() to play a melody.  
**Materials to prepare:** 1x passive buzzer per group (verify they are passive, not active).  
**Expected challenges:** Active buzzers only produce one tone. Have students verify buzzer type.  
**Teacher notes:** Keep volume expectations realistic — the small buzzers are quiet. Students often expect louder sound.

---

## Lesson 06 — Analog Input

**Session time:** 40 minutes  
**Prep time:** 10 minutes  
**Objectives:** Students wire a potentiometer, use analogRead() and map(), control LED brightness.  
**Materials to prepare:** 1x potentiometer (10k recommended), 1x LED + resistor per group.  
**Expected challenges:** Potentiometer leg identification. Students sometimes confuse analog and PWM pins.  
**Teacher notes:** Open Serial Monitor early — seeing the numbers change as they turn the pot is very engaging and confirms the circuit is working.

---

## Lesson 07 — Sensors

**Session time:** 40 minutes  
**Prep time:** 20 minutes (library install)  
**Objectives:** Students read LDR and DHT11 sensor data, display it in Serial Monitor.  
**Materials to prepare:** 1x LDR + 10k resistor, 1x DHT11 module per group. Pre-install DHT library if possible.  
**Expected challenges:** DHT library installation. Students sometimes open the wrong library (there are several DHT libraries).  
**Teacher notes:** Install DHT sensor library by Adafruit specifically. Walk through Library Manager as a class before groups start.

---

## Lesson 08 — Mini Challenge

**Session time:** 40 minutes  
**Prep time:** 5 minutes  
**Objectives:** Students design and build either a reaction timer or traffic light independently.  
**Materials to prepare:** Full component kit available per group.  
**Expected challenges:** Groups that haven't fully understood previous lessons will struggle. Be ready to provide more scaffolding.  
**Teacher notes:** This lesson is assessment-friendly — observe each group's process. Ask probing questions while they build.

---

## Lesson 09 — DFPlayer Mini Setup

**Session time:** 40 minutes  
**Prep time:** 30 minutes (SD card prep, library install)  
**Objectives:** Students wire DFPlayer Mini, load SD card, play first audio file.  
**Materials to prepare:** DFPlayer Mini, microSD card (FAT32, with mp3 folder and numbered files), small speaker, 1k resistor, DFRobotDFPlayerMini library installed.  
**Expected challenges:** SD card format issues are the most common problem. Pre-format and load cards before class.  
**Teacher notes:** Pre-load the SD cards with a few short MP3 files. FAT32 formatting + correct folder/filename structure is the biggest hurdle.

---

## Lesson 10 — MP3 Player Final Build

**Session time:** 40 minutes  
**Prep time:** 10 minutes  
**Objectives:** Students build complete MP3 player with 5-button control and status LED.  
**Materials to prepare:** Full kit from Lesson 09 plus 5 buttons.  
**Expected challenges:** Wiring complexity with 5 buttons. Debounce logic takes time to understand.  
**Teacher notes:** Celebrate completion — this is the capstone. Allow 5 minutes at the end for groups to demo their player.
