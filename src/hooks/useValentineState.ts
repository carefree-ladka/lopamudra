import { useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import { useValentineStore } from '../store/valentineStore';

export const useComplimentProgression = () => {
  const { showCompliments, currentCompliment, nextCompliment } = useValentineStore();
  const timerRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isPausedRef.current) {
        nextCompliment();
      }
    }, 12000); // Increased from 8000 to 12000ms (12 seconds)
  };

  const pauseTimer = () => {
    isPausedRef.current = true;
  };

  const resumeTimer = () => {
    isPausedRef.current = false;
    startTimer();
  };

  useEffect(() => {
    if (!showCompliments) return;

    const compliments = CONFIG.text.compliments;
    if (currentCompliment >= compliments.length) return;

    startTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showCompliments, currentCompliment, nextCompliment]);

  return { pauseTimer, resumeTimer };
};
