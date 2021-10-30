import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((result) => setBookings(result));
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw" }} className="container mt-5">
      <div className="row">
        <h3 className="pb-2 text-center fw-bold text-danger">All Bookings</h3>
        <hr />
        <div className="table-responsive-sm">
          <table className="table table-dark table-striped">
            <thead>
              <tr className="text-center">
                <th scope="col">Name</th>
                <th scope="co">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Car Name</th>
                <th scope="col">Rent Type</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.carId} className="text-center">
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.address}</td>
                  <td>{booking.car_name}</td>
                  <td>{booking.rent_type}</td>
                  <td>{booking.status}</td>
                  <td>X</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllBookings;
