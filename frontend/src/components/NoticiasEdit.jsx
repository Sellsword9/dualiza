import { useAuth } from "../context/AuthContext";

const NoticiasEdit = () => {
  const {rolUsuario} = useAuth();

  // Verificar si el usuario tiene el rol de "editor"
  const esEditor = rolUsuario=='ROLE_EDITOR'||rolUsuario=='ROLE_ADMIN';

  return (
    <div>
      {esEditor && (
        <div className="bg-gris-claro flex flex-row justify-end p-4 ">
          <button className="p-2 m-4 bg-green-600 text-white hover:bg-green-800 rounded-md border-solid ">
            Añadir noticias
          </button>
          <button className="p-2 m-4 bg-yellow-600 text-white hover:bg-yellow-800 rounded-md border-solid ">
            Editar noticias
          </button>
          <button className="p-2 m-4 bg-red-600 text-white hover:bg-red-800 rounded-md border-solid ">
            Borrar noticias
          </button>
        </div>
      )}
    </div>
  );
};

export default NoticiasEdit;
