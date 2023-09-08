import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // console.log('seleted prod:', selectedProduct)

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
