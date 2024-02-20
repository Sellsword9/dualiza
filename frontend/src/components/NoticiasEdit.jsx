import { useAuth } from "../context/AuthContext";

const NoticiasEdit = () => {
  const {rolUsuario} = useAuth();

  // Verificar si el usuario tiene el rol de "editor"
  const esEditor = rolUsuario=='ROLE_EDITOR'||rolUsuario=='ROLE_ADMIN';

  return (
    <div>
      {esEditor && (
        <div className="bg-gris-claro flex flex-row justify-end p-4 ">
          <button className="p-4  m-2 bg-orange-custom text-white hover:bg-orange-800 rounded-md border-solid ">
            Añadir noticias
          </button>
          <button className="p-4  m-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md border-solid ">
            Editar noticias
          </button>
          <button className="p-4  m-2 bg-red-600 text-white hover:bg-red-800 rounded-md border-solid ">
            Borrar noticias
          </button>
        </div>
      )}
    </div>
  );
};

export default NoticiasEdit;
