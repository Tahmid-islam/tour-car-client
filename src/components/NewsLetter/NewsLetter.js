import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter text-center m-4 p-4 rounded-3 border border-danger">
      <h4 className=" fw-bolder fs-4 p-4">NEWSLETTER</h4>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <p className="fs-1">Subscribe to get latest car update for tour</p>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="input-group rounded-3 pt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-dark" type="button" id="button-addon2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
