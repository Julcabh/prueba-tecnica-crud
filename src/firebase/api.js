import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

//Monitores
const collectionName2 = "monitores";

export const saveMonitor= (newLink) =>
  addDoc(collection(db, collectionName2), newLink);

export const updateMonitor = (id, updatedFields) =>
  updateDoc(doc(db, collectionName2, id), updatedFields);

export const onGetLinks2 = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName2), callback);
  return unsub;
};




//Monitorias
const collectionName = "monitorias";

export const saveMonitoria= (newLink) =>
  addDoc(collection(db, collectionName), newLink);

export const updateMonitoria = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getMonitorias = () => getDocs(collection(db, collectionName));

export const deleteMonitoria = (id) => deleteDoc(doc(db, collectionName, id));

export const getMonitoria = (id) => getDoc(doc(db, collectionName, id));



export const getMonitores = () => getDocs(collection(db, collectionName2));

export const deleteMonitor = (id) => deleteDoc(doc(db, collectionName2, id));

export const getMonitor = (id) => getDoc(doc(db, collectionName2, id));
