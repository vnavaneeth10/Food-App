// import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
// import swadishLogo from "../assets/swadishLogo.png"


// const Header = () => {

//     const [btnNameReact, setBtnNameReact] = useState("Login");

//     const onlineStatus = useOnlineStatus();

//     const {loggedInUser} = useContext(UserContext);

//     //console.log(loggedInUser);

//     //Subscribing to the store using a  selector

//     const cartItems = useSelector((store)=> store.cart.items);
//     console.log(cartItems);
    
//     return(
    
//     <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-cyan-200 ">

//         <div  className="logo-container pl-4 flex items-center">
            

//             <Link to="/">
//             <img className="w-28 h-auto sm:w-24 object-contain" src={swadishLogo} alt="Swadish-logo"/>
//             </Link>

//         </div>

//         <div className="flex items-center">

//             <ul className="flex p-4 m-4">

//                 <li className="px-4">
//                    Connected:{onlineStatus ? "🟢Online" : "🔴Offline"}
//                 </li>

//                 <li className="px-4">
//                     <Link to="/">Home</Link>
//                 </li>

//                 <li className="px-4">
//                    <Link to="/about"> About</Link>
//                 </li>

//                 <li className="px-4">
//                     <Link to="/contact">
//                     Contact 
//                     </Link>
//                 </li>

//                 <li className="px-4">
//                     <Link to="/grocery">
//                     Grocery
//                     </Link>
//                 </li>

//                 <li className="px-4 font-bold text-xl">
//                     <Link to="/cart">
//                     Cart ({cartItems.length} items)
//                     </Link>
//                 </li>

//                 <button className="px-4 bg-green-300 rounded-lg"

//                 onClick={()=>{

//                     btnNameReact == "Login" ?
//                     setBtnNameReact("Logout") : 
//                     setBtnNameReact("Login");

//                 }}
//                 >
//                     {btnNameReact}
                
//                 </button>
//                 <li className="px-4 font-bold">{loggedInUser}</li>
//             </ul>

//         </div>

//     </div>

//     )
// };

// export default Header


import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import swadishLogo from "../assets/swadishLogo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" aria-label="Home">
            <img
              src={swadishLogo}
              alt="Swadish logo"
              className="w-28 h-auto sm:w-24 object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <span className="text-sm">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/grocery" className="hover:text-blue-500 transition">Grocery</Link>
          <Link
            to="/cart"
            className="font-semibold text-lg hover:text-blue-600 transition"
          >
            🛒 Cart ({cartItems.length} items)
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">

        {btnNameReact === "Logout" && (<span className="font-bold text-gray-800 hidden sm:inline animate-fade-in">
             Hi 👋🏼 {loggedInUser} 
          </span>)}

          <button
            className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition"
            onClick={() =>
              setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnNameReact}
          </button>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
