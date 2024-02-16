import Logo from '../assets/LogoNegativoNoFondo.png'
const ContactoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gris-claro">
      <div className="flex">
        <div className="w-full max-w-md bg-gray-600 rounded-lg shadow-md p-8 border">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-azul-oscuro font-bold mb-2">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border-8 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-azul-oscuro font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-azul-oscuro font-bold mb-2">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Enviar</button>
          </form>
        </div>
        <div className="ml-4 bg-gray-600">
          <img src={Logo} alt="Logo" className="h-96" />
        </div>
      </div>
    </div>
  )
}

export default ContactoPage