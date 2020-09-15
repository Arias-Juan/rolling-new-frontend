import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router-dom";
import logoFooter from "../../img/Principal/logo-footer.svg";
import logoEncabezado from "../../img/Principal/logo-encabezado.svg";

const Footer = () => {
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
          if(result.test === "OK"){
            setMailEnviado(true);
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            document.getElementById("form").reset();
            handleClose();
            alert("Su suscripcion ha sido aceptada. Revisar casilla de correo.")
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
                    <Link className="text-dark pre-footer-btn" onClick={handleShow}>
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
        <p className="text-light text-center">Hecho con ❤ por Comision 1A de Rolling Code - &copy; Todos los Derechos Reservados</p>
          </Container>
        </Container>
      </footer>
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
            <Alert variant={"danger"}>Completar los datos obligatorios (*)</Alert>
          ) : null}
          {mailEnviado ? ( //si el state error es verdadero
            <Alert variant={"success"}>Tu suscripcion ha sido registrada con exito!</Alert>
          ) : null}
          {mailError ? ( //si el state error es verdadero
            <Alert variant={"warning"}>Ha ocurrido un error, por favor volver a intentarlo luego.</Alert>
          ) : null}
          <Form className="mb-4" onSubmit={handleSubmit} id="form">
            <Form.Group controlId="formBasicEmail">
              <Row>
                <Col>
                  <Form.Control placeholder="(*)Nombre" onChange={(e) => {setNombre(e.target.value)}}/>
                </Col>
                <Col>
                  <Form.Control placeholder="(*)Apellido" onChange={(e) => {setApellido(e.target.value)}}/>
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
              <Form.Control type="text" placeholder="(*)Telefono" onChange={(e) => {setTelefono(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="(*)E-Mail" onChange={(e) => {setEmail(e.target.value)}}/>
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
            exact={true}
            to="/*"
          >
            <FaGoogle/> &nbsp; Suscribirse con Google
          </Link>
          <Link
            className="btn btn-primary btn-block rounded-pill my-4"
            exact={true}
            to="/*"
          >
            <FaFacebook/> &nbsp; Suscribirse con Facebook
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
    </Fragment>
  );
};

export default Footer;
