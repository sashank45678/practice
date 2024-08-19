import { render,screen } from "@testing-library/react"
import Restaurantcard from "../../restaurantcard"
import MOCK_DATA from "../mocks/rescardmock.json"
import "@testing-library/jest-dom"
it("should render my restaurant card component",()=>{
    render(<Restaurantcard element={MOCK_DATA}/>)
    const name=screen.getByText("Bengaluru Bhavan");
    expect(name).toBeInTheDocument();
})