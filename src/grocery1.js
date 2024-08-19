import userdata from "./components/usercontext";
import { useContext } from "react";
const Grocery = () => {
  const userinfo = useContext(userdata);
  return (
    <div>
      <h1>This is a grocery store</h1>
      <h1>This belongs to {userinfo.loggedin}</h1>
    </div>
  );
};
export default Grocery;
