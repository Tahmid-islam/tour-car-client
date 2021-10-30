import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = ({ carData }) => {
  const { user } = useAuth();
  const { _id, name, img } = carData;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = {
      carId: _id,
      ...data,
      status: "Pending",
      img,
      car_name: name,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Booking Processed Successfully");
          reset();
        }
      });
  };

  return (
    <div className="pt-5">
      <h3 className="text-center text-danger fw-bold">Booking Form</h3>
      <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-3 form-control"
          {...register("name", { required: true })}
          placeholder="Enter Your Name"
        />
        <input
          className="mt-3 form-control"
          type="email"
          {...register("email", { required: true })}
          defaultValue={user.email}
          placeholder="Enter Your Email"
          readOnly
        />
        <input
          className="mt-3 form-control"
          type="tel"
          {...register("phone", { required: true })}
          placeholder="Enter Your Phone Number"
        />

        <select
          className="mt-3 form-select"
          {...register("rent_type", { required: true })}
        >
          <option value="">Rent Type</option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
        </select>
        <input
          className="mt-3 form-control"
          {...register("address", { required: true })}
          placeholder="Enter Your Address"
        />
        <input className="btn btn-danger mt-3" type="submit" />
      </form>
    </div>
  );
};

export default Booking;
