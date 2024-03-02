import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

const RootPage = () => {
  const { rolUsuario, usuarioAutenticado, setUsuarioAutenticado } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Header role={rolUsuario} isLogged={usuarioAutenticado} setUsuarioAutenticado={setUsuarioAutenticado} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
