import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import arrowRight from '../Assets/arrow-right-blue-thin.png'
import { Button } from "reactstrap";

const Cart = (props) => {
    const { cart, clearCart, runningCartTotal, raiseItemCount, API_URL, lowerItemCount } = useContext(CartContext);
    const [cartSubtotal, setCartSubtotal] = useState(0)

    const handleCheckout = async () => {
        axios.post(`${API_URL}create-checkout-session`, { cart, cart })
            .then(res => {
                console.log(res.ok)
                window.location = res.data.url
            })
            .catch(e => {
                console.error(e.error)
            })
    }

    useEffect(() => {
        const subtotal = cart.reduce((total, item) => {
            return total + (item.qty * item.priceInCents) / 100;
        }, 0);

        const formattedSubtotal = parseFloat(subtotal.toFixed(2));

        setCartSubtotal(formattedSubtotal);

        console.log(formattedSubtotal, runningCartTotal);
    }, [cart]);

    const mappedCartItems = cart.map((item) => {
        console.log(item)
        return (
            <li className="cartItemDetails" key={item.name}>
                <div className="cartItemmetacontainer">
                    <img src={`${API_URL}${item.image}`} className="cartItemImg" />
                    <div className="cartItemMeta">
                        <p>{item.name}</p>
                        <p className="cartItemCount">
                            <p className="cartItemCountAdj" onClick={() => lowerItemCount(item)}>-</p>
                            <span className="cartItemQty">Qty</span> {item.qty}
                            <p className="cartItemCountAdj" onClick={() => raiseItemCount(item)}>+</p>
                        </p>
                    </div>
                </div>
                <p>$ {item.qty * (item.priceInCents / 100)}</p>
            </li>
        );
    });

    return (
        <div className="cartBodyContainer">
            <div className="itemsInCart">
                {mappedCartItems}
            </div>
            <div className="cartTotal">
                <p>Subtotal</p>
                <p>$ {cartSubtotal}</p>
            </div>
            <div className="cartFooter">
                <p className="cartClearBtn" onClick={() => clearCart()}>Clear Cart</p>
                <div onClick={handleCheckout}>
                    <p>Checkout</p>
                    <img className="cartCheckoutArrow" src={arrowRight} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
