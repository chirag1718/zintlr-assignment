import { create } from "zustand";
type DrawerType = {
  showDrawer: boolean;
  showSecondaryDrawer: boolean;
  toggleDrawer: () => void;
  toggleSecondaryDrawer: () => void;
};
const useDrawerStore = create<DrawerType>((set) => ({
  showDrawer: false,
  showSecondaryDrawer: false,
  toggleDrawer: () => {
    set((state) => ({
      ...state,
      showDrawer: !state.showDrawer,
    }));
  },
  toggleSecondaryDrawer: () => {
    set((state) => ({
      ...state,
      showSecondaryDrawer: !state.showSecondaryDrawer,
    }));
  },
}));

export { useDrawerStore };
