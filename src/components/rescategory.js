import ItemList from "./itemList";
import { useState } from "react";
const RestaurantCategory = ({data,showItems,indextobedisplayed,indextobecollapsed}) => {
  const[collapseditem,setcollapseditem]=useState(true);
  const handleclick=()=>{
    if(collapseditem){
      indextobedisplayed();
      setcollapseditem(false);
    }
    else{
      indextobecollapsed();
      setcollapseditem(true);
    }
  }
  return (
    <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4" >
      <div className="flex justify-between cursor-pointer "onClick={handleclick} >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems===true &&(<ItemList items={data.itemCards} flag={false} />)}
    </div>
  );
};
export default RestaurantCategory;