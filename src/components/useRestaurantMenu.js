import { useEffect } from "react";
import { useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId.toString() +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    var json = await data.json();
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
