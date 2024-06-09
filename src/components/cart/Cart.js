import React, { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './cart.css';
// import Header from '../header/Header';

const Cart = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            quantity: 1,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 2000,
            quantity: 2,
            image: 'https://via.placeholder.com/150',
        },
    ]);

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        setItems(
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    return (
        <div className="app">
            <div className="cart">
                {/* <h2>Shopping Cart</h2> */}
                {/* <Header /> */}
                {items.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onRemove={handleRemove}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>
            <CartSummary items={items} />
        </div>
    );
};

export default Cart;
