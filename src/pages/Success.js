import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext.js'; // Assuming you have the correct path to the CartContext file.
import greenCheck
 from '../Assets/greenCheck.png'

const Success = () => {
    const { cart, clearCart } = useContext(CartContext);
    let cartItems = []

    console.log(cart, 'cart')

    useEffect(() => {
        cartItems = cart
        // clearCart();
    }, []);

    console.log(cartItems, 'cartItems')

    return (
        <div className='successPage'>
            <div className='congragualtionsSection'>
                <img clas src={greenCheck}/>
                <h2>Congratulations! Your Order Has Been Placed</h2>
            </div>
            <div className='orderedItemsSection'>
                <h3>Ordered Items:</h3>
                <ul>
                    {cart.map((item) => (
                        <li key={item.productId}>
                            {item.name} - ${item.priceInCents / 100} (Size: {item.size}, Quantity: {item.qty})
                        </li>
                    ))}
                </ul>
            </div>
            <div className='thankYouSection'>
                <p>Thank you for your business. We appreciate your support!</p>
                <p>Your order means a lot to us here at stu's bake n' brew please come again!</p>
            </div>

        </div>
    );
};

export default Success;