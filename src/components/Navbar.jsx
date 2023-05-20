import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useCart, useToggleCart } from "../context/context";

export default function Navbar() {
  const { toggleCart } = useToggleCart();
  const { cart } = useCart();
  const [signOut] = useSignOut(auth);
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="fixed w-full backdrop-blur-lg shadow-lg  z-50">
      <div className="max-w-7xl w-[90%] mx-auto  flex justify-between items-center ">
        <div className="flex items-center gap-2 py-3">
          <div className="flex flex-col">
            {!loading && (
              <h5 className="font-semibold ">{user.reloadUserInfo.email}</h5>
            )}
            <button
              onClick={signOut}
              className=" text-gray-900 text-sm hidden md:block "
            >
              sign out
            </button>
          </div>
        </div>
        <ul className=" justify-center items-center hidden md:flex">
          <li>
            <a href="#menu" className="text-gray-700 text-xl font-bold">
              Menu
            </a>
          </li>
          <li>
            <img
              className="w-40 h-20 object-cover object-[0_-1.2rem]"
              src={Logo}
              alt=""
            />
          </li>
          <li>
            <a href="#contact" className="text-gray-700 text-xl font-bold">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={toggleCart}
          className=" relative bg-light-green md:flex justify-center items-center  py-1 px-3 rounded-md gap-3 hidden"
        >
          <i className="bx bx-cart  bx-sm"></i>
          <span className=" text-sm font-semibold">My Cart</span>
          {cart.meals.length > 0 && (
            <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-orange-400   rounded-full -top-2 -right-2 dark:border-gray-900">
              {cart.meals.length}
            </div>
          )}
        </button>
        <div className="relative group md:hidden">
          <button className="text-light-green text-5xl ">
            <i className="bx bx-menu"></i>
          </button>

          <div class="group-focus-within:block hidden z-10 absolute right-0  divide-y divide-gray-100 rounded-lg shadow w-44 bg-light-green">
            <ul class="py-2 text-sm text-white font-semibold">
              <li>
                <button
                  onClick={toggleCart}
                  class="block w-full text-center px-4 py-2 hover:bg-gray-100 hover:bg-[#ffffff38] "
                >
                  My Cart
                </button>
              </li>
              <li>
                <a
                  href="#menu"
                  class="block w-full text-center px-4 py-2 hover:bg-gray-100 hover:bg-[#ffffff38] "
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block w-full text-center px-4 py-2 hover:bg-gray-100 hover:bg-[#ffffff38] "
                >
                  Contact
                </a>
              </li>

              <li>
                <button
                  onClick={signOut}
                  class="block px-4 py-2 w-full hover:bg-gray-100 hover:bg-[#ffffff38] "
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
