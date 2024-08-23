import { useContext } from "react";
import Hero from "../../components/HeroSection";
import Card from "../../components/ItemCard";
import Navbar from "../../components/Navbar";
import { ServiceData } from "../../data/ServiceData";
import image from "../images/image20.jpg";
import "./ServicesPageStyles.css";
import { ShopContext } from "../../context/ShoppingContext";


const Service = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();
  
  return (
    <div className="service">
      <Navbar cartCount={totalQuantity}/>
      <Hero
        heading="Services"
        image={image}
        className="service"
      />
      <div className="cards-wrapper">
        <h1>Shop Add to Cart</h1>
        <div className="cards">
          {ServiceData.map((item) => (
            <Card data={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Service;