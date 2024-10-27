// firestoreOperations.js
import { collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { database } from './firebaseSetup';

export const listenToCollection = (collectionName, callback) => {
  const colRef = collection(database, collectionName);
  return onSnapshot(colRef, callback);
};

export const addEntry = async (collectionName, data) => {
  const colRef = collection(database, collectionName);
  const docRef = await addDoc(colRef, data);
  return docRef.id;
};

export const updateEntry = async (collectionName, id, data) => {
  const docRef = doc(database, collectionName, id);
  await updateDoc(docRef, data);
};

export const deleteEntry = async (collectionName, id) => {
  const docRef = doc(database, collectionName, id);
  await deleteDoc(docRef);
};
