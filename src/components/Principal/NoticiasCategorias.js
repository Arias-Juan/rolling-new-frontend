import React from 'react';
import CardCategoria from './CardCategoria';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

const NoticiasCategorias = () => {
    return (
        <div className="p-3 mb-3">
            <Container fluid>
                <Row className="d-flex justify-content-around">
                    <CardCategoria></CardCategoria>
                    <CardCategoria></CardCategoria>
                    <CardCategoria></CardCategoria>
                    <CardCategoria></CardCategoria>
                </Row>
            </Container>
        </div>
    );
};

export default NoticiasCategorias;