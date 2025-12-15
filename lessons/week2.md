---
title: "Week 2 Lesson – LEDs, Buttons & Variables"
layout: default
---

# Week 2 Lesson – LEDs, Buttons & Variables

---

## 🎯 Objectives
- Understand how buttons provide digital input and LEDs respond as outputs.  
- Learn how to define and use variables in Arduino code.  
- Explore Boolean logic for toggling LED states.  
- Practice combining inputs (buttons) with outputs (LEDs).  

---

## 📖 Lesson Content

### Digital Input & Output
- **Digital input:** Reads HIGH (1) or LOW (0) from a button.  
- **Digital output:** Sends HIGH (5V) or LOW (0V) to an LED.  
- Buttons let us control LEDs interactively.  

### Defining Variables
- A **variable** is a named “box” in memory that stores information.  
- We define variables at the top of our code so Arduino knows what type of data they hold.  
- Example:  
  - `const int ledPin = 8;` → stores the LED pin number.  
  - `bool ledState = false;` → stores whether the LED is ON (`true`) or OFF (`false`).  
- Variables make code flexible: instead of writing “8” everywhere, we use `ledPin`.  

### Boolean Logic
- **Boolean (bool):** A variable type that stores `true` or `false`.  
- Useful for ON/OFF states like LEDs.  
- Toggle logic: `ledState = !ledState;` flips the value each time a button is pressed.  

### Debounce
- Buttons can “bounce” and trigger multiple times.  
- Adding a short delay (e.g., 250 ms) prevents accidental double toggles.  

---

## 🧪 Demonstration
1. Wire one button to pin D2 and one LED to pin D8.  
2. Upload starter code with a Boolean variable.  
3. Press the button: LED toggles ON/OFF.  
4. Add a second button + LED to expand control.  

---

## 🔄 Extensions
- Experiment with different debounce delays.  
- Add comments to explain each line of code.  
- Challenge: Create a “master switch” button that toggles both LEDs at once.  

---

## 💡 Key Vocabulary
- **Variable = Variable**  
- **Boolean = Booleano**  
- **Toggle = Alternar**  
- **Debounce = Rebote**  
- **Digital input/output = Entrada/Salida digital**  

---

## 📝 Reflection Prompt
- Why do we define variables instead of writing numbers directly in code?  
- How does a Boolean variable help us remember LED state?  
- What happens if we remove the debounce delay?  

---

## 🧭 Navigation
[Back to Lessons]({{ "/lessons/" | relative_url }}) [Back to Worksheets]({{ "/worksheets/" | relative_url }})
