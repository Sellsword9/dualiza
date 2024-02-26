// AuthContext.js
import { createContext, useContext, useState } from 'react';
import { doSignOut } from '../firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);//Ponemos hardcodeando que si hay usuario
  const [rolUsuario, setRolUsuario] = useState(["ROLE_ADMIN"]);

  const handleLogin = (email) => {
    console.log(email)
    setUsuarioAutenticado(true);
    console.log("Usuario correcto")
    // setRolUsuario(rol);
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
