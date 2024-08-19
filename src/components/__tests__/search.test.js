import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import Restaurantcard from "../../restaurantcard";
import MOCK_DATA from "../mocks/mockreslist.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the search ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const search=screen.getByRole("button",{name:"search"});
  expect(search).toBeInTheDocument();
  const searchinput=screen.getByTestId("searchinput");
  fireEvent.change(searchinput,{target:{value:"biryani"}})
  expect(searchinput).toBeInTheDocument();
  fireEvent.click(search);
  const carditems=screen.getAllByTestId("rescard");
  console.log(carditems.length);
}
);
