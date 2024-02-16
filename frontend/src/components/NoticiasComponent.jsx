const NoticiasComponent = ({ noticiasData }) => {
    const noticias = noticiasData;
  
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-5 bg-gray-300">
        {noticias.map((noticia) => (
          <div key={noticia['@id']} className="flex flex-col overflow-hidden bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">{noticia.title}</h3>
            <p className="text-gray-700 mb-4 overflow-ellipsis overflow-hidden flex-1">{noticia.body}</p>
            <img src={noticia.img} alt={noticia.title} className="w-full h-40 object-cover mb-1" />
            <span className="text-sm mb-2">{noticia.pubDate.slice(0,9)}</span>
            <a
              href={noticia.newURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Leer más↙️
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default NoticiasComponent;
  