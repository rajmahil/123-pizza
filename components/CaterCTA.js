import React from "react";
import Link from "next/link";
import Image from "next/image";
import caterBackground from "../public/images/caterBackground.webp";

const CaterCTA = () => {
  return (
    <div className="relative h-[650px] flex items-center justify-center">
      <div className="absolute z-[20] flex items-center flex-col">
        <h2 className="text-white uppercase font-[900] text-[2.4em] 450:text-[3em] 700:text-[4em] leading-none text-center">
          Did you know we also cater?
        </h2>
        <div className="text-white text-[1.4em] font-[600] max-w-[800px] text-center">
          Perfect for events, dinner, birthday parties, etc., with many options
          to choose from. Contact us to learn more!
        </div>
        <Link passHref href="/contact">
          <button className="mainButton mt-6">Contact Us</button>
        </Link>
      </div>
      <div className="relative w-full h-[650px] z-[-5] flex items-center justify-center">
        <div className="bg-black absolute z-[5] w-full h-[650px] opacity-40" />
        <Image
          src={caterBackground}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default CaterCTA;
