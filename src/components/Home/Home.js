import React from "react";
import Banners from "../Banners/Banners";
import Cars from "../Cars/Cars";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#ecf0f1" }}>
      <Banners />
      <Cars></Cars>
    </div>
  );
};

export default Home;
