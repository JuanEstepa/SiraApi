import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const AdminTemplate = () => {
  const location = useLocation();

  const getPageName = (path) => {
    switch (path) {
      case "/Students":
        return "Estudiantes";
      case "/Subjects":
        return "Materias";
      case "/Inscriptions":
        return "Inscripciones";
      case "/Groups":
        return "Grupos";
      case "/Registration":
        return "Crear Estudiante";
      default:
        return "Dashboard";
    }
  };

  const pageName = getPageName(location.pathname);

  return (
    <div className="w-full h-screen">
      <NavBar page={pageName} />
      <Outlet />
    </div>
  );
};

export default AdminTemplate;
