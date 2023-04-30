import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Pages/Home2";
import { Contact } from "./components/Pages/Contact";
import { Donations } from "./components/Pages/Donations";
import { Janaza } from "./components/Pages/Janaza";
import { NextSteps } from "./components/Pages/NextSteps";
import { Visiting } from "./components/Pages/Visiting";
import Map from "./components/Pages/Map";
import Footer from "./components/Footer";
import { Services } from "./components/Pages/Services";
import { BurialReg } from "./components/Pages/BurialReg";
import logo from "./image (1).jpeg"

function App() {
  return (

    <>
      <div style={{textAlign:"center"}}>
        <img src={logo} style={{height:"10vh"}}></img>
      </div>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/janaza" element={<Janaza />} />
            <Route path="/next-steps" element={<NextSteps />} />
            <Route path="/visiting" element={<Visiting />} />
            <Route path="/map" element={<Map />} />
            <Route path="/services" element={<Services />} />
            <Route path="/zeForm" element={<BurialReg />} />

          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
