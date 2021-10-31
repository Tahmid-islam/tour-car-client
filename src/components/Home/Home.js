import React, { useEffect } from "react";
import Banners from "../Banners/Banners";
import Cars from "../Cars/Cars";
import ChooseUs from "../ChooseUs/ChooseUs";
import FooterBanner from "../FooterBanner/FooterBanner";
import NewsLetter from "../NewsLetter/NewsLetter";
import { Fade } from "react-reveal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banners />
      <Fade bottom>
        <Cars></Cars>
        <ChooseUs></ChooseUs>
        <FooterBanner></FooterBanner>
        <NewsLetter></NewsLetter>
      </Fade>
    </div>
  );
};

export default Home;
