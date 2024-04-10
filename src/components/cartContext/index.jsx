import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
  }, []);

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);