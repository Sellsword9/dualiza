import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RootPage from "./pages/RootPage";
import NoticiasPage from "./pages/NoticiasPage";
import AdminPage from "./pages/AdminPage";
import ProyectoPage from "./pages/ProyectoPage";
import ResultadosPage from "./pages/ResultadosPage";
import MejoraPage from "./pages/MejoraPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {index: true,element: <ProyectoPage />},
        { path: "/login", element: <LoginPage /> },
        { path: "/resultados", element: <ResultadosPage /> },
        { path: "/mejora", element: <MejoraPage /> },
        { path: "/noticias", element: <NoticiasPage /> },
        { path: "/admin", element: <AdminPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
