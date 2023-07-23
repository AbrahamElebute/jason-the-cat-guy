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
  LogoTransparent,
  flot2,
} from "../assets/index";
const hero = () => {
  return (
    <div className=" flex px-5 py-5 bg-black/10">
      <footer className="bg-white dark:bg-purple-800/70 w-full rounded-xl">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img className="w-auto h-14" src={LogoTransparent} alt="" />
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Ensuring your cat's well-being is our top priority.
            </p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                className="hidden lg:flex items-center justify-between gap-3 py-2 px-6 border-solid border-2 border-transparent hover:border-purple-400 text-sm text-white bg-purple-800 rounded-full transition duration-200"
                href="#">
                Contact Us
                <BsArrowRightCircleFill className="w-5 h-5" />
              </a>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-500" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-white">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                className="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit">
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-white transition-colors duration-300 hover:text-white dark:hover:text-gray-300"
                aria-label="Reddit">
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit">
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default hero;
