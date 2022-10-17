import React from "react";
import Image from "next/image";
import pizzaLogo from "../public/images/123PizzaLogo.png";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Navbar = ({ toggle, isMenuOpen }) => {
  return (
    <navbar className="fixed w-full top-0 left-0 bg-red z-[100] h-[8vh] flex items-center justify-between">
      <div className="w-[90%] ml-auto mr-auto text-white  flex items-center justify-between ">
        <Link passHref href="/">
          <div className="cursor-pointer relative w-[160px] h-[160px] mt-[60px]">
            <Image
              src={pizzaLogo}
              alt="123 Pizza Logo - Indigenous cuisine in Saskatoon, Saskatchewan"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </Link>
        <ul className="850:flex flex-row items-center hidden">
          <Link passHref href="/#about">
            <li className="navLink">About</li>
          </Link>
          <Link passHref href="/menu">
            <li className="navLink">Menu</li>
          </Link>
          <Link passHref href="/contact">
            <li className="navLink">Contact</li>
          </Link>
          <a
            passhref
            href="https://www.skipthedishes.com/123-pizza-33-st-west"
            rel="noreferer"
            target="_blank"
          >
            <button className="mainButton text-[1.1em] text-black">
              Order From Skip The Dishes
            </button>
          </a>
        </ul>
        <div
          className="text-[2.6em] cursor-pointer 850:hidden flex"
          onClick={toggle}
        >
          <MdMenu />
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
