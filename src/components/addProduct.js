import React, { useState } from 'react';
import ProductList from './productList';
import Cart from './cart';

import image1 from '../imgs/left-4-dead-3.jpg';
import image2 from '../imgs/KillingFloor.jpg';
import image3 from '../imgs/Half-Life-3.jpg';
import image4 from '../imgs/FEAR.jpg';
import image5 from '../imgs/Dayz.jpg';
import image6 from '../imgs/Counterstrike_GO.jpg';
import image7 from '../imgs/Conan_Exiles.jpg';
import image8 from '../imgs/CallOfDuty_MW.jpg';

const PRODUCTS = [
  {
    id: 1,
    title: 'Left 4 Dead',
    description: 'es un videojuego de terror de disparos en primera persona cooperativo y asimétrico desarrollado por Turtle Rock Studios y publicado por Valve Corporation. ',
    price: 25.99,
    image: image1,
  },
  {
    id: 2,
    title: 'KILLING FLOOR 2',
    description: 'es un videojuego de disparos en primera persona desarrollado y publicado por Tripwire Interactive, con el apoyo posterior de Sabre Interactive Es una secuela de Killing Floor de 2009.',
    price: 15.49,
    image:image2,
  },
  {
    id: 3,
    title: 'Half Life',
    description: 'es un videojuego de disparos en primera persona del género ciencia ficción, con toques de techno-thriller, desarrollado por Valve Corporation. Supuso este juego el debut. ',
    price: 10.99,
    image:image3,
  },
  {
    id: 4,
    title: 'F.E.A.R.',
    description: 'es un videojuego de disparos en primera persona y videojuego de terror que conjuga el clásico modo de juego de disparos en primera persona con una atmósfera de terror sobrenatural.',
    price: 10.99,
    image:image4,
  },
  {
    id: 5,
    title: 'DayZ',
    description: 'es un videojuego de terror y de mundo abierto, desarrollado por Bohemia Interactive y la versión independiente del premiado mod homónimo, creado por Dean Hall',
    price: 10.99,
    image:image5,
  },
  {
    id: 6,
    title: 'Counter-Strike',
    description: 'Es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike.',
    price: 10.99,
    image:image6,
  },
  {
    id: 7,
    title: 'Conan Exiles',
    description: 'Es un juego multijugador de supervivencia online (y ahora también hechicería) ambientado en las tierras de Conan el Bárbaro. Entra en un sandbox de mundo abierto y juega con amigos.',
    price: 10.99,
    image:image7,
  },
  {
    id: 8,
    title: 'Call of Duty: Modern Warfare',
    description: 'Es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision,Es el decimosexto juego de la saga Call of Duty. ',
    price: 10.99,
    image:image8,
  },
];

const AddProduct = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const handlePay = () => {
    // Implementa tu lógica de pago aquí
    setIsModalOpen(true); // Abre el modal al hacer clic en el botón de pago
  };

  const handleConfirm = () => {
    // Implementa la lógica de confirmación de la compra aquí
    setIsModalOpen(false); 
    alert("¡GRACIAS POR SU COMPRA!");// Cierra el modal después de confirmar
  };

  const handleReject = () => {
    // Implementa la lógica de rechazo de la compra aquí
    setIsModalOpen(false); // Cierra el modal después de rechazar
  };
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  const handleCancel = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };
  
  
  return (
    <div className="container mx-auto p-4">
      {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div className="bg-white p-8 rounded-lg">
          <p className="text-center mb-4">¿Desea confirmar o rechazar la compra?</p>
          <div className="flex justify-center">
            <a href='/'>
            <button onClick={handleConfirm} className="bg-green-500 text-white py-2 px-4 mr-2 rounded">
              Confirmar
            </button>
            </a>
            <button onClick={handleReject} className="bg-red-500 text-white py-2 px-4 rounded">
              Rechazar
            </button>
          </div>
        </div>
      </div>
      )}
      {isCartVisible && <Cart cartItems={cartItems} onPay={handlePay} onCancel={handleCancel}/>}
      <ProductList products={PRODUCTS} onAddToCart={addToCart} />
      <button
        onClick={toggleCartVisibility}
        className="fixed top-0 right-0 m-4 bg-blue-500 text-white py-2 px-4 rounded transition-all duration-300 hover:bg-blue-700"
        style={{ transitionProperty: 'background-color, color' }}
      >
        {isCartVisible ? 'Hide Cart' : 'Show Cart'}
      </button>
    </div>
  );
};

export default AddProduct;
