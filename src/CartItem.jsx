import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0.0;
    cart.forEach(item => {
        total += parseFloat(item.cost.substring(1))*item.quantity;
        
    });
        return total;

  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      }));
    };

  const handleDecrement = (item) => {
      dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return cost*item.quantity;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
        <div className="text-lg font-bold text-emerald-700">Total: ${calculateTotalAmount().toFixed(2)}</div>
      </div>

      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.name} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-gray-50 p-3 rounded">
            <img className="h-24 w-full sm:w-24 object-cover rounded" src={item.image} alt={item.name} />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-800 truncate">{item.name}</div>
              <div className="text-sm text-gray-600">{item.cost}</div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleDecrement(item)}>-</button>
                <div className="font-medium">{item.quantity}</div>
                <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleIncrement(item)}>+</button>
                <div className="ml-0 sm:ml-6 text-sm text-gray-700">Item Total: <span className="font-bold text-gray-900">${calculateTotalCost(item).toFixed(2)}</span></div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-end sm:justify-center">
              <button className="text-sm text-red-600" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button className="btn-muted" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <button className="btn-primary" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


