// import User from "./User";
// import UserClass from "./UserClass";
// import React from "react";
// import UserContext from "../utils/UserContext";

// class About extends React.Component {

//     constructor(props){

//         super(props)

//         console.log("Parent Constructor")
        
//     }
    
//     componentDidMount(){
        
//         console.log("Parent DidMount");

//     }

//     render(){

//         console.log("Parent Render");

//         return(

//             <div>
                
//             <h1>About</h1>
            
//             <div>

//                 {/* Way the use context used in class component */}
//     LoggedIn User :

//     <UserContext.Consumer>
//         {(loggedInUser)=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
//     </UserContext.Consumer>

//             </div>

//             <h2>This is the About Section for the food app</h2>
            
//             <UserClass name = {"Navaneeth V "} Location = {"Palakkad - class"}/>
            
//         </div>

//         )
//     }
// }


// export default About;

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Swadish</h1>
          <p className="text-xl text-gray-600">Delivering Happiness, One Meal at a Time</p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At Swadish, we're passionate about connecting people with their favorite restaurants. 
            Our platform makes food ordering seamless and enjoyable, ensuring that quality food 
            reaches your doorstep in minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Lightning-fast delivery ensuring your food arrives hot and fresh.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">Thousands of restaurants to choose from, satisfying every craving.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p className="text-gray-600">Partnering with top-rated restaurants for the best dining experience.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Team</h2>
          <div className="text-center text-gray-600">
            <p className="mb-4">
              We're a team of passionate individuals working together to revolutionize 
              food delivery. Our diverse team brings together expertise in technology, 
              logistics, and customer service to provide you with the best possible 
              food ordering experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
