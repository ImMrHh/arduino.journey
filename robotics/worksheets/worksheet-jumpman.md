# Worksheet: LCD Jumpman Game

## Objectives
- Wire and test an LCD with Arduino.
- Determine the correct I2C address of the LCD.
- Run a simple test sketch to confirm display functionality.
- Implement and play the Jumpman game.

---

## Materials
- Arduino Uno (or equivalent)
- 16×2 or 20×4 LCD with I2C backpack
- Breadboard, jumper wires
- Push button + resistor

---

## Step 1: Wiring Diagram
Connect the LCD with I2C backpack:
- **VCC → 5V**
- **GND → GND**
- **SDA → A4**
- **SCL → A5**

Connect the push button to digital pin 2 with a pull‑down or pull‑up resistor.

---

## Step 2: Find the LCD Address
Upload and run the scanner sketch to detect your LCD’s I2C address:  
[scanner.ino](../code/scanner.ino)

---

## Step 3: Test the LCD
Use the detected address in this test sketch to confirm wiring:  
[lcd-test.ino](../code/lcd-test.ino)

---

## Step 4: Play the Jumpman Game
Now upload the full Jumpman sketch and play:  
[jumpman.ino](../code/jumpman.ino)

---

## Reflection
- Why is it important to test the LCD before coding the game?
- What happens if you use the wrong I2C address?
