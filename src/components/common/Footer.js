import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router-dom";
import logoFooter from "../../img/Principal/logo-footer.svg";

const Footer = () => {
  return (
    <Fragment>
      <Container fluid className="pre-footer py-4 text-light">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h3>Suscribite al Newsletter</h3>
              <p className="lead">
                Recibi lo mejor de rollingNews en tu casilla de E-mail
              </p>
            </Col>
            <Col sm={12} md={6}>
              <Container>
                <div className="text-center">
                  <div className="d-flex justify-content-center align-self-center my-2">
                    <Link className="text-dark pre-footer-btn">
                      {" "}
                      <strong>
                        <MdEmail></MdEmail>
                      </strong>{" "}
                      Quiero Suscribirme
                    </Link>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <footer className="rn-footer pt-4 pb-3">
        <Container fluid>
          <Container>
            <Row className="d-flex justify-content-center">
              <Col sm={12} md={3}>
                <img
                  className="logo-footer"
                  src={logoFooter}
                  width="200rem"
                  alt="rollingNews logo"
                />
                <div className="mb-3">
                  <a
                    className="boton-footer mr-2"
                    href="https://fb.com"
                    target="blank_"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="boton-footer mx-2"
                    href="https://twitter.com"
                    target="blank_"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="boton-footer mx-2"
                    href="https://instagram.com"
                    target="blank_"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="boton-footer mx-2"
                    href="https://web.whatsapp.com"
                    target="blank_"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
                <div className="mt-2">
                  <Link className="link-footer" exact={true} to="/*">
                    Politica de privacidad
                  </Link>
                  <br></br>
                  <Link className="link-footer" exact={true} to="/*">
                    politica de Cookies
                  </Link>
                  <br></br>
                  <Link className="link-footer" exact={true} to="/*">
                    legales
                  </Link>
                </div>
              </Col>
              <Col sm={12} md={4} className="mt-3 mx-4">
                <p className="text-footer">secciones</p>
                <Row>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/actualidad"
                  >
                    Actualidad
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/tecnologia"
                  >
                    Tecnologia
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/politica"
                  >
                    Politica
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/deporte"
                  >
                    Deporte
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/espectaculo"
                  >
                    Espectaculo
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/salud"
                  >
                    Salud
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/categorias/fotografia"
                  >
                    Fotografia
                  </Link>
                  <Link className="link-footer mx-3 my-1" exact={true} to="/*">
                    Ayuda
                  </Link>
                </Row>
              </Col>
              <Col sm={12} md={4} className="mt-3">
                <p className="text-footer">nosotros</p>
                <Row>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/nosotros"
                  >
                    Acerca de Nosotros
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/contacto"
                  >
                    Contacto
                  </Link>
                  <Link
                    className="link-footer mx-3 my-1"
                    exact={true}
                    to="/*"
                  >
                    Trabajos
                  </Link>
                </Row>
              </Col>
            </Row>
        <hr className="hr-w"></hr>
        <p className="text-light text-center">Hecho con ❤️ por Comision 1A de Rolling Code - &copy; Todos los Derechos Reservados</p>
          </Container>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
