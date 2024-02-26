import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNegativoNoFondo.png'; // Importa la imagen del logo

const Header = ({ isLogged, role, setUsuarioAutenticado }) => {
  const usuarioAutenticado = isLogged;
  const rolUsuario = role;

  const handleLogout = () => {
    setUsuarioAutenticado(false);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-azul-oscuro to-azul-negro text-white w-full h-40">
      <div className="flex justify-between items-center w-full">
        <a href="/">
          <img src={Logo} className="h-44" alt="logo" />
        </a>
        <nav className="md:hidden">
          <button className="mobile-menu-button">
            <svg
              className="h-6 w-6 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
              />
            </svg>
          </button>
          <ul className="hidden absolute top-0 left-0 w-full bg-gray-800 pt-16">
            <li className="block py-2 px-4">
              <Link to="/proyecto" className="nav-link">Proyecto</Link>
            </li>
            <li className="block py-2 px-4">
              <Link to="/resultados" className="nav-link">Resultados obtenidos</Link>
            </li>
            <li className="block py-2 px-4">
              <Link to="/mejora" className="nav-link">Mejora tu centro</Link>
            </li>
            <li className="block py-2 px-4">
              <Link to="/noticias" className="nav-link">Noticias</Link>
            </li>
            {usuarioAutenticado ? (
              <li className="block py-2 px-4">
                <button className="nav-link" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="block py-2 px-4">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            )}
            {rolUsuario.includes("ROLE_ADMIN") && (
              <li className="block py-2 px-4">
                <Link to="/admin" className="nav-link">Admin</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="hidden md:block">
          <ul className="list-none p-6 flex">
            <Link to="/">
              <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                Proyecto
              </li>
            </Link>
            <Link to="/resultados">
              <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                Resultados obtenidos
              </li>
            </Link>
            <Link to="/mejora">
              <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                Mejora tu centro
              </li>
            </Link>
            <Link to="/contacto">
              <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                Contacto
              </li>
            </Link>
            <Link to="/noticias">
              <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                Noticias
              </li>
            </Link>
            {usuarioAutenticado ? (
              <Link to="/">
                <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Iniciar sesión
                </li>
              </Link>
            )}
            {rolUsuario.includes("ROLE_ADMIN") && (
              <Link to="/admin">
                <li className="inline mr-2 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Admin
                </li>
              </Link>
            )}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
