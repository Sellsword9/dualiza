import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { editNoticia } from "../firebase/noticiasApi";

const EditNewsForm = ({ newsDataObject, setEditMode, setReload, editFormRef  }) => {
  const { userData } = useAuth();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [newURL, setNewURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Utilizando editNoticia para enviar la noticia actualizada a la base de datos
      await editNoticia(newsDataObject.id, {
        title: title,
        body: body,
        img: img,
        newURL: newURL,
        userID: userData.id,
      });

      
      setEditMode(false)
      
      // Limpiando los estados después de la inserción
      setTitle("");
      setBody("");
      setImg("");
      setNewURL("");
      setReload(true)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Actualizando los estados cuando el objeto newsDataObject cambia
    setTitle(newsDataObject?.title || "");
    setBody(newsDataObject?.body || "");
    setImg(newsDataObject?.img || "");
    setNewURL(newsDataObject?.newURL || "");
    if (editFormRef.current) {
        // Hacer el desplazamiento hacia el formulario
        editFormRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [newsDataObject, editFormRef]);

  return (
    <div className="w-1/2 mx-auto mt-8"  ref={editFormRef}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Título
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Título de la noticia"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="body"
          >
            Cuerpo
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="body"
            placeholder="Cuerpo de la noticia"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="img"
          >
            URL de la imagen
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="text"
            placeholder="URL de la imagen"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newURL"
          >
            URL de la noticia
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newURL"
            type="text"
            placeholder="URL de la noticia"
            value={newURL}
            onChange={(e) => setNewURL(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
             Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNewsForm;
