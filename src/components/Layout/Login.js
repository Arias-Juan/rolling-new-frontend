import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

const Login = () => {
  return (
    // <Row>
      <Col xs={5} className="mx-auto my-5">
        <Card>
          <Card.Header className="bg-dark"><h5 className="text-light">Iniciar sesión</h5></Card.Header>
          <Card.Body>
          <h6 className="text-center">
                Con su red social
            </h6>
            <div className="text-center">
                <FaFacebook/>
                <FaTwitter/>
                <SiGmail/>
            </div>
            <hr />
            <h6 className="text-center my-5">
                O con su correo electrónico y contraseña de Rolling New
            </h6>
            <Form className="">
              <Form.Group controlId="formBasicEmail">
                <Form.Control  type="email" placeholder="Correo electrónico *" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contraseña *" />
              </Form.Group>
              <div className="d-flex justify-content-between mt-5" >
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordar mi cuenta" />
                </Form.Group>
                <Card.Link href="#">¿Olvidó su contraseña?</Card.Link>
              </div>
              <Button variant="primary" size="lg" block type="submit">
                Enviar
              </Button>
            </Form>
            <hr/>
            <Button className="mt-5" variant="primary" size="lg" block type="submit">
                Crear una nueva cuenta
              </Button>
          </Card.Body>
        </Card>
      </Col>
    // </Row>
  );
};

export default Login;
