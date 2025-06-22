import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;

        return (
          <div
            data-testid="foodItems"
            key={id}
            className="flex justify-between items-start gap-4 py-6"
          >
            {/* Left: Text Info */}
            <div className="w-9/12">
              <div className="mb-2">
                <h3 className="text-base font-semibold text-gray-800">
                  {name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  ₹{price ? price / 100 : defaultPrice / 100}
                </p>
              </div>
              <p className="text-sm text-gray-500">{description}</p>
            </div>

            {/* Right: Image + Button */}
            <div className="w-3/12 flex flex-col items-center relative">
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-24 h-24 object-cover rounded-lg shadow"
              />
              <button
                className="absolute bottom-0 translate-y-1/2 bg-black text-white px-3 py-1 text-sm rounded-md shadow-md hover:bg-gray-800 transition"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
