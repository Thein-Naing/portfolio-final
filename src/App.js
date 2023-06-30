import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import  Skills  from "./pages/Skills";
import Portfolio  from "./pages/Portfolio";
import Contact  from "./pages/Contact.jsx";
import Footer  from "./pages/Footer.jsx";
import Navbar from './components/Navbar';

function App() {
  return (

      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        < Footer />
      </Router>

  );
}

export default App;
