import React from "react";

const ChooseUs = () => {
  return (
    <div className="container shadow-sm border border-1 my-4 rounded-3">
      <h3 className="text-center fw-bold pt-5 text-danger">Why Choose Us</h3>
      <hr />
      <div className="row">
        <div className="col-md-3 p-4 rounded-3">
          <h6 className="fw-bold">
            <i class="fas fa-tags"></i> WE OFFER AFFORDABLE PRICE
          </h6>
          <p>
            If you hire a car from us which would be affordable for you because
            there is no hidden charges. We are open to our clients.
          </p>
        </div>
        <div className="col-md-3 p-4 rounded-3">
          <h6 className="fw-bold">
            <i class="fas fa-bullseye"></i> WIDE RANGE OF SERVICES
          </h6>
          <p>
            In our fleet we have 20 premium cars, micro bus, pick up, ambulance
            as well as truck, covered van and commercial vehicles.
          </p>
        </div>
        <div className="col-md-3 p-4 rounded-3">
          <h6 className="fw-bold">
            <i class="far fa-comments"></i> DEDICATED SUPPORT
          </h6>
          <p>
            Tour car driver will provide you the faithful support. They always
            have been committed to you. You can use the driver as you need.
          </p>
        </div>
        <div className="col-md-3  p-4 rounded-3">
          <h6 className="fw-bold">
            <i class="far fa-clipboard"></i> ENSURE SECURITY
          </h6>
          <p>
            Tour car always try to ensure top security for the passengers. For
            ensuring security zoom car rental always track the vehicle by using
            devices across the country.s
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
