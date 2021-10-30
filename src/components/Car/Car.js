import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Car.css";

const Car = (props) => {
  const { car } = props;
  const { _id, name, img, daily_rent } = car;
  const history = useHistory();
  const handleBookNow = (id) => {
    history.push(`/carsDetails/${id}`);
  };
  return (
    <div>
      <Col className="h-100 container card-container">
        <Card
          className="h-100 card rounded-3"
          style={{ backgroundColor: "#ecf0f1" }}
        >
          <Card.Img className="img-fluid" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>{daily_rent}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <button
              onClick={() => handleBookNow(_id)}
              className="btn btn-danger rounded-3"
            >
              Book Now <i className="fas fa-chevron-right"></i>
            </button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Car;
