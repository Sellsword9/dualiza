// AuthContext.js
import { createContext, useContext, useState } from 'react';
import { doSignOut } from '../firebase/auth';
import { getUsuarioById } from '../firebase/usersApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [rolUsuario, setRolUsuario] = useState([]);
  const [userData, setUserData] = useState(null); 

  const handleLogin = async (uid) => {
    console.log(uid);
    const userData = await getUsuarioById(uid);
    setUsuarioAutenticado(!!userData);
    setRolUsuario(...userData.role);
    setUserData(userData); 
    console.log(userData);
  };

  const handleLogout = async () => {
    await doSignOut();
    setUsuarioAutenticado(false);
    setRolUsuario('');
    setUserData(null); 
    console.log(userData)
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
