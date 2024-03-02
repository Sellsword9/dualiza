import Spinner from "./Spinner"

const UserInfo = ({cargandoUsers, users}) => {
    const usuarios = users
    const cargandoUsuarios = cargandoUsers
  return (
    <div>
      {cargandoUsuarios && <Spinner mensaje="Cargando Usuarios..." />}
      {usuarios.map((usuario) => (
  <div key={usuario.id} className="flex flex-col m-4 overflow-hidden bg-white p-4 border-solid border-2 border-azul-claro rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2 overflow-ellipsis overflow-hidden">Nombre de usuario: {usuario.username}</h3>
    {usuario.role && (
      <p>Roles: {usuario.role.map((rol) => (
        <span key={rol}>{rol} </span>
      ))}</p>
    )}
  </div>
))}

    </div>
  )
}

export default UserInfo