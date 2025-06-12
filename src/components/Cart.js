// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";


// const Cart = () => {

//     const cartItems = useSelector((store)=>store.cart.items);

//     const dispatch = useDispatch();

//     const handleClearCart = () => {

//         dispatch(clearCart());

//     };
    
//    return (

//     <div 
//     className="text-center m-4 p-4">

//      <h1 
//      className="text-2xl font-bold">

//         Cart</h1>

//      <div 
//      className="w-6/12 m-auto">
     
//         <button 

//         className="p-2 m-2 bg-black text-white rounded-lg" 

//         onClick={handleClearCart}>

//             Clear Cart

//         </button>

//         {cartItems.length == 0 &&
//          <h1>Cart Itmes are empty.Please Add items to the cart</h1>}
//         <ItemList items={cartItems}/>
        
//      </div>
//      </div> 
//      )
// }


// export default Cart;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //subscribing to the store
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems is", cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + (item.card.info.price / 100) * item.card.info.inStock,
      0
    );
  };

  const handleRemoveItem = () => {};

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Cart Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} items in cart</p>
          <button
            className="px-4 py-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md">
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item, index) => (
                <div key={item.id} className="p-6 flex items-center space-x-4">
                  {/* Item Image */}
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                    {item.card.info.imageId && (
                      <img
                        src={CDN_URL + item.card.info.imageId}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                        alt={item.card.info.name}
                      />
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.card.info.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.restaurant}</p>
                    <p className="text-gray-900 mt-1">
                      ₹{item.card.info.price / 100}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
                      <span className="text-xl font-medium">-</span>
                    </button>
                    <span className="text-gray-900">
                      {item.card.info.inStock}
                    </span>
                    <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
                      <span className="text-xl font-medium">+</span>
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="px-3 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200"
                    onClick={handleRemoveItem}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{calculateTotal()}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Delivery Fee</p>
                <p>₹40</p>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <p>Total</p>
                <p>₹{calculateTotal() + 40}</p>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          // Empty Cart State
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">Add items to get started</p>
            <button
              className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-200"
              onClick={handleClick}
            >
              Browse Restaurants
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
