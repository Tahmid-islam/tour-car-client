import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Rotate } from "react-reveal";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Rotate bottom right>
      <div style={{ height: "100vh" }} className="row container mx-auto mt-3">
        <div className="col-md-6">
          <img
            className="img-fluid pt-4"
            src="https://i.ibb.co/ydr86vT/undraw-contact-us-15o2.png"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h3 className="py-2 text-center fw-bold text-danger">Contact Us</h3>
          <hr />
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bolder text-danger">
                Your Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Your Message....."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bolder text-danger">
                Email address
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <button className="btn btn-danger text-center">Submit</button>
          </Form>
        </div>
      </div>
    </Rotate>
  );
};

export default Contact;
