import NavBar from "../components/NavBar";
import StudentList from "../components/StudentList";

const Students = () => {
  return (
    <div className="w-full h-screen">
      <NavBar page="Estudiantes" />
      <StudentList />
    </div>
  );
};

export default Students;
