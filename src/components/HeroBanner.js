import React from "react";

import "./HeroBannerStyles.css";

const HeroBanner = ({data, customClass}) => {
  return (
    <div className={`hero-banner-wrapper ${customClass}`}>
      {data.map(item => (
        <div className="hero-banner-content" key={item.id}>
          <div className="left">
            <h3>{item.additionalHeading}</h3>
            <p>{item.paragraph}</p>
            <div>
              <h4><i className={item.transportIcon}></i>Free & Fast Delivery</h4>
              <h4><i className={item.costIcon}></i>Affordable Products</h4>
              <h4><i className={item.communicationIcon}></i>24/7 Customer care</h4>
            </div>
          </div>
          <div className="right">
            <img src={item.image} alt="" />
            <div className="gradient-layer">
              <h2>{item.heading}</h2>
              <h3>{item.subHeading}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default HeroBanner;