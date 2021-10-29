import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Car.css";

const Car = (props) => {
  const { car } = props;
  const { name, img, daily_rent } = car;
  return (
    <div>
      <Col className="h-100 container">
        <Card className="h-100 card">
          <Card.Img className="img-fluid" variant="top" src={img} />
          <br />
          <br />
          <br />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{daily_rent}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <button className="btn btn-danger">Book Now</button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Car;
