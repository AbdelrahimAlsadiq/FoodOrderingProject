import React from "react";
import { StarIcon } from "../assets";

export default function ResturantCard({ data, setSelectedResturant }) {
  const { name, rating, img } = data;
  return (
    <div className="bg-light-green p-5  rounded-xl space-y-3 flex justify-between flex-col ">
      <div className="flex justify-between">
        <img className="w-20 h-20 rounded-full " src={img} alt="" />
        <div className="flex flex-col gap-2 justify-center items-center grow">
          <h3 className="text-xl font-bold text-light-yellow text-right w-full">
            {name}
          </h3>
          <div className="flex gap-2 justify-center items-center">
            <span className="text-light-yellow text-lg">{rating}</span>
            <img className="w-5 h-5 " src={StarIcon} alt="" />
          </div>
        </div>
      </div>
      <button
        onClick={() => setSelectedResturant(() => data)}
        className=" bg-orange-500 rounded-2xl w-full py-1 text-white font-semibold"
      >
        Menu
      </button>
    </div>
  );
}
