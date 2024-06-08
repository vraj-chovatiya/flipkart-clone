import React from 'react';

const ProductDetails = ({ match }) => {
    // Assuming you have product data available
    const productId = match.params.id; // Extracting productId from URL params

    // Use productId to fetch full details of the product or access it from the productsData array

    return (
        <div>
            {/* Display product details here */}
            <h1>Product Details</h1>
            <p>Product ID: {productId}</p>
            {/* Display other details of the product */}
        </div>
    );
};

export default ProductDetails;
