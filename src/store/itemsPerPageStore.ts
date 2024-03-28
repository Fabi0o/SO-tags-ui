import { create } from "zustand";

type Store = {
  itemsPerPage: number;
  change: (n: number) => void;
};

const useItemsPerPageStore = create<Store>()((set) => ({
  itemsPerPage: 5,
  change: (n: number) => set({ itemsPerPage: n }),
}));

export default useItemsPerPageStore;
