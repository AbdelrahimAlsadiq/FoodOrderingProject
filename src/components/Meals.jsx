import React from "react";
import useMeal from "../hooks/useMeal";
import { StarIcon } from "../assets";
import { useCart } from "../context/context";

export default function Meals({ selectedResturantId }) {
  const [meals, loading, error] = useMeal(selectedResturantId);
  const { cart, addMeal } = useCart();
  if (loading) return;

  return (
    <div className="grow flex flex-wrap justify-center items-center gap-5 w-full h-[500px] overflow-y-scroll no-scroll-bar after:bg-gradient-to-b after:from-transparent after:to-light-yellow after:sticky relative after:bottom-0 after:right-0 after:w-full after:h-4 after:opacity-40 ">
      {meals.map((meal, index) => {
        return (
          <div
            key={index}
            className="bg-light-green p-4 rounded-2xl shadow-2xl flex flex-col justify-between items-center basis-[250px]  gap-2"
          >
            <img
              className=" rounded-full w-20 h-20 object-cover object-center"
              src={meal.img}
              alt=""
            />
            <h5 className="text-light-yellow font-semibold text-lg">
              {meal.name}
            </h5>

            <div className="flex gap-5 justify-center items-center">
              {" "}
              <div className="flex gap-2 justify-center items-center">
                <span className="text-light-yellow text-lg">{meal.rating}</span>
                <img className="w-5 h-5 " src={StarIcon} alt="" />
              </div>
              <span className="text-light-yellow font-semibold ">
                {meal.price} LE
              </span>
              <button
                onClick={() => addMeal(meal)}
                className=" w-10 h-10 flex justify-center items-center bg-orange-500 rounded-full text-white"
              >
                <i className="bx bx-plus"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
