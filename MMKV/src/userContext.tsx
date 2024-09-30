// UserContext.tsx

import React, { createContext, useContext, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'mmkv' });

type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  saveUser: (name: string, email: string) => void;
  pegar: () => void; // Adiciona a função pegar
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const saveUser = (name: string, email: string) => {
    storage.set('user', JSON.stringify({ name, email }));
    setUser({ name, email }); // Atualiza o estado imediatamente após salvar
  };

  const pegar = () => {
    const data = storage.getString('user');
    setUser(data ? JSON.parse(data) : null);
  };

  return (
    <UserContext.Provider value={{ user, saveUser, pegar }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
