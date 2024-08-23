import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import CartItem from './CartItem';
import { ServiceData } from '../../data/ServiceData';
import { ShopContext } from '../../context/ShoppingContext';
import "./CartStyles.css";
import { useNavigate } from 'react-router-dom';

function Cart() {

  const {cartItems, getTotalQuantity} = useContext(ShopContext);
  const navigate = useNavigate();
  const totalQuantity = getTotalQuantity();

  return (
    <div className='cart-wrapper'>
      <Navbar cartCount={totalQuantity}/>
      <h1>Shopping Cart Items</h1>
      {ServiceData.map(item => {
        const itemQuantity = cartItems[item.id]?.quantity;
        if(itemQuantity > 0){
          return <CartItem data={item} key={item.id}/>
        }
        return null;
      })}
      <div className="base-wrapper">
        <div className="base-content">
          <p><b>Total Purchase: $</b></p>
          <div className="base-btn">
            <button onClick={() => navigate("/service")}>Cotinue Shopping</button>
            <button>Purchase Items</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
