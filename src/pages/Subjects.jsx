import NavBar from "../components/NavBar";
import SubjectList from "../components/SubjectList";

const Subjects = () => {
  return (
    <div className="w-full h-screen">
      <NavBar page="Materias" />
      <SubjectList />
    </div>
  );
};

export default Subjects;
