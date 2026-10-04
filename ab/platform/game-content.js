/* ================================================================
   GAME CONTENT - Word Lists & Definitions
   Week 1: Vocabulary, Spelling, Verbs
   ================================================================ */

const GAME_CONTENT = {
  vocabulary: {
    week1: [
      { word: "grow", def: "To become bigger or more developed over time." },
      { word: "development", def: "The process of growing, changing, and improving." },
      { word: "change", def: "To become different, or to make something different." },
      { word: "adaptation", def: "A change you make to fit a new situation or environment." },
      { word: "identity", def: "Who you are; what makes you different from other people." },
      { word: "puberty", def: "The stage of growth when a child's body starts changing into an adult's body." },
      { word: "milestone", def: "An important event that marks a stage in someone's life or development." },
      { word: "health", def: "The condition of your body and mind; being well or sick." },
      { word: "emotion", def: "A strong feeling, like happiness, sadness, or anger." },
      { word: "responsibility", def: "A duty or job that you are expected to do." },
      { word: "resilience", def: "The ability to recover quickly from difficulties; being able to bounce back." },
      { word: "self-awareness", def: "Understanding your own feelings, thoughts, and actions." },
      { word: "learning", def: "Gaining new knowledge or skills." },
      { word: "independence", def: "Being able to do things by yourself, without needing help." },
      { word: "social skills", def: "The abilities you use to communicate and interact with other people." }
    ]
  },

  spelling: {
    week1: [
      "fold", "food", "foot", "football", "for", "force", "foreign", "forest", 
      "forever", "formal", "fortunately", "fortune", "forward", "free", "freeze", 
      "fresh", "friend", "friendship", "frog", "from"
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

  // Difficulty configuration
  difficulties: {
    easy: { vocab: 5, spelling: 5, verbs: 5 },
    medium: { vocab: 10, spelling: 10, verbs: 10 },
    challenge: { vocab: 15, spelling: 15, verbs: 15 }
  }
};

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
