import Restaurantcard, { withPromotedLabel } from "../restaurantcard";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userdata from "./usercontext";
import RestaurantPageImages from "./RestaurantPageImages";
const Body = () => {
  const [listofrestaurants, setlistofrestaurants] = useState([]);
  const [filterrestaurants, setfilterrestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const RestaurantcardPromoted = withPromotedLabel(Restaurantcard);
  const { setusername } = useContext(userdata);
  const {resId}=useParams()
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.766380388699826&lng=81.68431218713522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const swiggydata =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistofrestaurants(swiggydata);
    setfilterrestaurants(swiggydata);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>you are offline,please check your connection</h1>;
  }
  return (
    <div>
      {!resId && <RestaurantPageImages/>}
      <div className="body">
        <div className="filter flex">
          <div className="search m-2 p-4">
            <input
              className="border border-solid border-black"
              type="text"
              data-testid="searchinput"
              value={searchtext}
              onChange={(e) => {
                setsearchtext(e.target.value);
              }}
            ></input>
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filteredres = listofrestaurants.filter((element) => {
                  return element.info.name
                    .toLowerCase()
                    .includes(searchtext.toLowerCase());
                });
                setfilterrestaurants(filteredres);
              }}
            >
              search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center rounded-lg">
            <button
              onClick={() => {
                const filteredres1 = listofrestaurants.filter((element) => {
                  return element.info.avgRating > 4.1;
                });
                setfilterrestaurants(filteredres1);
              }}
              className="px-4 py-2 bg-gray-50"
            >
              top rated restaurant
            </button>
          </div>
          <div className="flex items-center p-2">
            <label>username:</label>
            <input
              className="border border-black text-black ml-1 pl-1"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filterrestaurants && filterrestaurants.map((element, key) => (
            <div key={element.info.id}>
              <Link
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                key={element.info.id}
                to={"/restaurants/" + element.info.id.toString()}
              >
                {element.info.avgRating > 4 ? (
                  <RestaurantcardPromoted element={element} />
                ) : (
                  <Restaurantcard element={element} />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
