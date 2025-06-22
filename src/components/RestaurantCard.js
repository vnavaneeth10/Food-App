import { CDN_URL } from "../utils/constants";

/**
 * Renders a card displaying restaurant details.
 * @param {Object} props - An object containing restaurant data.
 * @param {Object} props.resData - An object with restaurant information.
 * @returns {JSX.Element} JSX element representing a restaurant card with details.
 */
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {};

  return (
    <div
      data-testid="resCard"
      className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 m-4 p-4 flex flex-col items-center hover:scale-105 transform duration-200"
    >
      <img
        className="rounded-xl h-48 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="pt-4 w-full text-left space-y-1">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 truncate">
          {cuisines?.join(", ")}
        </h4>
        <div className="flex justify-between items-center text-sm text-gray-700">
          <span className="font-semibold">⭐ {avgRating}</span>
          <span>{sla?.slaString}</span>
        </div>
        <h4 className="text-sm text-gray-700 font-medium">{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
