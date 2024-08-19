import { fireEvent,render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; 
it("should load the header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        render(
        <Header />)
      </Provider>
    </BrowserRouter>
  );
  const button=screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
it("should load the header component with  cart 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          render(
          <Header />)
        </Provider>
      </BrowserRouter>
    );
    const cartItems=screen.getByText("cart-0(items)");
    expect(cartItems).toBeInTheDocument();
  });
  it("should load the header component with  cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          render(
          <Header />)
        </Provider>
      </BrowserRouter>
    );
    const cartItems=screen.getByText(/cart/);//regex
    expect(cartItems).toBeInTheDocument();
  });
  it("should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          render(
          <Header />)
        </Provider>
      </BrowserRouter>
    );
    const button=screen.getByRole("button",{name:"login"});
    fireEvent.click(button)
    const logoutbutton=screen.getByRole("button",{name:"logout"})
    expect(logoutbutton).toBeInTheDocument();
  });
  