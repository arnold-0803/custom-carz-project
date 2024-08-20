import Hero from "../../components/HeroSection";
import Card from "../../components/ItemCard";
import Navbar from "../../components/Navbar";
import { ServiceData } from "../../data/ServiceData";
import image from "../images/image20.jpg";
import "./ServiceItemsStyles.css";


const Service = () => {
  return (
    <div className="service">
      <Navbar/>
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