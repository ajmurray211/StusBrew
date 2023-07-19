import { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
    const { cart, clearCart, runningCartTotal, getCartItemCount } = useContext(CartContext);

    const mappedCartItems = cart.map((item) => (
        <li key={item.name}>
            {item.name}, {item.price} x {item.qty} - ${item.price * item.qty}
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
            <Modal centered size="lg" isOpen={props.isOpen} >
                <ModalHeader toggle={props.toggle}>Your Cart</ModalHeader>
                <ModalBody>
                    {getCartItemCount() === 0 ? 'Your cart is empty' : mappedCartItems}
                </ModalBody>
                <ModalFooter >
                    <Button color="secondary" onClick={props.toggle}>
                        Check Out
                    </Button>
                    <Button color="secondary" onClick={() => {
                        clearCart();
                        props.toggle();
                    }}>
                        Clear cart
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Cart;
