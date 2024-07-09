import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {

    const {loggedInUser} = useContext(UserContext);

    return(

        <div>

        <h1 className="text-xl font-bold p-4 m-4">This is the Contact section of the Food Ordering App</h1>
        <li className="p-2 font-bold text-xl list-none text-cyan-200">User: {loggedInUser}</li>
        <form>
          <input type="text" className="border border-black p-2 m-2" placeholder="name"/>  
          <input type="text" className="border border-black p-2 m-2"placeholder="message"/>
          <button className="rounded-lg p-2 m-2 bg-cyan-200 text-xl">Submit</button>
        </form>

        </div>
    )
}

export default Contact;