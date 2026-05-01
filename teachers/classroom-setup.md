---
layout: teacher
title: "Classroom Setup"
description: "Hardware kit, software setup, and classroom layout guide for Arduino Journey."
---

# Classroom Setup

---

## Arduino IDE 2 Installation

1. Go to [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. Download Arduino IDE 2 for your operating system.
3. Install it with default settings.
4. Connect an Arduino Uno and verify it appears under Tools > Port.

On **Windows**, some boards require the CH340 driver if the port is not detected automatically. Download from the chip manufacturer's site.

On **iPads or Chromebooks**, use the Arduino Web Editor at [https://create.arduino.cc](https://create.arduino.cc) — students need a free Arduino account.

---

## Required Libraries

Install these libraries in Arduino IDE 2 via Tools > Manage Libraries:

| Library | Author | Used in |
|---------|--------|---------|
| DHT sensor library | Adafruit | Lesson 07 |
| Adafruit Unified Sensor | Adafruit | Lesson 07 (dependency) |
| DFRobotDFPlayerMini | DFRobot | Lessons 09, 10 |

SoftwareSerial is included with Arduino IDE — no installation needed.

---

## Hardware Kit Per Group of 3

Each group needs:

| Component | Quantity | Notes |
|-----------|----------|-------|
| Arduino Uno | 1 | Any clone works |
| USB-A to USB-B cable | 1 | Data cable, not charge-only |
| Breadboard (half-size or full) | 1 | |
| Jumper wires (male-to-male) | 20 | Assorted colors |
| LED (red) | 3 | |
| LED (green) | 1 | |
| LED (yellow) | 1 | |
| Resistor 220 ohm | 10 | |
| Resistor 1k ohm | 2 | |
| Resistor 10k ohm | 2 | |
| Push button (momentary) | 5 | |
| Potentiometer 10k | 1 | |
| Passive buzzer | 1 | Verify passive, not active |
| LDR (photoresistor) | 1 | |
| DHT11 sensor module | 1 | Module preferred over bare sensor |
| DFPlayer Mini | 1 | |
| MicroSD card (2 or 4 GB) | 1 | FAT32 formatted |
| Small speaker (8 ohm, 0.5W) | 1 | |

---

## SD Card Preparation (Lessons 09-10)

1. Format the microSD card as FAT32.
2. Create a folder named exactly `mp3` at the root.
3. Add MP3 audio files named `0001.mp3`, `0002.mp3`, etc.
4. Files should be short (30–60 seconds) to keep class focused.

Pre-format and load all SD cards before class — this is the most common source of errors in Lessons 09 and 10.

---

## Classroom Layout Suggestions

- Arrange tables in groups of 3 or in islands — students share one Arduino per group.
- Ensure each station has a dedicated power bar or enough USB ports for one Arduino per group.
- Keep a spare kit with extra LEDs, resistors, and a working Arduino at the front — components break.
- Display the lesson page on a projector or shared screen during the build steps.

---

## Common First-Day Problems

| Problem | Solution |
|---------|---------|
| IDE not detecting the board | Check USB cable (data vs charge-only); install CH340 driver on Windows |
| Students modifying the wrong sketch | Have students always start from File > New |
| LED not lighting up | 90% of cases are reversed polarity — flip the LED |
| Upload error: port busy | Close Serial Monitor before uploading |
| Groups finishing very quickly | Direct them to the Challenge section of each lesson |
| Groups not finishing in 40 min | Pre-wire the circuit for the last 10 minutes if needed |
