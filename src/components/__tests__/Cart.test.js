import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../../components/RestaurantMenu"
import MOCK_DATA from "../mock/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> {
            return Promise.resolve(MOCK_DATA)
        } 
    });
});


it("should load Restuarant Menu Component",async ()=> {

    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}> 
    <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>
))

    const accordionHeader = screen.getByText("Biriyani (5)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();


    const addBtns  = screen.getAllByRole("button", {name: "Add +"});

    //console.log(addBtns.length);

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[2]);

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart is empty.Add Items to the Cart!")).toBeInTheDocument();

});