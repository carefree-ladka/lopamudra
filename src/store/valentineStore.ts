import { create } from 'zustand';
import { CONFIG } from '../config';

interface ValentineStore {
  // State
  showMessage: boolean;
  showConfetti: boolean;
  saidYes: boolean;
  showCompliments: boolean;
  currentCompliment: number;
  hasStarted: boolean;
  showTransition: boolean;
  
  // Actions
  handleStart: () => void;
  handleTransitionComplete: () => void;
  handleYesClick: () => void;
  nextCompliment: () => void;
  reset: () => void;
}

export const useValentineStore = create<ValentineStore>((set, get) => ({
  // Initial state
  showMessage: false,
  showConfetti: false,
  saidYes: false,
  showCompliments: false,
  currentCompliment: 0,
  hasStarted: false,
  showTransition: false,

  // Actions
  handleStart: () => set({ showTransition: true }),
  
  handleTransitionComplete: () => {
    set({ hasStarted: true, showTransition: false });
    
    // Start compliments directly
    setTimeout(() => {
      set({ showCompliments: true, currentCompliment: 1 });
    }, 500);
    
    // Show main message after ALL compliments (7 cards * 12 seconds each + buffer)
    const totalComplimentTime = CONFIG.text.compliments.length * 12000 + 3000;
    setTimeout(() => {
      set({ showCompliments: false, showMessage: true });
    }, totalComplimentTime);
  },
  
  handleYesClick: () => set({ saidYes: true, showConfetti: true }),
  
  nextCompliment: () => {
    const { currentCompliment } = get();
    const compliments = CONFIG.text.compliments;
    
    if (currentCompliment < compliments.length) {
      set({ currentCompliment: currentCompliment + 1 });
    }
  },
  
  reset: () => set({
    showMessage: false,
    showConfetti: false,
    saidYes: false,
    showCompliments: false,
    currentCompliment: 0,
    hasStarted: false,
    showTransition: false,
  }),
}));