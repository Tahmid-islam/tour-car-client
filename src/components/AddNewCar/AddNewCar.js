import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddNewCar = () => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Car Added Successfully");
          reset();
        }
      });
  };

  return (
    <div className="container mt-3 row">
      <div className="col-12 col-md-5">
        <img
          className="img-fluid"
          src="https://i.ibb.co/pntQDgw/undraw-order-a-car-3tww.png"
          alt=""
        />
      </div>
      <div className="col-12 col-md-7">
        <div className="mx-auto ps-4">
          <h3 className="text-center text-danger fw-bold">Add A Car</h3>
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mt-3 form-control"
              {...register("name", { required: true })}
              placeholder="Enter Car Name"
            />
            <input
              className="mt-3 form-control"
              type="number"
              {...register("passengers", { required: true })}
              placeholder="Enter Total Passenger Number"
            />
            <input
              className="mt-3 form-control"
              {...register("condition", { required: true })}
              placeholder="Enter Car Condition Details"
            />
            <input
              className="mt-3 form-control"
              {...register("daily_rent", { required: true })}
              placeholder="Enter Car Daily Rental Details"
            />
            <input
              className="mt-3 form-control"
              {...register("monthly_rent", { required: true })}
              placeholder="Enter Car Monthly Rental Details"
            />
            <input
              className="mt-3 form-control"
              {...register("img")}
              placeholder="Enter Image URL"
            />

            <input
              className="btn btn-danger mt-3 w-25 mx-auto rounded-3"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCar;
