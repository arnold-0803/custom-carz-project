import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShoppingContext';

function CartItem({data}) {
  
  const {addToCart, removeFromCart, cartItems} = useContext(ShopContext);
  return (
    <div className='cart-item'>
      <div className="cart-left">
        <img src={data.src} alt="" />
      </div>
      
      <div className="cart-right">
        <p><b>{data.title}</b></p>
        <p><b>{data.price}</b></p>
        <button onClick={() => removeFromCart(data.id)}>-</button>
        <input value={cartItems[data.id]}/>
        <button onClick={() => addToCart(data.id)}>+</button>
      </div>
    </div>
  )
}

export default CartItem;
