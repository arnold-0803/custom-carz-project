import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import CartItem from './CartItem';
import { ServiceData } from '../../data/ServiceData';
import { ShopContext } from '../../context/ShoppingContext';
import "./CartStyles.css";
import { useNavigate } from 'react-router-dom';

function Cart() {

  const {cartItems, getTotalQuantity, getCartTotalAmount} = useContext(ShopContext);
  const navigate = useNavigate();
  const totalQuantity = getTotalQuantity();
  const totalCartAmount = getCartTotalAmount();

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

      {totalCartAmount > 0 ? (
        <div className="base-wrapper">
          <div className="base-content">
            <p>Total Purchase: <b>${totalCartAmount}</b></p>
            <div className="base-btn">
              <button onClick={() => navigate("/service")}>Cotinue Shopping</button>
              <button>Purchase Items</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1>The Cart is Empty</h1>
          <button onClick={() => navigate("/service")}>Go to Shop</button>
        </div>
      )}
    </div>
  )
}

export default Cart;
