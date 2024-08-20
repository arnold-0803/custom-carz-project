import React, { createContext, useState } from 'react';
import { ServiceData } from '../data/ServiceData';


export const ShopContext = createContext(null);

const getDefaultItem = () => {
  let cart = {};
  for(let i = 1; i < ServiceData.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
}

function CartContextProvider({children}) {

  const [cartItems, setCartItems] = useState(getDefaultItem());

  const addToCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  // console.log(cartItems);

  return (
    <ShopContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export default CartContextProvider;
