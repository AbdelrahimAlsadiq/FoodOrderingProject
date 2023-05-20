import React from "react";

export default function Registration({image,children}) {
 
  return (
    <div className="yellow-bg h-screen w-screen flex justify-center items-center">
      <div className=" basis-[80%] max-w-2xl  flex h-[30rem]">
        <div className="flex-1 rounded-l-lg overflow-hidden h-full hidden sm:block">
          <img
            className=" h-[110%] w-[110%] object-cover object-left"
            src={image}
            alt=""
          />
        </div>
        <div className="bg-light-green flex-1 rounded-r-lg">{children}</div>
      </div>
    </div>
  );
}
