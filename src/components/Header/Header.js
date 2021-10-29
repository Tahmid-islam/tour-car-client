import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
            {user.email ? (
              <Nav.Link onClick={logOut} className="fw-bolder text-white px-3">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                className="fw-bolder text-white px-3 bg-danger rounded-3"
                as={Link}
                to="/login"
              >
                Login <i class="fas fa-sign-in-alt"></i>
              </Nav.Link>
            )}
          </Nav>
          {user.email && (
            <Navbar.Text className="fw-bolder text-white px-3">
              Signed in as: {user.displayName}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
