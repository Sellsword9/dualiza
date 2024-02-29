import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const newsCollection = collection(db, "News");

export const addNoticia = async (noticiaData) => {
  try {
    const docRef = await addDoc(newsCollection, noticiaData);
    return docRef.id;
  } catch (error) {
    return console.error("Error al añadir la noticia", error);
  }
};

export const getNoticias = async () => {
  try {
    const data = await getDocs(newsCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error al Obtener los noticias", error);
    throw error;
  }
};

export const getNoticiaById = async (id) => {
  try {
    const usuarioDocRef = doc(newsCollection, id);
    const usuarioDoc = await getDoc(usuarioDocRef);
    console.log("usuarioDoc --> ", usuarioDoc);
    if (usuarioDoc.exists()) {
      return { ...usuarioDoc.data(), id: usuarioDoc.id };
    } else {
      console.error("El usuario con id dado no existe");
      return null;
    }
  } catch (error) {
    console.log("Error al Obtener el usuario", error);
    throw error;
  }
};

export const deleteNoticia = async (id) => {
  try {
    const usuarioDocRef = doc(newsCollection, id);
    await deleteDoc(usuarioDocRef);
  } catch (error) {
    console.error("Error deleting", error);
    throw error;
  }
};

export const editNoticia = async (idNoticia, newData) => {
  try {
    const usuarioDocRef = doc(newsCollection, idNoticia);
    await updateDoc(usuarioDocRef, newData);
  } catch (error) {
    console.log("Error updating usuario", error);
    throw error;
  }
};
