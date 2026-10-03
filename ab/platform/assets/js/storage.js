/* ================================================================
   STORAGE.JS - localStorage Wrapper Functions
   Handles: Session, Scores, Badges, Settings
   ================================================================ */

const Storage = (() => {
  const KEYS = {
    session: 'ws_session',
    scores: 'ws_allScores',
    badges: 'ws_badges',
    settings: 'ws_settings'
  };

  /**
   * SESSION MANAGEMENT
   */

  const session = {
    set: (name, group) => {
      const data = {
        name: name,
        group: group,
        sessionStart: Date.now()
      };
      localStorage.setItem(KEYS.session, JSON.stringify(data));
      return data;
    },

    get: () => {
      const data = localStorage.getItem(KEYS.session);
      return data ? JSON.parse(data) : null;
    },

    clear: () => {
      localStorage.removeItem(KEYS.session);
    },

    exists: () => {
      return !!localStorage.getItem(KEYS.session);
    }
  };

  /**
   * SCORES MANAGEMENT
   */

  const scores = {
    initialize: () => {
      if (!localStorage.getItem(KEYS.scores)) {
        const template = {
          'unit-1': {
            'activities': {
              'match-meaning': [],
              'unscramble': [],
              'wordsearch': []
            },
            'games': {
              'spelling-blitz': [],
              'vocabulary-vault': [],
              'grammar-master': [],
              'full-review': []
            }
          }
        };
        localStorage.setItem(KEYS.scores, JSON.stringify(template));
      }
    },

    getAll: () => {
      const data = localStorage.getItem(KEYS.scores);
      return data ? JSON.parse(data) : {};
    },

    addScore: (unitId, category, subcategory, scoreData) => {
      const allScores = scores.getAll();
      
      if (!allScores[unitId]) {
        allScores[unitId] = { activities: {}, games: {} };
      }

      if (!allScores[unitId][category]) {
        allScores[unitId][category] = {};
      }

      if (!allScores[unitId][category][subcategory]) {
        allScores[unitId][category][subcategory] = [];
      }

      allScores[unitId][category][subcategory].push({
        ...scoreData,
        date: new Date().toISOString().split('T')[0],
        gameId: `${unitId}-${subcategory}-${Date.now()}`
      });

      localStorage.setItem(KEYS.scores, JSON.stringify(allScores));
      return allScores[unitId][category][subcategory];
    },

    getUnitScores: (unitId) => {
      const allScores = scores.getAll();
      return allScores[unitId] || {};
    },

    getActivityScores: (unitId, activity) => {
      const allScores = scores.getAll();
      if (!allScores[unitId] || !allScores[unitId].activities) return [];
      return allScores[unitId].activities[activity] || [];
    },

    getGameScores: (unitId, game) => {
      const allScores = scores.getAll();
      if (!allScores[unitId] || !allScores[unitId].games) return [];
      return allScores[unitId].games[game] || [];
    },

    getStudentScores: (unitId, studentName, group) => {
      const allScores = scores.getAll();
      const unitData = allScores[unitId];
      if (!unitData) return [];

      const studentScores = [];

      // Gather activity scores
      if (unitData.activities) {
        Object.keys(unitData.activities).forEach(activity => {
          const scores = unitData.activities[activity].filter(
            s => s.name === studentName && s.group === group
          );
          studentScores.push(...scores);
        });
      }

      // Gather game scores
      if (unitData.games) {
        Object.keys(unitData.games).forEach(game => {
          const scores = unitData.games[game].filter(
            s => s.name === studentName && s.group === group
          );
          studentScores.push(...scores);
        });
      }

      return studentScores;
    },

    getBestScore: (unitId, category, subcategory, studentName, group) => {
      const data = scores.getAll();
      if (!data[unitId] || !data[unitId][category] || !data[unitId][category][subcategory]) {
        return null;
      }

      const filtered = data[unitId][category][subcategory].filter(
        s => s.name === studentName && s.group === group
      );

      if (filtered.length === 0) return null;

      // For games with score/total, find highest percentage
      if (filtered[0].hasOwnProperty('score') && filtered[0].hasOwnProperty('total')) {
        return filtered.reduce((best, current) => {
          const currentPercentage = (current.score / current.total) * 100;
          const bestPercentage = (best.score / best.total) * 100;
          return currentPercentage > bestPercentage ? current : best;
        });
      }

      // For activities with moves, find lowest
      if (filtered[0].hasOwnProperty('moves')) {
        return filtered.reduce((best, current) => {
          return current.moves < best.moves ? current : best;
        });
      }

      return filtered[0];
    },

    getLeaderboard: (unitId, category, subcategory, group) => {
      const allScores = scores.getAll();
      const data = allScores[unitId];

      if (!data || !data[category] || !data[category][subcategory]) {
        return [];
      }

      const filtered = data[category][subcategory].filter(s => s.group === group);

      // Build leaderboard with best scores per student
      const leaderboard = {};

      filtered.forEach(score => {
        if (!leaderboard[score.name]) {
          leaderboard[score.name] = {
            name: score.name,
            group: score.group,
            entries: []
          };
        }
        leaderboard[score.name].entries.push(score);
      });

      // Get best entry per student
      const ranked = Object.values(leaderboard).map(student => {
        let best = student.entries[0];

        if (best.hasOwnProperty('score') && best.hasOwnProperty('total')) {
          best = student.entries.reduce((prev, current) => {
            const prevPercentage = (prev.score / prev.total) * 100;
            const currentPercentage = (current.score / current.total) * 100;
            return currentPercentage > prevPercentage ? current : prev;
          });
        }

        if (best.hasOwnProperty('moves')) {
          best = student.entries.reduce((prev, current) => {
            return current.moves < prev.moves ? current : prev;
          });
        }

        return {
          name: student.name,
          group: student.group,
          best: best
        };
      });

      // Sort by best score
      ranked.sort((a, b) => {
        if (a.best.hasOwnProperty('score') && b.best.hasOwnProperty('score')) {
          const aPercentage = (a.best.score / a.best.total) * 100;
          const bPercentage = (b.best.score / b.best.total) * 100;
          return bPercentage - aPercentage;
        }

        if (a.best.hasOwnProperty('moves') && b.best.hasOwnProperty('moves')) {
          return a.best.moves - b.best.moves;
        }

        return 0;
      });

      return ranked;
    }
  };

  /**
   * BADGES MANAGEMENT
   */

  const badges = {
    initialize: () => {
      if (!localStorage.getItem(KEYS.badges)) {
        localStorage.setItem(KEYS.badges, JSON.stringify({}));
      }
    },

    addBadge: (unitId, studentName, group, badgeType, description) => {
      const allBadges = badges.getAll();

      if (!allBadges[unitId]) {
        allBadges[unitId] = {};
      }

      const studentKey = `${studentName}-${group}`;
      if (!allBadges[unitId][studentKey]) {
        allBadges[unitId][studentKey] = [];
      }

      // Check if badge already exists
      const exists = allBadges[unitId][studentKey].some(b => b.badge === badgeType);
      if (exists) return false;

      allBadges[unitId][studentKey].push({
        badge: badgeType,
        earned: new Date().toISOString().split('T')[0],
        description: description
      });

      localStorage.setItem(KEYS.badges, JSON.stringify(allBadges));
      return true;
    },

    getBadges: (unitId, studentName, group) => {
      const allBadges = badges.getAll();
      if (!allBadges[unitId]) return [];

      const studentKey = `${studentName}-${group}`;
      return allBadges[unitId][studentKey] || [];
    },

    hasBadge: (unitId, studentName, group, badgeType) => {
      const studentBadges = badges.getBadges(unitId, studentName, group);
      return studentBadges.some(b => b.badge === badgeType);
    },

    getAll: () => {
      const data = localStorage.getItem(KEYS.badges);
      return data ? JSON.parse(data) : {};
    }
  };

  /**
   * SETTINGS MANAGEMENT
   */

  const settings = {
    initialize: () => {
      if (!localStorage.getItem(KEYS.settings)) {
        const defaults = {
          darkMode: false,
          volume: 80
        };
        localStorage.setItem(KEYS.settings, JSON.stringify(defaults));
      }
    },

    get: () => {
      const data = localStorage.getItem(KEYS.settings);
      return data ? JSON.parse(data) : { darkMode: false, volume: 80 };
    },

    set: (key, value) => {
      const current = settings.get();
      current[key] = value;
      localStorage.setItem(KEYS.settings, JSON.stringify(current));
      return current;
    },

    getDarkMode: () => {
      return settings.get().darkMode;
    },

    setDarkMode: (enabled) => {
      return settings.set('darkMode', enabled);
    },

    getVolume: () => {
      return settings.get().volume;
    },

    setVolume: (level) => {
      return settings.set('volume', Math.max(0, Math.min(100, level)));
    }
  };

  /**
   * EXPORT PUBLIC API
   */

  return {
    session,
    scores,
    badges,
    settings,

    // Initialization
    init: () => {
      scores.initialize();
      badges.initialize();
      settings.initialize();
    },

    // Clear all data
    clearAll: () => {
      localStorage.clear();
      Storage.init();
    },

    // Export data for backup
    exportData: () => {
      return {
        scores: scores.getAll(),
        badges: badges.getAll(),
        settings: settings.get(),
        exportDate: new Date().toISOString()
      };
    },

    // Get storage size estimate
    getStorageSize: () => {
      let total = 0;
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          total += localStorage[key].length + key.length;
        }
      }
      return (total / 1024).toFixed(2) + ' KB';
    }
  };
})();

// Initialize storage on load
document.addEventListener('DOMContentLoaded', () => {
  Storage.init();
});
