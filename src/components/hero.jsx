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
  flot2,
} from "../assets/index";
const hero = () => {
  return (
    <div className="text-black body-font h-screen">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 relative">
            <span>
              <img
                src={flot2}
                alt=""
                className="absolute h-[5.5rem] top-[5.48rem] left-[20.7rem] hidden md:block"
              />
            </span>
            Welcome to the Whisker Wonderland: A Cat Lover's Paradise!
          </h1>
          <p className="mb-8 leading-relaxed">
            Join our thriving community of cat lovers, where we share tales of
            whisker-filled adventures, exchange valuable insights, and celebrate
            the joy that cats bring to our lives. Your journey into the
            delightful world of cats begins here!
          </p>
          <div className="flex justify-center">
            <a
              className="hidden lg:flex items-center justify-between gap-3 py-2 px-6 border-solid border-2 border-transparent hover:border-purple-400 text-sm text-white  bg-purple-800 rounded-full transition duration-200"
              href="#">
              Contact Us
              <BsArrowRightCircleFill className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div
          id="pattern"
          className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
          <div className="w-full flex gap-3 justify-center ">
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(31,_19,_18,_0.4),_10px_10px_rgba(31,_19,_18,_0.3),_15px_15px_rgba(31,_19,_18,_0.2),_20px_20px_rgba(31,_19,_18,_0.1),_25px_25px_rgba(31,_19,_18,_0.05)] hover:-translate-y-3 transition duration-700"
              alt="hero"
              src={BackgroundOne}
            />
          </div>
          <div className="w-full h- flex gap-2 justify-center items-center my-2">
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:-translate-y-3 transition duration-700 "
              alt="hero"
              src={BackgroundTwo}
            />
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:-translate-y-1 transition duration-700 "
              alt="hero"
              src={BackgroundThree}
            />
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:-translate-y-3 transition duration-700 "
              alt="hero"
              src={BackgroundFour}
            />
          </div>
          <div className="w-full flex gap-3 justify-center">
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:-translate-y-1 transition duration-700 "
              alt="hero"
              src={BackgroundFive}
            />
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:-translate-y-1 transition duration-700 "
              alt="hero"
              src={BackgroundSix}
            />
          </div>
          <div className="w-full flex gap-3 justify-center my-2">
            <img
              className="object-cover object-center rounded-xl  h-20 md:h-28 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:-translate-y-1 transition duration-700 "
              alt="hero"
              src={BackgroundSeven}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
