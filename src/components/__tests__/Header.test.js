import { Provider } from "react-redux"
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom";


// it("Should load Header component with a login button",()=>{
//     render(
//         <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>
// )

// const loginButton = screen.getByRole("button", {name: "Login"});
// expect (loginButton).toBeInTheDocument();
// })

// it("Should load Header component with cart items 0",()=>{
//     render(
//         <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>
// )

// const cartItems = screen.getByText("cart - (0 items)");
// expect (cartItems).toBeInTheDocument();
// })

// it("Should load Header component with cart item",()=>{
//     render(
//         <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>
// )

// const cartItems = screen.getByText(/Cart/);
// expect (cartItems).toBeInTheDocument();
// })

// it("Should Change login button to logout when clicked",()=>{
//     render(
//         <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>
// )

// const loginButton = screen.getByRole("button", {name: "Login"});

// fireEvent.click(loginButton);

// const logoutButton = screen.getByRole("button",{name:"Logout"});

// expect (logoutButton).toBeInTheDocument();
// })