import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import ContextProvider from "../context/context";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <ContextProvider>
      <div className="yellow-bg">
        <Navbar />
        <Cart />
        <main className="h-screen home-bg bg-cover origin-center bg-center flex justify-center items-center after:bg-gradient-to-b after:from-transparent after:to-light-yellow after:absolute relative after:bottom-0 after:right-0 after:w-full after:h-9 after:opacity-50 ">
          <h1 className="lg:text-7xl text-5xl  leading-relaxed tracking-wider font-extrabold  text-right font-vip-cartoon lg:translate-x-40 sm:translate-x-20 lg:space-y-4 ">
            <div className="flex gap-2">
              <span className="text-light-green"> التوصيل </span>
              <span>سريع</span>
            </div>
            <div className="flex gap-2 ">
              <span className="text-light-green">الاستلام</span>
              <span>سهل</span>
            </div>
          </h1>
        </main>
        <Menu />
        <Contact />
      </div>
    </ContextProvider>
  );
}
