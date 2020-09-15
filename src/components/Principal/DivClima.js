import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

const DivClima = ({ clima }) => {
  if (clima.cod === 200) {
    console.log(clima);
  }

  return (
    <Container>
      <Row className="d-flex align-self-center">
        <p className="mr-5 align-self-center divisas mt-3"><b>{clima.name}</b></p>
        <Row>
          {Object.entries(clima).length !== 0 ? (
            <img
              src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
              alt={clima.weather[0].description}
              className="pt-1"
            ></img>
          ) : null}

          {Object.entries(clima).length !== 0 ? (
            <p className="align-self-center divisas mt-3">
              <b>{clima.main.temp - 273.15} °C</b>
            </p>
          ) : null}
        </Row>
      </Row>
    </Container>
  );
};

export default DivClima;
