import { useContext } from "react";
import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import { ServiceData } from "../../data/ServiceData";
import image from "../images/image20.jpg";
import "./ServicesPageStyles.css";
import { ShopContext } from "../../context/ShoppingContext";
import ProductCard from "./ProductCard";


const Service = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();
  
  return (
    <div className="service-page">
      <Navbar cartCount={totalQuantity}/>
      <Hero
        heading="Services"
        image={image}
        className="service"
      />
      <div className="
      service-wrapper">
        <h1>Shop Add to Cart</h1>
        <div className="product-wrapper">
          {ServiceData.map((item) => (
            <ProductCard data={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Service;