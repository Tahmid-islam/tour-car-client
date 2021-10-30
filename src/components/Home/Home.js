import React from "react";
import Banners from "../Banners/Banners";
import Cars from "../Cars/Cars";
import ChooseUs from "../ChooseUs/ChooseUs";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banners />
      <Cars></Cars>
      <ChooseUs></ChooseUs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
