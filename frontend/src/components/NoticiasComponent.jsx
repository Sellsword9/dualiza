import { useAuth } from "../context/AuthContext";

const NoticiasComponent = ({ noticiasData, handleDelete, handleEdit }) => {
  const { rolUsuario } = useAuth();
  const noticias = [...noticiasData];
  noticias.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  console.log(rolUsuario)
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-5 bg-gris-claro">
      {noticias.map((noticia) => (
        <div
          key={noticia.id}
          className="flex flex-col overflow-hidden bg-white p-4 border-solid border-2 border-azul-claro  rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">
            {noticia.title}
          </h3>
          <p className="text-gray-700 mb-4 overflow-ellipsis overflow-hidden flex-1">
            {noticia.body}
          </p>
          <img
            src={noticia.img}
            alt={noticia.title}
            className="w-full h-40 object-cover mb-1"
          />
          <a
            href={noticia.newURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline "
          >
            Leer más↙️
          </a>
          {rolUsuario.includes('ROLE_EDITOR') && (
            <div className="flex flex-row justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 p-2 m-4 w-1/3 rounded-md text-white"
                onClick={() => handleDelete(noticia.id)}
              >
                Borrar Noticia
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 p-2 m-4 w-1/3 rounded-md text-white"
                onClick={() => handleEdit(noticia.id)}
              >
                Editar Noticia
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoticiasComponent;
