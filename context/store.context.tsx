import { initializeApp } from 'firebase/app';
import { createContext, useState } from 'react';
import firebaseConfig from 'utils/firebase';
export const StoreContext = createContext({} as any);
const initFirebase = () => {
  initializeApp(firebaseConfig);
};

export const StoreProvider = ({ children }: any) => {
  initFirebase();
  const [user, setUser] = useState('ezequiel');

  return <StoreContext.Provider value={{ user }}>{children}</StoreContext.Provider>;
};
