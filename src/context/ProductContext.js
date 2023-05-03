import { createContext, useEffect, useState } from 'react';
import { useCartFunctionality } from '../hooks/useCartFunctionality';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart, loadCart } = useCartFunctionality()

  // useEffect(() => {
  //   if (localStorage.getItem("shoppingCart") != null) {
  //     loadCart();
  //   }
  // }, [])

  console.log(cart)

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct, cart}}>
      {children}
    </ProductContext.Provider>
  );
};
