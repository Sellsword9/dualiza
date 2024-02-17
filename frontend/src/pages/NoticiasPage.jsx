// NoticiasPage.js

import { useEffect, useState } from 'react';
import { fetchNoticias } from '../components/utils/apiService';
import NoticiasComponent from '../components/NoticiasComponent';

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await fetchNoticias();
        const noticiasData = response['hydra:member']; // Accede a hydra:member
        setNoticias(noticiasData);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <div>
      <NoticiasComponent noticiasData={noticias}/>
    </div>
  );
};

export default NoticiasPage;
