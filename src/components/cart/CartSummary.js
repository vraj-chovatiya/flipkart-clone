import React from 'react';

const CartSummary = ({ items }) => {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const showAlert = () => {
        alert("Your order has been placed successfully!");
    };

    return (
        <div className="cart-summary">
            <h3>Price Details</h3>
            <div className="price-details">
                <div className="detail">
                    <span>Price ({items.length} items)</span>
                    <span>₹{totalPrice}</span>
                </div>
                <div className="detail">
                    <span>Discount</span>
                    <span>₹0</span>
                </div>
                <div className="detail">
                    <span>Delivery Charges</span>
                    <span>₹0</span>
                </div>
                <div className="total">
                    <span>Total Amount</span>
                    <span>₹{totalPrice}</span>
                </div>
            </div>
            <button className="checkout-btn" onClick={showAlert}>Proceed to Checkout</button>
        </div>
    );
};

export default CartSummary;
