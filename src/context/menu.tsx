'use client';

import { createContext, useState } from 'react';

type MenuStateType = 'opened' | 'closed';

type MenuContextType = {
  state: MenuStateType;
  setState: (state: MenuStateType) => void;
};

const initialValue: MenuContextType = {
  state: 'closed',
  setState: () => {},
};

export const MenuContext = createContext<MenuContextType>(initialValue);

export default function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<MenuStateType>('closed');

  const setMenuState = (state: MenuStateType) => setState(state);

  return (
    <MenuContext.Provider value={{ state, setState: setMenuState }}>
      {children}
    </MenuContext.Provider>
  );
}
