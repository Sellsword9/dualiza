import archivo from '../assets/mejoraPdf/guia de buenas practicas 2 (version 4).pdf';



const MejoraPage = () => {

  const handleDescargarArchivo = () => {
    // Aquí accedes a la ruta de tu archivo local y lo descargas
    const link = document.createElement('a');
    link.href = archivo;
    link.download = 'guia-buenas-practicas.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRedireccionar = () => {
    window.location.href = "https://www.ieshlanz.es/documentos/";
  };

  return (
    <div className=" bg-gris-claro flex align-center justify-center p-8 ">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-azul-claro flex text-center rounded-xl m-20 shadow-md shadow-azul-negro">
          <button  onClick={handleDescargarArchivo}>
            <p className="text-white p-6 font-semibold text-lg">Descarga nuestra guía de buenas prácticas</p>
          </button>
        </div>
        <div>
        <div className="bg-orange-custom bg-opacity-20 rounded-lg flex justify-center items-center h-[26rem] flex-col mt-5 p-10 ">
          <p className="text-orange-custom font-bold text-2xl pb-10">Instalación eléctrica</p>
          <ul>
            <div className='flex justify-between '>
              <li className="m-4 text-lg text-azul-oscuro font-medium">Instalación de detectores de presencia para automatizar el encendido y apagado de los sistemas de iluminación.</li>
              <li className="m-4 text-lg text-azul-oscuro font-medium ">Programar los ordenadores para que se apaguen automáticamente cuando finalice la jornada laboral. Y para que pases a hibernación o suspensión transcurrido un tiempo</li>
              <li className="m-4 text-lg text-azul-oscuro font-medium ">Sustituir las lámparas existentes por lámparas de tecnología LED.</li>
              <li className="m-4 text-lg text-azul-oscuro font-medium">Optimizar la potencia contratada en base al consumo real de energía (si es posible).</li>
              <li className="m-4 text-lg text-azul-oscuro font-medium">Cambiar la comercializadora para optimizar el coste del KWh (si es posible).</li>
              <li className="m-4 text-lg text-azul-oscuro font-medium">Señalizar en la puerta de salida “Revisar que todos los receptores se han apagado”.</li>
          
            </div>
            </ul>
        </div>
        <div className="flex align-center justify-center m-10">
          <button onClick={handleRedireccionar} className="text-azul-negro font-semibold bg-azul-claro shadow-lg shadow-azul-oscuro bg-opacity-40 rounded-xl mr-20 p-8 m-12 w-96 h-60 text-center flex items-center justify-center text-2xl border-8 border-azul-oscuro border-opacity-30">
            Documentos de interés
          </button>
          <button onClick={handleRedireccionar} className="text-azul-negro font-semibold bg-azul-claro shadow-lg shadow-azul-oscuro bg-opacity-40 rounded-xl mr-20 p-8 m-12 w-96 h-60 text-center flex items-center justify-center text-2xl border-8 border-azul-oscuro border-opacity-30">
            Enlaces
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MejoraPage