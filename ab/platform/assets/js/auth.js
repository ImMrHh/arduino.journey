/* ================================================================
   AUTH.JS - Teacher Authentication
   Hardcoded password: admin80
   ================================================================ */

const Auth = (() => {
  const TEACHER_PASSWORD = 'admin80';
  const SESSION_KEY = 'ws_teacher_session';
  const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

  const validatePassword = (password) => {
    return password === TEACHER_PASSWORD;
  };

  const login = (password) => {
    if (!validatePassword(password)) {
      return {
        success: false,
        message: 'Incorrect password. Please try again.'
      };
    }

    const session = {
      authenticated: true,
      loginTime: Date.now(),
      expiresAt: Date.now() + SESSION_DURATION
    };

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));

    return {
      success: true,
      message: 'Welcome, Teacher!'
    };
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
  };

  const isAuthenticated = () => {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return false;

    try {
      const data = JSON.parse(session);
      if (data.expiresAt < Date.now()) {
        logout();
        return false;
      }
      return data.authenticated === true;
    } catch (e) {
      logout();
      return false;
    }
  };

  const getSessionInfo = () => {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return null;

    try {
      return JSON.parse(session);
    } catch (e) {
      return null;
    }
  };

  const getRemainingTime = () => {
    const session = getSessionInfo();
    if (!session) return 0;

    const remaining = session.expiresAt - Date.now();
    return Math.max(0, remaining);
  };

  const isSessionExpiring = () => {
    // Warn if less than 5 minutes remaining
    return getRemainingTime() < 5 * 60 * 1000;
  };

  return {
    validatePassword,
    login,
    logout,
    isAuthenticated,
    getSessionInfo,
    getRemainingTime,
    isSessionExpiring
  };
})();

// Auto-check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
  // If teacher dashboard is loaded and not authenticated, redirect
  if (window.location.pathname.includes('teacher') && !Auth.isAuthenticated()) {
    if (window.location.pathname !== '/ab/teacher-login.html') {
      window.location.href = 'teacher-login.html';
    }
  }
});
