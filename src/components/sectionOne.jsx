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
  BackgroundImgOne,
  flot2,
  flot1,
  secImg2,
  secImg1,
  bg1,
} from "../assets/index";

const SectionOne = () => {
  return (
    <div
      className={` flex  md:flex-row flex-col items-center bg-cover bg-center bg-fixed h-full md:h-[500px]  `}
      style={{ backgroundImage: `url(${bg1})` }}>
      <div className=" backdrop-blur  w-full h-full">
        <div className="container mx-auto px-5 py-5 md:flex  tag ">
          <div className="w-full relative hidden md:block">
            <div className="image relative">
              <img src={BackgroundImgOne} className="img" alt="" />
            </div>
          </div>
          <div>
            <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font tracking-wide text-5xl mb-4 font-bold text-blacklgtext-5xl relative">
                <span>
                  <img
                    src={flot1}
                    alt=""
                    className="absolute h-14 -top-7 left-[21rem] hidden md:block"
                  />
                </span>
                JASON THE CAT GUY
              </h1>
              <p className="mb-8 leading-relaxed ">
                CATS ARE THE BEST 😻😻 ✔️Largest Online Cat Adoption (SALES)
                Centre In Nigeria 🐈🐈🐈 📍Lagos, Nigeria 🇳🇬 ⚱️Exotic Cats
                📝IMPROVING the CAT 🐈 culture in Africa 📦We freight WORLDWIDE
                🛫
              </p>
              <div className="flex justify-center">
                <a
                  className="hidden lg:flex items-center justify-between gap-3 py-2 px-6 border-solid border-2 border-transparent hover:border-purple-400 text-sm text-white bg-purple-800 rounded-full transition duration-200"
                  href="#">
                  Contact Us
                  <BsArrowRightCircleFill className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
