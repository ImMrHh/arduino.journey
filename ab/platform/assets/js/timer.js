/* ================================================================
   TIMER.JS - Stopwatch/Timer for Activities
   Background timing, pause/resume, elapsed time tracking
   ================================================================ */

const Timer = (() => {
  let startTime = null;
  let pauseTime = null;
  let totalPausedTime = 0;
  let isRunning = false;
  let updateCallback = null;

  const start = () => {
    if (isRunning) return;
    
    startTime = Date.now() - totalPausedTime;
    pauseTime = null;
    isRunning = true;
    
    // Auto-update every second
    _tick();
  };

  const pause = () => {
    if (!isRunning) return;
    
    pauseTime = Date.now();
    isRunning = false;
  };

  const resume = () => {
    if (isRunning || !pauseTime) return;
    
    const pausedDuration = Date.now() - pauseTime;
    totalPausedTime += pausedDuration;
    pauseTime = null;
    isRunning = true;
    
    _tick();
  };

  const reset = () => {
    startTime = null;
    pauseTime = null;
    totalPausedTime = 0;
    isRunning = false;
    updateCallback = null;
  };

  const stop = () => {
    const elapsed = getElapsed();
    reset();
    return elapsed;
  };

  const getElapsed = () => {
    if (!startTime) return 0;
    
    if (pauseTime) {
      return Math.floor((pauseTime - startTime) / 1000);
    }
    
    return Math.floor((Date.now() - startTime) / 1000);
  };

  const onUpdate = (callback) => {
    updateCallback = callback;
  };

  const _tick = () => {
    if (isRunning) {
      const elapsed = getElapsed();
      
      if (updateCallback) {
        updateCallback(elapsed);
      }
      
      setTimeout(_tick, 1000);
    }
  };

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

  const getFormatted = () => {
    return formatTime(getElapsed());
  };

  const isActive = () => {
    return isRunning;
  };

  return {
    start,
    pause,
    resume,
    reset,
    stop,
    getElapsed,
    getFormatted,
    onUpdate,
    isActive
  };
})();
