import { useContext } from "react";
import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import image from "../images/mercedes-amg-gt-4-door-coupe-6942533.jpg";
import { ShopContext } from "../../context/ShoppingContext";
import { AboutData } from "../../data/AboutData";
import AboutCard from "./AboutCard";
import "./AboutPageStyles.css";
import AchievementElementor from "../../components/AchievementElementor";

const AboutUs = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();

  return (
    <div className="about-page">
      <Navbar cartCount={totalQuantity}/>
      <Hero
        heading="About Us"
        image={image}
        className="about"
      />
      <div className="about-wrapper">
        <h1>Know About Us</h1>
        <div className="about-content">
          {AboutData.map(item => (
            <AboutCard data={item} key={item.id}/>
          ))}
        </div>
      </div>
      <AchievementElementor/>
    </div>
  );
}
 
export default AboutUs;