import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/aboutus";
import Contact from "./src/components/contactus";
import Error from "./src/components/error";
import Restaurantmenu from "./src/components/restaurantmenu";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./src/components/appstore";
import Cart from "./src/components/cartpage";
import userdata from "./src/components/usercontext";
const Grocery = lazy(() => {
  return import("./src/grocery1");
});
const AppLayout = () => {
  const [username, setusername] = useState("default user..");
  useEffect(() => {
    setusername("Sashank Tadimeti");
  }, []);
  return (
    <Provider store={appStore}>
      <userdata.Provider value={{loggedin:username,setusername:setusername}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userdata.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <Restaurantmenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
