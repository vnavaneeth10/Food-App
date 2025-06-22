import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9613042&lng=80.2355167&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!onlineStatus) {
    return (
      <div className="text-center py-10 text-lg font-semibold text-red-500">
        Looks like you're offline. Please check your internet connection.
      </div>
    );
  }

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Filter + Search Controls */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3">
        {/* Search */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search Restaurant"
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-100 px-4 py-2 rounded-md hover:bg-blue-200 transition"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                // Convert search text to lowercase for case-insensitive comparison
                const searchTextLower = searchText.toLowerCase();

                // Check if restaurant name matches
                const nameMatch = res.info.name
                  .toLowerCase()
                  .includes(searchTextLower);

                // Check if any cuisine matches
                const cuisineMatch = res.info.cuisines
                  .join(" ")
                  .toLowerCase() // Join all cuisines and convert to lowercase
                  .includes(searchTextLower);

                // Return true if either name or cuisines match
                return nameMatch || cuisineMatch;
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            🔍 Search
          </button>
        </div>

        {/* Top Rated Button */}
        <div className="flex items-center">
          <button
            className="bg-yellow-100 px-4 py-2 rounded-md hover:bg-yellow-200 transition"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            ⭐ Top Rated
          </button>
        </div>
      </div>

      {/* User Context Input */}
      {/* <div className="flex gap-2 items-center">
          <label className="font-medium">User Name:</label>
          <input
            className="border border-gray-300 px-3 py-2 rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
