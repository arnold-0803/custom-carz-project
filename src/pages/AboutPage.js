import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import image from "../pages/images/mercedes-amg-gt-4-door-coupe-6942533.jpg";

const AboutUs = () => {
  return (
    <div className="about">
      <Navbar/>
      <Hero
        heading="About Us"
        image={image}
        className="about"
      />
      <div className="about-content">
        <h1>Know About Us</h1>
        <div className="about-text">
          <h2>Our History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore aperiam temporibus asperiores blanditiis et consequatur 
            rerum delectus neque odit! Accusantium in culpa adipisci voluptates? 
            At dicta error facere eos eius!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore aperiam temporibus asperiores blanditiis et consequatur 
            rerum delectus neque odit! Accusantium in culpa adipisci voluptates? 
            At dicta error facere eos eius!</p>

            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore aperiam temporibus asperiores blanditiis et consequatur 
            rerum delectus neque odit! Accusantium in culpa adipisci voluptates? 
            At dicta error facere eos eius!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore aperiam temporibus asperiores blanditiis et consequatur 
            rerum delectus neque odit! Accusantium in culpa adipisci voluptates? 
            At dicta error facere eos eius!</p>

            <h2>Our Vission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore aperiam temporibus asperiores blanditiis et consequatur 
            rerum delectus neque odit! Accusantium in culpa adipisci voluptates? 
            At dicta error facere eos eius!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolore aperiam temporibus asperiores blanditiis et consequatur 
            rerum delectus neque odit! Accusantium in culpa adipisci voluptates? 
            At dicta error facere eos eius!</p>
        </div>
      </div>
    </div>
  );
}
 
export default AboutUs;