import React from "react";
import "./FooterBanner.css";

const FooterBanner = () => {
  return (
    <div>
      <div className="d-flex container text-center">
        <div class="bg1 p-2 m-2 rounded-3 shadow-lg border border-danger">
          <div className="p-1">
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2016/96/iconmonstr-car-1.png"
              alt=""
            />
            <h4 className="text-bolder">Want to hire a economy car?</h4>
            <p>
              We are offering you a wide range of vehicle e.g. cars, micro bus,
              pick up, commercial vehicles for rent. Whether you are a traveler,
              moving home or planning a trip, Tour car has the right vehicle
              choice for you.
            </p>
          </div>
        </div>
        <div class="bg1 p-2 m-2 rounded-3 shadow-lg border border-danger">
          <div class="p-1">
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2016/96/iconmonstr-car-3.png"
              alt=""
            />
            <h4 className="text-bolder">Want to hire a luxurious car?</h4>
            <p>
              If you want to hire a luxurious car, micro bus or any other
              vehicle please make us call and schedule your appointment today!
              We will arrange your desirable vehicle with affordable price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
