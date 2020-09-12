import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DivMoneda = (props) => {
    //console.log(props.ratesAPI);
    return (
        <div className="p-2 pre-footer text-light rounded shadow">
            <Container fluid>
                <Row className="pt-3">
                    <Col><h5 className="text-light">DÓLAR</h5></Col>
                    <Col><p className="text-light lead">Venta: <h2>{`$${Math.pow(props.ratesAPI.USD, -1).toFixed(2)}`}</h2></p></Col>
                </Row>
            </Container>
            <hr className="bg-light"></hr>

            <Container fluid>
                <Row className="pt-2">
                    <Col><h5 className="text-light">EURO</h5></Col>
                    <Col><p className="text-light lead">Venta: <h2>{`$${Math.pow(props.ratesAPI.EUR, -1).toFixed(2)}`}</h2></p></Col>
                </Row>
            </Container>
            <hr className="bg-light"></hr>

            <Container fluid>
                <Row className="py-2">
                    <Col><h5 className="text-light">REAL</h5></Col>
                    <Col><p className="text-light lead">Venta: <h2>{`$${Math.pow(props.ratesAPI.BRL, -1).toFixed(2)}`}</h2></p></Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default DivMoneda;