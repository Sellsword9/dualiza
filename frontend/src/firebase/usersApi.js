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
  
  // ---------- Dados de la colección ---------
  const userCollection = collection(db, "User");
  
  /// ----------- Añadir usuarios ----------
  export const addUsuario = async (userData) => {
    try {
      const docRef = await addDoc(userCollection, userData);
      return docRef.id;
    } catch (error) {
      console.log("Error al añadir un usuario", error);
      throw error;
    }
  };
  
  // ------------- Cargar usuarios -------------
  
  export const getUsuarios = async () => {
    try {
      const data = await getDocs(userCollection);
      return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.log("Error al Obtener los usuarios", error);
      throw error;
    }
  };
  
  // cargar datos de un usuario cuyo id es ...
  
  export const getUsuarioById = async (userId) => {
    try {
      const usuarioDocRef = doc(userCollection, userId);
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
  
  // --------------- Eliminar usuarios ------------
  
  export const deleteUsuario = async (id) => {
    try {
      // seleccionar el documento con ese id
      const usuarioDocRef = doc(userCollection, id);
      // borrar el documento seleccionado
      await deleteDoc(usuarioDocRef);
    } catch (error) {
      console.error("Error deleting", error);
      throw error;
    }
  };
  
  // ---- Edit usuario by id ----
  
  export const editUsuario = async (idUsuario, newData) => {
    try {
      const usuarioDocRef = doc(userCollection, idUsuario);
      await updateDoc(usuarioDocRef, newData);
    } catch (error) {
      console.log("Error updating usuario", error);
      throw error;
    }
  };
  