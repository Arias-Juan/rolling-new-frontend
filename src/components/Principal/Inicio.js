import React from 'react';
import ApiMoneda from './ApiMoneda';
import UltimasNoticias from './UltimasNoticias'
import ApiClima from './ApiClima';
import NoticiasCategorias from './NoticiasCategorias';
import BannerCovid from './BannerCovid';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Inicio = () => {
    return (
        <section>
            <Container fluid>
                <Row className="d-flex align-items-center justify-content-around">
                    <Col xs={4} className="columnaClima">
                        <ApiClima></ApiClima>
                    </Col>
                    <Col xs={8} className="columnaMoneda">
                        <ApiMoneda></ApiMoneda>
                    </Col>
                </Row>
            </Container>


            <div className="p-3 my-3 mx-5">
                <UltimasNoticias></UltimasNoticias>
                <UltimasNoticias></UltimasNoticias>
                <UltimasNoticias></UltimasNoticias>
            </div>

            <BannerCovid></BannerCovid>

            <div className="p-3 my-3 mx-5">
                <Container fluid>
                    <Row className="d-flex justify-content-around">
                        <Col md={8}>
                            <NoticiasCategorias className="shadow border rounded p-3"></NoticiasCategorias>
                        </Col>
                        <Col md={3}>
                            <h1>PUBLICIDAD</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Inicio;
