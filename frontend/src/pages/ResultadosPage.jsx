import React from 'react'
import fotovoltaica from '../assets/resultados/fotovoltaica.png'
import Resultado from '../components/Resultado'
import consumohlanz from '../assets/resultados/consumohlanz.png'
import factura from '../assets/resultados/facturacionhlanz.png'
const ResultadosPage = () => {
  return (
    <div className='bg-gris-oscuro'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-orange-custom w-auto bg-gris-claro p-8 rounded-md m-8 cursor-pointer'> Instalación fotovoltaica</h1>
        <Resultado img={fotovoltaica} />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-orange-custom w-auto bg-gris-claro p-8 rounded-md m-8 cursor-pointer'> Consumos eléctricos </h1>
        <h2 className='text-xl text-white m-6 p-6 bg-gradient-to-b mr-10 ml-10 from-azul-negro to-azul-semi-oscuro rounded-3xl '>Hermenegildo Lanz</h2>
        <div className='flex flex-row justify-center items-center'>
          <Resultado img={consumohlanz} />
          <p className='w-1/3 p-8 text-azul-oscuro text-2xl font-bold'>Los principales focos de consumo eléctrico están presentes en receptores como ordenadores, monitores, altavoces, impresoras, proyectores, equipos de iluminación, equipos de climatización y ventilación colectiva, split y radiadores eléctricos, principalmente. </p>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <p className='text-azul-oscuro text-2xl font-bold'>Por tanto, partiendo de la base de que los parámetros contratados:</p>
          <ul className='bg flex flex-col items-center justify-center rounded-2xl m-6 p-6 bg-gradient-to-b mr-10 ml-10 from-azul-negro to-azul-semi-oscuro '>
            <li className='text-orange-custom'>Potencia contratada: 50kW(P1), 50kW(P2), 50kW(P3)</li>
            <li className='text-orange-custom'>Potencia contratada: Potencia triple</li>
          </ul>
        </div>
        <div>
          <table className='border-separate border-spacing-4 rounded-2xl m-6 p-6 bg-gradient-to-b mr-10 ml-10 from-azul-negro to-azul-semi-oscuro text-center font-semibold'>
            <thead>
              <tr>
                <th className='text-orange-custom'>PERIODO FACTURACIÓN</th>
                <th className='text-orange-custom'>CONSUMO ENERGÍA ACTIVA TOTAL (kWh)</th>
                <th className='text-orange-custom'>IMPORTE (con IVA) (€)</th>
              </tr>
            </thead>
            <tbody className='text-gris-claro'>
              <tr>
                <td>01/10/2018-31/10/2018</td>
                <td>13.425</td>
                <td>2.101,68</td>
              </tr>
              <tr>
                <td>01/11/2018-30/11/2018</td>
                <td>12.172</td>
                <td>1.417,28</td>
              </tr>
              <tr>
                <td>01/12/2018-31/12/2018</td>
                <td>9.369</td>
                <td>1.824,67</td>
              </tr>
              <tr>
                <td>01/01/2019-31/01/2019</td>
                <td>21.115</td>
                <td>2.920,02</td>
              </tr>
              <tr>
                <td>01/02/2019-28/02/2019</td>
                <td>15.031</td>
                <td>1.664.92</td>
              </tr>
              <tr>
                <td>01/03/2019-31/03/2019</td>
                <td>14.582</td>
                <td>2.154,94</td>
              </tr>
              <tr>
                <td>01/04/2019-30/04/2019</td>
                <td>12.689</td>
                <td>1.986,56</td>
              </tr>
              <tr>
                <td>01/05/2019-31/05/2019</td>
                <td>11.456</td>
                <td>1.847.19</td>
              </tr>
              <tr>
                <td>01/06/2019-30/06/2019</td>
                <td>6.344</td>
                <td>1.197.58</td>
              </tr>
              <tr>
                <td>01/07/2019-31/07/2019</td>
                <td>6.255</td>
                <td>1.197.64</td>
              </tr>
              <tr>
                <td>01/08/2019-31/08/2019</td>
                <td>7.264</td>
                <td>1.389,65</td>
              </tr>
              <tr>
                <td>01/09/2019-30/09/2019</td>
                <td>3.783</td>
                <td>1.038,3</td>
              </tr>
              <tr>
                <td><strong>TOTAL anual:</strong></td>
                <td><strong>133.485</strong></td>
                <td><strong>20.740,43</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Resultado img={factura} />
        </div>
      </div>
    </div>
  )
}

export default ResultadosPage 