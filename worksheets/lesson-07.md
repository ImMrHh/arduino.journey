---
layout: default
title: "Worksheet 07 — Sensors"
---

<div class="print-page">

# Worksheet 07 — Sensors

<div class="ws-header-fields">
<div><label>Name</label><div class="ws-field"></div></div>
<div><label>Date</label><div class="ws-field"></div></div>
<div><label>Group</label><div class="ws-field"></div></div>
</div>

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| LDR | |
| Voltage divider | |
| DHT11 | |
| Library | |
| float | |

---

## Circuit Diagram Space

Draw the LDR voltage divider (A1) and DHT11 connections (pin 7, VCC, GND).

<div class="ws-box"></div>

---

## Code Challenge

Fill in the blanks to read from the DHT11 sensor:

```cpp
#include <___>;

const int DHT_PIN  = 7;
const int DHT_TYPE = DHT11;

DHT dht(___, ___);

void setup() {
  Serial.begin(9600);
  dht.___();
}

void loop() {
  float humidity    = dht.___();
  float temperature = dht.readTemperature();

  if (___(humidity) || isnan(temperature)) {
    Serial.println("Read error");
    return;
  }
  Serial.println(temperature);
  delay(2000);
}
```

---

## Reflection

1. What is a voltage divider, and why do we use one with the LDR?

<div class="ws-box"></div>

2. Why does the DHT11 code use a library instead of reading the pin directly?

<div class="ws-box"></div>

3. What does isnan() check for, and why is this important?

<div class="ws-box"></div>

---

## Self-Assessment

- [ ] I can wire an LDR in a voltage divider circuit
- [ ] I can install a library using Arduino IDE 2 Library Manager
- [ ] I can read temperature and humidity from a DHT11
- [ ] I understand what isnan() does
- [ ] I can display sensor values in Serial Monitor

</div>
