import userdata from "./components/usercontext";
import { useContext } from "react";
const headingelement = { marginTop: "0px", marginBottom: "13px" };
const Restaurantcard = ({ element }) => {
  const {loggedin}=useContext(userdata);
  const resData = element.info;
  return (
    <div data-testid="rescard" className="m-4 p-4 w-[295px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <div className="w-[260px] h-[140px] relative ml-4">
        <img
          className="rounded-lg inset-2 object-cover h-5/6 w-4/6"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.cloudinaryImageId
          }
        ></img>

      </div>
      <div className="flex flex-col">
        <h3 className="font-bold py-4 text-l">{resData.name}</h3>
        <h3>{resData.cuisines.join(", ")}</h3>
        <h3>
          {resData.avgRating}
          <b> stars</b>
        </h3>
        <h3>
          {resData.costForTwo}
          <b> COST FOR TWO </b>
        </h3>
        <h3>
          {resData.sla.deliveryTime}
          <b> minutes</b>
        </h3>
        <h3>{resData.areaName}</h3>
        <p>user:{loggedin}</p>
      </div>
    </div>
  );
};
// higher order component
//input -restaurant card=>restaurancomponent promoted
export const withPromotedLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className=" absolute top-0.5 right-3 p-1 m-1 bg-slate-600 text-white rounded-lg">Promoted</label>
        <Restaurantcard {...props}/>
      </div>
    )
  }
}
export default Restaurantcard;
