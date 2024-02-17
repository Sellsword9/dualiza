import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import albaytar from '../assets/proyectoImg/reunion albaytar.png';
import gracia from '../assets/proyectoImg/reunion gracia.png';
import hlanz from '../assets/proyectoImg/reunion hlanz.png';
import hlanzLogo from '../assets/proyectoImg/5 LOGOS IES P H LANZ B-02.png';
import albaytarLogo from '../assets/proyectoImg/Logo albaytar.png';
import virdenLogo from '../assets/proyectoImg/02 LOGO CIFP VdG.jpg';

const ProyectoPage = () => {
  // Configuración del slider

  //npm install react-slick slick-carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 5000 // Establece la velocidad del autoplay en milisegundos (opcional)
  };

  return (
    <>
      <div className="bg-gris-claro p-10 ">
        <div className='flex items-center justify-center bg-gradient-to-b mr-10 ml-10 from-azul-negro to-azul-semi-oscuro rounded-[3rem]'>
          <div className="max-w-[56rem] w-full p-10 ">
            <Slider {...settings}>
              <div className='flex justify-center items-center'>
                <img src={albaytar} className='w-full md:w-[90rem]' alt="Slide 1" />
              </div>
              <div className='flex justify-center items-center'>
                <img src={gracia} className='w-full md:w-[90rem]' alt="Slide 2" />
              </div>
              <div className='flex justify-center items-center'>
                <img src={hlanz} className='w-full md:w-[90rem]' alt="Slide 3" />
              </div>
            </Slider>
          </div>
        </div>
        
        <div className='flex lg:m-32 flex-col md:flex-row m-10 '>
          <div className='p-7 mb-10 md:mb-0 bg-white rounded-lg shadow-md shadow-azul-semi-oscuro md:mr-20'>
            <h2 className='text-orange-custom text-2xl font-bold pb-6 text-center'>Descripción</h2>
            <p className='text-justify'>
                Los centros educativos deben liderar acciones para mejorar el uso de la energía,
                en línea con los Objetivos de Desarrollo Sostenible de la Unión Europea. Su influencia
                en el ahorro energético es crucial, ya que la formación de los alumnos promueve la conciencia 
                ambiental. A través de la Convocatoria Ayudas Dualiza - Edición 2022, hemos obtenido recursos 
                para realizar análisis energéticos en centros educativos. Compartiremos estos recursos contigo 
                para identificar áreas de mejora y elaborar una guía de buenas prácticas.
            </p>
          </div>
          <div className='p-7 bg-white text-center rounded-lg shadow-md shadow-azul-semi-oscuro'> 
            <h2 className='text-orange-custom text-2xl font-bold pb-4 text-center'>Objetivos</h2>
            <p className='text-justify'>Al participar en este proyecto, alcanzarás objetivos clave: realizar análisis y auditorías energéticas 
              en los centros educativos, involucrar al alumnado en mejorar la eficiencia energética y el mantenimiento
              de las instalaciones, formar al profesorado y alumnado en temas de auditoría energética, explorar fuentes 
              de energía renovable integradas en la arquitectura, establecer planes de acción ambiental con medidas concretas,
                establecer redes colaborativas con empresas locales, y contribuir a una página web compartida para intercambiar
                buenas prácticas en ahorro energético y sostenibilidad.
            </p>
          </div>
        </div>

        <div className='p-7 mx-4 md:mx-32 bg-azul-claro text-center rounded-lg shadow-md md:h-[70rem] lg:h-[30rem] md:items-center md:justify-center shadow-azul-semi-oscuro text-white'>
          <h2 className='text-white text-2xl font-bold pt-4 pb-6'>Colaboradores</h2>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center"}} className='lg:flex lg:flex-row lg:m-10 sm:flex-col md:h-70 lg:h-80 sm: flex-col'>
            <img className="h-20 md:h-30 m-3 rounded-lg shadow-lg shadow-azul-negro" src={albaytarLogo} alt="logo2" />
            <img className="lg:h-[40rem] md:h-[30rem] m-3 rounded-lg shadow-azul-negro" src={hlanzLogo} alt="logo1" />
            <img className="h-24 md:h-32 m-3 rounded-lg shadow-lg shadow-azul-negro" src={virdenLogo} alt="logo3" />
          </div>
        </div>


      </div>
    </>
  );

};

export default ProyectoPage;
