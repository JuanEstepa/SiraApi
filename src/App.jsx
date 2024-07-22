import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import StudentInfo from "./pages/StudentInfo";
import StudentSubject from "./pages/StudentSubject";
import EditStudent from "./pages/EditStudent";
import WebcamPage from "./components/WebcamPage";
import { UserProvider } from "./UserProvider";
import AdminTemplate from "./pages/AdminTemplate";
import StudentList from "./components/StudentList";
import SubjectList from "./components/SubjectList";
import InscriptionList from "./components/InscriptionList";
import GroupList from "./components/GroupList";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<LoginForm />} />
          <Route path="Webcam" element={<WebcamPage />} />
        </Route>

        <Route path="/" element={<AdminTemplate />}>
          <Route path="Students" element={<StudentList />} />
          <Route path="Subjects" element={<SubjectList />} />
          <Route path="Inscriptions" element={<InscriptionList />} />
          <Route path="Groups" element={<GroupList />} />
          <Route path="Registration" element={<RegistrationForm />} />
        </Route>

        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Main" element={<StudentInfo />} />
        <Route path="/StudentSubjects" element={<StudentSubject />} />
        <Route path="/EditStudent" element={<EditStudent />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
