import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutPage";
import Contact from "./pages/ContacPage";
import ScrollToTop from "./components/assets/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/home/HomePage";
import Service from "./pages/services/ServicesPage";


function App() {
  return (
    <div className="App">
      <Router>     
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
