import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShoppingContext';

function CartItem({data, CartItem}) {
  
  const {addToCart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart-item'>
      <h1>Woooo!</h1>
      <div className="image-details">
        <img src={data.src} alt="" />
      </div>
      
      <div className="cart-controls">
        <button onClick={() => addToCart()}>-</button>
        <button onClick={() => removeFromCart()}>+</button>
      </div>
    </div>
  )
}

export default CartItem;
