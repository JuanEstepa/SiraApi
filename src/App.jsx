import { Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";
import NotFoundPage from "./pages/NotFoundPage";
import Inscription from "./pages/Inscriptions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Students />}></Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Subjects" element={<Subjects />} />
      <Route path="/Inscriptions" element={<Inscription />} />
    </Routes>
  );
}

export default App;
