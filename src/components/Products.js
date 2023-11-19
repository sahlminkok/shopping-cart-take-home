import React from 'react';
import products from '../products';

const Products = () => (
  <div className="products">
    {
      products.map((product) => (
        <div className="product" key={product.name}>
          <img src={product.image} alt={product.name} />
          <p>
            {product.name}
            {' '}
            -
            {' '}
            {product.color}
          </p>
          <div>
            <p>
              ₦
              {product.price}
            </p>
            <button type="button">Add to cart</button>
          </div>
        </div>
      ))
    }
  </div>
);

export default Products;
