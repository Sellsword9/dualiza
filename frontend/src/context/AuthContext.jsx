// AuthContext.js
import { createContext, useContext, useState } from 'react';
import { doSignOut } from '../firebase/auth';
import { getUsuarioById } from '../firebase/usersApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);//Ponemos hardcodeando que si hay usuario
  const [rolUsuario, setRolUsuario] = useState([]);

  const handleLogin = async (uid) => {
    console.log(uid)
    const userData = await getUsuarioById(uid)
    setUsuarioAutenticado(!!userData);
    console.log(userData)
     setRolUsuario(...userData.role);
  };

   const handleLogout = () => {
    doSignOut();
    setUsuarioAutenticado(false);
    setRolUsuario('');
  };

  const contextValue = {
    usuarioAutenticado,
    rolUsuario,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
