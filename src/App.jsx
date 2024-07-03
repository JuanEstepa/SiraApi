import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";
import NotFoundPage from "./pages/NotFoundPage";
import Inscription from "./pages/Inscriptions";
import Auth from "./pages/Auth";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import StudentInfo from "./pages/StudentInfo";
import StudentSubject from "./pages/StudentSubject";
import EditStudent from "./pages/EditStudent";
import Group from "./pages/Group";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    //Requests

    setUser(
      //Respuesta del request
      { id: 1, name: "Juan" }
    );
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<LoginForm />} />
        <Route path="Registration" element={<RegistrationForm />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Students" element={<Students />}></Route>
      <Route path="/Subjects" element={<Subjects />} />
      <Route path="/Inscriptions" element={<Inscription />} />
      <Route path="/Groups" element={<Group />} />
      <Route path="/Main" element={<StudentInfo />} />
      <Route path="/StudentSubjects" element={<StudentSubject />} />
      <Route path="/EditStudent" element={<EditStudent />} />
    </Routes>
  );
}

export default App;
