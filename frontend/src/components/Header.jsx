import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <header className="flex justify-between items-center p-4 bg-orange-custom text-white">
      
      <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/">Proyecto</Link></li>
            <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/resultados">Resultados obtenidos</Link></li>
            <li style={{ display: 'inline' }}><Link to="/mejora">Mejora tu centro</Link></li>
            <li style={{ display: 'inline' }}><Link to="/noticias">Noticias</Link></li>
            <li>oscurecer/aclarar</li> {/* Renderiza ThemeToggleButton como un componente */}
          </ul>
        </nav>
    </header>
  );
};

export default Header;

