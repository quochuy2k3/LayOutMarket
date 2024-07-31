import { useState } from "react";
import img from "../assets/img1.png";
import ItemComponent from "../Components/ItemComponent";
import CardComponent from "../Components/CardComponent";
interface Item {
  img: string;
  name: string;
  description: string;
}

interface Card {
  img: string;
  name: string;
  price: number;
  oldPrice: number;
}
const Cards: Card[] = [
  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },
  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },
  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },
  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },
  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },
  {
    img: img,
    name: "Web Function Pack",
    price: 100.0,
    oldPrice: 150.0,
  },
];

const Items: Item[] = [
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
  {
    img: img,
    name: "Third Person",
    description: "Grown in San Juan Capistrano, CA",
  },
];

const Market = () => {
  const handleClickShow = () => {
    console.log(22222);
    setIsCardVisible(true);
  };
  const handleClickClose = () => {
    console.log(3333);

    setIsCardVisible(false);
  };

  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <div className=" mx-5 mt-10 h-[85vh] mb-3 grid grid-cols-12 rounded-xl bg-[#c6c5c678]">
      <h1 className="font-semibold text-center  text-3xl absolute w-fit xl:w-full xl:left-0 xl:mt-7 lg:mt-0 lg:left-60 lg:w-[400px] mt-8">
        Let's us know exactly what{" "}
        <span className="text-[#426B1F]">functions</span> you need{" "}
      </h1>
      <div
        id="left"
        className={`  px-2 pt-24 lg:p-5   ${isCardVisible ? `col-span-8 `: `col-span-12`}  text-center `}
      >
        <div className=" w-0 h-0 rounded-tl-lg  border-transparent border-b-[50px] border-l-[150px] border-r-[40px] border-b-[#ddd6d6c5] border-l-[#ddd6d6c5] border-r-transparent">
          <button className="  transform -translate-x-32 translate-y-5  text-white px-12 py-1 rounded-full bg-[#58300bf2]">
            Filter
          </button>
        </div>

        <div className=" hidden lg:block w-full  ">
          <ul className=" relative py-4 md:min-w-[56vw] rounded-r-xl rounded-bl-xl bg-[#ddd6d6c5]  gap-3  items-center flex fke justify-start  ">
            <li className="border-2 ml-8 text-orange-400  bg-white rounded-lg py-2  border-orange-400 px-3">
              Platform
            </li>
            <li className="border-2 text-orange-400  bg-white rounded-lg py-2 border-orange-400 px-3">
              Point of view
            </li>
            <li className="border-2 bg-white  rounded-lg border-gray-300 py-2 px-3">
              Monitor
            </li>
            <li className="border-2 bg-white  rounded-lg border-gray-300 py-2 px-3">
              Exterior
            </li>
            <li className="border-2 bg-white  rounded-lg border-gray-300 py-2 px-3">
              Landscape
            </li>
            <li className="border-2 bg-white  rounded-lg border-gray-300 py-2 px-3">
              API
            </li>
          </ul>
        </div>

        <div className="lg:mt-7 max-w-[100vw] custom-scrollbar xl:h-[67vh]  md:h-[67vh] overflow-x-auto">
          <div
            className={`grid grid-cols-2 gap-10 pr-3   xl:grid-cols-5 md:${
              isCardVisible ? `grid-cols-3` : `grid-cols-4`
            }`}
          >
            {Items.map((item: Item) => (
                   <ItemComponent key={item.name} item={item} />
                   ))}
          </div>
        </div>
      </div>
      <div className="w-[200px] lg:w-[300px] h-0 border-solid absolute   rounded-tr-lg  xl:right-10 lg:right-10 lg:top-[133px] top-[205px]  border-transparent border-b-[60px] border-l-[40px]  border-b-[#ddd6d6c5] border-l-transparent border-r-[#ddd6d6c5]">
        <div className="flex justify-around mt-5 items-center">
          <svg
            onClick={handleClickClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`size-10  cursor-pointer ${
              isCardVisible ? "block" : "hidden"
            } `}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <button
            onClick={handleClickShow}
            className="text-white px-8 py-1  rounded-full bg-[#426B1F]"
          >
            Your Cart
          </button>
        </div>
      </div>
      <div
        id="right"
        className={`bg-[#ddd6d6c5]   col-span-4  flex flex-col justify-between  lg:h-[78vh] xl:h-[76.5vh] mt-[72px] mx-2 mr-5 ${
          isCardVisible ? "block" : "hidden"
        }   rounded-b-xl rounded-tl-xl text-center px-2 `}
      >
        {/* Note  */}
        <div className="">
        <div className="flex justify-between">
          <p className="text-[#426B1F] rounded-full py-1 px-6  font-semibold m-6 bg-white">
            Feature
          </p>
          <p className="text-[#426B1F] rounded-full py-1 px-6  font-semibold m-6 bg-white">
            Estimate
          </p>
        </div>
        {/*  Card list */}
        <div className=" w-full lg:h-[54vh] xl:h-[45vh] custom-scrollbar  overflow-x-auto">
          <div className="grid grid-cols-1 px-2 gap-4">
            {Cards.map((card: Card) => (
            <CardComponent key={card.name} card={card} />
            
            ))}
          </div>
          </div>
          </div>
        <div className="">
        {/* Estimate price  */}
        <div className="xl:h-[19vh] lg:h-[13vh] relative mx-2 mt-5 pt-3">        
          <div className="text-white absolute top-0 font-semibold text-base rounded-r-lg  rounded-tl-lg  py-1 px-3 bg-[#426B1F]">
            Your Estimate Price
          </div>
          {/* container */}
          <div className="xl:h-[17vh] lg:h-[12vh] w-full rounded-xl  border border-[#426B1F]">
            {/* 2 information */}
            <div className=" mt-4 p-2 ">
              {/* one of */}
              <div className="flex justify-between items-center">
                <span className="text-sm ">12 Features</span>
                <span className="text-sm ">12000.00 USD</span>
              </div>
              <div className="flex border-b border-orange-400 pb-2 justify-between items-center">
                <span className="text-sm ">Discount</span>
                <span className="text-sm ">1000.00 USD</span>
              </div>
            </div>
            {/* total */}
            <div className="text-end font-semibold mr-2 text-[#426B1F]">
              1100.00 USD
            </div>
            {/* button end */}
            <div className="flex justify-end gap-2 mr-2 mt-1">
              <button className="rounded-lg text-lg font-semibold border-2 bg-white border-orange-400 text-orange-400 py-1 px-4">
                Contact us
              </button>
              <button className="rounded-lg text-lg font-semibold border-2 bg-white border-orange-400 text-orange-400 py-1 px-4">
                Place order
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
