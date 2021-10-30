import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Car from "../Car/Car";
import "./Cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beach-43388.herokuapp.com/cars")
      .then((res) => res.json())
      .then((result) => setCars(result));
  }, []);

  return (
    <div className="cars-container container">
      <h3 className="text-center fw-bold pt-5 text-danger">
        Our Cars For Rent
      </h3>
      <hr />
      <Row xs={1} md={2} lg={3} className="g-4">
        {cars.map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </Row>
    </div>
  );
};

export default Cars;
