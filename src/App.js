import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Home/Home2";
import { Contact } from "./Pages/Contact/Contact";
import { Donations } from "./Pages/Donation/Donations";
import { Janaza } from "./Pages/Janaza/Janaza";
import { NextSteps } from "./Pages/NextSteps/NextSteps";
import { Visiting } from "./Pages/Visiting/Visiting";
import Map from "./Pages/Map/Map";
import Footer from "./components/Footer/Footer";
import { Services } from "./Pages/Services/Services";
import { BurialReg } from "./Pages/BurialRegistration/BurialReg";

function App() {
  return (

    <>
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
