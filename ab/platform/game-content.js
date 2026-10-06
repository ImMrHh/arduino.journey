/* ================================================================
   GAME CONTENT - Word Lists & Definitions
   Weeks 1-4: Vocabulary, Spelling, Verbs
   ----------------------------------------------------------------
   vocabulary.all  -> every vocabulary word from weeks 1-4
                      (each tagged with week + difficulty)
   spelling.all    -> every spelling word from weeks 1-4
                      (difficulty computed from word length)
   Use getVocabPool(difficulty) / getSpellingPool(difficulty) to
   get the words for Easy / Medium / Challenge.
   ================================================================ */

const GAME_CONTENT = {
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

    // Week 2 (definitions written for 5th graders - please review)
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

    // Week 3 (definitions written for 5th graders - please review)
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

    // Week 4 (definitions written for 5th graders - please review)
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
    ],

    all: [] // built below from week1-week4
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
    ],
    all: [] // built below from week1-week4
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
  },

  // Helper function for present tense conjugation
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

// Spelling difficulty is based on word length:
// 4 letters or fewer = easy, 5-7 = medium, 8 or more = challenge
function spellingDifficulty(word) {
  if (word.length <= 4) return 'easy';
  if (word.length <= 7) return 'medium';
  return 'challenge';
}

// Build the pooled lists (all weeks together)
GAME_CONTENT.vocabulary.all = [1, 2, 3, 4].flatMap(w =>
  GAME_CONTENT.vocabulary['week' + w].map(v => ({ ...v, week: w }))
);

GAME_CONTENT.spelling.all = [1, 2, 3, 4].flatMap(w =>
  GAME_CONTENT.spelling['week' + w].map(word => ({
    word: word,
    week: w,
    difficulty: spellingDifficulty(word)
  }))
);

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

// Utility: Vocabulary words (all weeks) for a difficulty level.
// Falls back to every word if a level ever has too few words.
function getVocabPool(difficulty) {
  const pool = GAME_CONTENT.vocabulary.all.filter(v => v.difficulty === difficulty);
  const needed = (GAME_CONTENT.difficulties[difficulty] || {}).vocab || 5;
  return pool.length >= needed ? pool : GAME_CONTENT.vocabulary.all;
}

// Utility: Spelling words (all weeks) for a difficulty level.
function getSpellingPool(difficulty) {
  const pool = GAME_CONTENT.spelling.all.filter(s => s.difficulty === difficulty);
  const needed = (GAME_CONTENT.difficulties[difficulty] || {}).spelling || 5;
  return pool.length >= needed ? pool : GAME_CONTENT.spelling.all;
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
