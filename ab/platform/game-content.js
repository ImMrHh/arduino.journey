/* ================================================================
   GAME CONTENT - Word Lists & Definitions for every unit
   ----------------------------------------------------------------
   Which unit a page uses comes from the address: ?unit=unit-2
   With no ?unit= the page uses unit-1, so older links keep working.

   GAME_CONTENT.vocabulary.all  -> every vocabulary word of the unit
   GAME_CONTENT.spelling.all    -> every spelling word of the unit
   getVocabPool(difficulty) / getSpellingPool(difficulty) give the
   words for Easy / Medium / Challenge. If a tier has too few words
   (a unit with only 2 weeks so far), words from the nearest tier
   are added so a round can always be played.

   TO ADD A NEW WEEK: add weekN arrays to the unit in UNIT_DATA.
   TO ADD A NEW UNIT: add it to UNIT_INFO and UNIT_DATA.
   ================================================================ */

const UNIT_INFO = {
  'unit-1': { number: 1, title: 'Who We Are' },
  'unit-2': { number: 2, title: 'How the World Works' }
};

// Current unit, read from the address (default: unit-1)
const UNIT_ID = (() => {
  const u = new URLSearchParams(window.location.search).get('unit');
  return UNIT_INFO[u] ? u : 'unit-1';
})();

const UNIT_DATA = {

  /* ------------------------------------------------------------
     UNIT 1: Who We Are
     ------------------------------------------------------------ */
  'unit-1': {
    grammarMode: 'simple', // present simple + past simple
    spellingTiers: { easyMax: 4, mediumMax: 7 },

    vocabulary: {
      // Week 1 (definitions from the Week 1 activity packet)
      week1: [
        { word: "grow", def: "To become bigger or more developed over time.", difficulty: "easy" },
        { word: "change", def: "To become different, or to make something different.", difficulty: "easy" },
        { word: "learning", def: "Gaining new knowledge or skills.", difficulty: "easy" },
        { word: "health", def: "The condition of your body and mind; being well or sick.", difficulty: "easy" },
        { word: "emotion", def: "A strong feeling, like happiness, sadness, or anger.", difficulty: "easy" },
        { word: "development", def: "The process of growing, changing, and improving.", difficulty: "medium" },
        { word: "adaptation", def: "A change you make to fit a new situation or environment.", difficulty: "medium" },
        { word: "identity", def: "Who you are; what makes you different from other people.", difficulty: "medium" },
        { word: "puberty", def: "The stage of growth when a child's body starts changing into an adult's body.", difficulty: "medium" },
        { word: "milestone", def: "An important event that marks a stage in someone's life or development.", difficulty: "medium" },
        { word: "responsibility", def: "A duty or job that you are expected to do.", difficulty: "challenge" },
        { word: "independence", def: "Being able to do things by yourself, without needing help.", difficulty: "challenge" },
        { word: "resilience", def: "The ability to recover quickly from difficulties; being able to bounce back.", difficulty: "challenge" },
        { word: "self-awareness", def: "Understanding your own feelings, thoughts, and actions.", difficulty: "challenge" },
        { word: "social skills", def: "The abilities you use to communicate and interact with other people.", difficulty: "challenge" }
      ],

      // Week 2 (definitions written for 5th graders)
      // resilience and self-awareness already appear in Week 1
      week2: [
        { word: "belonging", def: "The feeling that you are accepted and part of a group.", difficulty: "easy" },
        { word: "beliefs", def: "Ideas that you think are true or important.", difficulty: "easy" },
        { word: "curiosity", def: "A strong wish to learn or know something.", difficulty: "easy" },
        { word: "acceptance", def: "Welcoming people or things as they are, without trying to change them.", difficulty: "medium" },
        { word: "empathy", def: "Understanding and sharing how another person feels.", difficulty: "medium" },
        { word: "integrity", def: "Being honest and doing the right thing, even when no one is watching.", difficulty: "medium" },
        { word: "self-worth", def: "Believing that you are valuable and important.", difficulty: "medium" },
        { word: "autonomy", def: "The freedom to make your own choices and decisions.", difficulty: "challenge" },
        { word: "resistance", def: "Fighting against something or refusing to go along with it.", difficulty: "challenge" },
        { word: "adaptability", def: "Being able to change easily when a situation is new or different.", difficulty: "challenge" },
        { word: "assertiveness", def: "Saying what you think or need in a calm, confident, and respectful way.", difficulty: "challenge" },
        { word: "vulnerability", def: "Showing your true feelings, even when it feels risky or uncomfortable.", difficulty: "challenge" }
      ],

      // Week 3 (definitions written for 5th graders)
      // puberty and curiosity already appear in Weeks 1 and 2
      week3: [
        { word: "goal", def: "Something you want to do or achieve in the future.", difficulty: "easy" },
        { word: "habit", def: "Something you do again and again, often without thinking.", difficulty: "easy" },
        { word: "role", def: "The part or job that a person has in a family, group, or team.", difficulty: "easy" },
        { word: "support", def: "Help and encouragement that you give to someone.", difficulty: "easy" },
        { word: "challenge", def: "Something difficult that tests your skills and makes you try hard.", difficulty: "easy" },
        { word: "maturity", def: "Being fully grown, or acting in a sensible, grown-up way.", difficulty: "medium" },
        { word: "decision", def: "A choice you make after thinking about the options.", difficulty: "medium" },
        { word: "wisdom", def: "Good judgment that comes from experience and knowledge.", difficulty: "medium" },
        { word: "transition", def: "A change from one stage or situation to another.", difficulty: "challenge" },
        { word: "generation", def: "A group of people born and living around the same time.", difficulty: "challenge" },
        { word: "expectation", def: "What you believe or hope will happen, or what others want from you.", difficulty: "challenge" },
        { word: "retirement", def: "The time in life when a person stops working, usually because of age.", difficulty: "challenge" },
        { word: "peer pressure", def: "A feeling that you must do something because people your age are doing it.", difficulty: "challenge" }
      ],

      // Week 4 (definitions written for 5th graders)
      week4: [
        { word: "name", def: "The word you use to call a person, place, or thing.", difficulty: "easy" },
        { word: "need", def: "Something you must have to live or be well.", difficulty: "easy" },
        { word: "nest", def: "A home that birds or other animals build for their eggs and babies.", difficulty: "easy" },
        { word: "nod", def: "To move your head up and down, usually to say yes.", difficulty: "easy" },
        { word: "occur", def: "To happen.", difficulty: "easy" },
        { word: "number", def: "A word or symbol that shows how many, like 3 or seven.", difficulty: "medium" },
        { word: "notice", def: "To see or become aware of something.", difficulty: "medium" },
        { word: "object", def: "A thing you can see or touch.", difficulty: "medium" },
        { word: "offer", def: "To hold out or suggest something for someone to take or accept.", difficulty: "medium" },
        { word: "options", def: "The different choices you can pick from.", difficulty: "medium" },
        { word: "observe", def: "To watch something carefully to learn about it.", difficulty: "medium" },
        { word: "hotel", def: "A building where travelers pay to sleep in a room.", difficulty: "medium" },
        { word: "obtain", def: "To get something, often by asking or trying.", difficulty: "challenge" },
        { word: "offend", def: "To make someone feel hurt, upset, or angry.", difficulty: "challenge" },
        { word: "accommodation", def: "A place to stay or live, like a hotel room.", difficulty: "challenge" }
      ]
    },

    spelling: {
      week1: [
        "fold", "food", "foot", "football", "for", "force", "foreign", "forest",
        "forever", "formal", "fortunately", "fortune", "forward", "free", "freeze",
        "fresh", "friend", "friendship", "frog", "from"
      ],
      week2: [
        "front", "frozen", "fruit", "fry", "full", "fun", "function", "funny",
        "fur", "furniture", "further", "gain", "gallery", "game", "gang", "gap",
        "garage", "garden", "garlic", "gas"
      ],
      week3: [
        "gather", "general", "generally", "generate", "generous", "gentle",
        "gentleman", "get", "ghost", "giant", "gift", "girl", "girlfriend",
        "give", "glad", "glass", "glove", "glue", "go", "goal"
      ],
      week4: [
        "goat", "golden", "golf", "good", "goodbye", "goods", "government",
        "grab", "grade", "graduate", "grain", "grandchild", "granddaughter",
        "grandfather", "grandmother", "grandparent", "grandson", "grape",
        "graph", "grass"
      ]
    },

    verbs: {
      all: [
        "ride", "sit down", "stand up", "fight", "laugh", "read", "play", "listen",
        "cry", "think", "sing", "watch tv", "dance", "turn on", "turn off", "win",
        "fly", "cut", "throw away", "sleep", "close", "open", "write", "give",
        "jump", "eat", "drink", "cook", "wash", "wait", "climb", "talk", "crawl"
      ],
      irregular: [
        { base: "ride", past: "rode" },
        { base: "sit down", past: "sat down" },
        { base: "stand up", past: "stood up" },
        { base: "fight", past: "fought" },
        { base: "laugh", past: "laughed" },
        { base: "read", past: "read" },
        { base: "play", past: "played" },
        { base: "listen", past: "listened" },
        { base: "cry", past: "cried" },
        { base: "think", past: "thought" },
        { base: "sing", past: "sang" },
        { base: "watch tv", past: "watched tv" },
        { base: "dance", past: "danced" },
        { base: "turn on", past: "turned on" },
        { base: "turn off", past: "turned off" },
        { base: "win", past: "won" },
        { base: "fly", past: "flew" },
        { base: "cut", past: "cut" },
        { base: "throw away", past: "threw away" },
        { base: "sleep", past: "slept" },
        { base: "close", past: "closed" },
        { base: "open", past: "opened" },
        { base: "write", past: "wrote" },
        { base: "give", past: "gave" },
        { base: "jump", past: "jumped" },
        { base: "eat", past: "ate" },
        { base: "drink", past: "drank" },
        { base: "cook", past: "cooked" },
        { base: "wash", past: "washed" },
        { base: "wait", past: "waited" },
        { base: "climb", past: "climbed" },
        { base: "talk", past: "talked" },
        { base: "crawl", past: "crawled" }
      ]
    }
  },

  /* ------------------------------------------------------------
     UNIT 2: How the World Works
     Weeks 1 and 2 confirmed. Add week3 / week4 here when confirmed.
     ------------------------------------------------------------ */
  'unit-2': {
    grammarMode: 'continuous', // present continuous (W1) + past continuous (W2)
    spellingTiers: { easyMax: 4, mediumMax: 6 },

    vocabulary: {
      // Week 1 (definitions written for 5th graders - please review)
      week1: [
        { word: "design", def: "To plan how something will look or work before you make it.", difficulty: "easy" },
        { word: "function", def: "The job or purpose of something; what it does.", difficulty: "easy" },
        { word: "recycle", def: "To turn used things, like paper or plastic, into new things.", difficulty: "easy" },
        { word: "impact", def: "The strong effect that something has on people or the world.", difficulty: "easy" },
        { word: "discovery", def: "Finding or learning something for the first time.", difficulty: "medium" },
        { word: "connection", def: "A link between two or more people, things, or ideas.", difficulty: "medium" },
        { word: "invention", def: "A brand new thing that someone creates for the first time.", difficulty: "medium" },
        { word: "technology", def: "Tools and machines made with science to help us do things.", difficulty: "medium" },
        { word: "innovation", def: "A new idea or way of doing something that is better than before.", difficulty: "medium" },
        { word: "ecosystem", def: "All the living things in a place and how they depend on each other and on their surroundings.", difficulty: "medium" },
        { word: "pollution", def: "Dirty or harmful things that damage the air, water, or land.", difficulty: "medium" },
        { word: "sustainability", def: "Using things in a way that protects nature so there is enough for the future.", difficulty: "challenge" },
        { word: "conservation", def: "Protecting nature, animals, and resources so they are not lost or wasted.", difficulty: "challenge" },
        { word: "renewable energy", def: "Power from sources that never run out, like the sun, wind, and water.", difficulty: "challenge" },
        { word: "biodiversity", def: "The wide variety of plants, animals, and other living things in one place.", difficulty: "challenge" }
      ],

      // Week 2 (definitions written for 5th graders - please review)
      // "impact" is also in the Week 2 list but is kept once, in Week 1
      week2: [
        { word: "machine", def: "A tool with moving parts that helps people do work.", difficulty: "easy" },
        { word: "energy", def: "The power to make things move, work, or change.", difficulty: "easy" },
        { word: "waste", def: "Things that are thrown away because we no longer use them.", difficulty: "easy" },
        { word: "balance", def: "A steady condition where nothing is too much or too little.", difficulty: "easy" },
        { word: "electricity", def: "A kind of energy that makes lights, phones, and machines work.", difficulty: "medium" },
        { word: "solar power", def: "Electricity or heat made from the sun's light.", difficulty: "medium" },
        { word: "wind turbine", def: "A tall machine with large blades that uses wind to make electricity.", difficulty: "medium" },
        { word: "environment", def: "The air, water, land, and living things around us.", difficulty: "medium" },
        { word: "resources", def: "Useful things from nature, like water, wood, and oil, that people need.", difficulty: "medium" },
        { word: "prototype", def: "The first model of something new, made to test an idea.", difficulty: "medium" },
        { word: "biodegradable", def: "Able to break down naturally and become part of the soil.", difficulty: "challenge" },
        { word: "carbon footprint", def: "The amount of harmful gas that your actions put into the air.", difficulty: "challenge" },
        { word: "greenhouse effect", def: "When gases trap the sun's heat around Earth and make the planet warmer.", difficulty: "challenge" },
        { word: "sustainable development", def: "Growing and improving our world without using up or harming what future people need.", difficulty: "challenge" }
      ]
    },

    spelling: {
      week1: [
        "hardly", "harm", "hat", "hate", "have", "he", "head", "headache",
        "health", "healthy", "hear", "heart", "heat", "heel", "height",
        "helicopter", "hello", "help", "helpful", "her"
      ],
      week2: [
        "here", "hero", "herself", "hide", "him", "himself", "hip", "hire",
        "his", "hit", "hobby", "hold", "holiday", "home", "homework", "honest",
        "horse", "hospital", "host", "hot"
      ]
    },

    verbs: {
      // The 32 verbs of Unit 2, with their -ing form.
      // easy = just add -ing; medium = drop the e, or other small changes;
      // challenge = double the last letter
      continuous: [
        { base: "dream", ing: "dreaming", difficulty: "easy" },
        { base: "sew", ing: "sewing", difficulty: "easy" },
        { base: "smell", ing: "smelling", difficulty: "easy" },
        { base: "kiss", ing: "kissing", difficulty: "easy" },
        { base: "bow", ing: "bowing", difficulty: "easy" },
        { base: "paint", ing: "painting", difficulty: "easy" },
        { base: "stack", ing: "stacking", difficulty: "easy" },
        { base: "bend", ing: "bending", difficulty: "easy" },
        { base: "lift", ing: "lifting", difficulty: "easy" },
        { base: "kneel", ing: "kneeling", difficulty: "easy" },
        { base: "hold", ing: "holding", difficulty: "easy" },
        { base: "jump", ing: "jumping", difficulty: "easy" },
        { base: "pull", ing: "pulling", difficulty: "easy" },
        { base: "push", ing: "pushing", difficulty: "easy" },
        { base: "buy", ing: "buying", difficulty: "medium" },
        { base: "carry", ing: "carrying", difficulty: "medium" },
        { base: "leap", ing: "leaping", difficulty: "medium" },
        { base: "lean", ing: "leaning", difficulty: "medium" },
        { base: "punch", ing: "punching", difficulty: "medium" },
        { base: "pick up", ing: "picking up", difficulty: "medium" },
        { base: "shake", ing: "shaking", difficulty: "medium" },
        { base: "snore", ing: "snoring", difficulty: "medium" },
        { base: "bathe", ing: "bathing", difficulty: "medium" },
        { base: "dive", ing: "diving", difficulty: "medium" },
        { base: "ski", ing: "skiing", difficulty: "medium" },
        { base: "dig", ing: "digging", difficulty: "challenge" },
        { base: "clap", ing: "clapping", difficulty: "challenge" },
        { base: "knit", ing: "knitting", difficulty: "challenge" },
        { base: "hug", ing: "hugging", difficulty: "challenge" },
        { base: "sit", ing: "sitting", difficulty: "challenge" },
        { base: "run", ing: "running", difficulty: "challenge" },
        { base: "drag", ing: "dragging", difficulty: "challenge" }
      ]
    }
  }
};

/* ================================================================
   Build GAME_CONTENT for the current unit
   ================================================================ */

const _unitData = UNIT_DATA[UNIT_ID];

const GAME_CONTENT = {
  unit: UNIT_ID,
  unitInfo: UNIT_INFO[UNIT_ID],
  grammarMode: _unitData.grammarMode,
  vocabulary: Object.assign({}, _unitData.vocabulary, { all: [] }),
  spelling: Object.assign({}, _unitData.spelling, { all: [] }),
  verbs: _unitData.verbs,

  // Helper for present simple (he/she/it), used by Unit 1 Grammar Master
  conjugatePresent: (base) => {
    const mainVerb = base.includes(' ') ? base.split(' ')[0] : base;
    const rest = base.includes(' ') ? ' ' + base.split(' ').slice(1).join(' ') : '';

    // Rules for adding 'es' vs just 's'
    if (mainVerb.endsWith('ch') || mainVerb.endsWith('sh') ||
        mainVerb.endsWith('s') || mainVerb.endsWith('x') || mainVerb.endsWith('z')) {
      return mainVerb + 'es' + rest;
    }
    // If ends in consonant + y, change y to ies
    if (mainVerb.endsWith('y') && mainVerb.length > 1) {
      const beforeY = mainVerb[mainVerb.length - 2];
      if (!'aeiou'.includes(beforeY)) {
        return mainVerb.slice(0, -1) + 'ies' + rest;
      }
    }
    // Default: just add 's'
    return mainVerb + 's' + rest;
  },

  // Difficulty configuration (how many questions per round)
  difficulties: {
    easy: { vocab: 5, spelling: 5, verbs: 5 },
    medium: { vocab: 10, spelling: 10, verbs: 10 },
    challenge: { vocab: 15, spelling: 15, verbs: 15 }
  }
};

// Spelling difficulty is based on word length (cut-offs differ per unit)
function spellingDifficulty(word) {
  const t = _unitData.spellingTiers;
  if (word.length <= t.easyMax) return 'easy';
  if (word.length <= t.mediumMax) return 'medium';
  return 'challenge';
}

// Pool every week together
(function buildPools() {
  const weekKeys = (obj) => Object.keys(obj).filter(k => /^week\d+$/.test(k)).sort();

  GAME_CONTENT.vocabulary.all = weekKeys(GAME_CONTENT.vocabulary).flatMap(k =>
    GAME_CONTENT.vocabulary[k].map(v => ({ ...v, week: Number(k.replace('week', '')) }))
  );

  GAME_CONTENT.spelling.all = weekKeys(GAME_CONTENT.spelling).flatMap(k =>
    GAME_CONTENT.spelling[k].map(word => ({
      word: word,
      week: Number(k.replace('week', '')),
      difficulty: spellingDifficulty(word)
    }))
  );
})();

/* ================================================================
   Utilities
   ================================================================ */

// Utility: Shuffle array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Utility: Get random items from array
function getRandomItems(array, count) {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, array.length));
}

// Utility: Items of one difficulty. If that tier is too small for a round,
// add items from the nearest tier (and a few spares so rounds are not identical).
const DIFFICULTY_ORDER = ['easy', 'medium', 'challenge'];

function topUpPool(all, difficulty, needed) {
  const pool = all.filter(x => x.difficulty === difficulty);
  if (pool.length >= needed) return pool;

  const idx = DIFFICULTY_ORDER.indexOf(difficulty);
  const others = shuffleArray(all.filter(x => x.difficulty !== difficulty))
    .sort((a, b) =>
      Math.abs(DIFFICULTY_ORDER.indexOf(a.difficulty) - idx) -
      Math.abs(DIFFICULTY_ORDER.indexOf(b.difficulty) - idx));

  const target = Math.max(needed, Math.min(needed + 5, all.length));
  return pool.concat(others.slice(0, target - pool.length));
}

// Utility: Vocabulary words (all weeks) for a difficulty level
function getVocabPool(difficulty) {
  const needed = (GAME_CONTENT.difficulties[difficulty] || {}).vocab || 5;
  return topUpPool(GAME_CONTENT.vocabulary.all, difficulty, needed);
}

// Utility: Spelling words (all weeks) for a difficulty level
function getSpellingPool(difficulty) {
  const needed = (GAME_CONTENT.difficulties[difficulty] || {}).spelling || 5;
  return topUpPool(GAME_CONTENT.spelling.all, difficulty, needed);
}

// Utility: Continuous-tense verbs (Unit 2) for a difficulty level
function getVerbPool(difficulty) {
  const needed = (GAME_CONTENT.difficulties[difficulty] || {}).verbs || 5;
  return topUpPool(GAME_CONTENT.verbs.continuous || [], difficulty, needed);
}

// Utility: Build one Unit 2 Grammar Master question with mixed subjects.
// Present continuous uses am / is / are, past continuous uses was / were.
const SUBJECTS_EASY = ['I', 'he', 'she', 'they'];
const SUBJECTS_ALL = ['I', 'you', 'he', 'she', 'we', 'they'];

function presentAux(subject) {
  if (subject === 'I') return 'am';
  if (subject === 'he' || subject === 'she' || subject === 'it') return 'is';
  return 'are';
}

function pastAux(subject) {
  return (subject === 'you' || subject === 'we' || subject === 'they') ? 'were' : 'was';
}

function buildContinuousQuestion(verb, difficulty) {
  const subjects = difficulty === 'easy' ? SUBJECTS_EASY : SUBJECTS_ALL;
  const presentSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const others = subjects.filter(s => s !== presentSubject);
  const pastSubject = others[Math.floor(Math.random() * others.length)];
  const show = (s) => s === 'I' ? 'I' : s.charAt(0).toUpperCase() + s.slice(1);

  return {
    base: verb.base,
    present: presentAux(presentSubject) + ' ' + verb.ing,
    past: pastAux(pastSubject) + ' ' + verb.ing,
    presentSubject: show(presentSubject),
    pastSubject: show(pastSubject)
  };
}

// Utility: Scramble a word so the result is never the same as the original
function scrambleWord(word) {
  const letters = word.split('');
  if (new Set(letters).size < 2) return word;
  let result = word;
  let tries = 0;
  while (result === word && tries < 25) {
    result = shuffleArray(letters).join('');
    tries++;
  }
  return result;
}

// Utility: Get random definition options (1 correct + 3 distractors)
function getDefinitionOptions(vocab, allVocab) {
  const options = [vocab.def];
  const distractors = allVocab
    .filter(v => v.word !== vocab.word)
    .map(v => v.def);
  const randomDistracts = getRandomItems(distractors, 3);
  return shuffleArray([...options, ...randomDistracts]);
}

// Utility: Scoring with attempt penalty
function calculateScore(correct, total, attempts) {
  const baseScore = (correct / total) * 100;
  const attemptPenalty = Math.max(0.1, 1 - ((attempts - 1) * 0.05));
  const finalScore = Math.round(baseScore * attemptPenalty);
  return { baseScore: Math.round(baseScore), finalScore, attemptPenalty: Math.round(attemptPenalty * 100) / 100 };
}

// Format time (seconds to MM:SS)
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/* ================================================================
   Page helpers (games and activities)
   ================================================================ */

// "Back to Unit 1" becomes "Back to Unit 2" and the tab title follows the unit
function applyUnitLabels() {
  const info = GAME_CONTENT.unitInfo;
  const back = document.getElementById('backBtn');
  if (back && /^Back to Unit/.test(back.textContent)) {
    back.textContent = 'Back to Unit ' + info.number;
  }
  document.title = document.title.replace('Who We Are', info.title);
}

// Adds a "Class Leaderboard" button to the end screen, opening the right board
function addClassLeaderboardButton() {
  const back = document.getElementById('backBtn');
  // Only on game pages (the ones with an end screen), not on the hub
  if (!back || !document.getElementById('endScreen') || document.getElementById('classLeaderboardBtn')) return;

  const activity = window.location.pathname.split('/').pop().replace('.html', '');
  const difficulty = new URLSearchParams(window.location.search).get('difficulty') || 'easy';

  const btn = document.createElement('button');
  btn.id = 'classLeaderboardBtn';
  btn.className = 'btn-secondary';
  btn.textContent = '🏆 Class Leaderboard';
  btn.addEventListener('click', () => {
    window.location.href = '../leaderboard.html?unit=' + UNIT_ID +
      '&activity=' + encodeURIComponent(activity) +
      '&difficulty=' + encodeURIComponent(difficulty);
  });
  back.parentNode.insertBefore(btn, back);
}

document.addEventListener('DOMContentLoaded', () => {
  applyUnitLabels();
  addClassLeaderboardButton();
});
