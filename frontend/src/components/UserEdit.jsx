import { useState, useRef } from "react";
import { editUsuario } from "../firebase/usersApi";
import { useAuth } from "../context/AuthContext";

const UserEdit = ({ users, setUsers }) => {
  const [editedUser, setEditedUser] = useState(null);
  const { userData } = useAuth();
  const formRef = useRef(null);

  const handleEditClick = (user) => {
    setEditedUser(user);

    // Enfocar en el formulario cuando se hace clic en "Editar Usuario"
    setTimeout(() => {
      formRef.current && formRef.current.querySelector('input[type="checkbox"]').focus();
    }, 0);  };

  const handleRolesChange = (e) => {
    const { value, checked } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      role: checked
        ? [...prevUser.role, value]
        : prevUser.role.filter((role) => role !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );

    setUsers(updatedUsers);

    try {
      await editUsuario(editedUser.id, editedUser);
      console.log("Usuario actualizado en Firestore:", editedUser);
    } catch (error) {
      console.error("Error al editar usuario en Firestore:", error);
    }

    setEditedUser(null);
  };

  return (
    <div>
      {editedUser && (
        <div className="flex flex-col m-4 overflow-hidden bg-white p-4 border-solid border-2 border-azul-claro rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">Editar Usuario: {editedUser.username}</h3>
          <form className="flex flex-row justify-left" onSubmit={handleSubmit} ref={formRef}>
            <label className="pb-2 flex flex-row justify-between">
              Roles:
              <div>
                <label className="p-2">
                  <input type="checkbox" name="admin" value="ROLE_ADMIN" checked={editedUser.role.includes("ROLE_ADMIN")} onChange={handleRolesChange} />
                  Admin
                </label>
                <label className="p-2">
                  <input type="checkbox" name="editor" value="ROLE_EDITOR" checked={editedUser.role.includes("ROLE_EDITOR")} onChange={handleRolesChange} />
                  Editor
                </label>
              </div>
            </label>
            {editedUser.id !== userData.id && (
              <button type="submit" className="bg-blue-500 text-white p-4 rounded-md">
                Guardar Cambios
              </button>
            )}
          </form>
        </div>
      )}

      {users && users.map((usuario) => (
        <div key={usuario.id} className="flex flex-col m-4 overflow-hidden bg-white p-4 border-solid border-2 border-azul-claro rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">Nombre de usuario: {usuario.username}</h3>
          {usuario.role && (
            <p>Roles: {usuario.role.map((rol) => <span key={rol}>{rol} </span>)}</p>
          )}
          <button className="bg-blue-600 hover:bg-blue-800 text-white p-2 mt-2 w-1/5 rounded-md" onClick={() => handleEditClick(usuario)}>
            Editar Usuario
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserEdit;
