import { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Popover, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const Cart = (props) => {
    const { cart, clearCart, runningCartTotal, getCartItemCount, API_URL } = useContext(CartContext);

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

    const mappedCartItems = cart.map((item) => (
        <li key={item.name}>
            {item.name} - {item.size}, {item.priceInCents / 100} x {item.qty} - ${(item.priceInCents / 100) * item.qty}
        </li>
    ));

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <ShoppingCartIcon id="cartButton" onClick={props.toggle} />
                {getCartItemCount() > 0 && (
                    <div id="itemsInCart">{getCartItemCount()}</div>
                )}
            </div>
            <UncontrolledPopover
                placement="left"
                target="cartButton"
            >
                <PopoverHeader>
                </PopoverHeader>
                <PopoverBody>
                    <div>
                        {getCartItemCount() === 0 ? 'Your cart is empty' : mappedCartItems}
                    </div>
                    <div>
                        <Button id="cart" color="secondary" onClick={handleCheckout}>
                            Check Out
                        </Button>
                        <Button color="secondary" onClick={() => {
                            clearCart();
                            props.toggle();
                        }}>
                            Clear cart
                        </Button>
                    </div>
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    );
}

export default Cart;
