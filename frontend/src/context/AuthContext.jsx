// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { doSignOut } from '../firebase/auth';
import { getUsuarioById } from '../firebase/usersApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [rolUsuario, setRolUsuario] = useState([]);
  const [userData, setUserData] = useState(null);
  useEffect(() => {

    // Verificar si hay datos de usuario en localStorage al cargar la página
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUsuarioAutenticado(true);
      setRolUsuario(parsedUserData.role);
      setUserData(parsedUserData);
    }
  }, []);

  const handleLogin = async (uid) => {
    const userData = await getUsuarioById(uid);
    setUsuarioAutenticado(!!userData);
    setRolUsuario(userData.role);
    setUserData(userData)
    // Almacenar datos de usuario en localStorage al hacer login
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleLogout = async () => {
    await doSignOut();
    setUsuarioAutenticado(false);
    setRolUsuario('');
    setUserData(null);
    // Eliminar datos de usuario de localStorage al hacer logout
    localStorage.removeItem('userData');
  };

  const contextValue = {
    usuarioAutenticado,
    rolUsuario,
    userData,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
