import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props)
        //console.log("Parent Constructor")
    }
    
    componentDidMount(){
        
        //console.log("Parent DidMount");

    }

    render(){
        //console.log("Parent Render");
        return(
            <div>
            <h1>About</h1>
            <div>

                {/* Way the use context used in class component */}
    LoggedIn User :
    <UserContext.Consumer>
        {(loggedInUser)=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
    </UserContext.Consumer>
            </div>
            <h2>This is the About Section for the food app</h2>
            
            <UserClass name = {"Navaneeth V "} Location = {"Palakkad - class"}/>
            
        </div>
        )
    }
}


export default About;