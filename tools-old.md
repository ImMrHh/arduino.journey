---
layout: default
title: Tools
permalink: /tools/
---

# Tools

Welcome! Explore interactive calculators and utilities for our projects.

## Ohm’s Law calculator

<!-- Ohm’s Law Calculator: V = I * R -->
<div id="ohms-calculator" style="max-width: 520px; margin: 1.5em auto; padding: 16px; border: 1px solid #ddd; border-radius: 8px; background:#fff;">
  <h3 style="margin-top:0;">Ohm’s Law Calculator</h3>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
    <label>
      Voltage (V)
      <input id="voltage" type="number" step="any" placeholder="e.g., 5" style="width:100%;">
    </label>
    <label>
      Current (A)
      <input id="current" type="number" step="any" placeholder="e.g., 0.02" style="width:100%;">
    </label>
    <label>
      Resistance (Ω)
      <input id="resistance" type="number" step="any" placeholder="e.g., 250" style="width:100%;">
    </label>
    <label>
      Power (W)
      <input id="power" type="number" step="any" placeholder="auto" style="width:100%;" disabled>
    </label>
  </div>

  <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
    <button id="calcV" class="cta-button" type="button">Solve V</button>
    <button id="calcI" class="cta-button" type="button">Solve I</button>
    <button id="calcR" class="cta-button" type="button">Solve R</button>
    <button id="clearAll" class="cta-button secondary" type="button">Clear</button>
  </div>

  <p id="msg" style="margin-top:10px; font-size:0.95rem; color:#333;"></p>
</div>

<script>
(function() {
  const V = document.getElementById('voltage');
  const I = document.getElementById('current');
  const R = document.getElementById('resistance');
  const P = document.getElementById('power');
  const msg = document.getElementById('msg');

  function parse(x){ return x === '' ? NaN : Number(x); }
  function show(message){ msg.textContent = message; }
  function powerUpdate(){
    const v = parse(V.value), i = parse(I.value);
    if (!isNaN(v) && !isNaN(i)) { P.value = (v * i).toFixed(6); }
    else { P.value = ''; }
  }

  document.getElementById('calcV').onclick = function(){
    const i = parse(I.value), r = parse(R.value);
    if (isNaN(i) || isNaN(r)) return show('Provide current (A) and resistance (Ω) to solve voltage.');
    const v = i * r;
    V.value = v.toFixed(6);
    powerUpdate();
    show('Solved V = I · R');
  };

  document.getElementById('calcI').onclick = function(){
    const v = parse(V.value), r = parse(R.value);
    if (isNaN(v) || isNaN(r) || r === 0) return show('Provide voltage (V) and resistance (Ω), R ≠ 0, to solve current.');
    const i = v / r;
    I.value = i.toFixed(6);
    powerUpdate();
    show('Solved I = V / R');
  };

  document.getElementById('calcR').onclick = function(){
    const v = parse(V.value), i = parse(I.value);
    if (isNaN(v) || isNaN(i) || i === 0) return show('Provide voltage (V) and current (A), I ≠ 0, to solve resistance.');
    const r = v / i;
    R.value = r.toFixed(6);
    powerUpdate();
    show('Solved R = V / I');
  };

  document.getElementById('clearAll').onclick = function(){
    V.value = ''; I.value = ''; R.value = ''; P.value = ''; show('');
  };

  ['input','change'].forEach(evt => {
    V.addEventListener(evt, powerUpdate);
    I.addEventListener(evt, powerUpdate);
  });
})();
</script>
