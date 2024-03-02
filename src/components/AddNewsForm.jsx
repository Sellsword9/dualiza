import { useState } from "react";
import { addNoticia } from "../firebase/noticiasApi";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

const AddNewsForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [img, setImg] = useState("")
  const [newURL, setNewURL] = useState("")
  const {userData} = useAuth()
  // const [userID, setUserID] = useState("")
  // const [pubDate, setPubDate] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    //Tengo que llamar a una funcion que me añada los datos del formulario
    try {
      const nuevoProducto = await addNoticia({
        title: title,
        body: body,
        img: img,
        newURL: newURL,
        userID: userData.id,
        // pubDate: pubDate
      });
      console.log("Noticia añadido con id: ", nuevoProducto);
      // Ventana indicando si todo ok
      Swal.fire({
        icon:"success",
        title:"¡Insercion correcta!",
        text:"Noticia insertada correctamente"
    })

      //Seteamos los estados al valor inicial
      setTitle("");
      setBody("")
      setImg("")
      setNewURL("")
      // setUserID("")
      // setPubDate("")
      
    } catch (err) {
      console.error(err);
    }
};
  return(
    <div className="w-1/2 mx-auto mt-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        {/* Título de la noticia */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
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

        {/* Cuerpo de la noticia */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
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

        {/* URL de la imagen */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img">
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

        {/* URL de la noticia */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newURL">
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

        {/* ID del usuario (si es necesario) */}
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userID">
            ID del usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userID"
            type="text"
            placeholder="ID del usuario"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div> */}
        {/* Fecha de publicacion de la noticia */}
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pubDate">
            Fecha de publicación
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pubDate"
            type="text"
            placeholder="Fecha de publicación de la noticia"
            value={pubDate}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div> */}
        {/* Botón de envío */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear Noticia
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default AddNewsForm