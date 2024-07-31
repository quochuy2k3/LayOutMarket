import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle the menu visibility
  const handleClickMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="mx-5 flex pt-8 h-20 max-w-full items-center justify-between   px-10">
      <div className="flex items-center justify-center">
        <h1 className="font-newsreader pr-10 text-3xl text-[#c87d2d]">
          <Link to="/">Logo Công Ty</Link>
        </h1>
        <ul
          className={` bg-[#ddd6d6c5] border border-[#ddd6d6c5] text-white px-10 py-3 rounded-full  ${
            isMenuVisible ? "block" : "hidden"
          } hidden xl:gap-16 xl:flex`}
        >
          <li className="  font-inter block  cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="font-inter  cursor-pointer">
            <Link to="/">Solution</Link>
          </li>
          <li className="font-inter cursor-pointer">
            <Link to="/">Showcase</Link>
          </li>
          <li className="font-inter  text-[#c87d2d] cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:bg-[#c87d2d] after:h-0.5 after:w-1/3">
            <Link to="/">Marketplace</Link>
          </li>
          <li className="font-inter cursor-pointer">
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <ul className=" border border-[#ddd6d6c5] ml-14 cursor-pointer rounded-full bg-[#ddd6d6c5] p-2">
          <li className="px-5 font-inter w-max text-base font-medium text-white">
            Login
          </li>
        </ul>
        <div onClick={handleClickMenu} className="ml-6 xl:hidden">
          {isMenuVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18l12-12M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <div
          className={
            isMenuVisible
              ? `fixed left-0 top-0 h-full w-[70%] border-r-gray-900 bg-slate-400 z-40 duration-500 ease-in-out lg:hidden`
              : `fixed left-[-100%]`
          }
        >
          <ul className="flex-c p-4 uppercase">
            <li className="font-inter w-max border-b border-gray-600">Home</li>
            <li className="font-inter w-max border-b border-gray-600">
              Solution
            </li>
            <li className="font-inter w-max border-b border-gray-600">
              Showcase
            </li>
            <li className="font-inter w-max border-b border-gray-600">
              Marketplace
            </li>
            <li className="font-inter w-max border-b border-gray-600">
              About Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
