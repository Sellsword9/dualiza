import { useEffect, useState } from 'react';
import NoticiasComponent from '../components/NoticiasComponent';
import NoticiasEdit from '../components/NoticiasEdit';
import Spinner from '../components/Spinner';
import { getNoticias } from '../firebase/noticiasApi';

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(true);
  const [deleteMode, setDeleteMode] = useState(false);
  
  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await getNoticias();
        const noticiasData = response || [];
        setNoticias(noticiasData);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      } finally {
        setCargandoNoticias(false);
      }
    };

    obtenerNoticias();
  }, [deleteMode]);

  return (
    <div>
      {cargandoNoticias ? (
        <Spinner mensaje="Cargando noticias..." />
      ) : (
        <div>
          {typeof deleteMode !== 'undefined' && (
            <NoticiasEdit setDeleteMode={setDeleteMode} deleteMode={deleteMode} />
          )}
          <NoticiasComponent noticiasData={noticias} deleteMode={deleteMode} setDeleteMode={setDeleteMode} />
        </div>
      )}
    </div>
  );
};

export default NoticiasPage;
