# Robotics Code

This folder contains Arduino sketches used in the Robotics lessons and worksheets.

## Files
<div class="download-buttons">
<a href="{{ '/robotics/code/scanner.ino' | relative_url }}" download class="download-btn">Download scanner.ino</a>
<p>→ Scans the I2C bus to detect the LCD address.</p>
<a href="{{ '/robotics/code/lcd-test.ino' | relative_url }}" download class="download-btn">Download lcd-test.ino</a>
<p>→ Simple test to confirm LCD wiring and address.</p>
<a href="{{ '/robotics/code/jumpman.ino' | relative_url }}" download class="download-btn">Download jumpman.ino</a>
<p>→ Full playable LCD Jumpman game.</p>
</div>

## How to Use
1. Download and open `scanner.ino` to find your LCD’s I2C address.
2. Update `lcd-test.ino` and `jumpman.ino` with that address.
3. Upload `lcd-test.ino` to confirm the LCD works.
4. Upload `jumpman.ino` to play the game.
