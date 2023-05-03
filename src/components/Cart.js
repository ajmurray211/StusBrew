import { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useCartFunctionality } from "../hooks/useCartFunctionality";
import { ProductContext } from "../context/ProductContext";

const Cart = (props) => {
    const { cart } = useContext(ProductContext)
    const { loadCart, clearCart, toatalItemsInCart, runningCartTotal } = useCartFunctionality()

    const mappedCartItems = cart.map((item) => {
        console.log(item)
        return (
            
            <li>{item.name} - {item.count} - {item.price}</li>
        )
    })

    console.log(runningCartTotal, toatalItemsInCart())
    return (
        <div>
            <Button id="cartButton" onClick={props.toggle} size="lg" color={runningCartTotal === 0 ? "light" : "warning"}>
                <ShoppingCartIcon fontSize="large" />
                {toatalItemsInCart()}
            </Button>
            <Modal centered size="lg" isOpen={props.isOpen} toggle={props.toggle} >
                <ModalHeader toggle={props.toggle}>Your Cart</ModalHeader>
                <ModalBody>
                    {runningCartTotal === 0 ? 'Your cart is empty' : mappedCartItems}
                </ModalBody>
                <ModalFooter >
                    <Button color="secondary" onClick={props.toggle}>
                        Check Out
                    </Button>
                    <Button color="secondary" onClick={() => {
                        clearCart()
                        props.toggle()
                    }}>
                        Clear cart
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Cart;