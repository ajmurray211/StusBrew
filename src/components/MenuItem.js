import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext.js';
import {
    Accordion, AccordionBody, AccordionHeader, AccordionItem, Button,
} from 'reactstrap';
import LoadingIcon from './LoadingIcon.js'
import stusCupLogo from '../Assets/stusCupLogo.png'
import FooterLinks from './FooterLinks.js';

const MenuItem = () => {
    const { API_URL, addToCart } = useContext(CartContext)
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}bakedGoods/${encodeURIComponent(id)}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {product ?
                <div className='menuItemSection'>
                    <div className='menuItemPath'>
                        <p>Home/Shop/BakedGoods/{product.name}</p>
                    </div>
                    <div className='menuItemGrid'>
                        <div className='mic1'>
                            <img className='menuItemImg' src={product.image} />
                        </div>
                        <div className='mic2'>
                            <div className='menuItemTitle'>
                                <p>{product.name}</p>
                            </div>
                            <div className='menuItemPriceContainer'>
                                <div className='menuItemPrice'>
                                    <p>${product.priceInCents / 100}</p>
                                </div>
                                <div className='menuItemBtn'>
                                    <Button color='light' className='menuItemAddToCart' onClick={() => addToCart(product)}>Add to cart +</Button>
                                </div>
                            </div>
                            <div className='menuItemDescription'>{product.description}</div>
                        </div>
                        <div className='mic3'>
                            <div className='menuItemDropdowns'>
                                <Accordion flush open={open} toggle={toggle}>
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">Ingrediants</AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            {product.ingredients}
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">Reviews</AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            No reviews of this product yet.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <strong>This is the third item&#39;s accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It&#39;s also worth noting that just about any HTML can
                                            go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className='mic4'>
                            <img className='menuItemLogo' src={stusCupLogo} />
                        </div>
                    </div>
                </div>
                : <LoadingIcon />
            }

            <FooterLinks />
        </div>
    );
};

export default MenuItem;
