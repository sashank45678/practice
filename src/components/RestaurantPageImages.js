import { useState, useEffect } from "react";
import Shimmer from "./shrimmer";

const RestaurantPageImages = () => {
  const [imagesData, setPageImages] = useState(null); // Initial state as null

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.766380388699826&lng=81.68431218713522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setPageImages(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="w-11/12 h-72 px-11">
      <h1 className="text-3xl font-bold px-2 py-1 ml-9">What's on your mind?</h1>
      <div className="px-3 mx-1 py-2 border-gray-400 border-b-2">
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {imagesData
            ? imagesData.map((image) => (
                <img
                  className="w-72 h-60"
                  key={image.id}
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image.imageId}`}
                  alt="Restaurant"
                />
              ))
            : Array(8).fill("").map((shimrimg,index)=><Shimmer key={index}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageImages;
