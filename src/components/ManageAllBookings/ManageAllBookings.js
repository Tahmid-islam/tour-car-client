import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  let count = 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("https://infinite-beach-43388.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((result) => setBookings(result));
  }, [bookings]);

  const handleUpdateStatus = (id) => {
    const proceed = window.confirm("Are you sure, you want to update status?");
    if (proceed) {
      const url = `https://infinite-beach-43388.herokuapp.com/bookings/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookings),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Status Update Successful");
          }
        });
    }
  };

  //Delete
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://infinite-beach-43388.herokuapp.com/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(remainingBookings);
          }
        });
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }} className="container mt-5">
      <div className="row">
        <h3 className="pb-2 text-center fw-bold text-danger">All Bookings</h3>
        <hr />
        <div className="table-responsive-sm">
          <table className="table table-dark table-striped">
            <thead>
              <tr className="text-center">
                <th scope="col">Serial</th>
                <th scope="col">Name</th>
                <th scope="co">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Car Name</th>
                <th scope="col">Rent Type</th>
                <th scope="col">Current Status</th>
                <th scope="col">Change Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.carId} className="text-center">
                  <td>{count++}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.address}</td>
                  <td>{booking.car_name}</td>
                  <td>{booking.rent_type}</td>
                  <td>{booking.status}</td>
                  <td>
                    <button
                      className="btn-sm btn-danger rounded-3"
                      onClick={() => handleUpdateStatus(booking._id)}
                    >
                      Approved
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-sm btn-danger rounded-3"
                      onClick={() => handleDeleteBooking(booking._id)}
                    >
                      X
                    </button>
                  </td>
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
