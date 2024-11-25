import React, { createContext, useState, ReactNode } from 'react';

interface NameContextData {
  name: string;
  setName: (name: string) => void;
}

export const NameContext = createContext<NameContextData>({} as NameContextData);

export const NameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
