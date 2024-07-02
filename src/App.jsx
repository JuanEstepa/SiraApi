import { Route, Routes } from "react-router-dom";
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

function App() {
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
      <Route path="/Main" element={<StudentInfo />} />
      <Route path="/StudentSubjects" element={<StudentSubject />} />
      <Route path="/EditStudent" element={<EditStudent />} />
    </Routes>
  );
}

export default App;
