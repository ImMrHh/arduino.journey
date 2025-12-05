# Week 3: Potentiometer & PWM (Enhanced)

## Overview

This week, we explore the potentiometer as an input device and how to use Pulse Width Modulation (PWM) to control LED brightness. Students will learn how to read analog values from a potentiometer and map these values to control the brightness of an LED using PWM signals.

---

## Learning Objectives

* Understand the function and wiring of a potentiometer.
* Read analog input values from a potentiometer using Arduino.
* Use PWM to control LED brightness.
* Map analog input ranges to PWM output ranges.

---

## Materials Needed

* Arduino Uno or compatible board
* Potentiometer (10k ohm recommended)
* LED
* 220-ohm resistor
* Breadboard and jumper wires

---

## Lesson Content

### 1. Potentiometer Basics

A potentiometer is a variable resistor with three terminals. Turning the knob changes the resistance, which can be read as an analog voltage input by the Arduino.

### 2. Wiring the Potentiometer

* Connect the two outer pins of the potentiometer to 5V and GND.
* Connect the middle pin (wiper) to an analog input pin on the Arduino (e.g., A0).
* ![Week 2 Wiring Diagram](/images/week3-wiring.png)

### 3. Reading Analog Values

Use `analogRead(A0)` to get a value between 0 and 1023 representing the position of the potentiometer.

### 4. Using PWM to Control LED Brightness

PWM allows us to simulate varying voltage levels by switching the LED on and off very quickly. Use `analogWrite(pin, value)` where `value` ranges from 0 (off) to 255 (full brightness).

### 5. Mapping Values

Since `analogRead` returns 0-1023 and `analogWrite` expects 0-255, use the `map()` function to convert the range.


```cpp
int sensorValue = analogRead(A0);
int outputValue = map(sensorValue, 0, 1023, 0, 255);
analogWrite(ledPin, outputValue);
```

Code with LED

```cpp

const int potPin = A0;
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(potPin);
  int outputValue = map(sensorValue, 0, 1023, 0, 255);
  analogWrite(ledPin, outputValue);
  Serial.println(sensorValue);
  delay(10);
}
```

### Navigation

[⬅️ Back to Lessons Menu]({{ "/lessons/" | relative_url }}) | [Go to Worksheet ➡️]({{ "/worksheets/" | relative_url }})


---

