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
  Supply Voltage (V): 
  <input type="number" id="led-supply" step="0.01" inputmode="decimal"><br>
  LED Forward Voltage (V): 
  <input type="number" id="led-forward" step="0.01" inputmode="decimal"><br>
  Desired Current (mA): 
  <input type="number" id="led-current" step="1" inputmode="numeric"><br>
  <button type="button" onclick="calculateLEDResistor()">Calculate</button>
</form>

<p id="led-result"></p>

<script>
function normalizeNumber(value) {
  // Trim, replace comma with dot, then parse
  if (typeof value !== "string") return NaN;
  const cleaned = value.trim().replace(",", ".");
  return parseFloat(cleaned);
}

function calculateLEDResistor() {
  const Vs = normalizeNumber(document.getElementById("led-supply").value);
  const Vf = normalizeNumber(document.getElementById("led-forward").value);
  const I_mA = normalizeNumber(document.getElementById("led-current").value);

  if (!isNaN(Vs) && !isNaN(Vf) && !isNaN(I_mA) && I_mA > 0 && Vs > Vf) {
    const I_A = I_mA / 1000;        // convert mA to A
    const R = (Vs - Vf) / I_A;      // ohms
    document.getElementById("led-result").innerText =
      "Recommended Resistor = " + Math.round(R) + " Ω";
  } else {
    document.getElementById("led-result").innerText =
      "Please enter valid numeric values. Supply voltage must be greater than LED forward voltage.";
  }
}
</script>
