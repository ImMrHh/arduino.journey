---
title: "Week 2 Worksheet – LEDs & Digital Input/Output"
layout: default
---

# Week 2 Worksheet – LEDs & Digital Input/Output

---

## 🎯 Objectives
- **Understanding:** Learn how buttons provide digital input and LEDs respond as outputs.  
- **Programming:** Use pinMode(), digitalRead(), digitalWrite(), and Boolean variables to manage state.  
- **Reasoning:** Explain why we need variables to “remember” LED states.  
- **Application:** Create toggle behavior and multi‑button control.  

---

## 🔌 Wiring guide
- **Button 1:** Connect one side → D2, other side → GND. Use a pull‑up resistor or pinMode(buttonPin, INPUT_PULLUP).  
- **Button 2:** Connect similarly to D3.  
- **LED 1:** Anode → D8, cathode → GND (with 220Ω resistor).  
- **LED 2:** Anode → D9, cathode → GND (with 220Ω resistor).  

![Week 2 wiring diagram](../images/week2-wiring.png)

---

## 💻 Starter code

// Week 2: LED Toggle with Buttons  
const int button1Pin = 2;  
const int button2Pin = 3;  
const int led1Pin = 8;  
const int led2Pin = 9;  

bool led1State = false; // stores ON/OFF state of LED1  
bool led2State = false; // stores ON/OFF state of LED2  

void setup() {  
  pinMode(button1Pin, INPUT_PULLUP); // button 1 input  
  pinMode(button2Pin, INPUT_PULLUP); // button 2 input  
  pinMode(led1Pin, OUTPUT);          // LED1 output  
  pinMode(led2Pin, OUTPUT);          // LED2 output  
}  

void loop() {  
  // Read button states (LOW when pressed due to INPUT_PULLUP)  
  if (digitalRead(button1Pin) == LOW) {  
    led1State = !led1State;          // toggle LED1 state  
    digitalWrite(led1Pin, led1State);  
    delay(250);                      // debounce delay  
  }  

  if (digitalRead(button2Pin) == LOW) {  
    led2State = !led2State;          // toggle LED2 state  
    digitalWrite(led2Pin, led2State);  
    delay(250);                      // debounce delay  
  }  
}  

---

## 🧠 Core concepts
- **Boolean (bool):** A variable type that stores true or false. Perfect for ON/OFF states.  
- **Toggle logic:** ledState = !ledState; flips the value each press.  
- **Debounce:** A short delay prevents multiple triggers from one press.  
- **INPUT_PULLUP:** Simplifies wiring by using Arduino’s internal resistor.  

---

## 🥹 Challenge Tasks
1. Modify the code so LED1 toggles on/off with each press of Button 1.  
2. Add Button 2 to control LED2 independently.  
3. Comment each line of your code to explain its purpose.  
4. Experiment with different debounce delays (e.g., 100 ms vs 500 ms).  

---

## 🔧 Troubleshooting tips
- **Button wiring:** If LED toggles randomly, check pull‑up resistor or use INPUT_PULLUP.  
- **Debounce:** Too short a delay may cause double toggles.  
- **Boolean logic:** Ensure you use ! (NOT operator) to flip the state.  
- **Upload checks:** Confirm correct board and COM port before uploading.  

---

## 🤔 Reflection questions
- Why do we need a variable to remember LED state?  
- How does INPUT_PULLUP simplify button wiring?  
- What happens if you remove the debounce delay?  

---

## 💡 Real‑world application
- **Examples:** Toggle switches in appliances, light controls, power buttons.  
- **Reflection:** How does storing state make devices more interactive?  

---

## 🧭 Navigation
[Back to Lessons]({{ "/lessons/" | relative_url }}) [Back to Worksheets]({{ "/worksheets/" | relative_url }})
