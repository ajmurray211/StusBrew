import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext.js'; // Assuming you have the correct path to the CartContext file.

const Success = () => {
    const { cart, clearCart } = useContext(CartContext);
    let cartItems = []

    console.log(cart)

    useEffect(() => {
        cartItems = cart
        // clearCart();
    }, []);

    return (
        <div>
            <h2>Congratulations! Your Order Has Been Placed</h2>

            <h3>Ordered Items:</h3>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.productId}>
                        {item.name} - ${item.priceInCents / 100} (Size: {item.size}, Quantity: {item.qty})
                    </li>
                ))}
            </ul>

            <p>Thank you for your business. We appreciate your support!</p>

            {/* Display any other success message or content */}
        </div>
    );
};

export default Success;
