import React from "react";
import Image from "next/image";

const MenuComponent = ({
  imageUrl,
  imageAlt,
  menuItemTitle,
  menuItemDescription,
  menuItemPrice,
  isNew,
  key,
}) => {
  return (
    <div
      key={key}
      className="flex flex-col 450:flex-row items-center justify-center w-[550px] 1200:w-[45%] 1400:w-[550px] m-5 ml-auto mr-auto"
    >
      <div className="flex flex-col 450:flex-row items-center justify-center 450:justify-start ml-auto mr-auto w-full">
        <div className=" relative 600:w-[150px] 600:h-[150px] 600:min-w-[150px] 600:min-h-[150px]  w-[120px] h-[120px] min-w-[120px] min-h-[120px] rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="p-0 450:pl-5 flex flex-col items-center 450:items-start">
          <h4 className="font-bold text-[1.2em]  600:text-[1.4em]">
            {menuItemTitle}...<span>{menuItemPrice}</span>
          </h4>
          <div className="450:text-left text-center">{menuItemDescription}</div>
          {isNew && (
            <div className="bg-red text-white rounded-[25px] px-2 font-[500] mt-2">
              New
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
