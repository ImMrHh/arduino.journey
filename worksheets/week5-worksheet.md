---
title: "Week 5 Worksheet – Buzzer & Tone Generation"
layout: default
---

# Week 5 Worksheet – Buzzer & Tone Generation

---

## 🎯 Objectives
- **Understanding:** Learn how buzzers produce sound using electrical signals.  
- **Programming:** Use tone() and noTone() functions to generate tones.  
- **Reasoning:** Explain how frequency relates to pitch.  
- **Application:** Combine buzzer output with inputs (button, potentiometer) for interactive projects.  

---

## 🔌 Wiring guide
- **Buzzer:** Connect positive pin → D9 (PWM pin), negative pin → GND.  
- **Resistor:** Place a resistor in series to protect the buzzer.  

![Week 5 wiring diagram](../images/week5-wiring.png)

---

## 💻 Starter code

// Week 5: Buzzer & Tone  
const int buzzerPin = 9;  

void setup() {  
  pinMode(buzzerPin, OUTPUT);  
}  

void loop() {  
  tone(buzzerPin, 440); // Play A4 note (440 Hz)  
  delay(1000);          // Wait 1 second  
  noTone(buzzerPin);    // Stop sound  
  delay(500);           // Wait half a second  
}  

---

## 🧠 Core concepts
- **Buzzer:** A device that converts electrical signals into sound.  
- **Frequency:** Measured in Hertz (Hz), determines pitch.  
- **Tone function:** tone(pin, frequency) generates a square wave at the given frequency.  
- **Pitch:** Higher frequency = higher pitch.  

---

## 🥹 Challenge Tasks
1. Play a short melody using multiple tone() calls.   
2. Experiment with different delays to change rhythm.  

---

## 🔧 Troubleshooting tips
- **Wiring:** Ensure buzzer polarity is correct (positive to pin, negative to GND).  
- **Resistor:** Use a resistor to avoid overdriving the buzzer.  
- **Frequency range:** Some buzzers only respond well within 200–4000 Hz.  
- **Upload checks:** Confirm correct board and COM port before uploading.  

---

## 🤔 Reflection questions
- How does changing frequency affect the sound you hear?  
- Why is PWM useful for generating audio signals?  
- Where do you encounter buzzers in everyday life?  

---

## 💡 Real‑world application
- **Examples:** Alarms, timers, feedback systems in appliances.  
- **Reflection:** How does sound feedback improve user interaction with devices?  

---

## 🧭 Navigation
[Back to Lessons]({{ "/lessons/" | relative_url }}) [Back to Worksheets]({{ "/worksheets/" | relative_url }})
