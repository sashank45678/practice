import { useDispatch} from "react-redux";
import { addItem } from "./cartslice";
import {modifyitem} from "./cartslice";
const ItemList = ({ items, flag }) => {
  const dispatch = useDispatch();
  function handleadditem(item) {
    dispatch(addItem(item));
  }
  const handlemodifyItem=(item,operation)=>{
    dispatch(modifyitem({item:item,operation:operation}))
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2   border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}-</span>
                <span>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-s m-2">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-3">
              <div className="absolute">
                {" "}
                {!flag ? (
                  <button
                    className="mx-16 p-1 shadow-lg bg-black text-white rounded-lg"
                    onClick={() => handleadditem(item)}
                  >
                    Add+
                  </button>
                ) : (
                  <button
                    className="mx-16 p-1 shadow-lg bg-black text-white rounded-lg"
                  >
                    <span className="text-white px-2" onClick={()=>{handlemodifyItem(item,"add")}}>
                      +
                    </span>
                   <span className="text-white">
                    {item.count
                    }
                   </span>
                   <span className="text-white px-2" onClick={()=>{handlemodifyItem(item,"minus")}}>
                      -
                    </span>
                  </button>
                )}
              </div>
              <img
                className="h-7/12"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  item.card.info.imageId
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
