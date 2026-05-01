#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Replace 0x27 with the address found by scanner.ino
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("LCD Test OK!");
}

void loop() {}
