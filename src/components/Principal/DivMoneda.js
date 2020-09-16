import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

const DivMoneda = (props) => {
  //console.log(props.ratesAPI);
  return (
    <Container className="d-flex justify-content-between text-light divisas">
      <Row>
        <p className="text-center">
          DÓLAR <strong>{`$${Math.pow(props.ratesAPI.USD, -1).toFixed(2)}`} </strong>
        </p>
      </Row>
      <Row>
        <p className="text-center">
        EURO <strong>{`$${Math.pow(props.ratesAPI.EUR, -1).toFixed(2)}`} </strong>
        </p>
      </Row>
      <Row>
        <p className="text-center">
        REAL <strong>{`$${Math.pow(props.ratesAPI.BRL, -1).toFixed(2)}`} </strong>
        </p>
      </Row>
    </Container>
  );
};

export default DivMoneda;
