import React from 'react';
import archivo from '../assets/mejoraPdf/guia de buenas practicas 2 (version 4).pdf';

const MejoraPage = () => {
  const handleDescargarArchivo = () => {
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
    <div className="bg-gris-claro flex justify-center items-center p-8" style={{ background: 'url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' viewBox=\'0 0 1600 900\' preserveAspectRatio=\'xMidYMax slice\'><defs><linearGradient id=\'bg\'><stop offset=\'0%\' style=\'stop-color:rgba(130, 158, 249, 0.06)\'></stop><stop offset=\'50%\' style=\'stop-color:rgba(76, 190, 255, 0.6)\'></stop><stop offset=\'100%\' style=\'stop-color:rgba(115, 209, 72, 0.2)\'></stop></linearGradient><path id=\'wave\' fill=\'url(%23bg)\' d=\'M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z\' /></defs><g><use xlink:href=\'#wave\' opacity=\'.3\'><animateTransform attributeName=\'transform\' attributeType=\'XML\' type=\'translate\' dur=\'10s\' calcMode=\'spline\' values=\'270 230; -334 180; 270 230\' keyTimes=\'0; .5; 1\' keySplines=\'0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0\' repeatCount=\'indefinite\' /></use><use xlink:href=\'#wave\' opacity=\'.6\'><animateTransform attributeName=\'transform\' attributeType=\'XML\' type=\'translate\' dur=\'8s\' calcMode=\'spline\' values=\'-270 230;243 220;-270 230\' keyTimes=\'0; .6; 1\' keySplines=\'0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0\' repeatCount=\'indefinite\' /></use><use xlink:href=\'#wave\' opacity=\'.9\'><animateTransform attributeName=\'transform\' attributeType=\'XML\' type=\'translate\' dur=\'6s\' calcMode=\'spline\' values=\'0 230;-140 200;0 230\' keyTimes=\'0; .4; 1\' keySplines=\'0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0\' repeatCount=\'indefinite\' /></use></g></svg>")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="flex flex-col justify-center items-center w-full max-w-screen-lg">
        <div className="bg-azul-claro flex text-center rounded-xl m-20 shadow-md shadow-azul-negro">
          <button onClick={handleDescargarArchivo}>
            <p className="text-white p-6 font-semibold text-lg">Descarga nuestra guía de buenas prácticas</p>
          </button>
        </div>
        <div className="bg-orange-custom bg-opacity-20 rounded-lg flex flex-col justify-center items-center p-10 pr-28 pl-28 mt-5">
          <p className="text-orange-custom font-bold text-2xl pb-10">Instalación eléctrica</p>
          <ul className="w-full max-w-lg">
            <li className="m-4 text-lg text-azul-oscuro font-medium">Instalación de detectores de presencia para automatizar el encendido y apagado de los sistemas de iluminación.</li>
            <li className="m-4 text-lg text-azul-oscuro font-medium">Programar los ordenadores para que se apaguen automáticamente cuando finalice la jornada laboral. Y para que pases a hibernación o suspensión transcurrido un tiempo</li>
            <li className="m-4 text-lg text-azul-oscuro font-medium">Sustituir las lámparas existentes por lámparas de tecnología LED.</li>
            <li className="m-4 text-lg text-azul-oscuro font-medium">Optimizar la potencia contratada en base al consumo real de energía (si es posible).</li>
            <li className="m-4 text-lg text-azul-oscuro font-medium">Cambiar la comercializadora para optimizar el coste del KWh (si es posible).</li>
            <li className="m-4 text-lg text-azul-oscuro font-medium">Señalizar en la puerta de salida “Revisar que todos los receptores se han apagado”.</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center m-10">
          <button onClick={handleRedireccionar} className="text-azul-negro font-semibold bg-azul-claro shadow-lg shadow-azul-oscuro text-lg bg-opacity-40 rounded-xl h-40 mr-4 p-8 m-4 w-full text-center border-8 border-azul-oscuro border-opacity-30">
            Documentos de interés
          </button>
          <button onClick={handleRedireccionar} className="text-azul-negro font-semibold bg-azul-claro shadow-lg shadow-azul-oscuro text-lg bg-opacity-40 rounded-xl h-40 mr-4 p-8 m-4 w-full text-center border-8 border-azul-oscuro border-opacity-30">
            Enlaces
          </button>
        </div>
      </div>
    </div>
  );
};

export default MejoraPage;
