import React from "react";
import { Logo } from "../assets";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="bg-light-green text-light-yellow font-vip-cartoon flex justify-center items-center flex-col gap-5 py-6">
        <h3 className=" uppercase border-b-2 border-light-yellow text-3xl px-14 py-1  tracking-wider ">
          Contact
        </h3>
        <ul className="grid grid-cols-2 gap-2 uppercase md:text-2xl text-lg lg:max-w-2xl w-full text-center">
          <li>Ahmed Shams</li>
          <li>Manar Montaser</li>
          <li>Abdelrahim alsadiq</li>
          <li>sara abdelrahim</li>
          <li>Ahmed adel</li>
          <li>jena hana</li>
        </ul>
      </div>
      <div className="flex justify-start items-center py-3 px-3">
        <img className="w-24" src={Logo} alt="" />
        <p className="uppercase text-light-green font-semibold font-vip-cartoon">
          Copyright <span className="text-xl"> 2023 </span> mafesh esm Corporation
        </p>
      </div>
    </footer>
  );
}
