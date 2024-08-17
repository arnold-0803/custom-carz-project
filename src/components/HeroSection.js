import "./HeroSectionStyles.css";

const Hero = (props) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2 className={props.className}>{props.heading}</h2>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}
 
export default Hero;