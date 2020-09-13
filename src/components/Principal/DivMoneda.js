import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DivMoneda = (props) => {
    //console.log(props.ratesAPI);
    return (
        <Container fluid>
            <Row className="d-flex align-items-center text-light divisas">
                <Col xs={1} s={2} lg={1} className="p-0 text-center"><p>DÓLAR</p></Col>
                <Col xs={3} s={2} lg={3}>
                    <p className="p-0">Venta: <strong>{`$${Math.pow(props.ratesAPI.USD, -1).toFixed(2)}`} </strong></p>
                </Col>

                <Col xs={1} s={2} lg={1} className="p-0 text-center"><p>EURO</p></Col>
                <Col xs={3} s={2} lg={3}><p className="p-0">Venta: <strong>{`$${Math.pow(props.ratesAPI.EUR, -1).toFixed(2)}`} </strong></p></Col>

                <Col xs={1} s={2} lg={1} className="p-0 text-center"><p>REAL</p></Col>
                <Col xs={3} s={2} lg={3}><p className="p-0">Venta: <strong>{`$${Math.pow(props.ratesAPI.BRL, -1).toFixed(2)}`} </strong></p></Col>
            </Row>
        </Container>
    );
};

export default DivMoneda;