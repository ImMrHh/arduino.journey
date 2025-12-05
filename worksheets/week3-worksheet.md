# 📝 Worksheet — Week 3

### Questions

1. What is the purpose of a potentiometer in an Arduino circuit?
2. How does PWM control the brightness of an LED?
3. Why do we need to map the analog input range to the PWM output range?
4. Write a short code snippet to read a potentiometer value and print it to the Serial Monitor.

### Activities

* Build the circuit with a potentiometer and LED as described.
* Modify the code to change the LED brightness based on the potentiometer position.
* Experiment with different delay values and observe the LED behavior.

## 🖼️ Diagram
![Wiring diagram showing potentiometer connected to 5v, GND and Analogue pin 0](../images/week3-wiring.png){: style="max-width:600px; display:block; margin:1em auto;" }

---

### Flash Cards

| Term           | Definition                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------|
| Potentiometer  | A variable resistor used to measure position by changing resistance and output voltage.     |
| PWM            | Pulse Width Modulation, a technique to simulate analog voltage by switching digital signals. |
| analogRead()   | Arduino function to read analog voltage values from sensors (0-1023).                      |
| map()          | Function to convert a number from one range to another, e.g., 0-1023 to 0-255.             |

---

### Bonus Challenge

Try adding a second LED that lights up only when the potentiometer value is above a certain threshold.

---

### Reflection

Write a short paragraph about what you learned this week regarding analog inputs and PWM control.

### Navigation
[Back to Lessons]({{ "/lessons/" | relative_url }}) [Back to Worksheets]({{ "/worksheets/" | relative_url }})
