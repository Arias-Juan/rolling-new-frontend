import React, { Fragment, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { FaRegPaperPlane, FaGoogle, FaFacebook } from "react-icons/fa";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { FaRegPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import logoEncabezado from "../../img/Principal/logo-encabezado.svg";
import emailjs from "emailjs-com";
import "../../App.css";

const Header = () => {
  //ventana modal...
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///////////////////
  //states de los campos a validar
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false); //false no muestra la alerta...
  const [mailEnviado, setMailEnviado] = useState(false); //para ver si el mail se envio o nel...
  const [mailError, setMailError] = useState(false); //si hubo algun problema con emailjs...

  //definimos funcion a ejecutar cuando se realiza el submit..
  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos los datos...
    let expresion = /\w+@\w+\.[a-z]/;
    if (
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      telefono.trim() !== "" &&
      expresion.test(email)
    ) {
      setError(false);
      emailjs
        .sendForm(
          "rolling",
          "template_zl7N68yO",
          e.target,
          "user_KnTaYntx7WKFhyDt2wbC4"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(mailEnviado);
            if (result.test === "OK") {
              setMailEnviado(true);
              setNombre("");
              setApellido("");
              setEmail("");
              setTelefono("");
              document.getElementById("form").reset();
              handleClose();
              alert(
                "Su suscripcion ha sido aceptada. Revisar casilla de correo."
              );
            }
          },
          (error) => {
            console.log(error.text);
            setMailError(true);
            document.getElementById("form").reset();
          }
        );
    } else {
      setError(true);
      return;
    }
  };
  return (
    <Fragment>
      <div className="nb-margin">
        <Navbar bg="light" expand="lg" fixed="top">
          <Container className="divNavbar">
            <NavLink exact={true} to="/" className="mr-2">
              <img
                src={logoEncabezado}
                width="200rem"
                alt="React Bootstrap logo"
                className="logoEncabezado"
              />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink
                  exact={true}
                  to="/categorias/actualidad"
                  className="rn-nav-link mx-2"
                >
                  Actualidad
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/tecnologia"
                  className="rn-nav-link mx-2"
                >
                  Tecnologia
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/politica"
                  className="rn-nav-link mx-2"
                >
                  Politica
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/economia"
                  className="rn-nav-link mx-2"
                >
                  Economia
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/deportes"
                  className="rn-nav-link mx-2"
                >
                  Deportes
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/espectaculos"
                  className="rn-nav-link mx-2"
                >
                  Espectaculos
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/salud"
                  className="rn-nav-link mx-2"
                >
                  Salud
                </NavLink>
                <NavLink
                  exact={true}
                  to="/categorias/fotografia"
                  className="rn-nav-link mx-2"
                >
                  Fotografia
                </NavLink>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown
                  title="Mi Cuenta"
                  id="basic-nav-dropdown"
                  className="rn-nav-link"
                >
                  <NavDropdown.Item href="/login">Ingresar</NavDropdown.Item>
                  <NavDropdown.Item href="/registro">
                    Registrarse
                  </NavDropdown.Item>
                </NavDropdown>
                <button className="btn-rn-outline ml-2" onClick={handleShow}>
                  <FaRegPaperPlane />
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img
                src={logoEncabezado}
                width="200rem"
                alt="React Bootstrap logo"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <h4>Suscribite al Newsletter</h4>
              <p>
                Rellena el siguiente formulario y recibi en directo todas las
                noticias en tu casilla de correo
              </p>
              <p className="color-naranja">
                <i>(*)Campo Obligatorio</i>
              </p>
            </div>
            {error ? ( //si el state error es verdadero
              <Alert variant={"danger"}>
                Completar los datos obligatorios (*)
              </Alert>
            ) : null}
            {mailEnviado ? ( //si el state error es verdadero
              <Alert variant={"success"}>
                Tu suscripcion ha sido registrada con exito!
              </Alert>
            ) : null}
            {mailError ? ( //si el state error es verdadero
              <Alert variant={"warning"}>
                Ha ocurrido un error, por favor volver a intentarlo luego.
              </Alert>
            ) : null}
            <Form className="mb-4" onSubmit={handleSubmit} id="form">
              <Form.Group controlId="formBasicEmail">
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="(*)Nombre"
                      onChange={(e) => {
                        setNombre(e.target.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="(*)Apellido"
                      onChange={(e) => {
                        setApellido(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Direccion" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Row>
                  <Col>
                    <Form.Control placeholder="Codigo Postal" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Localidad" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="(*)Telefono"
                  onChange={(e) => {
                    setTelefono(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="(*)E-Mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Nosotros nunca compartiremos tus datos con nadie
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="(*) Acepto los Terminos y Condiciones"
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn-rn rounded-pill">
                  Enviar
                </Button>
              </div>
            </Form>
            <hr></hr>
            <Link
              className="btn btn-danger btn-block rounded-pill mt-4"
              to="/*"
            >
              <FaGoogle /> &nbsp; Suscribirse con Google
            </Link>
            <Link
              className="btn btn-primary btn-block rounded-pill my-4"
              to="/*"
            >
              <FaFacebook /> &nbsp; Suscribirse con Facebook
            </Link>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="rounded-pill"
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Header;
