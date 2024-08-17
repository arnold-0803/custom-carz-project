import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import ServiceProducts from "./ServiceItems";
import { ServiceData } from "../../data/ServiceData";
import image from "../images/image20.jpg";import "./ServiceItemsStyles.css";


const Service = () => {
  return (
    <div className="service">
      <Navbar cartCount={0}/>
      <Hero
        heading="Services"
        image={image}
        className="service"
      />
      <div className="cards-wrapper">
        <h1>Add to the cart</h1>
        <div className="cards">
          {ServiceData.map((prod, index) => (
            <ServiceProducts cartCount={0} item={prod} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Service;