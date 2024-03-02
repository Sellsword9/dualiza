import { useEffect, useRef, useState } from 'react';
import NoticiasComponent from '../components/NoticiasComponent';
import NoticiasEdit from '../components/NoticiasEdit';
import Spinner from '../components/Spinner';
import { deleteNoticia,  getNoticiaById, getNoticias } from '../firebase/noticiasApi';
import Swal from 'sweetalert2';
import EditNewsForm from '../components/EditNewsForm';

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState([]);
  const [cargandoNoticias, setCargandoNoticias] = useState(true);
  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [reload, setReload] = useState(false);
  const [newsDataObject, setNewsDataObject] = useState({})
  const editFormRef = useRef(null);

  const handleDelete = async (id) => {
    try { 
      await deleteNoticia(id);
      Swal.fire({
        icon: "success",
        title: "¡Noticia borrada!",
        text: "Datos de la noticia borrados correctamente",
      });
      setReload(true);
      console.log(reload)
    } catch (error) {
      console.error('Error al borrar noticia:', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      // Obtener los datos de la noticia para prellenar el formulario
      const noticia = await getNoticiaById(id);
      setNewsDataObject(noticia);

      // Cambiar a editMode
      setEditMode(true);

      
      setReload(true);
      
    } catch (error) {
      console.error('Error al editar noticia:', error);
    }
  };

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
        setReload(false);
      }
    };
  
    obtenerNoticias();
  }, [reload]); 

  return (
    <div>
      {cargandoNoticias ? (
        <Spinner mensaje="Cargando noticias..." />
      ) : (
        <div>
          {editMode && <EditNewsForm setEditMode={setEditMode} setReload={setReload} newsDataObject={newsDataObject} editFormRef={editFormRef} />}
          {typeof deleteMode !== 'undefined' && (
            <NoticiasEdit reload={reload} setReload={setReload} />
          )}
          <NoticiasComponent
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            noticiasData={noticias}
            editMode={editMode}
            setEditMode={setEditMode}
            deleteMode={deleteMode}
            setDeleteMode={setDeleteMode}
          />
        </div>
      )}
    </div>
  );
};

export default NoticiasPage