import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="text-dark navbar sticky-top px-2"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            className="w-25 px-4 img-fluid"
            src="https://static.vecteezy.com/system/resources/thumbnails/000/623/239/small/auto_car-16.jpg"
            alt=""
          />
          <Navbar.Brand className="text-white">Tour Car.com</Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bolder text-white ps-3" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              className="fw-bolder text-white ps-3"
              as={Link}
              to="/cars"
            >
              Rent A Car
            </Nav.Link>
            <Nav.Link
              className="fw-bolder text-white ps-3"
              as={Link}
              to="/contact"
            >
              Contact Us
            </Nav.Link>

            {user.email && (
              <NavDropdown
                className="fw-bolder ps-3"
                title={<span className="text-white my-auto">Dashboard</span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/myBookings">
                  My Bookings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/allBookings">
                  All Bookings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/addCar">
                  Add A Car
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}

            {!user.email && (
              <Nav.Link
                className="fw-bolder text-white px-3 bg-danger rounded-3"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}

            {user.email && (
              <Navbar.Text className="fw-bolder text-white px-3">
                Signed in as: {user.displayName}
              </Navbar.Text>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
