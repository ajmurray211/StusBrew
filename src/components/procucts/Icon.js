import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Icon = (props) => {
  const { setSelectedProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setSelectedProduct(props.product);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      className='product'
      to={`/details`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {props.product.outOfStock && <div className="outOfStockBanner">Out of stock</div>}
      <img src={props.product.src[0]} alt={props.product.name} />
      <div className={`productMeta ${isHovered ? 'show' : ''}`}>
        <div className={isHovered ? 'show' : ''}>{props.product.name} - {props.product.type} - {props.product.area}</div>
        <div id='price' className={isHovered ? 'show' : ''}>Starting at: ${props.product.sizes[0].price}</div>
      </div>
    </Link>
  );
};

export default Icon;
