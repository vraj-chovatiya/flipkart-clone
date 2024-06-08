import React from 'react';
import { Card } from "@mui/material";
import './product.css';
import moreProductData from './moreProductData.js';

const Products = () => {

  return (
    <>
      <div>
        <Card className='products-card' sx={{ borderRadius: 0, boxShadow: 0, margin: 2, padding: '30px' }}>
          <h1 className='card-heading' style={{ textAlign: 'left', fontSize: 24, letterSpacing: 1 }}>Beauty, Food, Toys &amp; more</h1>
          <div className='card-data'>
            {moreProductData.map((products) => (
              <div key={products.id}>
                <img src={products.image} alt={products.name} />
                <h2>{products.name}</h2>
                <p>From: {products.price}₹</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
};

export default Products;