import { Link } from 'react-router-dom';
import { useState } from 'react';
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
        <nav className="flex items-center ">
        <ul className="list-none p-6 flex flex-col md:hidden lg:block">
                <Link to="/">
                  <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Proyecto
                  </li>
                </Link>
                <Link to="/resultados">
                  <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Resultados obtenidos
                  </li>
                </Link>
                <Link to="/mejora">
                  <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Mejora tu centro
                  </li>
                </Link>
                <Link to="/contacto">
                  <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Contacto
                  </li>
                </Link>
                <Link to="/noticias">
                  <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Noticias
                  </li>
                </Link>
                {usuarioAutenticado ? (
                  <Link to="/">
                    <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                      <button onClick={handleLogout}>Cerrar sesión</button>
                    </li>
                  </Link>
                ) : (
                  <Link to="/login">
                    <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                      Iniciar sesión
                    </li>
                  </Link>
                )}
                {rolUsuario.includes("ROLE_ADMIN") && (
                  <Link to="/admin">
                    <li className="inline mr-4 py-2 px-3 text-white rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                      Admin
                    </li>
                  </Link>
                )}
              </ul>
        </nav>
        <div className="hidden md:block">
          <button
            className="flex justify-end p-2 text-white rounded-md lg:hidden focus:outline-none "
            onClick={handleToggleDropdown}
          >
            <svg
              className="h-10 w-10 fill-current text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
              />
            </svg>
          </button>
          {isActive && (
            <div className="absolute top-28 right-4 bg-white shadow-md rounded-md z-10">
              <ul className="list-none p-6 flex flex-col md:block lg:hidden">
                <Link to="/">
                  <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Proyecto
                  </li>
                </Link>
                <Link to="/resultados">
                  <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Resultados obtenidos
                  </li>
                </Link>
                <Link to="/mejora">
                  <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Mejora tu centro
                  </li>
                </Link>
                <Link to="/contacto">
                  <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Contacto
                  </li>
                </Link>
                <Link to="/noticias">
                  <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                    Noticias
                  </li>
                </Link>
                {usuarioAutenticado ? (
                  <Link to="/">
                    <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                      <button onClick={handleLogout}>Cerrar sesión</button>
                    </li>
                  </Link>
                ) : (
                  <Link to="/login">
                    <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                      Iniciar sesión
                    </li>
                  </Link>
                )}
                {rolUsuario.includes("ROLE_ADMIN") && (
                  <Link to="/admin">
                    <li className=" mr-2 py-2 px-3 text-azul-negro rounded-md lg:px-6 md:px-4 sm:px-2 bg-transparent hover:bg-orange-custom hover:text-gray-300 transition-colors duration-300">
                      Admin
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;