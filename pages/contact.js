import React from "react";
import ContactForm from "../components/ContactForm";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>
          Contact Us | Indigenous Cuisine in Saskatoon, Saskatchewan
        </title>
        <meta
          name="title"
          content="Contact Us | Indigenous Cuisine in Saskatoon, Saskatchewan"
        />
        <meta
          name="description"
          content="123 Pizza serves delicious indigenous cuisine in Saskatoon, Saskatchewan. Our goal is to spread values and knowledge of our culture through mouthwatering food and amazing hospitality"
        />
      </Head>
      <div className="py-[90px] px-[16px] pt-[180px] flex items-center justify-center">
        <ContactForm />
      </div>
    </>
  );
};

export default contact;
