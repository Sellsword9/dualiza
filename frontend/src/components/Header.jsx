import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNegativoNoFondo.png';

const Header = ({ isLogged, role, setUsuarioAutenticado }) => {
  const [isActive, setIsActive] = useState(false);

  const usuarioAutenticado = isLogged;
  const rolUsuario = role;

  const handleLogout = () => {
    setUsuarioAutenticado(false);
  };

  const handleToggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-azul-oscuro to-azul-negro text-white w-full h-40">
      <div className="flex justify-between items-center w-full">
        <a href="/">
          <img src={Logo} className="h-44" alt="logo" />
        </a>

        <button
          className="flex items-center p-2 text-white rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-custom"
          onClick={handleToggleDropdown}
        >
          <span className="mr-2">Menú</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Ventana flotante del menú desplegable */}
        {isActive && (
          <div className="absolute top-28 right-4 bg-white shadow-md rounded-md z-10">
            <ul className="list-none p-6 flex flex-col"> 
              <Link to="/">
                <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Proyecto
                </li>
              </Link>
              <Link to="/resultados">
                <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Resultados obtenidos
                </li>
              </Link>
              <Link to="/mejora">
                <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Mejora tu centro
                </li>
              </Link>
              <Link to="/contacto">
                <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Contacto
                </li>
              </Link>
              <Link to="/noticias">
                <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  Noticias
                </li>
              </Link>
              {usuarioAutenticado ? (
                <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </li>
              ) : (
                <Link to="/login">
                  <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Iniciar sesión
                  </li>
                </Link>
              )}
              {rolUsuario.includes("ROLE_ADMIN") && (
                <Link to="/admin">
                  <li className="py-3 px-4 text-gray-800 rounded-md bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Admin
                  </li>
                </Link>
              )}
            </ul>
          </div>
        )}

        {/* Menú principal */}
        <nav className="hidden lg:block">
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
