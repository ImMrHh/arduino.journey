# Week 2 Worksheet – Button Control

---

## 🎯 Objectives
- **Understanding:** Learn how Arduino reads digital inputs from a push button.  
- **Safety:** Use `INPUT_PULLUP` to avoid external resistors and simplify wiring.  
- **Programming:** Write code that responds to button presses with LED actions.  
- **Reasoning:** Explain why logic is inverted when using internal pull‑ups.  

---

## 🔌 Wiring guide
- **Connection:** Button → Pin 2 (digital input).  
- **Pull‑up logic:** Use `pinMode(2, INPUT_PULLUP)` so the pin reads HIGH by default.  
- **Ground:** Button connects to GND when pressed.  
- **Output:** LED anode → Pin 8, cathode → GND.  

![Week 2 wiring diagram](../images/week2-wiring.png)

---

## 💻 Starter code

```cpp
// Week 2: Button + LED
const int buttonPin = 2;
const int ledPin = 8;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP); // Button input with internal pull-up
  pinMode(ledPin, OUTPUT);          // LED output
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {         // LOW means button pressed
    digitalWrite(ledPin, HIGH);     // LED on
  } else {
    digitalWrite(ledPin, LOW);      // LED off
  }
}
```
---

## 🧠 Core concepts
- **Digital input:** `digitalRead(pin)` returns HIGH or LOW.  
- **Pull‑up resistor:** Keeps the pin HIGH until the button connects it to GND.  
- **Logic inversion:** With `INPUT_PULLUP`, pressed = LOW, released = HIGH.  
- **Toggle behavior:** Use variables to remember LED state across presses.  

---

## 🥹 Challenge Tasks
1. Modify the code so the LED **toggles** (stays on until the next press).  
2. Add a second button to control a second LED.  
3. Implement a **debounce** delay (≈50 ms) to avoid false triggers.  
4. Use the button to change the blink speed of the LED.  
5. Comment each line of your code to explain its purpose.  

---

## 🔧 Troubleshooting tips
- **Button orientation:** Ensure the legs are aligned correctly on the breadboard.  
- **Pull‑up logic:** Without `INPUT_PULLUP`, the pin may float and give random values.  
- **LED polarity:** Long leg (anode) to pin/resistor, short leg (cathode) to GND.  
- **Upload checks:** Confirm correct board and COM port before uploading.  

---

## 🤔 Reflection questions
- Why do we use `INPUT_PULLUP` instead of wiring an external resistor?  
- What happens if you connect the button incorrectly?  
- How does the Arduino distinguish between HIGH and LOW states?  

---

## 💡 Real‑world application
- **Examples:** Elevator buttons, game controllers, remote controls, light switches.  
- **Reflection:** How does debounce matter in real devices (e.g., double clicks, accidental presses)?  

---

## 🧭 Navigation
[Back to Lessons]({{ "/lessons/" | relative_url }}) [Back to Worksheets]({{ "/worksheets/" | relative_url }})