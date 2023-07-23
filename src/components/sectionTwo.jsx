import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import {
  BackgroundOne,
  BackgroundTwo,
  BackgroundThree,
  BackgroundFour,
  BackgroundFive,
  BackgroundSix,
  BackgroundSeven,
  BackgroundEight,
  BackgroundImgOne,
  flot2,
  secImg2,
  secImg1,
  bg1,
} from "../assets/index";

const SectionTwo = () => {
  return (
    <div
      className={` flex  md:flex-row flex-col items-center bg-cover bg-center bg-fixed  h-full md:h-[500px]  `}
      style={{ backgroundImage: `url(${bg1})` }}>
      <div className=" backdrop-blur  w-full h-full">
        <div className="container mx-auto px-5 py-5 flex flex-wrap-reverse md:flex-nowrap  items-center tag ">
          <div>
            <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font tracking-wide text-5xl mb-4 font-bold text-blacklgtext-5xl relative">
                Making Your Cat's Well-being our Top Priority!
              </h1>
              <p className="mb-8 leading-relaxed ">
                Ensuring your cat's well-being is our top priority because we
                genuinely care about their health and happiness. A healthy and
                happy cat enriches the lives of its owners and creates a
                harmonious home.
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <div className=" flex items-start justify-center">
              <img
                src={BackgroundEight}
                className="h-96 rounded-full "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
