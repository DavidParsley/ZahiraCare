import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Nurse from "./pages/Nurse";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import IndividualPatient from "./pages/IndividualPatient";
import IndividualDoctor from "./pages/IndividualDoctor";
import IndividualNurse from "./pages/IndividualNurse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/nurses" element={<Nurse />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/indivudualPatient/:id" element={<IndividualPatient />}/>
          <Route path="/indivudualDoctor/:id" element={<IndividualDoctor />}/>
          <Route path="/indivudualNurse/:id" element={<IndividualNurse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
