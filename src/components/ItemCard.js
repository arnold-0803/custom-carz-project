import { useContext, useEffect, useState } from "react";
import SkeletonGallarey from "../assets/SkeletonGallarey";
import { ShopContext } from "../context/ShoppingContext";

const Card = ({data}) => {
  const { id, price, src, title, rating} = data;
  const {addToCart, cartItems} = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);

  const cartItemAmount = cartItems[id];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="product-wrapper">
      {isLoading ? (
        <SkeletonGallarey/>
      ) : (
        <div className="card">
          <img src={src} alt="" />
          <p>{title}</p>
          <div className="star-rating">
            <i className="fa-solid fa-star"></i>
            <span>{rating}</span>
          </div>
          <span><b>$ {price}</b></span>
          <button
            onClick={() => addToCart(id)}
          >Add to cart<i className="fa-solid fa-cart-shopping"></i>
          {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          <a href={src} download={src}>
            <i className="fa-solid fa-download"></i>
          </a>
          <div className="gradient"></div>
        </div>
      )}
    </div>
  );
}
 
export default Card;