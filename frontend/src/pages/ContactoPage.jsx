import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../assets/LogoNegativoNoFondo.png';
const SERVICEID = import.meta.env.VITE_EMAILJS_SERVICEID;
const TEMPLATEID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const USERID = import.meta.env.VITE_EMAILJS_USERID;

const ContactoPage = () => {
  const [usermail, setUsermail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(SERVICEID, TEMPLATEID, { usermail, body }, USERID)
      .then((response) => {
        alert("Mensaje enviado correctamente");
      })
      .catch((error) => {
        console.error("Something went wrong!");
      });
  };

  return (
    <div className='w-screen bg-gris-oscuro'>
      <div className="w-2/5 bg-gray-600 rounded-lg p-8 flex-col m-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="usercontactmail" className="block text-orange-custom font-bold mb-2 text-xl">Tu correo</label>
            <input type="text" id="usercontactmail" name="subject" value={usermail} onChange={(e) => setUsermail(e.target.value)}
              className="w-full px-3 py-2 border-8 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-orange-custom font-bold mb-2 text-xl">Mensaje</label>
            <textarea id="message" name="body" rows="4" value={body} onChange={(e) => setBody(e.target.value)}
              className="w-full px-3 py-2 border-8 rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Enviar</button>
        </form>
        <div className="mb-4 bg-gray-600 flex justify-center">
          <img src={Logo} alt="Logo" className="h-full w-96" />
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
