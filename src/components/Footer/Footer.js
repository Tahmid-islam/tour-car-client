import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 pb-2 container-fluid">
      <div className="row g-4">
        <div className=" col-12 col-lg-9">
          <div className="row">
            <div className="col-md-7">
              <h1 className="px-3">About Us</h1>
              <p className="about-text px-3">
                Tour Car is popular in Bangladesh for quality service. We are
                offering a wide range of vehicle e.g. cars, micro bus, and
                commercial vehicles for rent. Whether you are a traveler, moving
                home or planning a trip, our rent a car has the right vehicle
                choice for you.
              </p>
            </div>
            <div className="col-md-5 px-4">
              <div className="row g-4">
                <div className="col-md-6 explore">
                  <h5 className="fw-bold">Explore</h5>
                  <NavLink className="nav" to="/">
                    Home
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/blog">
                    Blogs
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/contact">
                    Contact Us
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Cars
                  </NavLink>
                </div>

                <div className="col-md-6 legal">
                  <h5 className="fw-bold">Legal</h5>
                  <NavLink className="nav" to="/">
                    Terms & Condition
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Privacy policy
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Return policy
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 g-4">
          <h5 className="text-center fw-bold">Connect With Us</h5>
          <div className="footer-icons text-center">
            <NavLink to="/">
              <i className="fab fa-facebook fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-twitter fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-linkedin fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-instagram fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-github fs-1 text-white px-2"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <p className="py-2 fs-5 fw-bolder">
          Copyright &copy; {new Date().getFullYear()} Tour Car.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
