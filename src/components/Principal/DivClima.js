import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DivClima = ({ clima }) => {
    if (clima.cod === 200) {
        console.log(clima)
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={6} className="d-flex align-items-center">
                    <p className='m-0 lugarClima'>{clima.name}</p>
                </Col>
                <Col xs={6} className="text-center columnaClima">
                    {(Object.entries(clima).length !== 0) ? <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description}></img> : null}

                    {
                        (Object.entries(clima).length !== 0) ? <p className="mx-auto temperaturaClima">{(clima.main.temp) - 273.15} °C</p> : null
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default DivClima;