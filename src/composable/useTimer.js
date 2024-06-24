import { ref } from 'vue';

export function useTimer() {
  const timerStarted = ref(false);
  let timeoutId = null;

  const startTimer = (duration, callback) => {
    if (!timerStarted.value) {
      timerStarted.value = true;
      timeoutId = setTimeout(() => {
        callback();
        timerStarted.value = false; // Reset timer state if needed
      }, duration);
    }
  };

  const resetTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timerStarted.value = false;
      timeoutId = null;
    }
  };

  return {
    timerStarted,
    startTimer,
    resetTimer
  };
}