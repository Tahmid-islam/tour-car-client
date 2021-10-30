import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Booking from "../Booking/Booking";

const CarDetails = () => {
  const { carId } = useParams();
  const [carData, setCarData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCarData(data));
  }, []);

  const { name, img, passengers, condition, daily_rent, monthly_rent } =
    carData;
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-12">
          <h3 className="text-center text-danger fw-bolder">Rent {name}</h3>
          <img className="img-fluid" src={img} alt="" />
          <p className="pt-4">
            <span className="fw-bold">Vehicies detail:</span> {name}
          </p>
          <p>
            <span className="fw-bold">Number of passengers can take:</span>{" "}
            {passengers} (including driver)
          </p>
          <p>
            <span className="fw-bold">Condition:</span> {condition}
          </p>
          <p>
            <span className="fw-bold">Daily Rent:</span> {daily_rent}
          </p>
          <p>
            <span className="fw-bold">Monthly Rent:</span> {monthly_rent}
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <Booking carData={carData}></Booking>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
