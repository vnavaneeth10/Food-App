import { CDN_URL } from "../utils/constants";

/**
 * Renders a card displaying restaurant details.
 * @param {Object} props - An object containing restaurant data.
 * @param {Object} props.resData - An object with restaurant information.
 * @returns {JSX.Element} JSX element representing a restaurant card with details.
 */
const RestaurantCard = ({ resData} ) => {
    console.log("resData",resData.info);
    // Destructuring restaurant details from props
    const { 
            name, 
            cloudinaryImageId, 
            cuisines, 
            avgRating, 
            costForTwo, 
            sla 
        } = resData?.info || {};

    return (
        <div 
        data-testid="resCard"
        className="m-4 p-4 w-[300px] rounded-lg h-[580px] bg-green-100 hover:bg-teal-200 shadow-lg" 
        >

            <img 
            className="rounded-lg h-[250px] w-[250px]" 
            alt="res-logo" 
            src={CDN_URL + cloudinaryImageId} />

            <h3 
            className="font-bold pt-3 text-lg">{name}
            </h3>

            <h4 
            className="font-semibold">{cuisines?.join(", ")}
            </h4>

            <h4 
            className="font-medium py-0.5 ">⭐{avgRating} • {sla?.slaString}
            </h4>

            <h4 
            className="font-medium py-0.5">{costForTwo}
            </h4>
            
        </div>
    );
    

    //High Order Component

    //input - RestaurantCard=>> Promoted Restaurant card
}

    export const withPromotedLabel = () => {
        return (props) => {
            return (

                <div>

                    <label 
                    className="absolute bg-black text-white m-2 p-2 rounded-lg">
                        Promoted
                    </label>

                    <RestaurantCard {...props}/>

                </div>

            );
        };
    }; 

  export default RestaurantCard;