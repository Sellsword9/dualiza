import { useAuth } from "../context/AuthContext";

const NoticiasEdit = () => {
  const {rolUsuario } = useAuth();

  // Verificar si el usuario tiene el rol de "editor"
  const esEditor = rolUsuario.includes("ROLE_EDITOR")

  // Si no es un editor, no se renderiza nada
  if (!esEditor) {
    return null;
  }

  return (
    <div>
      {esEditor && (
        <div className="bg-gris-claro flex flex-row justify-end">
          <hr />
          <button className="p-2 m-4 bg-orange-custom text-white hover:bg-orange-800 rounded-md border-solid ">
            Añadir noticias
          </button>
          <button className="p-2 m-4 bg-orange-custom text-white hover:bg-orange-800 rounded-md border-solid ">
            Editar noticias
          </button>
          <button className="p-2 m-4 bg-orange-custom text-white hover:bg-orange-800 rounded-md border-solid ">
            Borrar noticias
          </button>
          <hr />
        </div>
      )}
    </div>
  );
};

export default NoticiasEdit;
