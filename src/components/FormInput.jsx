import React from "react";

export default function FormInput({ name, register, errorMessage, type }) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className=" capitalize text-light-yellow font-semibold ml-2"
      >
        {name === "confirmPwd" ? "confirm password" : name}
      </label>

      <input
        type={type}
        className=" outline-none rounded-3xl px-3 py-1"
        id={name}
        {...register(name)}
      />
      <p className="text-xs text-red-300 ml-2 h-2">{errorMessage}</p>
    </div>
  );
}
