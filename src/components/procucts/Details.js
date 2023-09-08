import { useContext, useEffect, useState } from 'react';
import { useToggler } from '../../hooks/useToggler';
import { ProductContext } from '../../context/ProductContext';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Label } from 'reactstrap';
import { CartContext } from '../../context/CartContext';
import noImg from '../../Assets/noImageProvided.jpeg'

const Details = () => {
    const { selectedProduct } = useContext(ProductContext);
    const { addToCart, API_URL } = useContext(CartContext);
    const [blend, setBlend] = useState('Yes');
    const [prodId, setProdId] = useState(null)
    const [selectedSize, setSelectedSize] = useState(selectedProduct && selectedProduct.variants && selectedProduct.variants.length > 0
        ? selectedProduct.variants[0].sizeOptions[0]
        : { name: 'error', priceInCents: 0 });
    const { isOpen: isOpenSizeDropdown, toggle: toggleSizeDropdown } = useToggler();
    const { isOpen: isOpenBlendDropdown, toggle: toggleBlendDropdown } = useToggler();

    console.log(prodId)
    useEffect(() => {
        console.log(selectedProduct.variants)
        if (selectedProduct.variants.length !== 0) {
            setProdId(selectedProduct.variants[0].sizeOptions[0]._id)
            setSelectedSize(selectedProduct && selectedProduct.variants && selectedProduct.variants.length > 0
                ? selectedProduct.variants[0].sizeOptions[0]
                : { name: 'error', priceInCents: 0 })
        }
    }, [])

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        setProdId(size._id)
    };

    const handleBlendSelection = (selectedBlend) => {
        setBlend(selectedBlend);
    };

    const handleAddToCart = () => {
        console.log(selectedSize)
        addToCart({
            productId: selectedSize._id,
            name: selectedProduct.name,
            priceInCents: selectedSize.priceInCents,
            qty: 1,
            size: selectedSize.name
        });
    };

    const mappedSizes = selectedProduct?.variants?.[0]?.sizeOptions
        ? selectedProduct.variants[0].sizeOptions.map((size) => (
            <DropdownItem key={size._id} onClick={() => handleSizeSelection(size)}>
                {size.name}
            </DropdownItem>
        ))
        : null;

    const mappedMiniPics = selectedProduct.variants[0] && selectedProduct.variants[0].productImages.length > 0
        ? selectedProduct.variants[0].productImages.map((img, index) => (
            <a href={`#${index}`} onClick={(e) => handleImageClick(e, index)}>
                <img className='miniProdImg' src={`${API_URL}uploads/${img}`} alt={selectedProduct?.name} />
            </a>
        ))
        : <img className='miniProdImg' src={noImg} />;

    const mappedProdPics = selectedProduct.variants[0] && selectedProduct.variants[0].productImages.length > 0
        ? selectedProduct.variants[0].productImages.map((img, index) => (
            <img id={index} className='prodImg' src={`${API_URL}uploads/${img}`} alt={selectedProduct?.name} />
        ))
        : <img className='ProdImg' src={noImg} />;

    function handleImageClick(e, index) {
        e.preventDefault();
        const targetImage = document.getElementById(index);
        if (targetImage) {
            targetImage.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='grid'>
            <section className='miniProdImgs gridItem'>
                {mappedMiniPics}
            </section>
            <section className='prodImgs gridItem'>
                {selectedProduct && selectedProduct.outOfStock && <div className="outOfStockBanner">Out of stock</div>}
                {mappedProdPics}
            </section>
            <section className='detailsContainer gridItem'>

                <section className="prodDetails">
                    <section className="header">
                        <h1>{selectedProduct?.name}</h1>
                        <p>${selectedSize.priceInCents / 100}</p>
                    </section>

                    <section className="cartSeletion">
                        <div className="specs">
                            <section>
                                <Label for="size">Size:</Label>
                                <Dropdown isOpen={isOpenSizeDropdown} toggle={toggleSizeDropdown} id="size">
                                    <DropdownToggle caret>{selectedSize?.name}</DropdownToggle>
                                    <DropdownMenu>{mappedSizes}</DropdownMenu>
                                </Dropdown>
                            </section>
                            {selectedProduct?.type && (
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
                            )}
                        </div>

                        <Button block color="dark" outline size="lg" onClick={handleAddToCart}>
                            Add to cart
                        </Button>

                        <div className="prodDescription">
                            <p>{selectedProduct?.description}</p>
                            {selectedProduct?.type &&
                                <>
                                    <p>Type: {selectedProduct?.type}</p>
                                    <p>Area: {selectedProduct?.region}</p>
                                </>
                            }
                        </div>
                    </section>
                </section>
            </section>
        </div>

    );
};

export default Details;
