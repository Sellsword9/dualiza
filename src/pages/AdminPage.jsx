    import { useEffect, useState } from "react";
    import UserInfo from "../components/UserInfo";
    import UserEdit from "../components/UserEdit";
    import DeleteModal from "../components/DeleteModal";
    import { getUsuarios } from "../firebase/usersApi";
    import AddUserForm from "../components/AddUserForm";

    const AdminPage = () => {
      const [cargandoUsers, setCargandoUsers] = useState(true);
      const [users, setUsers] = useState([]);
      const [isEditing, setIsEditing] = useState(false);
      const [mensajeEditar, setMensajeEditar] = useState("Editar usuarios");
      const [showDeleteModal, setShowDeleteModal] = useState(false);
      const [showAddUserForm, setShowAddUserForm] = useState(false);
      const [reload, setReload] = useState(false);


      const handleEditUser = () => {
        setIsEditing(!isEditing);
        setMensajeEditar((prevMensaje) =>
          isEditing ? "Editar usuarios" : "Dejar de editar"
        );
      };
      const handleAddUser = () => {
        setShowAddUserForm(!showAddUserForm);
        
      };
      const handleDeleteConfirm = () => {
        setShowDeleteModal(false);
      };

      const handleDeleteCancel = () => {
        setShowDeleteModal(false);
      };

      useEffect(() => {
        const obtenerUsuarios = async () => {
          try {
            const response = await getUsuarios();
            console.log(response)
            setUsers(response || []);
          } catch (error) {
            console.error("Error al obtener usuarios:", error);
          } finally {
            setCargandoUsers(false);
            setReload(false)
          }
        };
      
        obtenerUsuarios();
      }, [reload]);
      

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
                <button
                  className="bg-green-500 hover:bg-green-700 p-4 m-4 border-black rounded-md text-white"
                  onClick={handleAddUser}
                >
                  Añadir Usuario
                </button>
              </div>
            </div>
            {showAddUserForm && <AddUserForm setShowAddUserForm={setShowAddUserForm} reload={reload} setReload={setReload}/>}
            {!cargandoUsers && isEditing && (
              <UserEdit
                setShowDeleteModal={setShowDeleteModal}
                users={users}
                setUsers={setUsers} // Pasa setUsers directamente al componente UserEdit
              />
            )}
            {!isEditing && (
              <UserInfo
                users={users}
                cargandoUsers={cargandoUsers}
                setUsers={setUsers}
              />
            )}
            {showDeleteModal && (
              <DeleteModal
                handleDeleteCancel={handleDeleteCancel}
                handleDeleteConfirm={handleDeleteConfirm}
              />
            )}
          </div>
        </>
      );
    };

    export default AdminPage;