import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Contact } from "./components/Pages/Contact";
import { Donations } from "./components/Pages/Donations";
import { Janaza } from "./components/Pages/Janaza";
import { NextSteps } from "./components/Pages/NextSteps";
import { Visiting } from "./components/Pages/Visiting";
import { Services } from "./components/Pages/Services";
<<<<<<< HEAD
import { BurialReg } from "./components/Pages/BurialReg";
=======

>>>>>>> 29b5e5bd6e04d5499f33b74159b95ab544bd2650

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/janaza" element={<Janaza />} />
            <Route path="/next-steps" element={<NextSteps />} />
            <Route path="/visiting" element={<Visiting />} />
            <Route path="/services" element={<Services />} />
<<<<<<< HEAD
            <Route path="/zeForm" element={<BurialReg />} />
=======

>>>>>>> 29b5e5bd6e04d5499f33b74159b95ab544bd2650
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
