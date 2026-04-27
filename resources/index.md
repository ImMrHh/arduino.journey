---
layout: default
title: "Resources"
description: "Arduino setup guides, parts list, glossary, and reference links for Arduino Journey."
---

# Resources

---

## Arduino IDE 2 Setup

1. Download from [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. Install with default settings.
3. Connect your Arduino Uno. Go to Tools > Board and select Arduino Uno.
4. Go to Tools > Port and select the port that appears.
5. Open File > Examples > 01.Basics > Blink and click Upload to verify the setup.

---

## Required Libraries

Install through Arduino IDE 2: **Tools > Manage Libraries**

| Library | Author | Purpose |
|---------|--------|---------|
| DHT sensor library | Adafruit | Read DHT11 temperature and humidity sensor (Lesson 07) |
| Adafruit Unified Sensor | Adafruit | Required by DHT library |
| DFRobotDFPlayerMini | DFRobot | Control DFPlayer Mini MP3 module (Lessons 09, 10) |

---

## Parts List — Full Course Kit (Per Group of 3)

| Component | Quantity |
|-----------|----------|
| Arduino Uno | 1 |
| USB-A to USB-B data cable | 1 |
| Half-size breadboard | 1 |
| Male-to-male jumper wires (assorted) | 20 |
| LED red | 3 |
| LED green | 1 |
| LED yellow/orange | 1 |
| 220 ohm resistor | 10 |
| 1k ohm resistor | 2 |
| 10k ohm resistor | 2 |
| Push button (momentary) | 5 |
| Potentiometer 10k ohm | 1 |
| Passive buzzer | 1 |
| LDR (photoresistor) | 1 |
| DHT11 sensor module | 1 |
| DFPlayer Mini module | 1 |
| MicroSD card (2–4 GB, FAT32) | 1 |
| Small speaker 8 ohm 0.5W | 1 |

---

## Reference Links

- [Arduino Language Reference](https://www.arduino.cc/reference/en/) — full documentation for every function
- [Arduino Uno Pinout Diagram](https://docs.arduino.cc/hardware/uno-rev3/) — official board documentation
- [Arduino Forum](https://forum.arduino.cc/) — community help
- [DFRobotDFPlayerMini Library Wiki](https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299) — DFPlayer documentation

---

## Safety Rules

1. Always disconnect the Arduino from power before changing wiring.
2. Never connect more than 40 mA through a single digital pin — always use resistors with LEDs.
3. Do not connect VCC (5V) directly to GND — this short-circuits the board.
4. Handle components carefully — bent pins on the Arduino or broken breadboard clips cause hard-to-find errors.
5. If something smells like burning, disconnect immediately and tell your teacher.

---

## Glossary

| Term | Definition |
|------|-----------|
| Arduino | An open-source electronics platform consisting of a microcontroller board and software IDE |
| Sketch | An Arduino program |
| setup() | A function that runs once when the board powers on |
| loop() | A function that runs continuously as long as the board has power |
| pinMode() | Sets a pin as INPUT or OUTPUT |
| digitalWrite() | Sets a digital pin to HIGH (5V) or LOW (0V) |
| digitalRead() | Reads a digital pin and returns HIGH or LOW |
| analogRead() | Reads an analog pin and returns a value from 0 to 1023 |
| analogWrite() | Sends a PWM signal on a PWM-capable pin, 0 to 255 |
| delay() | Pauses the program for a given number of milliseconds |
| millis() | Returns the number of milliseconds since the board was powered on |
| PWM | Pulse Width Modulation — simulating analog output using a digital pin |
| Pull-up resistor | A resistor connecting a pin to VCC so it reads HIGH when nothing else is connected |
| Active LOW | A logic convention where a LOW signal means the button is pressed or the signal is active |
| LDR | Light-Dependent Resistor — a component whose resistance changes with light intensity |
| DHT11 | A digital sensor that measures temperature and humidity |
| DFPlayer Mini | A compact MP3 player module with built-in SD card reader and amplifier |
| SoftwareSerial | An Arduino library that creates a software-based serial port on any digital pins |
| Library | Pre-written code that adds functions for a specific device or purpose |
| Breadboard | A solderless prototyping board for temporary circuit connections |
