import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/AboutUs";
import CaterCTA from "../components/CaterCTA";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import Testimonials from "../components/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>123 Pizza | Indigenous Cuisine in Saskatoon, Saskatchewan</title>
        <meta
          name="title"
          content="123 Pizza | Indigenous Cuisine in Saskatoon, Saskatchewan"
        />
        <meta
          name="description"
          content="123 Pizza serves delicious indigenous cuisine in Saskatoon, Saskatchewan. Our goal is to spread values and knowledge of our culture through mouthwatering food and amazing hospitality"
        />
      </Head>
      <div>
        <Hero />
        <Specialities />
        <AboutUs />
        <Testimonials />
        <CaterCTA />
      </div>
    </div>
  );
}
