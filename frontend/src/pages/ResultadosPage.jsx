import React from 'react'
import fotovoltaica from '../assets/resultados/fotovoltaica.png'
import Resultado from '../components/Resultado'
import consumohlanz from '../assets/resultados/consumohlanz.png'
const ResultadosPage = () => {
  return (
    <div className='bg-gris-oscuro'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-orange-custom w-auto bg-gris-claro p-4 rounded-md m-8 cursor-pointer'> Instalación fotovoltaica</h1>
        <Resultado img={fotovoltaica} />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-orange-custom w-auto bg-gris-claro p-4 rounded-md m-8 cursor-pointer'> Consumos eléctricos </h1>
        <div className='flex flex-row justify-center items-center'>
          <Resultado img={consumohlanz} />
          <p className='w-1/3 p-8'>Los principales focos de consumo eléctrico están presentes en receptores como ordenadores, monitores, altavoces, impresoras, proyectores, equipos de iluminación, equipos de climatización y ventilación colectiva, split y radiadores eléctricos, principalmente</p>
        </div>
      </div>
    </div>
  )
}

export default ResultadosPage 