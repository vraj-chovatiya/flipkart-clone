import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@mui/material";
import './product.css';
import productsData from './productsData.js';

const Products = () => {

    return (
        <>
            <div>
                <Card className='products-card' sx={{ borderRadius: 0, boxShadow: 0, margin: 2, padding: '30px' }}>
                    <h1 className='card-heading' style={{ textAlign: 'left', fontSize: 24, letterSpacing: 1 }}>Best of Electronics</h1>
                    <div className='card-data'>
                        {productsData.map((products) => (
                            <Link to={`/product/${products.id}`} key={products.id} className='product-link'>
                                <div className='product'>
                                    <img src={products.image} alt={products.name} />
                                    <h2>{products.name}</h2>
                                    <p>From: {products.price}₹</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    )
};

export default Products;