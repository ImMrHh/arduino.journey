## Week 1 Worksheet – Intro to Arduino & Blink

### 🧩 Interactive Drag-and-Drop Labeling Activity

Drag the labels to the correct parts of the LED circuit below by dragging and dropping the labels onto the wiring diagram. Try to place each label on the correct component:

<div id="drag-drop-container" style="position: relative; width: 400px; height: 300px; background-image: url('images/week1-wiring.png'); background-size: contain; background-repeat: no-repeat; border: 1px solid #ccc; margin-bottom: 1em;">
  <div draggable="true" id="label-anode" style="position: absolute; top: 10px; left: 10px; background: #f0f0f0; border: 1px solid #999; padding: 5px; cursor: grab; width: 140px; text-align: center;">LED Anode (long leg)</div>
  <div draggable="true" id="label-cathode" style="position: absolute; top: 50px; left: 10px; background: #f0f0f0; border: 1px solid #999; padding: 5px; cursor: grab; width: 140px; text-align: center;">LED Cathode (short leg)</div>
  <div draggable="true" id="label-resistor" style="position: absolute; top: 90px; left: 10px; background: #f0f0f0; border: 1px solid #999; padding: 5px; cursor: grab; width: 140px; text-align: center;">Resistor</div>
  <div draggable="true" id="label-pin" style="position: absolute; top: 130px; left: 10px; background: #f0f0f0; border: 1px solid #999; padding: 5px; cursor: grab; width: 140px; text-align: center;">Digital Pin 8</div>
  <div draggable="true" id="label-gnd" style="position: absolute; top: 170px; left: 10px; background: #f0f0f0; border: 1px solid #999; padding: 5px; cursor: grab; width: 140px; text-align: center;">Ground (GND)</div>

  <div id="drop-anode" style="position: absolute; top: 40px; left: 280px; width: 140px; height: 30px; border: 2px dashed #666; border-radius: 5px; text-align: center; line-height: 30px; color: #666;">Drop LED Anode here</div>
  <div id="drop-cathode" style="position: absolute; top: 120px; left: 280px; width: 140px; height: 30px; border: 2px dashed #666; border-radius: 5px; text-align: center; line-height: 30px; color: #666;">Drop LED Cathode here</div>
  <div id="drop-resistor" style="position: absolute; top: 80px; left: 150px; width: 140px; height: 30px; border: 2px dashed #666; border-radius: 5px; text-align: center; line-height: 30px; color: #666;">Drop Resistor here</div>
  <div id="drop-pin" style="position: absolute; top: 10px; left: 150px; width: 140px; height: 30px; border: 2px dashed #666; border-radius: 5px; text-align: center; line-height: 30px; color: #666;">Drop Digital Pin 8 here</div>
  <div id="drop-gnd" style="position: absolute; top: 160px; left: 150px; width: 140px; height: 30px; border: 2px dashed #666; border-radius: 5px; text-align: center; line-height: 30px; color: #666;">Drop Ground (GND) here</div>
</div>

<script>
  const labels = document.querySelectorAll('#drag-drop-container [draggable="true"]');
  const drops = document.querySelectorAll('#drag-drop-container div[id^="drop-"]');

  labels.forEach(label => {
    label.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });
  });

  drops.forEach(drop => {
    drop.addEventListener('dragover', e => {
      e.preventDefault();
      drop.style.backgroundColor = '#e0e0e0';
    });
    drop.addEventListener('dragleave', e => {
      drop.style.backgroundColor = '';
    });
    drop.addEventListener('drop', e => {
      e.preventDefault();
      drop.style.backgroundColor = '';
      const id = e.dataTransfer.getData('text/plain');
      const dragged = document.getElementById(id);
      if (dragged) {
        drop.textContent = dragged.textContent;
        dragged.style.display = 'none';
      }
    });
  });
</script>

---

## 🎯 Objectives

- Understand what Arduino is and how it controls inputs/outputs.
- Wire an LED with a current-limiting resistor safely to a digital pin.
- Upload the Blink sketch and successfully modify timing.
- Use Ohm’s Law to justify resistor choices.

---

## 🔌 Wiring Guide

- Pin 8 → resistor → LED anode (long leg)  
- LED cathode (short leg) → GND
![Blink Wiring Diagram](../images/week1-wiring.png)
---

## 💻 Starter Code

```cpp
// Week 1: Blink (Pin 8)
void setup() {
  pinMode(8, OUTPUT); // Set pin 8 as output
}

void loop() {
  digitalWrite(8, HIGH); // LED on
  delay(500);            // Wait 0.5 seconds
  digitalWrite(8, LOW);  // LED off
  delay(500);            // Wait 0.5 seconds
}
```