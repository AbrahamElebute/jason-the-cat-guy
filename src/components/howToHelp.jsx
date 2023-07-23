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

const Team = () => {
  return (
    <div className="container mx-auto flex px-5 py-5 md:flex-row gap-10 justify-between flex-col items-center ">
      <div>
        <video
          autoPlay
          src="/mp3/Snapinsta.app_video_E4429B32182CD833277227038C8A1AB8_video_dashinit.mp4"
          muted
          loop
          className="rounded-full h-60 object-cover"
        />
      </div>
      <div className=" text-center ">
        <span className="text-lg tracking-widest font-medium">
          How can we help?
        </span>
        <p className="mt-2 text-2xl font-bold flex items-center flex-col">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Purr-fect Care{" "}
          </span>
          for Your Feline Friend! <br /> Let Us Be Your Cat's Trusted Companion
          <a
            className="hidden lg:flex items-center justify-between gap-3 py-2 px-6 border-solid border-2 border-transparent hover:border-purplpe-800 text-sm text-white bg-purple-800 rounded-full transition duration-200 mt-4"
            href="#">
            Contact Us
            <BsArrowRightCircleFill className="w-5 h-5" />
          </a>
        </p>
      </div>
      <div className="flex">
        <img
          src={BackgroundFive}
          alt=""
          className="h-32 w-32 rounded-full object-cover"
        />
        <img
          src={BackgroundOne}
          alt=""
          className="h-32 w-32 rounded-full object-cover -translate-x-10 shadow-[0px_0px_0px_3px_rgba(255,255,255)]"
        />
      </div>
    </div>
  );
};

export default Team;
