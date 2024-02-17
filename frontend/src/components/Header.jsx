import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNegativoNoFondo.png'; // Importa la imagen del logo


const Header = () => {
  // Define el estado para controlar si el menú está abierto o cerrado

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-azul-oscuro to-azul-negro text-white w-full h-40">
      <div className='flex justify-between items-center w-full'>
        <img src={Logo} className='h-44' alt="logo" />

        <nav>
          <ul className="list-none p-6 flex">
            <li className="inline mr-6 bordeLinks bg-orange-custom py-3 text-white shadow-inner-li rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2"><Link to="/">Proyecto</Link></li>
            <li className="inline mr-6 bordeLinks text-white bg-orange-custom shadow-inner-li rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2"><Link to="/resultados">Resultados obtenidos</Link></li>
            <li className="inline text-white mr-6 bordeLinks bg-orange-custom shadow-inner-li rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2"><Link to="/mejora">Mejora tu centro</Link></li>
            <li className="inline text-white mr-6 bordeLinks bg-orange-custom shadow-inner-li rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2"><Link to="/noticias">Noticias</Link></li>
            <li className='text-white inline'>oscurecer/aclarar</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

