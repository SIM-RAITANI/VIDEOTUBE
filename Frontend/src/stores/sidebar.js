import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  sidebarToggle: false,
  controlSidebar: () => set((state) => ({
    sidebarToggle: !state.sidebarToggle,
  })),
}));

export { useSidebarStore };
