import { Route, Routes } from "react-router-dom";
import Students from "./pages/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Students />}></Route>
    </Routes>
  );
}

export default App;
