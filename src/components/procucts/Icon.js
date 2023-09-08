import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import noImg from '../../Assets/noImageProvided.jpeg'

const Icon = (props) => {
  const { setSelectedProduct, selectedProduct } = useContext(ProductContext);
  const { API_URL } = useContext(CartContext)
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setSelectedProduct(props.product);
    console.log(selectedProduct)
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Perform checks before accessing properties
  const variants = props.product.variants || [];
  const sizeOptions = variants[0]?.sizeOptions || [];
  const startingPrice = sizeOptions[0]?.priceInCents ? sizeOptions[0].priceInCents / 100 : 0;
  const imgs = variants[0] ? variants[0].productImages : []

  return (
    <Link
      className='product'
      to={`/details`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {props.product.outOfStock && <div className="outOfStockBanner">Out of stock</div>}
      <img src={imgs.length === 0 ? noImg : `${API_URL}uploads/${imgs[0]}`} alt={props.product.name} />
      <div className={`productMeta ${isHovered ? 'show' : ''}`}>
        <div className={isHovered ? 'show' : ''}>{props.product.name}</div>
        <br />
        <div id='price' className={isHovered ? 'show' : ''}>Starting at: ${startingPrice}</div>
      </div>
    </Link>
  );
};

export default Icon;
