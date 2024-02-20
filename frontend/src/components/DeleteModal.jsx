
const DeleteModal = ({handleDeleteConfirm, handleDeleteCancel}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <p>¿Estás seguro de que deseas borrar este usuario?</p>
            <button className="bg-red-500 text-white p-2 mt-2 rounded-md" onClick={handleDeleteConfirm}>
              Sí, borrar
            </button>
            <button className="bg-blue-500 text-white p-2 mt-2 rounded-md" onClick={handleDeleteCancel}>
              Cancelar
            </button>
          </div>
        </div>
  )
}

export default DeleteModal