import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DivClima = ({ clima }) => {
    if (clima.cod === 200) {
        console.log(clima)
    }

    return (
        <div className="p-2">
            <h5>{clima.name}</h5>
            <Container fluid>
                <Row>
                    <Col md={5}> <img src={`http://openweathermap.org/img/wn/10d@2x.png`}></img> </Col>
                    <Col className="d-flex align-items-center"> 
                    {
                        (Object.entries(clima).length !== 0) ? <h3 className="mx-auto">{(clima.main.temp) - 273.15} °C</h3> : null
                    } 
                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default DivClima;