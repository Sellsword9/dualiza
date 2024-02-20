import { useState } from "react";

const UserEdit = ({ users, setShowDeleteModal }) => {
  const [editedUser, setEditedUser] = useState(null);

  const handleDelete = () => {
    setShowDeleteModal(true)
  };
  const handleEditClick = (user) => {
    setEditedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleRolesChange = (e) => {
    const { value, checked } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      roles: checked
        ? [...prevUser.roles, value]
        : prevUser.roles.filter((role) => role !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited User:", editedUser);
    setEditedUser(null);
  };

  return (
    <div>
      {users.map((usuario) => (
        <div key={usuario["@id"]} className="flex flex-col m-4 overflow-hidden bg-white p-4 border-solid border-2 border-azul-claro rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">Nombre de usuario: {usuario.username}</h3>
          <p>Roles: {usuario.roles.map((rol) => <span key={rol}>{rol} </span>)}</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white p-2 mt-2 rounded-md" onClick={() => handleEditClick(usuario)}>
            Editar Usuario
          </button>
          <button className="bg-red-600 hover:bg-red-800 text-white p-2 mt-2 rounded-md" onClick={() => handleDelete()}>
            Borrar Usuario
          </button>
        </div>
      ))}

      {editedUser && (
        <div className="flex flex-col m-4 overflow-hidden bg-white p-4 border-solid border-2 border-azul-claro rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">Editar Usuario: {editedUser.username}</h3>
          <form className="flex flex-row justify-left" onSubmit={handleSubmit}>
            <label className="mx-4">
              Nombre de Usuario: 
              <input className="border-2 rounded-md ml-2" type="text" name="username" value={editedUser.username} onChange={handleInputChange} />
            </label>
            <label className="pb-2 flex flex-row justify-between">
              Roles:
              <div>
                {/* Assuming roles are checkboxes */}
                <label  className="p-2">
                  <input type="checkbox" name="admin" value="ROLE_ADMIN" checked={editedUser.roles.includes("ROLE_ADMIN")} onChange={handleRolesChange} />
                  Admin
                </label>
                <label className="p-2">
                  <input type="checkbox" name="editor" value="ROLE_EDITOR" checked={editedUser.roles.includes("ROLE_EDITOR")} onChange={handleRolesChange} />
                  Editor
                </label>
                <label className="p-2">
                  <input type="checkbox" name="user" value="ROLE_USER" checked={editedUser.roles.includes("ROLE_USER")} onChange={handleRolesChange} />
                  User
                </label>
              </div>
            </label>
            {/* Add other form fields as needed */}
            <button type="submit" className="bg-blue-500 text-white p-4 rounded-md">
              Guardar Cambios
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserEdit;