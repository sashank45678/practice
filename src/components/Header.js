import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userdata from "./usercontext";
import { useSelector} from "react-redux";
const Header = () => {
  const [btnname, setBtn] = useState("login");
  const onlinestatus=useOnlineStatus();
  const  {loggedin}=useContext(userdata)
  const cartitems=useSelector((store)=>{
    return store.cart.items;
  })
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-100">
      <div>
        <img className="w-56"
          
          src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-3">
          <li className="px-4">Online Status:{onlinestatus ?"☑️":"❌"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">cart-{cartitems.length}(items)</Link></li>

          <button
            className="login"
            onClick={() => {
              if (btnname==="login") {
                setBtn("logout");
              }
              else{
                setBtn("login");
              }
            }}
          >
            {btnname}
          </button>
          <li className="ml-2 font-bold">{loggedin}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
