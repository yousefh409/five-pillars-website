import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home/HomePage';
import { Contact } from './Pages/Contact/Contact';
import { Donations } from './Pages/Donation/Donations';
import { Janaza } from './Pages/Janaza/Janaza';
import { NextSteps } from './Pages/NextSteps/NextSteps';
import { Visiting } from './Pages/Visiting/Visiting';
import Map from './Pages/Map/Map';
import Footer from './components/Footer/Footer';
import { Services } from './Pages/Services/Services';
import { BurialReg } from './Pages/BurialRegistration/BurialReg';
import { Acknowledgement } from './Pages/Acknowledgement/Acknowledgement';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/janaza" element={<Janaza />} />
            <Route path="/next-steps" element={<NextSteps />} />
            <Route path="/visiting" element={<Visiting />} />
            <Route path="/map" element={<Map />} />
            <Route path="/services" element={<Services />} />
            <Route path="/forms" element={<BurialReg />} />
            <Route path="/acknowledgement" element={<Acknowledgement />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
