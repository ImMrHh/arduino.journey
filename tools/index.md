---
title: "Tools"
layout: default
---

# 🛠 Tools

Interactive calculators and utilities for your Arduino projects.

<hr>

## Ohm's Law Calculator

Enter any two values and calculate the third:

<form id="ohms-law">
  Voltage (V): <input type="number" id="voltage" step="any"><br>
  Current (I): <input type="number" id="current" step="any"><br>
  Resistance (R): <input type="number" id="resistance" step="any"><br>
  <button type="button" onclick="calculateOhmsLaw()">Calculate</button>
</form>

<p id="ohms-result"></p>

<script>
function calculateOhmsLaw() {
  let V = parseFloat(document.getElementById("voltage").value);
  let I = parseFloat(document.getElementById("current").value);
  let R = parseFloat(document.getElementById("resistance").value);
  let result = "";

  if (!isNaN(V) && !isNaN(I)) {
    R = V / I;
    result = "Resistance = " + R.toFixed(2) + " Ω";
  } else if (!isNaN(V) && !isNaN(R)) {
    I = V / R;
    result = "Current = " + I.toFixed(2) + " A";
  } else if (!isNaN(I) && !isNaN(R)) {
    V = I * R;
    result = "Voltage = " + V.toFixed(2) + " V";
  } else {
    result = "Please enter any two values.";
  }

  document.getElementById("ohms-result").innerText = result;
}
</script>

## Resistor Color Code Decoder

Enter the 4-band colors to calculate resistance:

<form id="resistor-code">
  Band 1: <input type="text" id="band1"><br>
  Band 2: <input type="text" id="band2"><br>
  Multiplier: <input type="text" id="multiplier"><br>
  Tolerance: <input type="text" id="tolerance"><br>
  <button type="button" onclick="decodeResistor()">Decode</button>
</form>

<p id="resistor-result"></p>

<script>
const colorValues = {
  black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
  green: 5, blue: 6, violet: 7, gray: 8, white: 9
};
const multiplierValues = {
  black: 1, brown: 10, red: 100, orange: 1000, yellow: 10000,
  green: 100000, blue: 1000000, violet: 10000000, gray: 100000000, white: 1000000000
};
const toleranceValues = {
  brown: "±1%", red: "±2%", green: "±0.5%", blue: "±0.25%",
  violet: "±0.1%", gray: "±0.05%", gold: "±5%", silver: "±10%"
};

function decodeResistor() {
  let b1 = document.getElementById("band1").value.toLowerCase();
  let b2 = document.getElementById("band2").value.toLowerCase();
  let mult = document.getElementById("multiplier").value.toLowerCase();
  let tol = document.getElementById("tolerance").value.toLowerCase();

  if (colorValues[b1] !== undefined && colorValues[b2] !== undefined && multiplierValues[mult] !== undefined) {
    let value = (colorValues[b1] * 10 + colorValues[b2]) * multiplierValues[mult];
    let tolerance = toleranceValues[tol] || "";
    document.getElementById("resistor-result").innerText = "Resistance = " + value + " Ω " + tolerance;
  } else {
    document.getElementById("resistor-result").innerText = "Invalid color input.";
  }
}
</script>

## LED Resistor Calculator

Calculate the resistor needed for an LED given supply voltage, LED forward voltage, and desired current.

<form id="led-resistor">
  Supply Voltage (V): <input type="number" id="supply" step="any"><br>
  LED Forward Voltage (V): <input type="number" id="forward" step="any"><br>
  Desired Current (mA): <input type="number" id="current" step="any"><br>
  <button type="button" onclick="calculateLEDResistor()">Calculate</button>
</form>

<p id="led-result"></p>

<script>
function calculateLEDResistor() {
  let Vs = parseFloat(document.getElementById("supply").value);
  let Vf = parseFloat(document.getElementById("forward").value);
  let I = parseFloat(document.getElementById("current").value);

  if (!isNaN(Vs) && !isNaN(Vf) && !isNaN(I) && I > 0 && Vs > Vf) {
    let R = (Vs - Vf) / (I / 1000); // convert mA to A
    document.getElementById("led-result").innerText =
      "Recommended Resistor = " + R.toFixed(0) + " Ω";
  } else {
    document.getElementById("led-result").innerText =
      "Please enter valid numeric values. Supply voltage must be greater than LED forward voltage.";
  }
}
</script>
