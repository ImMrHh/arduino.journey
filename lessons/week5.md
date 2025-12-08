---
title: "Week 5 Lesson"
layout: default
---

# Week 5 – Buzzer & Tone Generation

## 🎯 Objectives
- Understand how buzzers produce sound using electrical signals.
- Learn to use the `tone()` and `noTone()` functions in Arduino.
- Explore how frequency relates to pitch.
- Connect sound output to inputs (button, potentiometer).

---

## 📖 Lesson Content

### What is a Buzzer?
A **piezo buzzer** converts electrical signals into sound. By sending rapid pulses of voltage, the buzzer vibrates and produces tones.

### Frequency and Pitch
- **Frequency (Hz)** = how many cycles per second.
- Higher frequency → higher pitch.
- Example: 440 Hz = musical note A4.

### Arduino Functions
- `tone(pin, frequency)` → plays a tone at the given frequency.
- `noTone(pin)` → stops the tone.

### Real‑World Applications
- Buzzers are used in alarms, timers, and feedback systems.
- Combining buzzers with sensors or buttons creates interactive devices.

---

## 🧪 Demonstration
1. Connect a buzzer to pin 9 with a resistor.
2. Upload the sample code.
3. Observe the buzzer playing a tone.
4. Change the frequency value and listen to the pitch change.

---

## 🔄 Extensions
- Use a **button** to trigger the buzzer.
- Map a **potentiometer** value to frequency for pitch control.
- Program a short melody using multiple `tone()` calls.

---

## 💡 Key Vocabulary
- Frequency = Frecuencia  
- Pitch = Altura del sonido  
- Buzzer = Zumbador  
- Hertz (Hz) = Ciclos por segundo  
- Tone = Tono  

---

## 📝 Reflection Prompt
- How does changing frequency affect the sound you hear?  
- Why is PWM useful for generating audio signals?  
- Where do you encounter buzzers in everyday life?
