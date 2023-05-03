import { useEffect, useState } from 'react';

export const useCartFunctionality = () => {
    const [cart, setCart] = useState([]);

    function Item(name = '', price = '', count = 1, description = '') {
        this.name = name;
        this.price = price;
        this.count = count;
        this.description = description;
    }

    useEffect(() => {
        const loadedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        setCart(loadedCart);
    }, []);

    const saveCart = () => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    };

    const addItemToCart = (name, price, count) => {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.count++;
        } else {
            const item = new Item(name, price, count);
            cart.push(item);
        }
        setCart([...cart]);
        saveCart();
    };

    const removeItemFromCart = (name) => {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.count -= 1;
            if (existingItem.count === 0) {
                const index = cart.findIndex(item => item.name === name);
                cart.splice(index, 1);
            }
        }
        setCart([...cart]);
        saveCart();
    };

    const clearCart = () => {
        localStorage.setItem('shoppingCart', JSON.stringify([]));
        setCart([]);
    };


    const toatalItemsInCart = () => {
        let totalItems = 0;
        for (let item of cart) {
            totalItems += item.count;
        }
        return totalItems;
    };

    const runningCartTotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);


    return { cart, saveCart, addItemToCart, removeItemFromCart, clearCart, toatalItemsInCart, runningCartTotal };
};
