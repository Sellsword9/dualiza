// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(true);//Ponemos hardcodeando que si hay usuario
  const [rolUsuario, setRolUsuario] = useState(["ROLE_ADMIN,ROLE_EDITOR,ROLE_USER"]);// Ponemos hardcodeando los roles

  const handleLogin = (rol) => {
    setUsuarioAutenticado(true);
    setRolUsuario(rol);
  };

  const handleLogout = () => {
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
