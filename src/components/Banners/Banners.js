import React from "react";
import "./Banner.css";

const Banners = () => {
  return (
    <div className="banner">
      <div className="my-5 me-5 pe-5 pt-5 text-white container">
        <h1 className="fw-bold">Book Your Tour Car Through Our Website</h1>
        <p className="fs-4 pt-1">
          <i className="fas fa-dollar-sign text-danger px-2"></i> Best Price
          Guaranteed
        </p>
        <p className="fs-4 pt-1">
          <i className="fas fa-car text-danger px-1"></i> Home Pick Ups
        </p>
        <p className="fs-4 pt-1">
          <i className="fas fa-laptop text-danger px-1"></i> Easy Bookings For
          Tour
        </p>
        <p className="fs-4 pt-1">
          <i className="fas fa-headphones-alt text-danger px-1"></i> 24/7
          Customer Care
        </p>
      </div>

      <div className="text-white py-5 my-5 container"></div>
    </div>
  );
};

export default Banners;
