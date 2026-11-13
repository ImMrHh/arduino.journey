/* ================================================================
   WORDS.JS  -  Word bank for Word Ace Jet
   ----------------------------------------------------------------
   TO ADD A WORD: copy any line, change the values, save. That is all.
   The game needs no other change.

   unit, week   where the word comes from
   word         shown on the answer buttons, exactly as written here
   definition   shown as the question. A row with an empty definition
                ("") is skipped by the game.
   status       "check"  definition needs a teacher look (still plays)
                "draft"  definition is a first draft (still plays)
                "ok"     confirmed (plays)
                "off"    keep the row but leave it out of the game

   Keep each word only once in the whole file.
   Source of these definitions: ab/platform/game-content.js
   ================================================================ */

var WORD_BANK = [

  // ---- Unit 1 (Who We Are), Week 1 ----
  { unit: 1, week: 1, word: "grow", definition: "To become bigger or more developed over time.", status: "check" },
  { unit: 1, week: 1, word: "change", definition: "To become different, or to make something different.", status: "check" },
  { unit: 1, week: 1, word: "learning", definition: "Gaining new knowledge or skills.", status: "check" },
  { unit: 1, week: 1, word: "health", definition: "The condition of your body and mind; being well or sick.", status: "check" },
  { unit: 1, week: 1, word: "emotion", definition: "A strong feeling, like happiness, sadness, or anger.", status: "check" },
  { unit: 1, week: 1, word: "development", definition: "The process of growing, changing, and improving.", status: "check" },
  { unit: 1, week: 1, word: "adaptation", definition: "A change you make to fit a new situation or environment.", status: "check" },
  { unit: 1, week: 1, word: "identity", definition: "Who you are; what makes you different from other people.", status: "check" },
  { unit: 1, week: 1, word: "puberty", definition: "The stage of growth when a child's body starts changing into an adult's body.", status: "check" },
  { unit: 1, week: 1, word: "milestone", definition: "An important event that marks a stage in someone's life or development.", status: "check" },
  { unit: 1, week: 1, word: "responsibility", definition: "A duty or job that you are expected to do.", status: "check" },
  { unit: 1, week: 1, word: "independence", definition: "Being able to do things by yourself, without needing help.", status: "check" },
  { unit: 1, week: 1, word: "resilience", definition: "The ability to recover quickly from difficulties; being able to bounce back.", status: "check" },
  { unit: 1, week: 1, word: "self-awareness", definition: "Understanding your own feelings, thoughts, and actions.", status: "check" },
  { unit: 1, week: 1, word: "social skills", definition: "The abilities you use to communicate and interact with other people.", status: "check" },

  // ---- Unit 1 (Who We Are), Week 2 ----
  { unit: 1, week: 2, word: "belonging", definition: "The feeling that you are accepted and part of a group.", status: "check" },
  { unit: 1, week: 2, word: "beliefs", definition: "Ideas that you think are true or important.", status: "check" },
  { unit: 1, week: 2, word: "curiosity", definition: "A strong wish to learn or know something.", status: "check" },
  { unit: 1, week: 2, word: "acceptance", definition: "Welcoming people or things as they are, without trying to change them.", status: "check" },
  { unit: 1, week: 2, word: "empathy", definition: "Understanding and sharing how another person feels.", status: "check" },
  { unit: 1, week: 2, word: "integrity", definition: "Being honest and doing the right thing, even when no one is watching.", status: "check" },
  { unit: 1, week: 2, word: "self-worth", definition: "Believing that you are valuable and important.", status: "check" },
  { unit: 1, week: 2, word: "autonomy", definition: "The freedom to make your own choices and decisions.", status: "check" },
  { unit: 1, week: 2, word: "resistance", definition: "Fighting against something or refusing to go along with it.", status: "check" },
  { unit: 1, week: 2, word: "adaptability", definition: "Being able to change easily when a situation is new or different.", status: "check" },
  { unit: 1, week: 2, word: "assertiveness", definition: "Saying what you think or need in a calm, confident, and respectful way.", status: "check" },
  { unit: 1, week: 2, word: "vulnerability", definition: "Showing your true feelings, even when it feels risky or uncomfortable.", status: "check" },

  // ---- Unit 1 (Who We Are), Week 3 ----
  { unit: 1, week: 3, word: "goal", definition: "Something you want to do or achieve in the future.", status: "check" },
  { unit: 1, week: 3, word: "habit", definition: "Something you do again and again, often without thinking.", status: "check" },
  { unit: 1, week: 3, word: "role", definition: "The part or job that a person has in a family, group, or team.", status: "check" },
  { unit: 1, week: 3, word: "support", definition: "Help and encouragement that you give to someone.", status: "check" },
  { unit: 1, week: 3, word: "challenge", definition: "Something difficult that tests your skills and makes you try hard.", status: "check" },
  { unit: 1, week: 3, word: "maturity", definition: "Being fully grown, or acting in a sensible, grown-up way.", status: "check" },
  { unit: 1, week: 3, word: "decision", definition: "A choice you make after thinking about the options.", status: "check" },
  { unit: 1, week: 3, word: "wisdom", definition: "Good judgment that comes from experience and knowledge.", status: "check" },
  { unit: 1, week: 3, word: "transition", definition: "A change from one stage or situation to another.", status: "check" },
  { unit: 1, week: 3, word: "generation", definition: "A group of people born and living around the same time.", status: "check" },
  { unit: 1, week: 3, word: "expectation", definition: "What you believe or hope will happen, or what others want from you.", status: "check" },
  { unit: 1, week: 3, word: "retirement", definition: "The time in life when a person stops working, usually because of age.", status: "check" },
  { unit: 1, week: 3, word: "peer pressure", definition: "A feeling that you must do something because people your age are doing it.", status: "check" },

  // ---- Unit 1 (Who We Are), Week 4 ----
  { unit: 1, week: 4, word: "name", definition: "The word you use to call a person, place, or thing.", status: "check" },
  { unit: 1, week: 4, word: "need", definition: "Something you must have to live or be well.", status: "check" },
  { unit: 1, week: 4, word: "nest", definition: "A home that birds or other animals build for their eggs and babies.", status: "check" },
  { unit: 1, week: 4, word: "nod", definition: "To move your head up and down, usually to say yes.", status: "check" },
  { unit: 1, week: 4, word: "occur", definition: "To happen.", status: "check" },
  { unit: 1, week: 4, word: "number", definition: "A word or symbol that shows how many, like 3 or seven.", status: "check" },
  { unit: 1, week: 4, word: "notice", definition: "To see or become aware of something.", status: "check" },
  { unit: 1, week: 4, word: "object", definition: "A thing you can see or touch.", status: "check" },
  { unit: 1, week: 4, word: "offer", definition: "To hold out or suggest something for someone to take or accept.", status: "check" },
  { unit: 1, week: 4, word: "options", definition: "The different choices you can pick from.", status: "check" },
  { unit: 1, week: 4, word: "observe", definition: "To watch something carefully to learn about it.", status: "check" },
  { unit: 1, week: 4, word: "hotel", definition: "A building where travelers pay to sleep in a room.", status: "check" },
  { unit: 1, week: 4, word: "obtain", definition: "To get something, often by asking or trying.", status: "check" },
  { unit: 1, week: 4, word: "offend", definition: "To make someone feel hurt, upset, or angry.", status: "check" },
  { unit: 1, week: 4, word: "accommodation", definition: "A place to stay or live, like a hotel room.", status: "check" },

  // ---- Unit 2 (How the World Works), Week 1 ----
  { unit: 2, week: 1, word: "design", definition: "To plan how something will look or work before you make it.", status: "check" },
  { unit: 2, week: 1, word: "function", definition: "The job or purpose of something; what it does.", status: "check" },
  { unit: 2, week: 1, word: "recycle", definition: "To turn used things, like paper or plastic, into new things.", status: "check" },
  { unit: 2, week: 1, word: "impact", definition: "The strong effect that something has on people or the world.", status: "check" },
  { unit: 2, week: 1, word: "discovery", definition: "Finding or learning something for the first time.", status: "check" },
  { unit: 2, week: 1, word: "connection", definition: "A link between two or more people, things, or ideas.", status: "check" },
  { unit: 2, week: 1, word: "invention", definition: "A brand new thing that someone creates for the first time.", status: "check" },
  { unit: 2, week: 1, word: "technology", definition: "Tools and machines made with science to help us do things.", status: "check" },
  { unit: 2, week: 1, word: "innovation", definition: "A new idea or way of doing something that is better than before.", status: "check" },
  { unit: 2, week: 1, word: "ecosystem", definition: "All the living things in a place and how they depend on each other and on their surroundings.", status: "check" },
  { unit: 2, week: 1, word: "pollution", definition: "Dirty or harmful things that damage the air, water, or land.", status: "check" },
  { unit: 2, week: 1, word: "sustainability", definition: "Using things in a way that protects nature so there is enough for the future.", status: "check" },
  { unit: 2, week: 1, word: "conservation", definition: "Protecting nature, animals, and resources so they are not lost or wasted.", status: "check" },
  { unit: 2, week: 1, word: "renewable energy", definition: "Power from sources that never run out, like the sun, wind, and water.", status: "check" },
  { unit: 2, week: 1, word: "biodiversity", definition: "The wide variety of plants, animals, and other living things in one place.", status: "check" },

  // ---- Unit 2 (How the World Works), Week 2 ----
  { unit: 2, week: 2, word: "machine", definition: "A tool with moving parts that helps people do work.", status: "check" },
  { unit: 2, week: 2, word: "energy", definition: "The power to make things move, work, or change.", status: "check" },
  { unit: 2, week: 2, word: "waste", definition: "Things that are thrown away because we no longer use them.", status: "check" },
  { unit: 2, week: 2, word: "balance", definition: "A steady condition where nothing is too much or too little.", status: "check" },
  { unit: 2, week: 2, word: "electricity", definition: "A kind of energy that makes lights, phones, and machines work.", status: "check" },
  { unit: 2, week: 2, word: "solar power", definition: "Electricity or heat made from the sun's light.", status: "check" },
  { unit: 2, week: 2, word: "wind turbine", definition: "A tall machine with large blades that spin in moving air to make electricity.", status: "check" },
  { unit: 2, week: 2, word: "environment", definition: "The air, water, land, and living things around us.", status: "check" },
  { unit: 2, week: 2, word: "resources", definition: "Useful things from nature, like water, wood, and oil, that people need.", status: "check" },
  { unit: 2, week: 2, word: "prototype", definition: "The first model of something new, made to test an idea.", status: "check" },
  { unit: 2, week: 2, word: "biodegradable", definition: "Able to break down naturally and become part of the soil.", status: "check" },
  { unit: 2, week: 2, word: "carbon footprint", definition: "The amount of harmful gas that your actions put into the air.", status: "check" },
  { unit: 2, week: 2, word: "greenhouse effect", definition: "When gases trap the sun's heat around Earth and make the planet warmer.", status: "check" },
  { unit: 2, week: 2, word: "sustainable development", definition: "Growing and improving our world without using up or harming what future people need.", status: "check" },

  // ---- Unit 2 (How the World Works), Week 3 ----
  { unit: 2, week: 3, word: "research", definition: "Careful study to discover new information.", status: "draft" },
  { unit: 2, week: 3, word: "materials", definition: "What things are made of, such as wood, metal, or plastic.", status: "draft" },
  { unit: 2, week: 3, word: "pattern", definition: "A repeated design or order.", status: "draft" },
  { unit: 2, week: 3, word: "renewal", definition: "Making something new or fresh again.", status: "draft" },
  { unit: 2, week: 3, word: "eco-friendly", definition: "Not harmful to the environment.", status: "draft" },
  { unit: 2, week: 3, word: "robotics", definition: "The science of designing and building machines that can do tasks by themselves.", status: "draft" },
  { unit: 2, week: 3, word: "engineering", definition: "Using science and math to design and build things.", status: "draft" },
  { unit: 2, week: 3, word: "reduction", definition: "Making something smaller or less.", status: "draft" },
  { unit: 2, week: 3, word: "manufacture", definition: "To make products, usually in a factory.", status: "draft" },
  { unit: 2, week: 3, word: "pollutant", definition: "A substance that dirties air, water, or soil.", status: "draft" },
  { unit: 2, week: 3, word: "artificial intelligence", definition: "Computer systems that can learn and make decisions in ways similar to people.", status: "draft" },
  { unit: 2, week: 3, word: "innovation hub", definition: "A place where new ideas and inventions are developed.", status: "draft" },
  { unit: 2, week: 3, word: "technology device", definition: "An electronic tool, like a phone or tablet, that helps you do a task.", status: "draft" },
  { unit: 2, week: 3, word: "innovation cycle", definition: "The process of ideas, testing, and improvement that leads to new products.", status: "draft" },
  { unit: 2, week: 3, word: "ecosystem balance", definition: "The healthy relationship between living things and their environment.", status: "draft" },

  // ---- Unit 2 (How the World Works), Week 4 ----
  { unit: 2, week: 4, word: "drone", definition: "A small flying machine that has no pilot inside.", status: "draft" },
  { unit: 2, week: 4, word: "satellite", definition: "An object that orbits Earth or another planet.", status: "draft" },
  { unit: 2, week: 4, word: "smartwatch", definition: "A small computer you wear on your wrist that also tells the time.", status: "draft" },
  { unit: 2, week: 4, word: "solar panel", definition: "A device that turns sunlight into electricity.", status: "draft" },
  { unit: 2, week: 4, word: "robot vacuum", definition: "A small machine that cleans floors by itself.", status: "draft" },
  { unit: 2, week: 4, word: "robotic arm", definition: "A machine shaped like a human limb that can grab, lift, and move things.", status: "draft" },
  { unit: 2, week: 4, word: "3D printer", definition: "A machine that builds objects layer by layer from a digital design.", status: "draft" },
  { unit: 2, week: 4, word: "electric car", definition: "A vehicle that runs on a battery instead of gasoline.", status: "draft" },
  { unit: 2, week: 4, word: "virtual reality", definition: "A computer-made world you see and feel through a headset.", status: "draft" },
  { unit: 2, week: 4, word: "recycling machine", definition: "Equipment that sorts and processes used materials so they can be made into new things.", status: "draft" },
  { unit: 2, week: 4, word: "washing machine", definition: "An appliance that cleans dirty clothes with water and soap.", status: "draft" },
  { unit: 2, week: 4, word: "factory robot", definition: "An automatic machine that builds or moves products on a production line.", status: "draft" },
  { unit: 2, week: 4, word: "space rover", definition: "A vehicle that drives across a planet's surface to explore it.", status: "draft" },
  { unit: 2, week: 4, word: "smart home system", definition: "Connected devices that control things in a house, often from a phone or with voice commands.", status: "draft" }
];