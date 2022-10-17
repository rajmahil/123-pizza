import React from "react";
import Head from "next/head";
import MenuComponent from "../components/MenuComponent";
import allMeatPizza from "../public/images/menuImages/allMeatPizza.png";
import canadianClassicPizza from "../public/images/menuImages/canadianClassicPizza.png";
import feastPizza from "../public/images/menuImages/feastPizza.png";
import greekBitePizza from "../public/images/menuImages/greekBitePizza.png";
import houseSpecialPizza from "../public/images/menuImages/houseSpecialPizza.png";
import teriyakiChickenPizza from "../public/images/menuImages/teriyakiChickenPizza.png";
import veggiePizza from "../public/images/menuImages/veggiePizza.png";
import cheeseBannockBurger from "../public/images/menuImages/cheeseBannockBurger.png";
import plainBannockBurger from "../public/images/menuImages/plainBannockBurger.png";
import indianTaco from "../public/images/menuImages/indianTaco.png";
import chickenWings from "../public/images/menuImages/chickenWings.png";
import dryRibs from "../public/images/menuImages/dryRibs.png";
import cheesyBread from "../public/images/menuImages/cheesyBread.png";
import onionRings from "../public/images/menuImages/onionRings.png";
import ceasorSalad from "../public/images/menuImages/ceasorSalad.png";
import poutine from "../public/images/menuImages/poutine.png";
import fries from "../public/images/menuImages/fries.png";
import bottledWater from "../public/images/menuImages/bottledWater.png";
import bottledPop from "../public/images/menuImages/bottledPop.png";
import cannedPop from "../public/images/menuImages/cannedPop.png";
import samosa from "../public/images/menuImages/samosa.png";
import lasagna from "../public/images/menuImages/lasagna.png";

const MenuPizza = [
  {
    imageUrl: allMeatPizza,
    imageAlt: "All Meat Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "All Meat Pizza",
    menuItemDescription:
      "A carnivore favourite, this massive pizza is covered with bacon, pepperoni, salami, and ham.",
    menuItemPrice: "$29.99",
    isNew: true,
  },
  {
    imageUrl: teriyakiChickenPizza,
    imageAlt: "Teriyaki Chicken Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Teriyaki Chicken Pizza",
    menuItemDescription:
      "In-house dough is topped with juicy pieces of chicken, cheese, pineapple, and drizzled with teriyaki sauce.",
    menuItemPrice: "$29.99",
    isNew: false,
  },
  {
    imageUrl: greekBitePizza,
    imageAlt: "Greek Bite Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Greek Bite Pizza",
    menuItemDescription:
      "Greek-style pizza topped with tomato sauce, feta cheese, sliced tomatoes, onions, olives, and green peppers.",
    menuItemPrice: "$29.99",
    isNew: false,
  },
  {
    imageUrl: houseSpecialPizza,
    imageAlt: "House Special Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "House Special Pizza",
    menuItemDescription:
      "This house specialty pizza features salami, pepperoni, mushrooms, onions, pineapple, and green peppers.",
    menuItemPrice: "$29.99",
    isNew: true,
  },
  {
    imageUrl: feastPizza,
    imageAlt: "Feast Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Feast Pizza",
    menuItemDescription:
      "The Feast (All Dressed) Pizza, There isn't a shortage of toppings on this pizza! In-house dough is covered in a tasty tomato sauce, then topped with pepperoni, bacon, ham, salami.",
    menuItemPrice: "$29.99",
    isNew: true,
  },
  {
    imageUrl: veggiePizza,
    imageAlt: "Veggie Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Veggie Pizza",
    menuItemDescription:
      "This is a great option for vegetarians! In-house dough is topped with tomato sauce, onions, tomatoes, pineapple, mushrooms, green peppers.",
    menuItemPrice: "$24.99",
    isNew: true,
  },
  {
    imageUrl: canadianClassicPizza,
    imageAlt: "Canadian Classic Pizza in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Canadian Classic Pizza",
    menuItemDescription:
      "Hand-tossed dough is covered with a delicious tomato sauce, then piled high with pepperoni, mushrooms, bacon, and cheddar.",
    menuItemPrice: "$24.99",
    isNew: true,
  },
];

const MenuBurgers = [
  {
    imageUrl: cheeseBannockBurger,
    imageAlt: "Cheese Bannock Burger in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Cheese Bannock Burger",
    menuItemDescription:
      "Delicious juicy cheese bannock burger with tomato, onion, lettuce and pickles",
    menuItemPrice: "$6.50",
    isNew: false,
  },
  {
    imageUrl: plainBannockBurger,
    imageAlt: "Plain Bannock Burger in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Plain Bannock Burger",
    menuItemDescription:
      "Delicious plain bannock burger with a home-style patty on baked or fried bannock.",
    menuItemPrice: "$6.00",
    isNew: true,
  },
];

const MenuTacos = [
  {
    imageUrl: indianTaco,
    imageAlt: "Indian Taco in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Indian Taco",
    menuItemDescription:
      "Taco seasoned ground beef on a fry bread topped with Lettuce, Diced Tomatoes, Chopped Onions, and Shredded Cheese with Sour Cream and/or Salsa.",
    menuItemPrice: "$9.99",
    isNew: true,
  },
];

const MenuRibsWings = [
  {
    imageUrl: chickenWings,
    imageAlt: "Chicken Wings in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Chicken Wings",
    menuItemDescription:
      "(10 pcs) Meaty chicken wings are deep fried until crisp, then served with your choice of sauce or seasoning.",
    menuItemPrice: "$9.99",
    isNew: true,
  },
  {
    imageUrl: dryRibs,
    imageAlt: "Dry Ribs in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Dry Ribs",
    menuItemDescription:
      "Dry on the outside, but juicy on the inside, these bite-sized ribs are full of flavour.",
    menuItemPrice: "$8.99",
    isNew: true,
  },
];

const MenuSides = [
  {
    imageUrl: cheesyBread,
    imageAlt: "Cheesy Bread in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Cheesy Bread",
    menuItemDescription:
      "Fresh bread is smothered in cheese, then oven-baked to perfection.",
    menuItemPrice: "$5.99",
    isNew: false,
  },
  {
    imageUrl: onionRings,
    imageAlt: "Onion Rings in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Onion Rings",
    menuItemDescription:
      "Fresh onions are sliced thick, battered, and deep fried until crisp.",
    menuItemPrice: "$5.99",
    isNew: false,
  },
  {
    imageUrl: ceasorSalad,
    imageAlt: "Ceasor Salad in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Ceasor Salad",
    menuItemDescription:
      "lassic salad featuring romaine lettuce, crunchy croutons, Parmesan cheese, and a creamy Caesar dressing.",
    menuItemPrice: "$5.99",
    isNew: false,
  },
  {
    imageUrl: poutine,
    imageAlt: "Poutine in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Poutine",
    menuItemDescription:
      "A bed of golden and crispy fries topped with cheese and gravy.",
    menuItemPrice: "$5.99",
    isNew: false,
  },
  {
    imageUrl: fries,
    imageAlt: "Fries in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Fries",
    menuItemDescription: "Thick-cut fries deep fried until golden brown.",
    menuItemPrice: "$2.99",
    isNew: false,
  },
];

const MenuOther = [
  {
    imageUrl: bottledWater,
    imageAlt: "Bottled Water in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Bottled Water",
    menuItemDescription: "A refreshing bottle of water.",
    menuItemPrice: "$1.99",
    isNew: false,
  },
  {
    imageUrl: bottledPop,
    imageAlt: "Bottled Water in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Bottled Water",
    menuItemDescription: "Choose from a variety of two-litre bottles of pop.",
    menuItemPrice: "$3.75",
    isNew: false,
  },
  {
    imageUrl: cannedPop,
    imageAlt: "Canned Pop in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Canned Pop",
    menuItemDescription:
      "Choose from a variety of tasty canned soft drink flavours.",
    menuItemPrice: "$1.35",
    isNew: false,
  },
  {
    imageUrl: samosa,
    imageAlt: "Samosas in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Samosas",
    menuItemDescription: "(10 pcs) Served traditional style.",
    menuItemPrice: "$9.99",
    isNew: false,
  },
  {
    imageUrl: lasagna,
    imageAlt: "Lasagna in Saskatoon, SK | 123 Pizza",
    menuItemTitle: "Lasagna",
    menuItemDescription:
      "Flat pasta is layered with your choice of a meat or vegetable sauce, topped with cheese, and oven-baked.",
    menuItemPrice: "$7.99",
    isNew: false,
  },
];

const menu = () => {
  return (
    <>
      <Head>
        <title>Our Menu | Indigenous Cuisine in Saskatoon, Saskatchewan</title>
        <meta
          name="title"
          content="Our Menu | Indigenous Cuisine in Saskatoon, Saskatchewan"
        />
        <meta
          name="description"
          content="123 Pizza offers a diverse menu with delicious home-style favourites. Choose from a variety of pizzas, bannock burgers, indian tacos, wings and more. 123 Pizza is the premier stop for Indigenous cuisine in Saskatoon!"
        />
      </Head>
      <div className="p-[16px] 600:p-[45px] 1400:p-[90px] flex flex-col items-center justify-center">
        <div className="bg-red h-[10px] w-[150px] mt-20" />
        <h1 className="uppercase text-[3em] font-[900] text-center">
          Our Menu
        </h1>
        <div className="w-full 1400:max-w-[1200px] ml-auto mr-auto pt-[50px] mb-20 ">
          <div className="flex items-center justify-center flex-col mb-10">
            <h2 className="font-[900] text-[2.2em] uppercase">Pizza</h2>
            <div className="font-[600] text-[1.2em] text-center">
              The prices showing are for 16&quot; pizza&apos;s, we also have
              medium and small size**
            </div>
          </div>
          <div className="flex flex-row flex-wrap  w-full">
            {MenuPizza.map((item, index) => (
              <MenuComponent
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                menuItemTitle={item.menuItemTitle}
                menuItemDescription={item.menuItemDescription}
                menuItemPrice={item.menuItemPrice}
                isNew={item.isNew}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full 1400:max-w-[1200px] ml-auto mr-auto pt-[50px] mb-20">
          <div className="flex items-center justify-center flex-col mb-10">
            <h2 className="font-[900] text-[2.2em] uppercase">Burgers</h2>
          </div>
          <div className="flex flex-row flex-wrap w-full">
            {MenuBurgers.map((item, index) => (
              <MenuComponent
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                menuItemTitle={item.menuItemTitle}
                menuItemDescription={item.menuItemDescription}
                menuItemPrice={item.menuItemPrice}
                isNew={item.isNew}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full 1400:max-w-[1200px] ml-auto mr-auto pt-[50px] mb-20">
          <div className="flex items-center justify-center flex-col mb-10">
            <h2 className="font-[900] text-[2.2em] uppercase">Tacos</h2>
          </div>
          <div className="flex flex-row flex-wrap w-full">
            {MenuTacos.map((item, index) => (
              <MenuComponent
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                menuItemTitle={item.menuItemTitle}
                menuItemDescription={item.menuItemDescription}
                menuItemPrice={item.menuItemPrice}
                isNew={item.isNew}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full 1400:max-w-[1200px] ml-auto mr-auto pt-[50px] mb-20">
          <div className="flex items-center justify-center flex-col mb-10">
            <h2 className="font-[900] text-[2.2em] uppercase">Ribs & Wings</h2>
          </div>
          <div className="flex flex-row flex-wrap w-full">
            {MenuRibsWings.map((item, index) => (
              <MenuComponent
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                menuItemTitle={item.menuItemTitle}
                menuItemDescription={item.menuItemDescription}
                menuItemPrice={item.menuItemPrice}
                isNew={item.isNew}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full 1400:max-w-[1200px] ml-auto mr-auto pt-[50px] mb-20">
          <div className="flex items-center justify-center flex-col mb-10">
            <h2 className="font-[900] text-[2.2em] uppercase">Sides</h2>
          </div>
          <div className="flex flex-row flex-wrap w-full">
            {MenuSides.map((item, index) => (
              <MenuComponent
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                menuItemTitle={item.menuItemTitle}
                menuItemDescription={item.menuItemDescription}
                menuItemPrice={item.menuItemPrice}
                isNew={item.isNew}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full 1400:max-w-[1200px] ml-auto mr-auto pt-[50px] ">
          <div className="flex items-center justify-center flex-col mb-10">
            <h2 className="font-[900] text-[2.2em] uppercase">Other</h2>
          </div>
          <div className="flex flex-row flex-wrap w-full">
            {MenuOther.map((item, index) => (
              <MenuComponent
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                menuItemTitle={item.menuItemTitle}
                menuItemDescription={item.menuItemDescription}
                menuItemPrice={item.menuItemPrice}
                isNew={item.isNew}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default menu;
