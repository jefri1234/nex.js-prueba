"use client"
// store.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 }),
}));
