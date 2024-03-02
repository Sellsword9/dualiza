import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AddNewsForm from "./AddNewsForm";

const NoticiasEdit = ({setReload}) => {
  const {rolUsuario} = useAuth();
  const [addNewsForm, setAddNewsForm] = useState(false)
  // const [deleteText, setDeleteText] = useState("Borrar noticias")
  const esEditor = rolUsuario.includes('ROLE_EDITOR');

  
  const handleNewsForm = () => {
    addNewsForm == false ? setAddNewsForm(true) : setAddNewsForm(false)
    setReload(true)
  }

  // const handleDeleteNews = () => {
  //   deleteMode ? (setDeleteMode(false), setDeleteText("Borrar noticias")) : (setDeleteMode(true), setDeleteText("Recargar noticias"));
  //   console.log(deleteMode)
  //   // setReload(true)
  //   console.log(reload)
    
  // } 
  // const handleEditNews = () => {
  //   editMode == false ? setEditMode(true) : setEditMode(false)
  // }
    
  
  return (
    <div>
      {esEditor && (
        <div>
        <div className="bg-gris-claro flex flex-row justify-end p-4 ">
          {!addNewsForm && <button onClick={handleNewsForm} className="p-4  m-2 bg-orange-custom text-white hover:bg-orange-800 rounded-md border-solid ">
            Añadir noticias
          </button>}
          {addNewsForm && <button onClick={handleNewsForm} className="p-4  m-2 bg-orange-custom text-white hover:bg-orange-800 rounded-md border-solid ">
            Dejar de añadir noticias
          </button>}
          
          {/* {!editMode && <button onClick={handleEditNews} className="p-4  m-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md border-solid ">
            Editar noticias
          </button> }
          {editMode && <button onClick={handleEditNews} className="p-4  m-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md border-solid ">
            Recargar noticias
          </button> }
          
          <button onClick={handleDeleteNews} className="p-4 m-2 bg-red-600 text-white hover:bg-red-800 rounded-md border-solid ">
            {deleteText}
          </button> */}
        </div>
        {addNewsForm && <AddNewsForm/>}
        </div>
      )}
    </div>
  );
};

export default NoticiasEdit;
