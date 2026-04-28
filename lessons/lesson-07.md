---
layout: lesson
title: "Lesson 07 — Sensors"
lesson_number: 7
description: "Read light intensity with an LDR and temperature/humidity with a DHT11 sensor."
prev_lesson:
  url: /lessons/lesson-06/
  title: "Lesson 06 — Analog Input"
next_lesson:
  url: /lessons/lesson-08/
  title: "Lesson 08 — Mini Challenge"
---


## Learning Objectives
<div class="objectives-box" markdown="1">
- Wire an LDR (light-dependent resistor) and read light levels with `analogRead()`
- Wire a DHT11 sensor and read temperature and humidity using the DHT library
- Display sensor data in the Serial Monitor
</div>


## Materials for This Lesson
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x LDR (light-dependent resistor / photoresistor)
- 1x 10k ohm resistor (for LDR voltage divider)
- 1x DHT11 sensor module (or bare sensor with pull-up resistor)
- Jumper wires
- USB cable
</div>


## Background

Sensors convert physical quantities into electrical signals. An LDR changes its resistance based on the amount of light hitting it. In bright light, resistance drops; in darkness, resistance rises. By pairing the LDR with a fixed resistor in a voltage divider circuit, you create a varying voltage that the Arduino can read.

The DHT11 is a digital sensor that measures temperature and humidity. It uses a single data wire and a specific communication protocol. Rather than writing all that protocol code yourself, you use a library — a collection of pre-written code that handles the communication.

Libraries must be installed before you can use them. Install the DHT library by Adafruit in Arduino IDE 2: go to Tools > Manage Libraries, search for "DHT sensor library" by Adafruit, and click Install. Also install Adafruit Unified Sensor when prompted.


## Wiring

*(See /images/lesson07-wiring.png)*

LDR voltage divider on A1:
1. One leg of LDR to 5V.
2. Other leg of LDR to A1 and also to one leg of the 10k resistor.
3. Other leg of the 10k resistor to GND.

DHT11 on pin 7:
1. VCC pin of DHT11 to 5V.
2. GND pin of DHT11 to GND.
3. DATA pin of DHT11 to pin 7.
(If using the bare sensor without a module board, add a 10k pull-up resistor between DATA and VCC.)


## Step-by-Step Build

1. Wire the LDR and DHT11 as described.
2. Install the DHT library (Adafruit) in Arduino IDE 2.
3. Open a new sketch and enter the code below.
4. Upload the sketch.
5. Open Serial Monitor at 9600 baud.
6. Cover the LDR with your hand and observe the light level change. Breathe on the DHT11 and watch the humidity change.


## Code

```cpp
// LDR + DHT11 Sensor readings
// LDR on A1, DHT11 data pin on pin 7

#include <DHT.h>

const int LDR_PIN  = A1;
const int DHT_PIN  = 7;
const int DHT_TYPE = DHT11;

DHT dht(DHT_PIN, DHT_TYPE);  // Create DHT object

void setup() {
  Serial.begin(9600);
  dht.begin();  // Initialize DHT sensor
  Serial.println("Sensor readings starting...");
}

void loop() {
  // --- Read LDR ---
  int lightLevel = analogRead(LDR_PIN);  // 0 (dark) to 1023 (bright)

  // --- Read DHT11 ---
  float humidity    = dht.readHumidity();
  float temperature = dht.readTemperature();  // Celsius by default

  // Check if DHT reading failed
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("DHT11 read error — check wiring");
    delay(2000);
    return;
  }

  // Print all readings
  Serial.print("Light: ");
  Serial.print(lightLevel);
  Serial.print("  Temp: ");
  Serial.print(temperature);
  Serial.print(" C  Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  delay(2000);  // DHT11 needs at least 1 second between readings
}
```


## Understanding the Code

`#include <DHT.h>` — includes the DHT library so you can use its functions.

`DHT dht(DHT_PIN, DHT_TYPE)` — creates a DHT object named `dht`, configured for pin 7 and DHT11 type.

`dht.begin()` — initializes the DHT sensor.

`dht.readHumidity()` and `dht.readTemperature()` — read values from the sensor. They return `float` values (numbers with decimal points).

`isnan()` — stands for "is not a number". The DHT library returns NaN if a read fails. This check prevents printing garbage data.

`analogRead(LDR_PIN)` — reads the voltage divider output. High value = more light; low value = less light.

<div class="challenge-box" markdown="1">
<div class="challenge-label">Try This</div>
Can you turn on an LED automatically when the light level drops below 300 (as if a room light turned off)? Wire an LED to pin 9 and add an `if` statement that turns it on when `lightLevel < 300`.
</div>


## Reflection Questions

1. What is a voltage divider, and why do we use one with the LDR?
2. Why does the DHT11 code use a library instead of reading the pin directly?
3. What does `isnan()` check for, and why is this important?
{: .reflection-list}


## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| LDR always reads near 0 or 1023 | Voltage divider wired incorrectly | Check that LDR and 10k resistor form a series connection between 5V and GND |
| "DHT11 read error" in Serial Monitor | Wiring issue or missing pull-up | Check data wire connection; add 10k pull-up if using bare sensor |
| Compiler error: "DHT.h not found" | Library not installed | Install DHT sensor library by Adafruit in Library Manager |
| Temperature reads 0.0 | Wrong DHT type constant | Make sure you use DHT11, not DHT22 |
{: .trouble-table}
