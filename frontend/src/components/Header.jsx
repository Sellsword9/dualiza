import { Link } from 'react-router-dom';
import Logo from '../assets/LogoNegativoNoFondo.png'; // Importa la imagen del logo


const Header = () => {
  // Define el estado para controlar si el menú está abierto o cerrado

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-azul-oscuro to-azul-negro text-white w-full h-40">
      <div className='flex justify-between items-center w-full'>
        <a href='/'><img src={Logo} className='h-44' alt="logo" /></a>
        <nav>
          <ul className="list-none p-6 flex">
            <Link to="/"><li className="inline mr-6 bordeLinks bg-orange-custom py-3 text-white  rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2">Proyecto</li></Link>
            <Link to="/resultados"><li className="inline mr-6 bordeLinks text-white bg-orange-custom rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2">Resultados obtenidos</li></Link>
            <Link to="/mejora"><li className="inline text-white mr-6 bordeLinks bg-orange-custom  rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2">Mejora tu centro</li></Link>
            <Link to="/noticias"><li className="inline text-white mr-6 bordeLinks bg-orange-custom  rounded-md lg:pl-16 lg:pr-16 md:py-2 md:pl-4 md:pr-4 sm:py-2 sm:pl-2 sm:pr-2">Noticias</li></Link>
            <li className='text-white inline'>oscurecer/aclarar</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


//  <footer className="p-8 flex flex-col justify-center items-center  bg-gradient-to-b from-azul-semi-oscuro to-azul-oscuro text-white w-full h-90">
//         <div className="grid lg:grid-cols-3 md:grid-rows-3 gap-4 grid-rows-3">
//           <div className="col-span-3 md:col-span-1 flex justify-center items-center sm:flex-col">
//             <div className="flex items-center sm:flex-col md:flex-col">
//               <img className="h-14 md:h-30 m-3 rounded-lg shadow-lg shadow-azul-negro" src={albaytarLogo} alt="logo2" />
//               <div className="ml-3">
//                 <p className="font-bold mb-4 text-lg">IES AL-BAYTAR</p>
//                 <p className="font-semibold pb-5">Dpto. Instalación y Mantenimiento</p>
//                 <p className="pl-4">David Racero. Email: dracpat976@g.educaand.es</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-3 md:col-span-1 flex justify-center items-center mr-8">
//             <div className="flex items-center sm:flex-col md:flex-col">
//               <img className="h-96 md:h-30 m-3" src={hlanzLogo} alt="logo2" />
//               <div className="ml-3">
//                 <p className="font-bold mb-4 text-lg">IES POLITÉCNICO HERMENEGILDO LANZ</p>
//                 <p className="font-semibold pb-3">Dpto. Instalación y Mantenimiento. </p>
//                 <p className="pb-5 pl-4">Maria Dolores Sáenz Pajares. Email: msaepaj412@g.educaand.es</p>
//                 <p className="font-semibold pb-3">Dpto. Energía y Agua.</p>
//                 <p className="font-semibold pb-3">Dpto. Edificación y Obra civil.</p>
//                 <p className="font-semibold pb-3">Dpto. Electricidad y Electrónica</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-3 md:col-span-1 flex justify-center items-center pl-8">
//             <div className="flex items-center sm:flex-col md:flex-col">
//               <img className="h-20 md:h-30 m-3 rounded-lg shadow-lg shadow-azul-negro" src={virgenLogo} alt="logo2" />
//               <div className="ml-3">
//                 <p className="font-bold mb-4 text-lg">CIFP VIRGEN DE GRACIA</p>
//                 <p className="font-semibold pb-3">Dpto. Energía y Agua.</p>
//                 <p className="pl-4">Raúl Morales Ocaña. Email: rmo14@educastillalamancha.es</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="text-xl">Haz click <Link to="/contacto" className="text-orange-custom text-2xl font-bold underline mt-10">aquí</Link> para contactar con nosotros</p>
//     </footer>