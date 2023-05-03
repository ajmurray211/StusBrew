import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Label } from 'reactstrap';
import { useToggler } from '../../hooks/useToggler';
import { useCartFunctionality } from '../../hooks/useCartFunctionality';
import { redirect } from 'react-router';

const Details = () => {
    const { selectedProduct, cart, setCart } = useContext(ProductContext);
    const [blend, setSetBlend] = useState('Yes');
    const [selectedSize, setSelectedSize] = useState(selectedProduct ? selectedProduct.sizes[0] : { amount: 'error', price: 'null' })
    const { saveCart, addItemToCart, removeItemFromCart, loadCart } = useCartFunctionality()

    const { isOpen: sizeDropdown, toggle: toggleSizeDropdown } = useToggler()
    const { isOpen: blendDropdown, toggle: toggleBlendDropdown } = useToggler()

    const mappedSizes = selectedProduct.sizes.map((size) => {
        return (
            <DropdownItem onClick={() => setSelectedSize(size)}> {size.amount}</DropdownItem >
        )
    })

    return (
        <div className="detailsContainer">
            {selectedProduct.outOfStock && <div className="outOfStockBanner">Out of stock</div>}
            <section className='prodPics'>
                <img src={selectedProduct.src} alt={selectedProduct.name} />
            </section>

            <section className='prodDetails'>
                <section className='header'>
                    <h1>{selectedProduct.name} </h1>
                    <p>${selectedSize.price}</p>
                </section>

                <section className='cartSeletion'>
                    <div className='specs'>
                        <section>
                            <Label for='size'>Size:</Label>
                            <Dropdown isOpen={sizeDropdown} toggle={toggleSizeDropdown} id='size'>
                                <DropdownToggle caret>{selectedSize.amount}</DropdownToggle>
                                <DropdownMenu>
                                    {mappedSizes}
                                </DropdownMenu>
                            </Dropdown>
                        </section>
                        <section>
                            <Label for='blend'>Blend:</Label>
                            <Dropdown isOpen={blendDropdown} toggle={toggleBlendDropdown} id='blend'>
                                <DropdownToggle caret>{blend}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => setSetBlend('Yes')}>Yes</DropdownItem>
                                    <DropdownItem onClick={() => setSetBlend('No')}>No</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </section>
                    </div>

                    <Button block color="dark" outline size="lg" onClick={() => {
                        redirect('/home')
                        addItemToCart(selectedProduct.name,selectedSize.price,1)
                    }}>
                        Add to cart
                    </Button>

                    <div className='prodDescription'>
                        <p> {selectedProduct.description}</p>
                        <p>Type: {selectedProduct.type}</p>
                        <p>Area: {selectedProduct.area}</p>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Details;
