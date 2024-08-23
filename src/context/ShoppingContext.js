import React, { createContext, useState } from 'react';
import { ServiceData } from '../data/ServiceData';


export const ShopContext = createContext(null);

const getDefaultItem = () => {
  let cart = {};
  for(let i = 1; i < ServiceData.length + 1; i++){
    cart[i] = {quantity: 0};
  }
  return cart;
}

function CartContextProvider({children}) {

  const [cartItems, setCartItems] = useState(getDefaultItem());

  const addToCart = (itemId) => {
    setCartItems(prev => {
      if(prev[itemId]){
        return {...prev, [itemId]: {...prev[itemId],quantity: prev[itemId].quantity + 1}};
      }else{
        return {...prev, [itemId]: {quantity: 1}};
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({
      ...prev, [itemId]: {...prev[itemId], quantity: prev[itemId].quantity - 1}
    }));
  }

  const updateCartItemCount = (itemId, quantity) => {
    setCartItems(prev => ({
      ...prev, 
      [itemId]: {...prev[itemId], quantity: quantity}
    }))
  }

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce((total, item) => total + item.quantity, 0)
  }

  const deleteCartItem = (itemId) => {
    setCartItems(prev => {
      const newCartItem = {...prev};
      delete newCartItem[itemId];
      return newCartItem;
    });
  }

  return (
    <ShopContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      getTotalQuantity,
      deleteCartItem
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export default CartContextProvider;
