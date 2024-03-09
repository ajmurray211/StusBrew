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
    const existingItemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      // Item is already in the cart
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty += 1;
      setCart(updatedCart);
    } else {
      // Item is not in the cart
      setCart((prevCart) => [...prevCart, { ...item, qty: 1 }]);
    }
  };

  const lowerItemCount = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      // Item exsists in the cart
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].qty !== 1) {
        updatedCart[existingItemIndex].qty -= 1;
        setCart(updatedCart);
      } else {
        removeFromCart(item._id)
      }
    } else {
      console.log('Encountered a problem when trying to remove an item from the cart.')
    }
  }

  const raiseItemCount = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      // Item exsists in the cart
      const updatedCart = [...cart];
        updatedCart[existingItemIndex].qty += 1;
        setCart(updatedCart);
     
    } else {
      console.log('Encountered a problem when trying to add an item to the cart.')
    }
  }

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.priceInCents * item.quantity, 0);
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
        getCartItemCount,
        lowerItemCount,
        raiseItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
