import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

  

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  const[showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return (<Shimmer />) ;

   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

   //console.log("destructuring here",resInfo?.cards[2]?.card?.card?.info);

   //console.log("trying this out",resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR)

   //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

   //console.log("itemCards detaile",resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
   //console.log("itemCards",categories);

  return (
    <div className="text-center">

      <h1 className ="font-bold my-6 text-2xl">{name}</h1>

      <p className="font-bold text-lg ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      

      {categories.map((category, index)=>(
        //controlled component
        <RestaurantCategory 

        key={category?.card?.card.title} 
        data={category?.card?.card}
        showItems={index == showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}/>
      ))}
      

    </div>
  )
}

export default RestaurantMenu;