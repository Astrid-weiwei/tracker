import React, { createContext, useState, useEffect } from 'react';
import { listenToCollection, addEntry, updateEntry, deleteEntry } from '../firestoreOperations';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToCollection('activities', (snapshot) => {
      const updatedActivities = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setActivities(updatedActivities);
    });
    return () => unsubscribe();
  }, []);

  const addActivity = async (data) => addEntry('activities', data);
  const updateActivity = async (id, data) => updateEntry('activities', id, data);
  const deleteActivity = async (id) => deleteEntry('activities', id);

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, updateActivity, deleteActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
