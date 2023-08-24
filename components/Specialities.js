import React from "react";
import Image from "next/image";
import bannockBurger from "../public/images/bannockBurger.jpg";
import indianTaco from "../public/images/indianTaco.jpg";
import pizza from "../public/images/pizza.jpg";

const Specialities = () => {
  return (
    <div className="p-[90px] bg-yellow flex flex-col items-center justify-center">
      <div className="max-w-[1400px]  flex flex-col items-center justify-center">
        <div className="bg-red h-[10px] w-[150px]" />
        <h2 className="text-white font-[900] text-[2.4em] 450:text-[3em] 700:text-[4em] mb-10 text-center ">
          OUR SPECIALITIES
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="relative w-[350px] 1500:w-[420px] h-[500px] 1500:h-[550px] border-white border-[6px] rounded-[25px] overflow-hidden mb-10">
            <div className="absolute bottom-0 z-[8] text-white flex items-center justify-start flex-col p-8 h-[240px]">
              <h3 className="text-center font-[800] text-[2em]">
                BANNOCK BURGERS
              </h3>
              <div className="text-center text-[1.2em] font-[600]">
                Homestyle patty on your favorite baked or fried bannock.
              </div>
            </div>
            <div className="bg-black absolute z-[5] w-[420px] h-[550px] opacity-50" />
            <Image
              src={bannockBurger}
              alt="Bannock Burgers in Saskatoon, Saskatchewan | 123 Pizza Saskatoon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative w-[350px] 1500:w-[420px] h-[500px] 1500:h-[550px] border-white border-[6px] rounded-[25px] overflow-hidden mx-6 mb-10">
            <div className="absolute bottom-0 z-[8] text-white flex items-center justify-start flex-col p-8 h-[240px]">
              <h3 className="text-center font-[800] text-[2em]">
                INDIAN TACOS
              </h3>
              <div className="text-center text-[1.2em] font-[600]">
                Taco seasoned ground beef on a fry bread toped with lettuce,
                diced tomatoes, chopped onions and chesse.
              </div>
            </div>
            <div className="bg-black absolute z-[5] w-[420px] h-[550px] opacity-50" />
            <Image
              src={indianTaco}
              alt="Indian Taco in Saskatoon, Saskatchewan | 123 Pizzas "
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative w-[350px] 1500:w-[420px] h-[500px] 1500:h-[550px] border-white border-[6px] rounded-[25px] overflow-hidden mb-10">
            <div className="absolute bottom-0 z-[8] text-white flex items-center justify-start flex-col p-8 h-[240px]">
              <h3 className="text-center font-[800] text-[2em]">PIZZA</h3>
              <div className="text-center text-[1.2em] font-[600]">
                Delicious pizzas made with fresh dough and covered with classic
                topping combinations.
              </div>
            </div>
            <div className="bg-black absolute z-[5] w-[420px] h-[550px] opacity-50" />
            <Image
              src={pizza}
              alt="Delicious Pizza | 123 Pizza in Saskatoon, SK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      <a
        passhref
        href="https://www.skipthedishes.com/123-pizza-33-st-w"
        rel="noreferrer"
        target="_blank"
      >
        <button className="mainButton bg-red text-white mt-20 border-4 border-red hover:border-red hover:bg-yellow hover:text-red ">
          {" "}
          View Menu
        </button>
      </a>
    </div>
  );
};

export default Specialities;
