import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  //Delete
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/bookings/${id}`;
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
    <div style={{ height: "100vh" }} className="container pt-5">
      <h3 className="pb-2 text-center fw-bold text-danger">My Bookings</h3>
      <hr />
      <div className="table-responsive-sm">
        <table className="table table-dark table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
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
  );
};

export default MyBookings;
