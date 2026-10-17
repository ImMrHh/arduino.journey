/* ================================================================
   Assessments Apps Script  (version 2: Unit 2 + rejection log + TeacherView)
   1. Old pages: saved to the Results tab (behavior unchanged)
   2. Word Study Platform: saved to the PlatformScores tab
   3. Rejected platform scores: logged in the PlatformRejects tab
   4. TeacherView tab: best score per student per activity (menu: Word Study)
   ================================================================ */

var PLATFORM_SHEET = 'PlatformScores';
var REJECTS_SHEET = 'PlatformRejects';
var TEACHER_SHEET = 'TeacherView';

var PLATFORM_HEADERS = ['Timestamp', 'ScoreId', 'Name', 'Group', 'Unit', 'Activity',
  'Difficulty', 'Score', 'BaseScore', 'Attempts', 'Correct', 'Total', 'TimeSeconds'];
var REJECT_HEADERS = ['Timestamp', 'Reason', 'ScoreId', 'Name', 'Group', 'Unit',
  'Activity', 'Difficulty', 'Score', 'RawData'];

var ACTIVITIES = ['match-meaning', 'unscramble', 'wordsearch',
  'grammar-master', 'vocabulary-vault', 'spelling-blitz'];
var DIFFICULTIES = ['easy', 'medium', 'challenge'];
var UNIT_IDS = ['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5', 'unit-6'];

// Must match ab/platform/assets/js/students.js
// The hidden teacher test group T is left out on purpose.
var ROSTER = {
  A: ['Fatima', 'Iker', 'Jules', 'JoseL', 'DiegoG', 'Cons', 'Gabo', 'Pau', 'SantiL',
      'Alonso', 'Diego2nd', 'Emi', 'Oli', 'Arthur', 'Emma', 'JP', 'SantiS', 'Majo'],
  B: ['Rodri', 'JuanA', 'Alex', 'EmiB', 'Jero', 'Thomas', 'Thiago', 'Nats', 'Pato',
      'Bruno', 'Max', 'Anto', 'Aitana', 'Juan2nd', 'Sil', 'Anya', 'Luka', 'Ian', 'Xime']
};

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ---------------------------------------------------------------
// Entry points
// ---------------------------------------------------------------

function doPost(e) {
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ status: 'error', message: 'Invalid JSON' });
  }

  if (data && data.type === 'platform_score') {
    return handlePlatformScore_(data);
  }
  return handleLegacyResult_(data);
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === 'leaderboards') {
    var unit = /^unit-[1-6]$/.test(p.unit || '') ? p.unit : 'unit-1';
    var limit = Number(p.limit) === 10 ? 10 : 5;
    return json_(getLeaderboards_(unit, limit));
  }
  return json_({ status: 'ready' });
}

// ---------------------------------------------------------------
// Old pages (same logic as before)
// ---------------------------------------------------------------

function handleLegacyResult_(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var results = ss.getSheetByName("Results");

  var quizQuestions = Number(data.quizQuestions) || 0;
  var quizCorrect = Number(data.quizCorrect) || 0;
  var accuracy = quizQuestions > 0 ? Math.round((quizCorrect / quizQuestions) * 1000) / 10 : 0;
  var grade = Math.round((accuracy / 100) * 10 * 10) / 10;

  results.appendRow([
    new Date(),
    data.studentId || "",
    data.studentName || "",
    data.group || "",
    data.activity || "",
    data.score || "",
    quizQuestions,
    quizCorrect,
    accuracy,
    data.duration || "",
    grade,
    data.sessionId || ""
  ]);

  return json_({ status: "ok", grade: grade });
}

// ---------------------------------------------------------------
// Word Study Platform: saving scores
// ---------------------------------------------------------------

function getPlatformSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(PLATFORM_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(PLATFORM_SHEET);
    sheet.appendRow(PLATFORM_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, PLATFORM_HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function getRejectsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(REJECTS_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(REJECTS_SHEET);
    sheet.appendRow(REJECT_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, REJECT_HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

// Every refused score is written down, so a silent drop is never a mystery
function reject_(reason, d) {
  try {
    var raw = '';
    try { raw = JSON.stringify(d).slice(0, 500); } catch (err) { raw = String(d); }
    getRejectsSheet_().appendRow([
      new Date(), reason,
      String((d && d.scoreId) || ''),
      String((d && d.name) || ''),
      String((d && d.group) || ''),
      String((d && d.unit) || ''),
      String((d && d.activity) || ''),
      String((d && d.difficulty) || ''),
      (d && d.score !== undefined) ? String(d.score) : '',
      raw
    ]);
  } catch (err) {
    // logging must never break saving
  }
  return json_({ status: 'error', message: reason });
}

function handlePlatformScore_(d) {
  var name = String(d.name || '').trim();
  var group = String(d.group || '').trim().toUpperCase();
  var unit = String(d.unit || 'unit-1');
  var activity = String(d.activity || '');
  var difficulty = String(d.difficulty || '');
  var scoreId = String(d.scoreId || '');
  var score = Number(d.score);

  // The teacher test user never gets recorded (and is not an error)
  if (group === 'T') return json_({ status: 'ignored', reason: 'test user' });

  if (!ROSTER[group] || ROSTER[group].indexOf(name) === -1) {
    return reject_('Unknown student (name or group not in ROSTER)', d);
  }
  if (ACTIVITIES.indexOf(activity) === -1 || DIFFICULTIES.indexOf(difficulty) === -1) {
    return reject_('Unknown activity or difficulty', d);
  }
  if (UNIT_IDS.indexOf(unit) === -1) {
    return reject_('Unknown unit', d);
  }
  if (isNaN(score) || score < 0 || score > 100) {
    return reject_('Score outside 0-100', d);
  }
  if (!scoreId || scoreId.length > 120) {
    return reject_('Missing or bad score id', d);
  }

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (err) {
    return reject_('Busy (could not get lock)', d);
  }

  try {
    var sheet = getPlatformSheet_();
    var last = sheet.getLastRow();

    if (last > 1) {
      var found = sheet.getRange(2, 2, last - 1, 1)
        .createTextFinder(scoreId).matchEntireCell(true).findNext();
      if (found) return json_({ status: 'duplicate' });
    }

    sheet.appendRow([
      new Date(), scoreId, name, group, unit, activity, difficulty,
      Math.round(score),
      Number(d.baseScore) || 0,
      Number(d.attempts) || 0,
      Number(d.correct) || 0,
      Number(d.total) || 0,
      Number(d.time) || 0
    ]);

    var keys = [];
    UNIT_IDS.forEach(function (u) { keys.push('lb_' + u + '_5', 'lb_' + u + '_10'); });
    CacheService.getScriptCache().removeAll(keys);
  } finally {
    lock.releaseLock();
  }

  return json_({ status: 'ok' });
}

// ---------------------------------------------------------------
// Word Study Platform: leaderboards (whole generation)
// ---------------------------------------------------------------

function getLeaderboards_(unit, limit) {
  var cache = CacheService.getScriptCache();
  var cacheKey = 'lb_' + unit + '_' + limit;
  var cached = cache.get(cacheKey);
  if (cached) return JSON.parse(cached);

  var boards = {};
  ACTIVITIES.forEach(function (a) {
    boards[a] = {};
    DIFFICULTIES.forEach(function (df) { boards[a][df] = []; });
  });

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(PLATFORM_SHEET);
  if (sheet && sheet.getLastRow() > 1) {
    var rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, PLATFORM_HEADERS.length).getValues();
    var best = {};

    rows.forEach(function (r) {
      var name = r[2], group = r[3], rowUnit = r[4], activity = r[5], difficulty = r[6];
      var score = Number(r[7]), time = Number(r[12]) || 0;
      if (rowUnit !== unit || !boards[activity] || !boards[activity][difficulty]) return;

      var key = activity + '|' + difficulty + '|' + group + '|' + name;
      var cur = best[key];
      if (!cur || score > cur.score || (score === cur.score && time < cur.time)) {
        best[key] = { activity: activity, difficulty: difficulty,
                      name: name, group: group, score: score, time: time };
      }
    });

    Object.keys(best).forEach(function (k) {
      var b = best[k];
      boards[b.activity][b.difficulty].push(
        { name: b.name, group: b.group, score: b.score, time: b.time });
    });

    ACTIVITIES.forEach(function (a) {
      DIFFICULTIES.forEach(function (df) {
        boards[a][df].sort(function (x, y) { return (y.score - x.score) || (x.time - y.time); });
        boards[a][df] = boards[a][df].slice(0, limit);
      });
    });
  }

  var result = { status: 'ok', unit: unit, updated: new Date().toISOString(), boards: boards };
  cache.put(cacheKey, JSON.stringify(result), 30);
  return result;
}

// ---------------------------------------------------------------
// Teacher view: one row per student, best score per activity.
// Menu: Word Study > Build / refresh TeacherView. Build it once; the
// numbers are live formulas, so they update by themselves.
// Change the unit in B1 and the difficulty in B2 (use "all" for every level).
// ---------------------------------------------------------------

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Word Study')
    .addItem('Build / refresh TeacherView', 'buildTeacherView')
    .addToUi();
}

function buildTeacherView() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  getPlatformSheet_(); // make sure the data tab exists

  var sheet = ss.getSheetByName(TEACHER_SHEET);
  var unit = 'unit-1', difficulty = 'all';
  if (sheet) {
    // Keep the teacher's current choices when rebuilding
    unit = String(sheet.getRange('B1').getValue() || unit);
    difficulty = String(sheet.getRange('B2').getValue() || difficulty);
    sheet.clear();
    sheet.clearConditionalFormatRules();
  } else {
    sheet = ss.insertSheet(TEACHER_SHEET);
  }

  var P = PLATFORM_SHEET + '!';
  var friendly = ['Match Meaning', 'Unscramble', 'Word Search',
                  'Grammar Master', 'Vocabulary Vault', 'Spelling Blitz'];

  sheet.getRange('A1').setValue('Unit').setFontWeight('bold');
  sheet.getRange('B1').setValue(unit);
  sheet.getRange('A2').setValue('Difficulty').setFontWeight('bold');
  sheet.getRange('B2').setValue(difficulty);
  sheet.getRange('B1').setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(UNIT_IDS, true).build());
  sheet.getRange('B2').setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(['all'].concat(DIFFICULTIES), true).build());
  sheet.getRange('D1').setValue('Best score (%) per activity. Blank = not played yet.');
  sheet.getRange('D2').setValue('Pick the unit in B1 and the difficulty in B2.');

  // Row 4: friendly names. Row 5: activity ids used by the formulas.
  var head = ['Group', 'Name'].concat(friendly).concat(['Plays', 'Last played']);
  var ids = ['', ''].concat(ACTIVITIES).concat(['', '']);
  sheet.getRange(4, 1, 1, head.length).setValues([head]).setFontWeight('bold')
    .setBackground('#7cb342').setFontColor('#ffffff');
  sheet.getRange(5, 1, 1, ids.length).setValues([ids]).setFontColor('#999999').setFontSize(8);

  var students = [];
  ['A', 'B'].forEach(function (g) {
    ROSTER[g].forEach(function (n) { students.push([g, n]); });
  });

  var diffCrit = 'IF($B$2="all","*",$B$2)';
  var firstRow = 6;
  var formulas = [];
  students.forEach(function (s, i) {
    var row = firstRow + i;
    var line = [];
    for (var c = 0; c < ACTIVITIES.length; c++) {
      var col = String.fromCharCode('C'.charCodeAt(0) + c); // C..H
      line.push('=IFERROR(1/(1/MAXIFS(' + P + '$H:$H,' + P + '$C:$C,$B' + row + ',' +
        P + '$D:$D,$A' + row + ',' + P + '$E:$E,$B$1,' + P + '$F:$F,' + col + '$5,' +
        P + '$G:$G,' + diffCrit + ')),"")');
    }
    line.push('=COUNTIFS(' + P + '$C:$C,$B' + row + ',' + P + '$D:$D,$A' + row + ',' +
      P + '$E:$E,$B$1,' + P + '$G:$G,' + diffCrit + ')');
    line.push('=IFERROR(1/(1/MAXIFS(' + P + '$A:$A,' + P + '$C:$C,$B' + row + ',' +
      P + '$D:$D,$A' + row + ',' + P + '$E:$E,$B$1,' + P + '$G:$G,' + diffCrit + ')),"")');
    formulas.push(line);
  });

  // Group and Name are plain text; only the other columns are formulas
  sheet.getRange(firstRow, 1, students.length, 2).setValues(students);
  sheet.getRange(firstRow, 3, formulas.length, head.length - 2).setFormulas(formulas);
  sheet.getRange(firstRow, 10, formulas.length, 1).setNumberFormat('dd/mm/yyyy hh:mm');
  sheet.getRange(firstRow, 3, formulas.length, 6).setHorizontalAlignment('center');

  // Colour scale: low scores red-ish, high green
  var scoreRange = sheet.getRange(firstRow, 3, formulas.length, 6);
  var rules = [
    SpreadsheetApp.newConditionalFormatRule().whenNumberGreaterThanOrEqualTo(80)
      .setBackground('#c8e6c9').setRanges([scoreRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenNumberBetween(50, 79.999)
      .setBackground('#fff9c4').setRanges([scoreRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenNumberBetween(0.001, 49.999)
      .setBackground('#ffcdd2').setRanges([scoreRange]).build()
  ];
  sheet.setConditionalFormatRules(rules);

  sheet.setFrozenRows(5);
  sheet.setFrozenColumns(2);
  sheet.setColumnWidths(1, 2, 90);
  sheet.setColumnWidths(3, 6, 120);
  sheet.setColumnWidth(10, 150);
  SpreadsheetApp.flush();
}

// ---------------------------------------------------------------
// Self test: run this once from the editor. It leaves no data behind.
// ---------------------------------------------------------------

function selfTest() {
  var id = 'selftest-' + Date.now();
  var base = { type: 'platform_score', scoreId: id, name: 'Fatima', group: 'A',
    unit: 'unit-2', activity: 'unscramble', difficulty: 'easy',
    score: 50, baseScore: 50, attempts: 1, correct: 1, total: 2, time: 12 };

  Logger.log('1. write      -> ' + handlePlatformScore_(base).getContent());
  Logger.log('2. duplicate  -> ' + handlePlatformScore_(base).getContent());

  var testUser = JSON.parse(JSON.stringify(base));
  testUser.scoreId = id + '-t'; testUser.name = 'Henrik'; testUser.group = 'T';
  Logger.log('3. test user  -> ' + handlePlatformScore_(testUser).getContent());

  var stranger = JSON.parse(JSON.stringify(base));
  stranger.scoreId = id + '-x'; stranger.name = 'NotAStudent';
  Logger.log('4. stranger   -> ' + handlePlatformScore_(stranger).getContent());

  // Clean up the test rows (scores tab and rejects tab)
  [getPlatformSheet_(), getRejectsSheet_()].forEach(function (sh) {
    var col = (sh.getName() === REJECTS_SHEET) ? 3 : 2;
    var found;
    while (sh.getLastRow() > 1 &&
      (found = sh.getRange(2, col, sh.getLastRow() - 1, 1)
        .createTextFinder(id).findNext())) {
      sh.deleteRow(found.getRow());
    }
  });
  Logger.log('5. test rows removed');

  var keys = [];
  UNIT_IDS.forEach(function (u) { keys.push('lb_' + u + '_5', 'lb_' + u + '_10'); });
  CacheService.getScriptCache().removeAll(keys);
  Logger.log('6. leaderboard unit-2 -> ' + getLeaderboards_('unit-2', 5).status);
}
