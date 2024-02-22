import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";



const newsCollection = collection(db, "News")

export const addNoticia = async (noticiaData) => {
    try {
      const docRef = await addDoc(newsCollection, noticiaData);
      return docRef.id;
    } catch (error) {
      return console.error("Error al añadir la noticia",error);
    }
  };