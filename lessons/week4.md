# Week 4: Serial Monitor & Sensors

## 🔹 Lesson Overview

In this lesson, students will:

* Learn how to use the Serial Monitor for debugging and communication.
* Connect a simple sensor (e.g., temperature sensor or light sensor) to Arduino.
* Read sensor values and display them in the Serial Monitor.
* Understand how analog input can be used for real-world data collection.

### Materials

* Arduino board
* USB cable
* Sensor (e.g., LDR or TMP36 temperature sensor)
* Breadboard + jumper wires

### Steps

1. Connect the sensor to Arduino (signal pin → A0, power pins → 5V and GND).
2. Open Arduino IDE and set up Serial communication in `setup()`.
3. Write code to read sensor values and print them to the Serial Monitor.
4. Upload and test: observe sensor readings in real time.
![Week 4 Wiring Diagram](../images/week4-wiring.png)

### Code
```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
  Serial.begin(9600); // start serial communication
}

void loop() {
  sensorValue = analogRead(sensorPin);
  Serial.print("Sensor Value: ");
  Serial.println(sensorValue);
  delay(500);
}
```
### Navigation

[⬅️ Back to Lessons Menu]({{ "/lessons/" | relative_url }}) | [Go to Worksheet ➡️]({{ "/worksheets/" | relative_url }})