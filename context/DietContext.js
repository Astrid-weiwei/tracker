import React, { createContext, useState } from 'react';

export const DietContext = createContext();

export function DietProvider({ children }) {
  const [dietEntries, setDietEntries] = useState([]);

  const addDietEntry = (entry) => {
    setDietEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <DietContext.Provider value={{ dietEntries, addDietEntry }}>
      {children}
    </DietContext.Provider>
  );
}
