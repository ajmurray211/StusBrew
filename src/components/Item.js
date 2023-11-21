import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext.js';
import {
    Accordion, AccordionBody, AccordionHeader, AccordionItem, Button,
} from 'reactstrap';
import LoadingIcon from './LoadingIcon.js'
import stusCupLogo from '../Assets/stusCupLogo.png'
import FooterLinks from './FooterLinks.js';

const Item = () => {
    const { API_URL, addToCart } = useContext(CartContext)
    const { catagory, id } = useParams();
    const [product, setProduct] = useState(null);
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    // console.log(`${API_URL}${catagory}/${id}`)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}${catagory}/${id}`);
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
                <div className='ItemSection'>
                    <div className='ItemPath'>
                        <p>Home/Shop/{catagory}/{id}</p>
                    </div>
                    <div className='ItemGrid'>
                        <div className='mic1'>
                            <img className='ItemImg' src={`${API_URL}${product.image}`} />
                        </div>
                        <div className='mic2'>
                            <div className='ItemTitle'>
                                <p>{product.name}</p>
                            </div>
                            <div className='ItemPriceContainer'>
                                <div className='ItemPrice'>
                                    <p>${product.priceInCents / 100}</p>
                                </div>
                                <div className='ItemBtn'>
                                    <Button color='light' className='ItemAddToCart' onClick={() => addToCart(product)}>Add to cart +</Button>
                                </div>
                            </div>
                            <div className='ItemDescription'>{product.description}</div>
                        </div>
                        <div className='mic3'>
                            <div className='ItemDropdowns'>
                                <Accordion flush open={open} toggle={toggle}>
                                    {product && product.dropdowns ?
                                        Object.entries(product.dropdowns).map(([key, value], i) => (
                                            <div key={i}>
                                                <AccordionItem>
                                                    <AccordionHeader className='itemAccordionHeader' targetId={i}>{key}</AccordionHeader>
                                                    <AccordionBody accordionId={i}>
                                                        {value}
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem></AccordionItem>
                                            </div>
                                        ))
                                        : ''
                                    }
                                </Accordion>
                            </div>
                        </div>
                        <div className='mic4'>
                            <img className='ItemLogo' src={stusCupLogo} />
                        </div>
                    </div>
                </div>
                : <LoadingIcon />
            }

            <FooterLinks />
        </div>
    );
};

export default Item;
