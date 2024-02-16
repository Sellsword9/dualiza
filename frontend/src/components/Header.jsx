import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNegativoNoFondo.png'; // Importa la imagen del logo

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-azul-oscuro to-azul-negro text-white w-full h-40"> {/* Aumenta la altura a h-40 */}
      <div className='flex justify-between items-center'>
        <div>
          <img src={Logo} className='h-40' alt="logo" /> {/* Aplica la clase h-40 directamente a la imagen */}
        </div>
        <div>
          <nav>
            <ul className="list-none p-6">
              <li className="inline mr-6 bg-orange-custom p-2 text-white rounded-md"><Link to="/">Proyecto</Link></li>
              <li className="inline mr-6 text-white bg-orange-custom p-2 rounded-md"><Link to="/resultados">Resultados obtenidos</Link></li>
              <li className="inline text-white mr-6 bg-orange-custom p-2 rounded-md"><Link to="/mejora">Mejora tu centro</Link></li>
              <li className="inline text-white mr-6 bg-orange-custom p-2 rounded-md"><Link to="/noticias">Noticias</Link></li>
              <li className='text-white inline '>oscurecer/aclarar</li> {/* Renderiza ThemeToggleButton como un componente */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
