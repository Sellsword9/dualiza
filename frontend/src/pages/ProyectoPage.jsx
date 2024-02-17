import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import albaytar from '../assets/proyectoImg/reunion albaytar.png';
import gracia from '../assets/proyectoImg/reunion gracia.png';
import hlanz from '../assets/proyectoImg/reunion hlanz.png';

const ProyectoPage = () => {
  // Configuración del slider
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
        <div className='m-10'>
          <Slider {...settings}>
            <div className='flex justify-center items-center'>
              <img src={albaytar} alt="Slide 1" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={gracia} alt="Slide 2" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={hlanz} alt="Slide 3" />
            </div>
          </Slider>
        </div>
        <div className='flex m-32'>
          <div className='p-7 mr-40 bg-white rounded-lg shadow-md shadow-azul-semi-oscuro'>
            <h2 className='text-orange-custom text-2xl font-bold pb-6 text-center'>Descripción</h2>
            <p className='text-justify '>
                Los centros educativos deben liderar acciones para mejorar el uso de la energía,
                en línea con los Objetivos de Desarrollo Sostenible de la Unión Europea. Su influencia
                en el ahorro energético es crucial, ya que la formación de los alumnos promueve la conciencia 
                ambiental. A través de la Convocatoria Ayudas Dualiza - Edición 2022, hemos obtenido recursos 
                para realizar análisis energéticos en centros educativos. Compartiremos estos recursos contigo 
                para identificar áreas de mejora y elaborar una guía de buenas prácticas.
            </p>
          </div>
          <div className=' p-7 bg-white text-center rounded-lg shadow-md shadow-azul-semi-oscuro'> 
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
        <div className=' p-7 mr-32 ml-32 bg-white text-center rounded-lg shadow-md shadow-azul-semi-oscuro  text-white'>
          <h2 className='text-white text-2xl font-bold pb-4'>Colaboradores</h2>

        </div>
      </div>
    </>
  );

};

export default ProyectoPage;
