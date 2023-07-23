import React, { useRef, useEffect, useState, useCallback } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import NavStroke from "./general/NavStroke";
import { LogoTransparent, LogoTransparentBlack } from "../assets/index";

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 300;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <div
      className={`sticky top-0 px-7 py-6 ${
        navBackground ? "scrolled-bg" : "bg-transparent"
      } transition duration-1000 ease-in-out z-50`}>
      <nav
        className={`relative px-4  flex justify-between items-center z-[999] bg-transparent `}>
        <a className="text-3xl font-bold" href="#">
          <img
            src={navBackground ? LogoTransparent : LogoTransparentBlack}
            alt=""
            className="h-9"
          />
        </a>
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="navbar-burger flex items-center text-purple-400 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            navBackground ? "scrolled-ul" : ""
          } `}>
          <li>
            <a className="text-sm text-purple-800 font-bold" href="#">
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <NavStroke />
          </li>
          <li>
            <a className="text-sm text-purple-500  " href="#">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <NavStroke />
          </li>
          <li>
            <a className="text-sm text-purple-500 " href="#">
              Services
            </a>
          </li>
          <li className="text-gray-300">
            <NavStroke />
          </li>
          <li>
            <a className="text-sm text-purple-500 " href="#">
              Pricing
            </a>
          </li>
          <li className="text-gray-300">
            <NavStroke />
          </li>
          <li>
            <a className="text-sm text-purple-500 " href="#">
              Contact
            </a>
          </li>
        </ul>
        <a
          className={`hidden lg:flex items-center justify-between gap-3 py-2 px-6 border-solid border-2 border-transparent hover:border-sky-500 text-sm font-bold rounded-full transition duration-200 ${
            navBackground ? "text-white hover:border-purple-800" : ""
          }`}
          href="#">
          Contact Us
          <BsArrowRightCircleFill className="w-5 h-5" />
        </a>
      </nav>
      <div
        className={`navbar-menu relative z-[9999] ${
          isMenuOpen ? "" : "hidden"
        }`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto z-[9999px]">
          <div className="flex items-center mb-8" onClick={toggleMenu}>
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img src={LogoTransparentBlack} alt="" className="h-9" />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-purple-800 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-purple-800 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-purple-800 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#">
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-purple-800 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#">
                  Pricing
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-purple-800 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-purple-800 hover:bg-blue-700  rounded-xl"
                href="#">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
