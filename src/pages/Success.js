import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext.js'; // Assuming you have the correct path to the CartContext file.
import stusCupLogo from '../Assets/stusCupLogo.png'
import arrowIcon from '../Assets/arrowIcon.png'
import { Input } from 'reactstrap';
import FooterLinks from '../components/FooterLinks.js';

const Success = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [email, setEmail] = useState(null)
    let cartItems = []

    console.log(cart, 'cart')

    useEffect(() => {
        cartItems = cart
        // clearCart();
    }, []);

    console.log(cartItems, 'cartItems')

    return (
        <div className='successPage'>
            <div className='successMsgSection'>
                <div className='successOrderNum'>
                    <p>ORDER #12345678{ }</p>
                </div>
                <div className='SuccessMsg'>
                    <p>THANK YOU FOR YOUR PURCHASE</p>
                </div>
                <div >
                    <img className='successIcon' src={stusCupLogo} alt='Stus Brew Cup Logo' />
                </div>
            </div>

            <div className='successNewsLetter'>
                <div className='successNewsLetterTitle'>
                    Join our club, get 15% off for your Birthday
                </div>
                <div className='successNewsLetterInputContainer'>
                    <Input className='successNewsLetterInput' type='email' value={email} onChange={(e) => setEmail(e.target.value)} m placeholder='Enter Your Email Address' />
                    <img className='successInputArrow' src={arrowIcon} />
                </div>
                <div className='successNewsLetterFooter'>
                    <Input type='checkbox' disabled />
                    <p>By Submittng your email, you agree to receive advertising emails from Stu’s Brew.</p>
                </div>
            </div>

            <FooterLinks />
        </div>
    );
};

export default Success;