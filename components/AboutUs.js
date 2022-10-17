import React from "react";
import Image from "next/image";
import aboutImage from "../public/images/aboutUsImage.jpg";

const AboutUs = () => {
  return (
    <div className="p-[16px] py-[90px] " id="about">
      <div className="max-w-[1400px] ml-auto mr-auto flex flex-col 1200:flex-row">
        <div className="relative w-full 1200:w-[50%] h-[500px]  700:h-[800px] ml-auto mr-auto">
          <Image
            src={aboutImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="pl-0 1200:mt-0 mt-10 1200:pl-20 w-full ml-auto mr-auto 1200:w-[50%] flex items-start justify-center flex-col">
          <div className="bg-red h-[10px] w-[150px]" />
          <h2 className="text-[2.4em] 450:text-[3em] 700:text-[4em] text-left font-[900] uppercase">
            More About Us
          </h2>
          <div className="text-left text-[1.2em] leading-8">
            We are a local indigenous-owned small business aiming to spread
            values and knowledge of our culture through mouthwatering food and
            amazing hospitality. Our vision is to build a respectable and
            reliable restaurant for indigenous cuisine within Saskatoon, SK.
            With a clear vision and loving customers, we aim to become the
            premier spot for delicious indigenous cuisine. Having taken over the
            restaurant in early 2018, we are well on our way! We serve delicious
            indigenous cuisine, pizza, bannock burgers, indian tacos and more!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
