#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Adjust address if needed (commonly 0x27 or 0x3F)
LiquidCrystal_I2C lcd(0x27, 16, 2);

const int VISIBLE_COLS = 12;
const int ROWS = 6;

const int HUD_ROW = 0;
const int GROUND_ROW = ROWS - 1;
const int PLAYER_COL = 0;
const int BTN_PIN = 2;

unsigned long score = 0;
bool gameOver = false;

struct Obstacle {
  int x;
  int y;
  bool counted;
};
const int MAX_OBS = 3;
Obstacle obs[MAX_OBS];

unsigned long lastFrame = 0;
const unsigned long FRAME_MS = 250;

// --- Jump sequence with glyphs ---
struct JumpStep {
  int row;
  byte glyph;
};
JumpStep jumpSequence[6] = {
  {GROUND_ROW, 0},        // standing
  {GROUND_ROW-1, 2},      // take-off
  {GROUND_ROW-2, 3},      // mid-air
  {GROUND_ROW-2, 4},      // peak
  {GROUND_ROW-1, 3},      // mid-air descent
  {GROUND_ROW, 0}         // back to standing
};
int jumpIndex = -1;
int lastPlayerRow = GROUND_ROW;

void spawnObstacles() {
  int spacing[MAX_OBS] = {0, VISIBLE_COLS/2, VISIBLE_COLS};
  for (int i = 0; i < MAX_OBS; i++) {
    obs[i].x = VISIBLE_COLS - 1 + spacing[i];
    obs[i].y = GROUND_ROW;
    obs[i].counted = false;
  }
}

void clearPlayfield() {
  for (int r = 1; r <= GROUND_ROW; r++) {
    lcd.setCursor(0, r);
    for (int c = 0; c < VISIBLE_COLS; c++) lcd.print(" ");
  }
}

void drawPlayer() {
  lcd.setCursor(PLAYER_COL, lastPlayerRow);
  lcd.print(" ");
  int py = (jumpIndex >= 0) ? jumpSequence[jumpIndex].row : GROUND_ROW;
  byte glyph = (jumpIndex >= 0) ? jumpSequence[jumpIndex].glyph : 0;
  lcd.setCursor(PLAYER_COL, py);
  lcd.write(glyph);
  lastPlayerRow = py;
}

void drawObstacles() {
  for (int i = 0; i < MAX_OBS; i++) {
    if (obs[i].x >= 0 && obs[i].x < VISIBLE_COLS) {
      lcd.setCursor(obs[i].x, obs[i].y);
      lcd.write(byte(1));
    }
  }
}

void updateObstacles() {
  for (int i = 0; i < MAX_OBS; i++) {
    obs[i].x--;
    if (obs[i].x < -1) {
      obs[i].x = VISIBLE_COLS - 1 + random(4, 10);
      obs[i].y = GROUND_ROW;
      obs[i].counted = false;
    }
    if (!obs[i].counted && obs[i].x == PLAYER_COL) {
      score++;
      obs[i].counted = true;
    }
  }
}

bool checkCollision() {
  int py = (jumpIndex >= 0) ? jumpSequence[jumpIndex].row : GROUND_ROW;
  for (int i = 0; i < MAX_OBS; i++) {
    if (obs[i].x == PLAYER_COL && obs[i].y == py) return true;
  }
  return false;
}

void drawHUD() {
  int hudCol = VISIBLE_COLS - 7;
  lcd.setCursor(hudCol, HUD_ROW);
  lcd.print("Score:");
  lcd.print(score);
}

void resetGame() {
  gameOver = false;
  score = 0;
  jumpIndex = -1;
  lastPlayerRow = GROUND_ROW;
  spawnObstacles();
  lcd.clear();
}

void setup() {
  randomSeed(analogRead(A0));
  pinMode(BTN_PIN, INPUT_PULLUP);

  lcd.init();
  lcd.backlight();

  // Glyphs
  byte PLAYER_CHAR[8] = {
    B00100,B01110,B00100,B01110,B10101,B00100,B01010,B10001
  };
  byte OBSTACLE_CHAR[8] = {
    B11111,B11111,B11111,B11111,B11111,B11111,B11111,B11111
  };
  byte TAKEOFF_CHAR[8] = {
    B00100,B01110,B00100,B01110,B00100,B01110,B01010,B10001
  };
  byte MIDAIR_CHAR[8] = {
    B00100,B01110,B10101,B00100,B01110,B00100,B01010,B10001
  };
  byte PEAK_CHAR[8] = {
    B01110,B10101,B00100,B01110,B00100,B01110,B01010,B10001
  };

  lcd.createChar(0, PLAYER_CHAR); // standing
  lcd.createChar(1, OBSTACLE_CHAR);
  lcd.createChar(2, TAKEOFF_CHAR);
  lcd.createChar(3, MIDAIR_CHAR);
  lcd.createChar(4, PEAK_CHAR);

  resetGame();
  lcd.setCursor(0,1);
  lcd.print("Jump with BTN");
  delay(1200);
  lcd.clear();
}

void loop() {
  static bool prevBtn = HIGH;
  bool btn = digitalRead(BTN_PIN);
  if (btn == LOW && prevBtn == HIGH && !gameOver && jumpIndex < 0) {
    jumpIndex = 0; // start jump
  }
  prevBtn = btn;

  unsigned long now = millis();
  if (now - lastFrame >= FRAME_MS) {
    lastFrame = now;

    if (!gameOver) {
      if (jumpIndex >= 0) {
        jumpIndex++;
        if (jumpIndex >= 6) jumpIndex = -1; // end jump
      }

      updateObstacles();

      clearPlayfield();
      drawHUD();
      drawPlayer();
      drawObstacles();

      if (checkCollision()) {
        gameOver = true;
        lcd.setCursor(0,2);
        lcd.print("Game Over");
        lcd.setCursor(0,3);
        lcd.print("Score:");
        lcd.print(score);
      }
    } else {
      if (digitalRead(BTN_PIN) == LOW) {
        resetGame();
      }
    }
  }
}
