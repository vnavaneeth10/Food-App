// import React from 'react'

// const Grocery = () => {
//   return (
//     <h1>
//         Our Grocery store online store, and we have alot of child components inside this web page
//     </h1>
//   )
// }

// export default Grocery




import React, { useState } from "react";

const GROCERY_CATEGORIES = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    items: [
      { id: 1, name: "Apples", price: 2.99, unit: "kg" },
      { id: 2, name: "Bananas", price: 1.99, unit: "dozen" },
      { id: 3, name: "Tomatoes", price: 3.49, unit: "kg" },
    ]
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    items: [
      { id: 4, name: "Milk", price: 3.99, unit: "liter" },
      { id: 5, name: "Cheese", price: 4.99, unit: "pack" },
      { id: 6, name: "Eggs", price: 2.99, unit: "dozen" },
    ]
  },
  {
    id: 3,
    name: "Pantry Items",
    items: [
      { id: 7, name: "Rice", price: 5.99, unit: "kg" },
      { id: 8, name: "Pasta", price: 2.49, unit: "pack" },
      { id: 9, name: "Flour", price: 3.99, unit: "kg" },
    ]
  }
];

const GroceryItem = ({ item }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="font-semibold text-gray-800">{item.name}</h3>
    <div className="flex justify-between items-center mt-2">
      <span className="text-gray-600">₹{item.price}/{item.unit}</span>
      <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
);

const Grocery = () => {
  const [selectedCategory, setSelectedCategory] = useState(GROCERY_CATEGORIES[0].id);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Fresh Groceries</h1>
          <p className="text-gray-600">Shop fresh groceries from our carefully curated selection</p>
        </div>

        {/* Categories and Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Category Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="space-y-2">
                {GROCERY_CATEGORIES.map((category) => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        selectedCategory === category.id
                          ? "bg-green-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Items Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GROCERY_CATEGORIES.find(cat => cat.id === selectedCategory)?.items.map(item => (
                <GroceryItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <span className="text-3xl mb-4 block">🚚</span>
            <h3 className="font-semibold mb-2">Free Delivery</h3>
            <p className="text-gray-600">On orders above ₹500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <span className="text-3xl mb-4 block">🌟</span>
            <h3 className="font-semibold mb-2">Best Quality</h3>
            <p className="text-gray-600">Handpicked fresh items</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <span className="text-3xl mb-4 block">⚡</span>
            <h3 className="font-semibold mb-2">Express Delivery</h3>
            <p className="text-gray-600">Within 2 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
