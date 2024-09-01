import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./assets/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/home/HomePage";
import Service from "./pages/services/ServicesPage";
import Cart from "./pages/cart/Cart";
import CartContextProvider from "./context/ShoppingContext";
import DetailsPage from "./pages/details/DetailsPage";
import AboutUs from "./pages/about/AboutPage";
import Contact from "./pages/contact/ContacPage";


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>     
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/details/:id" element={<DetailsPage/>}/>
          </Routes>
          <Footer/>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
