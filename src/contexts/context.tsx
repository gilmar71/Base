import { useContext, createContext } from 'react';

import { create } from 'zustand';

interface MainContextProviderProps {
  children: React.ReactNode;
}

interface MainContextType {
  filter: boolean;
  handleFilter: () => void;
  openForm: boolean;
}

const initialState: MainContextType = {
  filter: false,
  handleFilter: () => null,
  openForm: false,
};

const zustandStore = create<MainContextType>((set, get) => ({
  ...initialState,
  handleFilter: () => {
    set((state) => ({
      ...state,
      filter: !state.filter,
    }));
  },
}));

const MainContext = createContext<MainContextType>(initialState);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const mainStore = zustandStore();

  return (
    <MainContext.Provider value={mainStore}>{children}</MainContext.Provider>
  );
};

export const projectContext = (): MainContextType => useContext(MainContext);
