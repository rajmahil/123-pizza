import React from "react";
import pizzaLogo from "../public/images/123PizzaLogo.png";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black p-[90px] pb-[40px] flex flex-col items-center">
      <div className="max-w-[1600px] text-white ml-auto mr-auto flex flex-col 1200:flex-row flex-wrap w-full border-b-2 border-white pb-[90px]">
        <div className="footerCol">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={pizzaLogo}
              alt="123 Pizza logo | Indigenous Cuisine in Saskatoon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="footerCol mb-10">
          <h3 className="text-white uppercase text-[1.4em] font-bold text-left mb-4">
            Address
          </h3>
          <div className="max-w-[250px] text-[1.2em] text-center">
            511 33rd Street West, Saskatoon, SK S7L 0V7
          </div>
        </div>
        <div className="footerCol mb-10">
          <h3 className="text-white uppercase text-[1.4em] font-bold text-left mb-4">
            OPERATING HOURS
          </h3>
          <div className="max-w-[220px] text-[1.2em] mb-2 text-center">
            Wed - Sat: 11am - 9pm Fri - Sat: 11am - 12am
          </div>
          <div className="text-[1.2em] mb-2">
            <span className="font-bold">Phone:</span> 306-974-7777
          </div>
          <div className="text-[1.2em]">
            <span className="font-bold">Email:</span>restaurant@123pizza.ca
          </div>
        </div>
        <div className="footerCol">
          <h3 className="text-white uppercase text-[1.4em] font-bold text-left mb-4">
            FOLLOW US
          </h3>
          <div className="flex flex-row">
            <a
              passhref
              href="https://www.facebook.com/123PizzaLoveAtFirstBite"
              rel="noreferer"
              target="_blank"
            >
              <div className="text-[2.2em] mr-2 text-black hover:bg-darkYellow transition-all cursor-pointer bg-yellow rounded-full w-[60px] h-[60px] flex items-center justify-center">
                <BsFacebook />
              </div>
            </a>
            <a
              passhref
              href="https://www.instagram.com/pizza_yxe/"
              rel="noreferer"
              target="_blank"
            >
              <div className="text-[2.2em] mr-2 text-black hover:bg-darkYellow transition-all cursor-pointer bg-yellow rounded-full w-[60px] h-[60px] flex items-center justify-center">
                <RiInstagramFill />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="text-white mt-8">
        © copyright {new Date().getFullYear()} by 123 Pizza. All rights
        reserved.{" "}
        <a
          className="underline"
          href="https://www.cococreativeweb.com/"
          target="_blank"
          rel="noreferer"
        >
          Website by 306 Technologies, formerly as Coco Creative
        </a>
      </div>
    </div>
  );
};

export default Footer;
