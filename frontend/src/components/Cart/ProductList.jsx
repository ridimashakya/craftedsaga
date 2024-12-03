import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import '../../index.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="listProduct grid grid-cols-4 gap-4">
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
};

export default ProductList;
