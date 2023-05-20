import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
const DrawerContext = createContext();
const initialState = { meals: [], totalPrice: 0 };
export default function ContextProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState(initialState);
  function toggleCart() {
    setCartIsOpen((prev) => !prev);
  }
  function addMeal(meal) {
    setCart((prev) => {
      const index = prev.meals.findIndex((item) => item.id === meal.id);

      if (index !== -1) {
        const updatedMeals = [...prev.meals];
        updatedMeals[index] = {
          ...updatedMeals[index],
          count: updatedMeals[index].count + 1,
        };
        const updatedTotalPrice = prev.totalPrice + meal.price;
        return { ...prev, meals: updatedMeals, totalPrice: updatedTotalPrice };
      } else {
        const updatedTotalPrice = prev.totalPrice + meal.price;
        return {
          ...prev,
          meals: [...prev.meals, { ...meal, count: 1 }],
          totalPrice: updatedTotalPrice,
        };
      }
    });
  }

  function removeMeal(id) {
    setCart((prev) => {
      const updatedMeals = prev.meals
        .map((meal) => {
          if (meal.id === id) {
            if (meal.count > 1) {
              return { ...meal, count: meal.count - 1 };
            } else {
              return null;
            }
          }
          return meal;
        })
        .filter((meal) => meal !== null);

      const updatedTotalPrice = updatedMeals.reduce(
        (total, meal) => total + meal.price * meal.count,
        0
      );
      return { ...prev, meals: updatedMeals, totalPrice: updatedTotalPrice };
    });
  }

  function resetCart() {
    setCart(() => initialState);
  }
  return (
    <CartContext.Provider value={{ cart, addMeal, removeMeal, resetCart }}>
      <DrawerContext.Provider value={{ cartIsOpen, toggleCart }}>
        {children}
      </DrawerContext.Provider>
    </CartContext.Provider>
  );
}

export function useToggleCart() {
  return useContext(DrawerContext);
}
export function useCart() {
  return useContext(CartContext);
}
