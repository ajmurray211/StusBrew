import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const Icon = (props) => {
    const { setSelectedProduct, selectedProduct } = useContext(ProductContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setSelectedProduct(props.product);
    };

    return (
        <div className="product"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}>
            {props.product.outOfStock && <div className="outOfStockBanner">Out of stock</div>}
            <Link className='iconDetails' to={`/details`}>
                <img src={props.product.src[0]} alt={props.product.name} />
                <p className={isHovered ? 'show' : ''}>{props.product.name} - {props.product.type} - {props.product.area}</p>
                <p className={isHovered ? 'show' : ''}>Starting at: ${props.product.sizes[0].price}</p>
            </Link>
        </div >
    );
};

export default Icon;
