import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import image from "./images/image19.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar/>
      <Hero
        image={image}
        heading="Contacts"
        className="contact"
      />
      <div className="contact-form">
        <h1>Let Us Know Your Feedback & Suggestion</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email " />
          <input type="text" placeholder="Subject" />
          <textarea rows="4" placeholder="Feedback"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default Contact;