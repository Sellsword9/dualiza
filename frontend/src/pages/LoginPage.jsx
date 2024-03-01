  import { useState } from "react";
  import { Link, useNavigate} from "react-router-dom";
  import { doSignInWithEmailAndPassword } from "../firebase/auth";
  import { useAuth } from "../context/AuthContext";

  const LoginPage = () => {
    const [showForgotPasswordInfo, setShowForgotPasswordInfo] = useState(false);
    const [showHelpInfo, setShowHelpInfo] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const {  handleLogin } = useAuth();

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await doSignInWithEmailAndPassword(username, password);
        console.log(result)
        handleLogin(result.user.uid);
        navigate("/");
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
        // Manejar el error (puede ser una alerta, etc.)
      }
    };

    const handleForgotPassword = () => {
      setShowForgotPasswordInfo(true);
    };

    const handleHelp = () => {
      setShowHelpInfo(true);
    };

    return (
      <div className="">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="px-5 py-7">
              <img className="mx-auto mb-8" src="src\assets\LogoPositivoNoFondo.png" alt="logo hlanz" />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Usuario
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={username}
                onChange={handleUsernameChange}
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Contraseña
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
            <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button
                    onClick={handleForgotPassword}
                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="inline-block ml-1">
                      Olvidaste tus credenciales?
                    </span>
                  </button>
                </div>
                {/* Ventana de información para Forgot Password */}
                {showForgotPasswordInfo && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-md">
                      <div className="w-80 flex flex-col justify-center">
                      <img className="p-8" src="src\assets\hlanz.png" alt="hlanz logo" />
                      </div>
                      <p className="mb-4 w-80  p-4">¡Contacta con la dirección del centro para obtenerlos de nuevo!</p>
                      <button className="p-2 m-4 bg-sky-400 border shadow-sm rounded-md text-white" onClick={() => setShowForgotPasswordInfo(false)}>
                        Cerrar
                      </button>
                    </div>
                  </div>
                )}
                <div className="text-center sm:text-right  whitespace-nowrap">
                  <button
                    onClick={handleHelp}
                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-bottom	"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="inline-block ml-1">Ayuda</span>
                  </button>
                </div>
                {/* Ventana de información para Help */}
                {showHelpInfo && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-md">
                    <div className="w-80 flex flex-col justify-center">
                      <img className="p-8" src="src\assets\hlanz.png" alt="hlanz logo" />
                      </div>
                      <p className="mb-4 w-80  p-4">Para obtener una cuenta debes pedir una al responsable del centro. ¡No te puedes registrar directamente en la web!</p>
                      <button className="p-2 m-4 bg-sky-400 border shadow-sm rounded-md text-white" onClick={() => setShowHelpInfo(false)}>
                        Cerrar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <Link to="/">
                    <span className="inline-block ml-1">Volver a dualiza</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  };

  export default LoginPage;
