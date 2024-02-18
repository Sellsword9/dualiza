import { Link } from "react-router-dom";
import albaytarLogo from '../assets/proyectoImg/Logo albaytar.png';
import virgenLogo from '../assets/proyectoImg/02 LOGO CIFP VdG.jpg';
import hlanzLogo from '../assets/proyectoImg/5 LOGOS IES P H LANZ B-02.png';

const Footer = () => {
  return (
    <footer className="p-8 flex flex-col justify-center items-center  bg-gradient-to-b from-azul-semi-oscuro to-azul-oscuro text-white w-full lg:h-90 md:h-50 ms:h-40">
        <div className="grid lg:grid-cols-3 gap-4 p-8">
          <div className="col-span-3 md:col-span-1 flex justify-center items-center">
            <div className="flex items-center">
              <img className="h-14 md:h-30 m-3 rounded-lg shadow-lg shadow-azul-negro" src={albaytarLogo} alt="logo2" />
              <div className="ml-3">
                <p className="font-bold mb-4 text-lg">IES AL-BAYTAR</p>
                <p className="font-semibold pb-5">Dpto. Instalación y Mantenimiento</p>
                <p className="pl-4">David Racero. Email: dracpat976@g.educaand.es</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 flex justify-center items-center mr-8">
            <img className="h-96 md:h-30 m-3" src={hlanzLogo} alt="logo2" />
            <div className="ml-3 ">
              <p className="font-bold mb-4 text-lg">IES POLITÉCNICO HERMENEGILDO LANZ</p>
              <p className="font-semibold pb-3">Dpto. Instalación y Mantenimiento. </p>
              <p className="pb-5 pl-4">Maria Dolores Sáenz Pajares. Email: msaepaj412@g.educaand.es</p>
              <p className="font-semibold pb-3">Dpto. Energía y Agua.</p>
              <p className="font-semibold pb-3">Dpto. Edificación y Obra civil.</p>
              <p className="font-semibold pb-3">Dpto. Electricidad y Electrónica</p>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 flex justify-center items-center pl-8">
            <img className="h-20 md:h-30 m-3 rounded-lg shadow-lg shadow-azul-negro" src={virgenLogo} alt="logo2" />
            <div className="ml-3">
              <p className="font-bold mb-4 text-lg">CIFP VIRGEN DE GRACIA</p>
              <p className="font-semibold pb-3">Dpto. Energía y Agua.</p>
              <p className="pl-4">Raúl Morales Ocaña. Email: rmo14@educastillalamancha.es</p>
            </div>
          </div>
        </div>
        <p className="text-xl">Haz click <Link to="/contacto" className="text-orange-custom text-2xl font-bold underline mt-10">aquí</Link> para contactar con nosotros</p>
    </footer>
  );
};

export default Footer;
