import NavBar from "../components/NavBar";
import InscriptionList from "../components/InscriptionList";

const Inscription = () => {
  return (
    <div className="w-full h-screen">
      <NavBar page="Inscripciones" />
      <InscriptionList />
    </div>
  );
};

export default Inscription;
