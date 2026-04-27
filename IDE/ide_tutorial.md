---
layout: default
title: "IDE Tutorial"
description: "Step-by-step guide to installing and setting up Arduino IDE 2 for beginners."
---

# Arduino IDE Tutorial: Your First Program

## Introduction
Welcome to Arduino programming! By the end of this tutorial, you'll know how to write code, upload it to your Arduino board, and make it do what you want.

## What You'll Need
- Arduino board (Uno, Nano, or similar)
- USB cable to connect Arduino to computer
- Arduino IDE installed on your computer
- A computer (Windows, Mac, or Linux)

---

## Part 1: Understanding the Arduino IDE

### Opening a New Project
When you open Arduino IDE, you'll see a blank "sketch" (that's what Arduino calls programs). Every sketch has this basic structure:

```
void setup() {
  // Code here runs ONCE when Arduino starts
}

void loop() {
  // Code here runs OVER and OVER forever
}
```

### Key Parts of the IDE Window

```
┌─────────────────────────────────────────────────────────┐
│ File  Edit  Sketch  Tools  Help          [MENU BAR]     │
├─────────────────────────────────────────────────────────┤
│ ✓  →  📁  🔍                              [TOOLBAR]      │
│ Verify Upload                                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  void setup() {                                          │
│    // Your code here                    [CODE AREA]     │
│  }                                                       │
│                                                          │
│  void loop() {                                           │
│    // Your code here                                     │
│  }                                                       │
│                                                          │
├─────────────────────────────────────────────────────────┤
│ Done compiling.                        [MESSAGE AREA]   │
├─────────────────────────────────────────────────────────┤
│ Arduino Uno on COM3                    [STATUS BAR]     │
└─────────────────────────────────────────────────────────┘
```

**Menu Bar** (top): File, Edit, Sketch, Tools, Help
**Toolbar** (below menu): Contains important buttons
- ✓ **Verify** - Checks your code for errors (checkmark button)
- → **Upload** - Sends code to your Arduino (right arrow button)
- 🔍 **Serial Monitor** - Lets Arduino talk to your computer (magnifying glass, far right)

**Code Area** (large white space): Where you write your program
**Message Area** (black box at bottom): Shows errors and upload status
**Status Bar** (very bottom): Shows which board and port you're using

---

## Part 2: Setting Up Your Arduino Board

Before you can upload code, you need to tell the IDE which Arduino board you have and how it's connected.

### Step 1: Connect Your Arduino
```
    Computer USB Port
         ↓
    [USB Cable]
         ↓
    Arduino Board → 💡 Power LED lights up!
```

Plug your Arduino into your computer using the USB cable. You should see a light turn on the board.

### Step 2: Select Your Board Type
```
Tools → Board → Arduino AVR Boards → Arduino Uno ✓
```

1. Click **Tools** in the menu bar
2. Hover over **Board**
3. Select **Arduino AVR Boards**
4. Click **Arduino Uno** (or your specific board)

**Visual Cue**: You'll see a checkmark ✓ next to your selected board.

### Step 3: Select the Port
```
Tools → Port → COM3 (Arduino Uno) ✓
```

1. Click **Tools** in the menu bar
2. Hover over **Port**
3. Select the port with your Arduino
   - **Windows**: Looks like "COM3" or "COM4"
   - **Mac**: Looks like "/dev/cu.usbmodem..." or "/dev/cu.usbserial..."
   - **Linux**: Looks like "/dev/ttyUSB0" or "/dev/ttyACM0"

**Visual Cue**: The correct port usually shows the board name in parentheses, like "COM3 (Arduino Uno)"

**Tip**: If you're not sure which port, unplug the Arduino, check which ports are listed, plug it back in, and see which new port appears!

---

## Part 3: Your First Program - Blink LED

Let's write a program to make the built-in LED on your Arduino blink on and off.

### The Code

```cpp
// Blink Program
// This makes the built-in LED turn on and off

void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 as an output
}

void loop() {
  digitalWrite(13, HIGH);  // Turn LED on
  delay(1000);             // Wait 1 second (1000 milliseconds)
  digitalWrite(13, LOW);   // Turn LED off
  delay(1000);             // Wait 1 second
}
```

### Understanding the Code

**Comments**: Lines starting with `//` are comments - they help humans understand code but Arduino ignores them.

```
Arduino Board (looking down at it):
┌──────────────────────────┐
│  [USB Port]              │
│                          │
│    Digital Pins →        │
│    13 12 11 10 9 8 7     │
│    💡← Built-in LED      │
│     ↑                    │
│   Pin 13                 │
│                          │
│  [Power LED] [Pin 13 LED]│
└──────────────────────────┘
```

**pinMode(13, OUTPUT)**: This tells Arduino that pin 13 will send out electricity (OUTPUT) rather than read sensors (INPUT). Pin 13 is special because it has a built-in LED labeled "L" on the board!

**digitalWrite(13, HIGH)**: Sets pin 13 to HIGH (on, 5 volts). This lights up the LED.
```
Pin 13: HIGH → 💡 LED ON (bright)
```

**digitalWrite(13, LOW)**: Sets pin 13 to LOW (off, 0 volts). This turns off the LED.
```
Pin 13: LOW → ⚫ LED OFF (dark)
```

**delay(1000)**: Makes Arduino wait for 1000 milliseconds (1 second) before moving to the next line.
```
Timeline: |--1 second--|
          0ms        1000ms
```

---

## Part 4: Uploading Your Code

### Step 1: Verify Your Code
```
Click this button → [✓ Verify]
```

1. Click the **✓ Verify** button (or press Ctrl+R / Cmd+R)
2. Watch the message area at the bottom
3. **SUCCESS looks like this:**
```
✅ Done compiling.
   Sketch uses 924 bytes (2%) of program storage space.
```
4. **ERROR looks like this:**
```
❌ error: expected ';' before '}' token
   Arduino:15:1: error: expected ';' before '}' token
```

### Common Errors and Fixes
```
❌ Missing semicolon:          ✅ Fixed:
   digitalWrite(13, HIGH)        digitalWrite(13, HIGH);
                         ↑                              ↑
                    Missing                         Added!
```

- **Missing semicolon**: Every statement needs to end with `;`
- **Misspelled function**: Check spelling of `pinMode`, `digitalWrite`, `delay`
- **Wrong bracket**: Make sure every `{` has a matching `}`

### Step 2: Upload to Arduino
```
Click this button → [→ Upload]
```

1. Click the **→ Upload** button (or press Ctrl+U / Cmd+U)
2. **Watch for these signs:**
```
   Arduino Board:
   TX LED: ⚡⚡⚡ ← Flashing rapidly (sending data)
   RX LED: ⚡⚡⚡ ← Flashing rapidly (receiving data)
   
   Message Area:
   "Uploading..."
   ⏳ Progress bar moving
   ✅ "Done uploading."
```
3. Your LED should start blinking!

**Visual Timeline:**
```
Click Upload → TX/RX flash → "Done uploading" → LED starts blinking
     (2 sec)      (3 sec)          (1 sec)           (ongoing)
```

---

## Part 5: Troubleshooting Guide

### Problem: "Port not found" or "Permission denied"
**Solutions**:
- Make sure USB cable is fully plugged in
- Try a different USB port
- Check that you selected the correct port in Tools → Port
- Some cables are "charge only" - try a different cable

### Problem: "avrdude: stk500_recv(): programmer is not responding"
**Solutions**:
- Make sure no other program is using the Arduino
- Close Serial Monitor if it's open
- Press the reset button on Arduino, then immediately upload
- Check that you selected the correct board type

### Problem: Orange error messages when verifying
**Solutions**:
- Read the error message carefully - it usually tells you what's wrong
- Check for missing semicolons `;`
- Make sure all brackets match `{ }`
- Check spelling of function names

### Problem: Code uploads but LED doesn't blink
**Solutions**:
- Make sure you're looking at the right LED (labeled "L" on most boards)
- Try pressing the reset button on the Arduino
- Your code might have uploaded to the wrong board - check Tools → Board

---

## Quick Reference

### Essential Arduino Functions
- `pinMode(pin, mode)` - Set a pin as INPUT or OUTPUT
- `digitalWrite(pin, value)` - Set a pin HIGH or LOW
- `digitalRead(pin)` - Read if a pin is HIGH or LOW
- `delay(milliseconds)` - Pause for a specific time
- `Serial.begin(speed)` - Start serial communication
- `Serial.println(message)` - Send a message to computer

### Keyboard Shortcuts
- **Ctrl+R / Cmd+R**: Verify code
- **Ctrl+U / Cmd+U**: Upload code
- **Ctrl+Shift+M / Cmd+Shift+M**: Open Serial Monitor
- **Ctrl+S / Cmd+S**: Save sketch
---

## Final Tips for Success

1. **Save often**: Arduino IDE can crash, so save your work regularly
2. **Use comments**: Explain what your code does - your future self will thank you
3. **Start simple**: Get basic code working before adding complexity
4. **Read error messages**: They're trying to help you!
5. **Ask for help**: Everyone gets stuck sometimes - that's part of learning
