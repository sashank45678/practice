import React from "react";

const ControlledCard = (props) => {
    const handleChange=(e)=>{
        if(e.target.type=="text"){
            props.cnamef(e.target.value)
        }
        else if(e.target.type=="number"){
            props.cnf(e.target.value)
        }
        else if(e.target.type=="date"){
            props.cdatef(e.target.value)
        }
    }
  return (
    <div className="bg-slate-300 px-2 py-2 w-96 h-[500px] flex flex-col justify-center items-center rounded-md">
        <label className="text-2xl font-bold mx-2">CardName:</label>
      <input type="text" className="border border-black rounded-lg w-60 my-2 px-2 py-2"placeholder="name of the holder" onChange={handleChange} />
      <label className="text-2xl font-bold mx-2">CardNumber:</label>
      <input type="number" className="border border-black rounded-lg w-60 my-2 px-2 py-2 "placeholder="card umber of the holder" onChange={handleChange} />
      <label className="text-2xl font-bold mx-2">CardDate:</label>
      <input type="date" className="border border-black rounded-lg w-60 my-2 px-2 py-2"placeholder="expiry date of the card" onChange={handleChange}/>
    </div>
  );
};

export default ControlledCard;
