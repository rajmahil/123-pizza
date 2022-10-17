import React from "react";
import { MdFormatQuote } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="px-[16px] py-[90px] bg-gray-100">
      <div className="flex items-center flex-col max-w-[1400px] ml-auto mr-auto">
        <div className="bg-red h-[10px] w-[150px]" />
        <h2 className="text-black font-[900] text-[2.4em] 450:text-[3em] 700:text-[4em] mb-10">
          REVIEWS
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          We saw the Indian Taco and had to stop. The bannock was incredible,
          fluffy, tasty, and held all the toppings together. We got 2 because 1
          wasn't enough. This place needs so much more recognition because they
          have so many traditional tastes mixed with modern food.
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          Even though they are customers of my own I never tried there food
          before so today I was hungry and not fare away. Stopped in and was
          happy to see things where going good on my end. Decided on the bannock
          burger meal with onion rings. What I will say it was the greatest
          bannock burger I ever had. The onion rings were good 2 and for what I
          payed was a deal and half. There burgers and bannock are home made not
          just something that comes out of a package. Great service is nice also
          if you never tried there food I say you definitely should.
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          Food I have purchased from 123 Pizza has always been very tasty!
          Particularly notable is that the pizza crust is not greasy or soggy
          (as found at many takeout places). I appreciate that owners engage in
          pleasant conversation when I pick up my pizzas.
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          Awesome place, they even had indigenous cuisine. The staff have the
          best suggestions if you're not sure on what to eat. Overall great
          customer service, thanks for the great supper today
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          Just moved nearby and tried them. Friendly guys working there and
          quick service. Unique sauce and pizza wasn&apos;t soggy or too greasy.
          Will order again.
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          Indian tacos to die for 😍😍😍😍😍 absolutely loved it here!! Went
          back for seconds 😎😁
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          Ordered from skip the dishes tonight and was very pleased!! Had
          bannock burgers and fries, by the time they arrived they were still
          hot. I’ll definitely be ordering here again!
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          We ordered 18 pizza's for tonight's Parent's Night Out party at
          Momentum Martial Arts, and not only was the pizza delicious (omg the
          crust! the cheese!), but it was also delivered on time and piping hot!
          The kids (and coaches) loved it!
        </div>
        <div className="reviewBox">
          <div className="text-[4em]">
            <MdFormatQuote />
          </div>
          So good!! I just had your bannock burger loaded with fries and it was
          amazing!! My mouth is still watering because it knows there is still
          half the meal waiting for later. I will definitely be going back for
          more! Thank you
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
