import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //console.log(loggedInUser);

    //Subscribing to the store using a  selector

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    
    return(
    
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-cyan-200 ">

        <div  className="logo-container pl-4">

            <Link to="/">
            <img className="w-24 " src={LOGO_URL}/>
            </Link>

        </div>

        <div className="flex items-center">

            <ul className="flex p-4 m-4">

                <li className="px-4">
                   Connected:{onlineStatus ? "🟢Online" : "🔴Offline"}
                </li>

                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>

                <li className="px-4">
                   <Link to="/about"> About</Link>
                </li>

                <li className="px-4">
                    <Link to="/contact">
                    Contact 
                    </Link>
                </li>

                <li className="px-4">
                    <Link to="/grocery">
                    Grocery
                    </Link>
                </li>

                <li className="px-4 font-bold text-xl">
                    <Link to="/cart">
                    Cart ({cartItems.length} items)
                    </Link>
                </li>

                <button className="px-4 bg-green-300 rounded-lg"

                onClick={()=>{

                    btnNameReact == "Login" ?
                    setBtnNameReact("Logout") : 
                    setBtnNameReact("Login");

                }}
                >
                    {btnNameReact}
                
                </button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>

        </div>

    </div>

    )
};

export default Header
