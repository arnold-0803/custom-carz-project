import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import CartItem from './CartItem';
import { ServiceData } from '../../data/ServiceData';
import { ShopContext } from '../../context/ShoppingContext';
import "./CartStyles.css";

function Cart() {

  const {cartItems} = useContext(ShopContext);
  return (
    <div className='cart-wrapper'>
      <Navbar cartCount={8}/>
      <h1>Shopping Cart Items</h1>
      {ServiceData.map(item => {
        if(cartItems[item.id] !== 0){
          return <CartItem data={item} key={item.id}/>
        }
        return null;
      })}
    </div>
  )
}

export default Cart;
