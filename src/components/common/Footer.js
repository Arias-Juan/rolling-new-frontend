import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {MdEmail} from "react-icons/md"
import "../../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <Container fluid className="pre-footer py-5 text-light">
        <Row>
          <Col className="text-center">
            <h1>Suscribite al Newsletter</h1>
            <p className="lead">
              Recibi lo mejor de rollingNews en tu casilla de E-mail
            </p>
            <Container>
              <div className="text-center">
                <div className="d-flex justify-content-center">
                    <Link className="text-dark pre-footer-btn"> <strong><MdEmail></MdEmail></strong> Quiero Suscribirme</Link>
                </div>
                <p className="mt-3 tyc"><i>Registrarse implica aceptar los Terminos y Condiciones</i></p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <footer></footer>
    </Fragment>
  );
};

export default Footer;
