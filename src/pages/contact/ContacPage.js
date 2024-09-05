import { useContext } from "react";
import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import image from "../images/image19.jpg";
import { ShopContext } from "../../context/ShoppingContext";
import "./ContacPageStyles.css";

const Contact = () => {

  const { getTotalQuantity } = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();

  return (
    <div className="contact-page">
      <Navbar cartCount={totalQuantity} />
      <Hero
        image={image}
        heading="Contacts"
        className="contact"
      />
      <div className="contact-wrapper">
        <h1>Let Us Know Your Feedback & Suggestion</h1>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Write to Us</h2>
            <form>
              <div className="full-name">
                <input type="text" placeholder="first name" required />
                <input type="text" placeholder="last name" required />
              </div>
              <div className="email-plus-subject">
                <input type="email" placeholder="Email " required />
                <input type="text" placeholder="Subject" required />
              </div>
              <textarea rows="4" placeholder="Feedback" required></textarea>
              <button>Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-box">
              <h3>Contact Info</h3>
              <p><b>Reachout to us through</b></p>
              <div className="info">
                <p>
                  <i className="fa-solid fa-phone"></i> (+254)714387538
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i> arnoldkelss4@gmail.com
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i> Arnold Corp Tower, Nairobi, Kenya
                </p>
              </div>
              <div className="social-media-contact">
                <a href="https://www.whatsapp.com">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
            <div className="map-content">
              <h3>Map</h3>
              <div className="map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8198033502904!2d36.817203673647114!3d-1.281881435618557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1140aca2a165%3A0x4730f0e2594d848a!2sNairobi%20cbd!5e0!3m2!1sen!2ske!4v1724752993218!5m2!1sen!2ske" 
                  title="cbd,Nirobi,Kenya"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;