import React from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

const MenuSidebar = ({ isMenuOpen, toggle }) => {
  return (
    isMenuOpen && (
      <div className="fixed w-full 600:w-[500px] bg-white right-0 top-0 h-screen z-[10000] flex flex-col p-10">
        <div
          className="absolute top-3 right-3 text-[3em] bg-yellow p-2 rounded-full hover:bg-darkYellow transition-all cursor-pointer"
          onClick={toggle}
        >
          <MdClose />
        </div>
        <h2 className="uppercase font-[900] text-[3em]">Menu</h2>
        <ul className="flex flex-col items-start text-left mt-20">
          <Link passHref href="/#about" onClick={toggle}>
            <li className="navLink mb-14 ml-0">About</li>
          </Link>
          <Link passHref href="/menu" onClick={toggle}>
            <li className="navLink mb-14 ml-0">Menu</li>
          </Link>
          <Link passHref href="/contact" onClick={toggle}>
            <li className="navLink mb-14 ml-0">Contact</li>
          </Link>
          <a
            passhref
            href="https://www.skipthedishes.com/123-pizza-33-st-west"
            rel="noreferrer"
            target="_blank"
            onClick={toggle}
          >
            <button className="mainButton text-[1.1em] text-black">
              Order From Skip The Dishes
            </button>
          </a>
        </ul>
      </div>
    )
  );
};

export default MenuSidebar;
