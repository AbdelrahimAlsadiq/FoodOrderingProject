import React, { useEffect, useState } from "react";
import useXX from "../hooks/useResturant";
import Resturants from "./Resturants";
import Meals from "./Meals";
import useResturant from "../hooks/useResturant";

export default function Menu() {
  const [selectedResturant, setSelectedResturant] = useState();
  const { data, loading } = useResturant();
  useEffect(() => {
    if (!data?.length) return;
    setSelectedResturant(() => data[0]);
  }, [data]);
  if (loading) return;
  return (
    <div
      className="flex  pt-20 pb-10 xl:max-w-7xl w-[90%] mx-auto  flex-col md:flex-row lg:gap-10"
      id="menu"
    >
      <div className="flex flex-col justify-center items-center grow order-2">
        <h2 className="text-5xl font-semibold my-10 ">
          {selectedResturant?.name}
        </h2>
        <p className="text-lg bg-light-green text-light-yellow py-1 px-3 mb-5 rounded-lg  lg:mb-10">
          Phone Number:{" "}
          <span className="font-bold">{selectedResturant?.phoneNum}</span>
        </p>

        {selectedResturant && (
          <Meals selectedResturantId={selectedResturant.id} />
        )}
      </div>
      <Resturants items={data} setSelectedResturant={setSelectedResturant} />
    </div>
  );
}
