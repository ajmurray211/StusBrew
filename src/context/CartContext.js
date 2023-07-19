import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [API_URL, setAPI_URL] = useState(
    process.env.NODE_ENV === "production"
      ? "http://localhost:8080/"
      : "http://localhost:8080/"
  );

  useEffect(() => {
    const loadedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    if (loadedCart.length > 0) {
      setCart(loadedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (item) => {
    console.log(item, cart)
    const existingItem = cart.find((cartItem) => cartItem.productId === item.productId);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.productId === item.productId ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        API_URL,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
