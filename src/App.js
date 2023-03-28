// import {Accordion} from 'react-bootstrap'
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ChangePw from "./Pages/ChangePw";
import Home from './Pages/Home';
import Kontak from "./Pages/Kontak";
import LogIn from "./Pages/LogIn";
import PanelAdmin from "./Pages/PanelAdmin";
import Profil from './Pages/Profil';
import Program from "./Pages/Program";

export const AppContext = createContext(null);
const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    });
  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/program" element={<Program />} />
            <Route path="/paneladmin" element={<PanelAdmin />} />
            <Route path="/gantipassword" element={<ChangePw />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;