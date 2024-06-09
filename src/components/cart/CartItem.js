import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="quantity">
                    <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;