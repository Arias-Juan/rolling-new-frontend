import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

const DivMoneda = (props) => {
  //console.log(props.ratesAPI);
  return (
    <Container className="d-flex justify-content-between text-light divisas">
      <Row>
        <p>DÓLAR</p>
        <p className="ml-3">
          <strong>{`$${Math.pow(props.ratesAPI.USD, -1).toFixed(2)}`} </strong>
        </p>
      </Row>
      <Row>
        <p>EURO</p>
        <p className="ml-3">
          <strong>{`$${Math.pow(props.ratesAPI.EUR, -1).toFixed(2)}`} </strong>
        </p>
      </Row>
      <Row>
        <p>REAL</p>
        <p className="ml-3">
          <strong>{`$${Math.pow(props.ratesAPI.BRL, -1).toFixed(2)}`} </strong>
        </p>
      </Row>
    </Container>
  );
};

export default DivMoneda;
