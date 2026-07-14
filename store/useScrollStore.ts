import { create } from "zustand";

type ScrollStore = {
  scrollProgress: number;
  setScrollProgress: () => void;
};

const clampProgress = (value: number) => Math.min(Math.max(value, 0), 1);

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollProgress: 0.0,
  setScrollProgress: () => {
    if (typeof window === "undefined") {
      return;
    }

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollableHeight <= 0) {
      set({ scrollProgress: 0.0 });
      return;
    }

    set({
      scrollProgress: clampProgress(window.scrollY / scrollableHeight),
    });
  },
}));
