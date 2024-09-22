import RestaurantCard from "./RestaurantCard"
import { useEffect, useState, useContext } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
/**
 * React component that fetches a list of restaurants from an API, displays them, and allows filtering of top-rated restaurants based on their average rating.
 */
const Body = () => {

  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {

    fetchData();

  }, []);

  /**
   * Fetches restaurant data from the API and updates the list of restaurants.
   */


  const fetchData = async () => {

    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9613042&lng=80.2355167&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await response.json();

    

    //Optional Chaining
    const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
    //console.log("restaurants",restaurants);
    
  };

  const onlineStatus  = useOnlineStatus();

  if (onlineStatus == false) 

    return (

      <h1>
        Looks like you're offline.Please check your internet connection
      </h1>
      
    );

    const {loggedInUser, setUserName} = useContext(UserContext)
    
  //Conditional Rendering
  

  return  listofRestaurants.length === 0 ? ( <Shimmer /> ) :  

   (
    <div className="mx-auto">
      <div className="filter flex mx-auto">
        <div className="search m-4 p-4 ">

          <input 
          type="text" 
          data-testid="searchInput"
          className="border border-solid m-2 focus:ring-2 focus:ring-black-500 focus:outline-none appearance-none placeholder-slate-400"  placeholder=" Search Restaurant" aria-label="Search Restaurant" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}

          />

          <button 
          className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-sky-200" 

          onClick={()=> {
            //Filter the restaurant cards and update the UI
            //search text

            // console.log(searchText);

           const filteredRestaurant = listofRestaurants.filter((res)=> {

             res.info.name.toLowerCase().includes(searchText.toLowerCase())

            });

           setFilteredRestaurant(filteredRestaurant);

          }}> 🔍 Search
          </button>

        </div>

        <div 
        className="m-4 p-4 flex items-center">

        <button 
        className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-pink-200" 
        onClick={() => {
          const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4);
          setListOfRestaurants(filteredList);
          //console.log("filter is ",filteredList);
          
        }}>
          ⭐ Top Rated
        </button>

        </div>

        <div 
        className="m-4 p-4 flex items-center">

          <label>User Name : </label>

          <input 
          className="border border-black p-2" 
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}/>
        </div>

      </div>

      <div 
      className="res-container flex flex-wrap">
        
        {filteredRestaurant.map((restaurant) => (

          // console.log("restaurant",restaurant),

          <Link key={restaurant.info.id} 
          to={"/restaurants/" + restaurant.info.id}>
            
            {/* if the restaurant is promoted add a promoted label to it 
            
            */}
            {
              restaurant.info.promoted ? 
              (<RestaurantCardPromoted resData={restaurant}/>) :
              (<RestaurantCard  resData={restaurant} />)
            }
            
            
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


