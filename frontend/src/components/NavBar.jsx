// NavBar.jsx
import { Link } from 'react-router-dom';
import {FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';

const NavBar = () => {
    const navRef=useRef();

    const showNavbar=()=>{
        navFred.current
    }
  return (
    <>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                    <img className="h-8" src="/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                    <Link to="/proyecto" className="nav-link">Proyecto</Link>
                    <Link to="/resultados" className="nav-link">Resultados</Link>
                    <Link to="/mejora" className="nav-link">Mejora</Link>
                    <Link to="/noticias" className="nav-link">Noticias</Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/logout" className="nav-link">Logout</Link>
                    </div>
                </div>
                </div>
            </div>
            <button>
                <FaTimes/>
            </button>
        </nav>
        <button>
            <FaBars/>
        </button>
    </>
  );
};

export default NavBar;
