import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className='mx-auto max-w-screen-xl rounded-xl transition duration-500 ease-in-out transform hover:scale-105'>
        <div className="border p-4 ">
      <img src={product.image} alt={product.title} className="w-full mb-4" />
      <h3 className="text-lg font-bold mb-2">{product.title}</h3>
      <p className="mb-2">{product.description}</p>
      <p className="mb-4">${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
    </div>
  );
};

export default ProductCard;
