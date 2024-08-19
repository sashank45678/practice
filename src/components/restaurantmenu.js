import useRestaurantMenu from "./useRestaurantMenu";
import Shimmer from "./shrimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./rescategory";
import { useState } from "react";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const [collapseaccordion, setCollapseAccordion] = useState(true);
  if (resInfo.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse">
          <div className="w-full h-6 bg-gray-200 rounded-md mb-2"></div>
          <div className="w-full h-6 bg-gray-200 rounded-md mb-2"></div>
          <div className="w-full h-6 bg-gray-200 rounded-md mb-2"></div>
        </div>
        <div className="ml-4 text-gray-500">
          <div className="text-xl font-bold">Menu loading in a while, be patient...</div>
        </div>
      </div>
    );
  
  } else {
    const restmenu = resInfo.cards;
    const itemmenu =
      resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    const categories =
      resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      });
    return (
      <div className="text-center">
        <h1 className="font-bold my-5 text-2xl">
          {restmenu[2].card.card.info.name}
        </h1>
        <p className="font-bold text-lg">
          {restmenu[2].card.card.info.cuisines.join(",")}-
          {restmenu[2].card.card.info.costForTwoMessage}
        </p>
        {/**accordion categories */}
        {categories.map((category, index) => {
          return (
            //Contolledcomponent
            <RestaurantCategory
              key={category.card.card.title}
              data={category.card.card}
              showItems={index === showIndex && index!==collapseaccordion&& true}
              indextobedisplayed={() => {
                {setShowIndex(index);
                  setCollapseAccordion(null);
                }
            }
          }
          indextobecollapsed={()=>{
            setCollapseAccordion(index)
          }}
            />
          );
        })}
      </div>
    );
  }
};
export default Restaurantmenu;
