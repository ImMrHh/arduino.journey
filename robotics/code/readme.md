# Robotics Code

This folder contains Arduino sketches used in the Robotics lessons and worksheets.

## Files
- **scanner.ino** → Scans the I2C bus to detect the LCD address.
- **lcd-test.ino** → Simple test to confirm LCD wiring and address.
- **jumpman.ino** → Full playable LCD Jumpman game.

## How to Use
1. Run `scanner.ino` to find your LCD’s I2C address.
2. Update `lcd-test.ino` and `jumpman.ino` with that address.
3. Upload `lcd-test.ino` to confirm the LCD works.
4. Upload `jumpman.ino` to play the game.
