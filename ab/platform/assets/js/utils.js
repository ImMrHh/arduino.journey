/* ================================================================
   UTILS.JS - Utility Functions
   Formatting, calculations, randomization, helpers
   ================================================================ */

const Utils = (() => {
  /**
   * TIME FORMATTING
   */

  const formatTime = (seconds) => {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (minutes < 60) {
      return `${minutes}m ${secs}s`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime12Hour = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  /**
   * SCORING & CALCULATIONS
   */

  const calculatePercentage = (correct, total) => {
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
  };

  const calculateGrade = (percentage) => {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
  };

  const getScoreFeedback = (percentage) => {
    if (percentage === 100) return 'Perfect! Outstanding work!';
    if (percentage >= 90) return 'Excellent! Keep it up!';
    if (percentage >= 80) return 'Great job! You got it!';
    if (percentage >= 70) return 'Good work! Nice effort!';
    if (percentage >= 60) return 'Nice try! Keep practicing!';
    return 'Keep working on it. You\'ve got this!';
  };

  /**
   * ARRAY & OBJECT UTILITIES
   */

  const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const randomItem = (array) => {
    if (array.length === 0) return null;
    return array[Math.floor(Math.random() * array.length)];
  };

  const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getUnique = (array, key) => {
    return [...new Map(array.map(item => [item[key], item])).values()];
  };

  /**
   * STRING UTILITIES
   */

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const normalizeString = (str) => {
    return str.trim().toLowerCase();
  };

  const fuzzyMatch = (input, target, threshold = 0.8) => {
    input = normalizeString(input);
    target = normalizeString(target);

    if (input === target) return true;

    let matches = 0;
    for (let char of input) {
      if (target.includes(char)) {
        matches++;
      }
    }

    return (matches / target.length) >= threshold;
  };

  const levenshteinDistance = (str1, str2) => {
    const track = Array(str2.length + 1).fill(null).map(() =>
      Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
    }

    for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
    }

    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1,
          track[j - 1][i] + 1,
          track[j - 1][i - 1] + indicator
        );
      }
    }

    return track[str2.length][str1.length];
  };

  /**
   * DOM UTILITIES
   */

  const showElement = (element) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.classList.remove('hidden');
  };

  const hideElement = (element) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.classList.add('hidden');
  };

  const toggleElement = (element) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.classList.toggle('hidden');
  };

  const addClass = (element, className) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.classList.add(className);
  };

  const removeClass = (element, className) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.classList.remove(className);
  };

  const setHTML = (element, html) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.innerHTML = html;
  };

  const setText = (element, text) => {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    if (element) element.textContent = text;
  };

  /**
   * COLOR & STYLING
   */

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  /**
   * VALIDATION
   */

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isValidName = (name) => {
    return name && name.trim().length > 0 && name.trim().length <= 50;
  };

  /**
   * DEBOUNCE & THROTTLE
   */

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  /**
   * DEVICE DETECTION
   */

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const isTablet = () => {
    return /iPad|Android(?!.*Mobile)/.test(navigator.userAgent);
  };

  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
  };

  const getDeviceType = () => {
    if (isTablet()) return 'tablet';
    if (isMobile()) return 'mobile';
    return 'desktop';
  };

  /**
   * STORAGE CHECK
   */

  const isLocalStorageAvailable = () => {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  /**
   * DELAY FUNCTION
   */

  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  /**
   * COOKIE UTILITIES
   */

  const getCookie = (name) => {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  };

  const setCookie = (name, value, days = 7) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/';
  };

  /**
   * EXPORT PUBLIC API
   */

  return {
    formatTime,
    formatDate,
    formatTime12Hour,
    calculatePercentage,
    calculateGrade,
    getScoreFeedback,
    shuffle,
    randomItem,
    randomRange,
    getUnique,
    capitalize,
    normalizeString,
    fuzzyMatch,
    levenshteinDistance,
    showElement,
    hideElement,
    toggleElement,
    addClass,
    removeClass,
    setHTML,
    setText,
    hexToRgb,
    rgbToHex,
    isValidEmail,
    isValidName,
    debounce,
    throttle,
    isMobile,
    isTablet,
    isTouchDevice,
    getDeviceType,
    isLocalStorageAvailable,
    delay,
    getCookie,
    setCookie
  };
})();
