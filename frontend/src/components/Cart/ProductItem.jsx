import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';

const ProductItem = ({ product }) => {

  const cart = useSelector((state) => state.cart ) ;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-item bg-white p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full object-cover h-48" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">Rs. {product.price}</p>
      <button
        className="mt-3 bg-blue-500 text-white py-1 px-3 rounded"
        onClick={addToCart} // Trigger the addToCart function
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
