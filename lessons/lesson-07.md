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
- Wire an LDR (light-dependent resistor) and read light levels with `analogRead()`
- Wire a DHT11 sensor and read temperature and humidity using the DHT library
- Display sensor data in the Serial Monitor
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Materials</span>

## Materials for This Lesson
{: #materials}
<div class="materials-card" markdown="1">
- Arduino Uno
- Breadboard
- 1x LDR (light-dependent resistor / photoresistor)
- 1x 10k ohm resistor (for LDR voltage divider)
- 1x DHT11 sensor module (or bare sensor with pull-up resistor)
- Jumper wires
- USB cable
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Background</span>

## Background
{: #background}

Sensors convert physical quantities into electrical signals. An LDR (light-dependent resistor) changes its resistance based on light — low resistance in bright light, high resistance in darkness. Paired with a fixed resistor in a voltage divider, it produces a varying voltage that `analogRead()` can measure.

The DHT11 is a digital sensor that measures temperature and humidity over a single data wire. Rather than writing the communication protocol yourself, you use a library — a collection of pre-written code that handles all the low-level details.

Install the DHT library before this lesson: go to <strong>Tools &gt; Manage Libraries</strong>, search for <strong>DHT sensor library</strong> by Adafruit, and click Install. Also install <strong>Adafruit Unified Sensor</strong> when prompted.
</div>


<div class="lesson-section">
<span class="section-kicker">Build</span>

## Build
{: #build}

<div class="wiring-placeholder">
  <img
    src="{{ '/assets/img/lesson-07-wiring.png' | relative_url }}"
    alt="Lesson 07 wiring diagram — Sensors"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none" class="wiring-fallback">Wiring diagram coming soon — check back before class.</p>
</div>

<ol class="step-list">
<li>One leg of the LDR to 5V.</li>
<li>Other leg of the LDR to A1 and also to one leg of the 10k resistor.</li>
<li>Other leg of the 10k resistor to GND.</li>
<li>VCC pin of DHT11 to 5V.</li>
<li>GND pin of DHT11 to GND.</li>
<li>DATA pin of DHT11 to pin 7. (If using the bare sensor without a module board, add a 10k pull-up resistor between DATA and VCC.)</li>
<li>Open a new sketch and enter the code below.</li>
<li>Upload the sketch.</li>
<li>Open Serial Monitor at <strong>9600 baud</strong>, line ending set to <strong>No line ending</strong>.</li>
<li>Cover the LDR with your hand and observe the light level change. Breathe on the DHT11 and watch the humidity change.</li>
</ol>
</div>


<div class="lesson-section">
<span class="section-kicker">Code</span>

## Code
{: #code}

<div class="code-topbar"><span class="code-lang">Arduino C++</span></div>

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
</div>


<div class="lesson-section">
<span class="section-kicker">Understanding</span>

## Understanding the Code
{: #understanding}

<table class="def-list">
  <tbody>
    <tr class="def-item">
      <td class="def-term">#include &lt;DHT.h&gt;</td>
      <td class="def-body">Includes the DHT library so you can use its functions.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">DHT dht(DHT_PIN, DHT_TYPE)</td>
      <td class="def-body">Creates a DHT object named <code>dht</code>, configured for pin 7 and DHT11 type.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">dht.begin()</td>
      <td class="def-body">Initializes the DHT sensor.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">dht.readHumidity() / dht.readTemperature()</td>
      <td class="def-body">Read values from the sensor. They return <code>float</code> values (numbers with decimal points).</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">isnan()</td>
      <td class="def-body">Stands for "is not a number". The DHT library returns NaN if a read fails. This check prevents printing garbage data.</td>
    </tr>
    <tr class="def-item">
      <td class="def-term">analogRead(LDR_PIN)</td>
      <td class="def-body">Reads the voltage divider output. High value = more light; low value = less light.</td>
    </tr>
  </tbody>
</table>

<div class="challenge-box">
<p class="challenge-label">Try This</p>
<p>Can you turn on an LED automatically when the light level drops below 300? Wire an LED to pin 9 and add an <code>if</code> statement that turns it on when <code>lightLevel &lt; 300</code>.</p>
</div>
</div>


<div class="lesson-section">
<span class="section-kicker">Reflect</span>

## Reflection Questions
{: #reflect}

1. What is a voltage divider, and why do we use one with the LDR?
2. Why does the DHT11 code use a library instead of reading the pin directly?
3. What does `isnan()` check for, and why is this important?
{: .reflection-list}
</div>


<div class="lesson-section">
<span class="section-kicker">Troubleshooting</span>

## Troubleshooting
{: #troubleshooting}

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| LDR always reads near 0 or 1023 | Voltage divider wired incorrectly | Check that LDR and 10k resistor form a series connection between 5V and GND |
| "DHT11 read error" in Serial Monitor | Wiring issue or missing pull-up | Check data wire connection; add 10k pull-up if using bare sensor |
| Compiler error: "DHT.h not found" | Library not installed | Install DHT sensor library by Adafruit in Library Manager |
| Temperature reads 0.0 | Wrong DHT type constant | Make sure you use DHT11, not DHT22 |
{: .trouble-table}
</div>
