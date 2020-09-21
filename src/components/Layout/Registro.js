import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Label from "react-bootstrap/FormLabel";
import Alert from "react-bootstrap/Alert";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Registro = () => {
  const [registro, setRegistro] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordLength, setErrorPasswordLength] = useState(false);
  const [errorCheck, setErrorCheck] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setRegistro({
      ...registro,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document.getElementById("registroPassword").value);
    // validaciones
    if (
      registro.nombre.trim() === "" ||
      registro.apellido.trim() === "" ||
      registro.correo.trim() === "" ||
      registro.password.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    if (document.getElementById("registroPassword").value.length < 8) {
      setErrorPasswordLength(true);
      return;
    }
    setErrorPasswordLength(false);
    if (
      document.getElementById("registroPassword").value !==
      document.getElementById("registroPassword2").value
    ) {
      setErrorPassword(true);
      return;
    }
    setErrorPassword(false);
    if (document.getElementById("registroCheck").checked === false) {
      setErrorCheck(true);
      return;
    }
    setErrorCheck(false);
    // Envio a API
    console.log("success");
    // aca podriamos poner un props.history.push("/login")
    // consultarAPI();
  };

  return (
    <div className="bg-login py-5">
      <Col lg={8} className="mx-auto">
        <Card className="shadow">
          <Card.Body>
            <h5 className="titulo-card text-center mb-3">REGISTRO</h5>
            <h6 className="text-center mt-2">
              Crea tu cuenta para poder participar activamente de Rolling News
              con tu email y contraseña.
            </h6>
            <hr className="my-3" />
            <Link
                className="text-center naranja-rn"
                exact={true}
                to="/login"
              >
                <p>
                  <i>¿Ya tienes una cuenta? Ingresa pulsando aqui</i>
                </p>
              </Link>
            {error ? (
                <Alert variant="danger">
                  ¡Todos los campos son obligatorios!
                </Alert>
              ) : null}
              {errorPassword ? (
                <Alert variant="danger">Las contraseñas deben coincidir.</Alert>
              ) : null}
              {errorCheck ? (
                <Alert variant="danger">
                  Debe aceptar los terminos y condiciones.
                </Alert>
              ) : null}
              {errorPasswordLength ? (
                <Alert variant="danger">
                  Tu contraseña debe tener 8 o mas caracteres.
                </Alert>
              ) : null}
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col xs={12} lg={6}>
                  <Form.Group controlId="registroNombre">
                    <Label>Nombre*</Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre..."
                      className="red-input"
                      name="nombre"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6}>
                  <Form.Group controlId="registroApellido">
                    <Label>Apellido*</Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu apellido..."
                      className="red-input"
                      name="apellido"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group controlId="registroCorreo">
                <Label>Correo Electronico*</Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email..."
                  className="red-input"
                  name="correo"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="registroPassword">
                <Label>Contraseña*</Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa la contraseña que usaras para entrar al sitio..."
                  className="red-input"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="registroPassword2">
                <Label>Repetir contraseña*</Label>
                <Form.Control
                  type="password"
                  placeholder="Repeti la contraseña..."
                  className="red-input"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="registroCheck">
                <Form.Check
                  type="checkbox"
                  label="Acepto los terminos y condiciones de Rolling News"
                />
              </Form.Group>
              <Button variant="dark" size="lg"  type="submit" className="btn-rn my-3">
                Registrarse
              </Button>
            </Form>
            <hr></hr>
            <div>
                <Link
                  className="btn btn-danger btn-block rounded-pill mt-4"
                  to="/*"
                >
                  <FaGoogle /> &nbsp; Ingresar con Google
                </Link>
                <Link
                  className="btn btn-primary btn-block rounded-pill my-4"
                  to="/*"
                >
                  <FaFacebook /> &nbsp; Ingresar con Facebook
                </Link>
              </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Registro;
