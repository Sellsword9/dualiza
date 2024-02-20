import { useEffect, useState } from "react";
import { fetchUsuarios } from "../components/utils/apiService";
import UserInfo from "../components/UserInfo";
import UserEdit from "../components/UserEdit";
import DeleteModal from "../components/DeleteModal";

const AdminPage = () => {
  const [cargandoUsers, setCargandoUsers] = useState(true);
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [mensajeEditar, setMensajeEditar] = useState("Editar usuarios");
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const handleEditUser = () => {
    setIsEditing(!isEditing);
    setMensajeEditar((prevMensaje) =>
      isEditing ? "Editar usuarios" : "Dejar de editar"
    );
  };

  const handleDeleteConfirm = () => {
    // Call your deleteUserApi() method here
    // ...

    // Close the modal and reset the state
    setShowDeleteModal(false);
    // setEditedUser(null);
  };

  const handleDeleteCancel = () => {
    // Close the modal and reset the state
    setShowDeleteModal(false);
  };


  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await fetchUsuarios();
        setUsers(response["hydra:member"] || []);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      } finally {
        setCargandoUsers(false);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <>
      <div className="w-1/2 flex flex-col justify-center mx-auto">
        <div className="flex flex-row justify-end">
          <div>
            <button
              className="bg-sky-600 hover:bg-sky-800 p-4 m-4 border-black rounded-md text-white"
              onClick={handleEditUser}
            >
              {mensajeEditar}
            </button>
          </div>
          
        </div>
        {isEditing && (
          <UserEdit
          setShowDeleteModal={setShowDeleteModal}
            users={users}
            cargandoUsers={cargandoUsers}
            setUsers={setUsers}
          />
        )}
        {!isEditing && (
          <UserInfo
            users={users}
            cargandoUsers={cargandoUsers}
            setUsers={setUsers}
          />
        )}
         {showDeleteModal && <DeleteModal handleDeleteCancel={handleDeleteCancel} handleDeleteConfirm={handleDeleteConfirm}/>}
      </div>
    </>
  );
};

export default AdminPage;
