import React from 'react';
import ProductCard from './productCard';
import image1 from '../imgs/ps4.jpg';
import image2 from '../imgs/xbox.jpeg';
import image3 from '../imgs/nintendo2.jpg';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className='mx-auto max-w-screen-xl rounded-xl py-2 pr-32'>
        <div>
            <div className="flex py-5 max-w-screen-lg justify-between ">
            <img src={image1} alt="placeholder-image" className="w-1/3 mr-7 transition duration-500 ease-in-out transform hover:scale-105" />
            <img src={image2} alt="placeholder-image" className="w-1/3 mr-6 transition duration-500 ease-in-out transform hover:scale-105" />
            <img src={image3} alt="placeholder-image" className="w-1/3 transition duration-500 ease-in-out transform hover:scale-105" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
    </div>
    
  );
};

export default ProductList;
