import React from "react";
import Image from "next/image";
import heroBackImage from "../public/images/heroBackground.jpeg";
import { MdArrowDownward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="w-full h-screen absolute z-[-1]">
        <Image
          src={heroBackImage}
          alt="123 Pizza | Indigenous Cuisine in Saskatoon, Saskatchewan"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="bg-black absolute z-[5] w-full h-screen opacity-40" />
      <div className="absolute z-[10] flex items-center flex-col justify-center mt-[8vh] 600:max-w-none max-w-[350px]">
        <h1 className="font-[900] text-white uppercase text-[4em] 600:text-[6.2em] leading-none text-center">
          Love at first bite
        </h1>
        <div className="text-white font-[600] text-[1.24em] 600:text-[2em] text-center">
          Proudly serving indigenous cuisine in Saskatoon, Saskatchewan
        </div>
        <a
          passhref
          href="https://www.skipthedishes.com/123-pizza-33-st-w"
          rel="noreferrer"
          target="_blank"
        >
          <button className="mainButton mt-4 ">Place An Order</button>
        </a>
      </div>
      <div className="absolute text-white text-[5em] bottom-2 z-[10] ">
        <MdArrowDownward />
      </div>
    </div>
  );
};

export default Hero;
