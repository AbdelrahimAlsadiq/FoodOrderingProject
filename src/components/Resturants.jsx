import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResturantCard from "./ResturantCard";
import { DownArrowIcon, UpArrowIcon } from "../assets";
export default function Resturants({ items, setSelectedResturant }) {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    verticalSwiping: true,
    slidesToShow: 3,
    arrows: false,
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="flex justify-center items-center basis-2/4 md:basis-5/12 lg:basis-3/12 shrink-0 order-1 md:order-2">
      <div className="flex   justify-center items-center gap-2 lg:flex-col">
        <button className="shrink-0 -rotate-90 lg:rotate-0" onClick={handleNextSlide}>
          <img className="w-5" src={UpArrowIcon} alt="" />
        </button>
        <Slider ref={sliderRef} {...settings} className="">
          {items.map((el) => (
            <ResturantCard
              key={el.id}
              data={el}
              setSelectedResturant={setSelectedResturant}
            />
          ))}
        </Slider>
        <button className="shrink-0 -rotate-90 lg:rotate-0" onClick={handlePreviousSlide}>
          <img className="w-5" src={DownArrowIcon} alt="" />
        </button>
      </div>
      <div></div>
    </div>
  );
}
