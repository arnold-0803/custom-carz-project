import "./HeroBannerStyles.css";

const HeroBanner = (props) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2 className={props.className}>{props.heading}</h2>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}
 
export default HeroBanner;