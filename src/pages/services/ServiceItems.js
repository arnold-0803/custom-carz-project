import { useEffect, useState } from "react";
import SkeletonGallarey from "../../components/assets/SkeletonGallarey";

const ServiceProducts = ({item, cartCount}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000)
  }, [])

  return (
    <div className="product-wrapper">
      {isLoading ? (
        <SkeletonGallarey/>
      ) : (
        <div className="card">
          <img src={item.src} alt="" />
          <p>{item.title}</p>
          <div className="star-rating">
            <i className={item.rating1}></i>
            <i className={item.rating2}></i>
            <i className={item.rating2}></i>
            <i className={item.rating4}></i>
            <i className={item.rating5}></i>
          </div>
          <button>Add to cart<i className="fa-solid fa-cart-shopping"></i>
            {cartCount}
          </button>
          <div className="gradient"></div>
        </div>
      )}
    </div>
  );
}
 
export default ServiceProducts;