import React, { createContext, useState, useEffect } from 'react';
import { listenToCollection, addEntry, updateEntry, deleteEntry } from '../firestoreOperations';

export const DietContext = createContext();

export const DietProvider = ({ children }) => {
  const [dietEntries, setDietEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToCollection('diet', (snapshot) => {
      const updatedEntries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDietEntries(updatedEntries);
    });
    return () => unsubscribe();
  }, []);

  const addDietEntry = async (data) => addEntry('diet', data);
  const updateDietEntry = async (id, data) => updateEntry('diet', id, data);
  const deleteDietEntry = async (id) => deleteEntry('diet', id);

  return (
    <DietContext.Provider value={{ dietEntries, addDietEntry, updateDietEntry, deleteDietEntry }}>
      {children}
    </DietContext.Provider>
  );
};
