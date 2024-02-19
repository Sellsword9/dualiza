import { useEffect, useState } from 'react';
import { fetchNoticias } from '../components/utils/apiService';
import NoticiasComponent from '../components/NoticiasComponent';
import NoticiasEdit from '../components/NoticiasEdit';
import Spinner from '../components/Spinner'; // Asegúrate de tener un componente Spinner

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(true);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await fetchNoticias();
        const noticiasData = response['hydra:member']; // Accede a hydra:member
        setNoticias(noticiasData);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      } finally {
        // Marcar que las noticias han terminado de cargarse
        setCargandoNoticias(false);
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <div>
      
      {cargandoNoticias ? (
        <Spinner mensaje="Cargando noticias..."/> // Muestra el spinner mientras las noticias se están cargando
      ) : (
        <div>
        <NoticiasEdit />
        <NoticiasComponent noticiasData={noticias} />
        </div>
      )}
    </div>
  );
};

export default NoticiasPage;
