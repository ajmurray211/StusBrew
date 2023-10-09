import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import noImg from '../Assets/noImageProvided.jpeg'
import outOfStockBanner from '../Assets/outOfStockBanner.png'

const Icon = (props) => {
  const { setSelectedProduct, selectedProduct } = useContext(ProductContext);
  const { API_URL } = useContext(CartContext)

  const handleClick = () => {
    setSelectedProduct(props.product);
  };

  // Perform checks before accessing properties
  const variants = props.product.variants || [];
  const sizeOptions = variants[0]?.sizeOptions || [];
  const startingPrice = sizeOptions[0]?.priceInCents ? sizeOptions[0].priceInCents / 100 : 0;
  const imgs = variants[0] ? variants[0].productImages : []

  return (
    <Link
      className={`iconContainer ${props.product.outOfStock ? 'disabled-link' : ''}`}
      to={`/details`}
      onClick={handleClick}
    >
      {
        props.product.outOfStock ?
          <div className='outOfStockOverlay'>
            {/* <div className="outOfStockBanner">Out of stock</div> */}
            <img className='outOfStockImg' src={outOfStockBanner}/>
          </div>
          : ''
      }
      <img className='iconProductImage' src={imgs.length === 0 ? noImg : `${API_URL}uploads/${imgs[0]}`} alt={props.product.name} />
      <div className='iconMeta body'>{props.product.name}</div>
      <div id='price' className='iconMeta body'>Starting at: ${startingPrice}</div>
    </Link>
  );
};

export default Icon;