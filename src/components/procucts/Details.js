import { useContext, useState } from 'react';
import { useToggler } from '../../hooks/useToggler';
import { ProductContext } from '../../context/ProductContext';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Label } from 'reactstrap';
import { CartContext } from '../../context/CartContext';

const Details = () => {
    const { selectedProduct } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext)
    const [blend, setBlend] = useState('Yes');
    const [selectedSize, setSelectedSize] = useState(
        selectedProduct ? selectedProduct.sizes[0] : { amount: 'error', price: 'null' }
    );
    const { isOpen: isOpenSizeDropdown, toggle: toggleSizeDropdown } = useToggler()
    const { isOpen: isOpenBlendDropdown, toggle: toggleBlendDropdown } = useToggler()

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleBlendSelection = (selectedBlend) => {
        setBlend(selectedBlend);
    };

    const handleAddToCart = () => {
        addToCart({ productId: selectedProduct.productId, name: selectedProduct.name, price: selectedSize.price, qty: 1 });
    };

    const mappedSizes = selectedProduct.sizes.map((size) => (
        <DropdownItem key={size.amount} onClick={() => handleSizeSelection(size)}>
            {size.amount}
        </DropdownItem>
    ));

    return (
        <div className="detailsContainer">
            {selectedProduct.outOfStock && <div className="outOfStockBanner">Out of stock</div>}
            <section className="prodPics">
                <img src={selectedProduct.src} alt={selectedProduct.name} />
            </section>

            <section className="prodDetails">
                <section className="header">
                    <h1>{selectedProduct.name}</h1>
                    <p>${selectedSize.price}</p>
                </section>

                <section className="cartSeletion">
                    <div className="specs">
                        <section>
                            <Label for="size">Size:</Label>
                            <Dropdown isOpen={isOpenSizeDropdown} toggle={toggleSizeDropdown} id="size">
                                <DropdownToggle caret>{selectedSize.amount}</DropdownToggle>
                                <DropdownMenu>{mappedSizes}</DropdownMenu>
                            </Dropdown>
                        </section>
                        <section>
                            <Label for="blend">Blend:</Label>
                            <Dropdown isOpen={isOpenBlendDropdown} toggle={toggleBlendDropdown} id="blend">
                                <DropdownToggle caret>{blend}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => handleBlendSelection('Yes')}>Yes</DropdownItem>
                                    <DropdownItem onClick={() => handleBlendSelection('No')}>No</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </section>
                    </div>

                    <Button block color="dark" outline size="lg" onClick={handleAddToCart}>
                        Add to cart
                    </Button>

                    <div className="prodDescription">
                        <p>{selectedProduct.description}</p>
                        <p>Type: {selectedProduct.type}</p>
                        <p>Area: {selectedProduct.area}</p>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Details;
