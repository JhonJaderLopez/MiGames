// Cart.js
import React from 'react';

const Cart = ({ cartItems, onPay, onCancel }) => {
  const cartStyle = {
    position: 'fixed',
    top: 110,
    right: 7,
    width: '300px',
    maxHeight: 'calc(100vh - 120px)', // Ajusta el maxHeight según tus necesidades
    overflowY: 'auto',
    backgroundColor: '#2d3748',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#f7fafc',
  };

  const cartTitleStyle = {
    color: '#cbd5e0',
  };

  const cartItemStyle = {
    border: '1px solid #4a5568',
    padding: '10px',
    marginBottom: '10px',
  };

  const payButtonStyle = {
    backgroundColor: '#48bb78',
    color: '#f7fafc',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const cancelButtonStyle = {
    backgroundColor: '#f56565',
    color: '#f7fafc',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '3px',
    marginLeft: '35px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleCancel = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    onCancel(updatedCartItems);
  };

  return (
    <div className="rounded-2xl" style={cartStyle}>
      <div className="">
        <h2 className="text-2xl font-bold mb-4" style={cartTitleStyle}>
          Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="mb-4 flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 mr-4" />
                <div>
                  <p className="text-lg font-bold" style={cartTitleStyle}>
                    {item.title}
                  </p>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => handleCancel(item.id)} style={cancelButtonStyle}>
                  x
                </button>
              </div>
            ))}
            <button onClick={onPay} style={payButtonStyle}>
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
