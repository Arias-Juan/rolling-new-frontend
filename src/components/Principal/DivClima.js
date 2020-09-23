import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

import Spinner from './Spinner'

const DivClima = ({ clima, loader }) => {

  //console.log(loader)
  const componenteCondicional = loader ? (
    <Spinner></Spinner>
  ) : (
      <Row className="d-flex align-self-center">
        <p className="mr-5 align-self-center divisas mt-3"><b>{clima.name}</b></p>
        <Row>
          {(Object.entries(clima).length !== 0) ?
            <img
              src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
              alt={clima.weather[0].description}
              className="pt-1"></img>
            : null}

          {
            (Object.entries(clima).length !== 0) ?
              <p className="align-self-center divisas mt-3">
                <b>{((clima.main.temp) - 273.15).toFixed(1)} °C</b>
              </p>
              : null
          }
        </Row>
      </Row>
    )

  return (
    <Container fluid>
      {componenteCondicional}
    </Container>
  );
};

export default DivClima;
