import React, { useState } from "react";
import { useCart, useToggleCart } from "../context/context";

export default function Cart() {
  const { cartIsOpen, toggleCart } = useToggleCart();
  const { cart, removeMeal, resetCart } = useCart();

  return (
    <>
      {cartIsOpen && (
        <div
          onClick={toggleCart}
          className={`fixed top-0 w-full h-screen transition z-50 transparent-dark }`}
        />
      )}
      <div>
        <div
          className={`fixed h-screen  bg-light-green right-0 top-0 z-50 w-full md:w-[40%] transition  ${
            cartIsOpen ? "" : "translate-x-full"
          }`}
        >
          {cart.meals.length > 0 ? (
            <div className="px-5 py-10 pt-28 relative flex flex-col justify-between h-full">
              <button
                onClick={toggleCart}
                className="absolute top-10 right-10 text-5xl text-red-500 font-mono"
              >
                X
              </button>

              <div className=" xl:h-[400px] h-[200px] overflow-y-scroll flex flex-col  ">
                {cart.meals.map((meal) => {
                  return (
                    <div className="px-3 flex justify-between items-center py-1 border-b border-[#00000074]">
                      <div className="flex justify-between items-center basis-1/3 ">
                        <button
                          onClick={() => removeMeal(meal.id)}
                          className="text-3xl text-red-400 -mt-2"
                        >
                          x
                        </button>
                        <span className="text-light-yellow text-xl">
                          {meal.price} LE
                        </span>
                        <span className="text-light-yellow text-xl">
                          {meal.count}
                        </span>
                      </div>
                      <h5 className="text-light-yellow text-lg shrink-0 basis-1/2 text-right">
                        {meal.name}
                      </h5>
                    </div>
                  );
                })}
              </div>
              <div className=" flex justify-between items-center flex-col lg:flex-row mt-2 gap-5">
                <button
                  onClick={resetCart}
                  className="bg-light-yellow rounded-2xl py-1 px-4 text-light-green font-semibold text-2xl order-2 lg:order-1"
                >
                  Order Now
                </button>
                <p className="text-light-yellow text-2xl font-semibold lg:order-2">
                  Total Price:{" "}
                  <span className="text-4xl">{cart.totalPrice}</span>
                  <span className="text-lg font-extrabold"> LE</span>
                </p>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center items-center h-full relative">
              <button
                onClick={toggleCart}
                className="absolute top-10 right-10 text-5xl text-red-500 font-mono"
              >
                X
              </button>
              <p className="text-4xl text-light-yellow font-semibold">
                Cart is empty
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
