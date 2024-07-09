import Body from "../Body"
import {fireEvent, render} from "@testing-library/react"
import MOCK_DATA from "../../components/mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should Search Reslist for burger test input ", async ()=>{

   await  act(async () => render(
    <BrowserRouter>
   <Body/>
   </BrowserRouter>));

   const cardsBeforeSearch = screen.getAllByTestId("resCard");

   expect(cards.length).toBe(20)
   const searchBtn = screen.getByRole("button", {name: "Search"})

   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput, {target: { value: "burger"}});
   fireEvent.click(searchBtn);

   //screen should load 4 res cards 

   const cardsAfterSearch = screen.getAllByTestId("resCard")

   expect(cardsAfterSearch.length).toBe(4);

   //expect(searchBtn).toBeInTheDocument();
    
})

it("should filter top rated restaurants ", async ()=>{

    await  act(async () => render(
     <BrowserRouter>
    <Body/>
    </BrowserRouter>));
 
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
 
    expect(cardsBeforeFilter.length).toBe(20)
    
    const topRatedBtn = screen.getByRole("button",{name: "Top Rated Restaurant"} );
    fireEvent.click(topRatedBtn);

    const cardsAFterFilter = screen.getAllByTestId("resCard");
    expect(cardsAFterFilter.length).toBe(13)
 })