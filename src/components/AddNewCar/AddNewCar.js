import React from "react";
import { useForm } from "react-hook-form";

const AddNewCar = () => {
  const { register, handleSubmit, reset } = useForm();
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
    <div
      style={{ height: "100vh" }}
      className="container border mt-3 shadow rounded-3"
    >
      <div className="pt-5">
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
  );
};

export default AddNewCar;
