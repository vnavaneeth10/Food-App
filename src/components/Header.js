import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import swadishLogo from "../assets/swadishLogo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("👤");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" aria-label="Home">
            <img
              src={swadishLogo}
              alt="Swadish logo"
              className="w-28 h-auto sm:w-24 object-contain"
            />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <span className="text-sm">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </span>
          <NavLink to="/" className="hover:text-blue-500 transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500 transition">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500 transition">
            Contact
          </NavLink>
          <NavLink to="/grocery" className="hover:text-blue-500 transition">
            Grocery
          </NavLink>
          <NavLink
            to="/cart"
            className="font-semibold text-lg hover:text-blue-600 transition"
          >
            🛒 Cart ({cartItems.length} items)
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {btnNameReact === "🔒" && (
            <span className="font-bold text-gray-800 hidden sm:inline animate-fade-in">
              Hi 👋🏼 {loggedInUser}
            </span>
          )}

          <button
            className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition"
            onClick={() =>
              setBtnNameReact((prev) => (prev === "👤" ? "🔒" : "👤"))
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
