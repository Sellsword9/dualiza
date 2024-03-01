import { useState } from 'react';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { addUsuario } from '../firebase/usersApi';
import Swal from 'sweetalert2';

const AddUserForm = ({setReload, setShowAddUserForm}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar la longitud de la contraseña y si incluye al menos una mayúscula
    if (password.length < 6 || !/[A-Z]/.test(password)) {
      // Mostrar el modal de error
      Swal.fire({
        icon: 'error',
        title: 'Contraseña no válida',
        text: 'La contraseña debe tener al menos 6 caracteres y contener al menos una letra mayúscula.',
      });
      return;
    }

    // Verificar si el email contiene una extensión válida mediante una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Mostrar el modal de error
      Swal.fire({
        icon: 'error',
        title: 'Email inapropiado',
        text: 'Por favor, proporciona un email válido.',
      });
      return;
    }

    // Crear el objeto de usuario con el rol 'ROLE_EDITOR'
    const newUser = {
      username,
      email,
      password,
      role: ['ROLE_EDITOR'],
    };

    try {
      // Esperar a que se cree el usuario
      const userCredential = await doCreateUserWithEmailAndPassword(newUser.email, newUser.password);

      // Si la creación del usuario es exitosa, añadirlo a la base de datos
      if (userCredential) {
        await addUsuario(newUser);
        setShowAddUserForm(false)
        setReload(true)

        // Limpiar los campos del formulario
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Error al crear el usuario.');
      }
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir
      console.error('Error al crear y añadir usuario:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div className="px-5 py-7">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Nombre de Usuario
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Email
        </label>
        <input
          type="email"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Contraseña
        </label>
        <input
          type="password"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className="inline-block mr-2">Añadir Usuario</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );

};

export default AddUserForm;
