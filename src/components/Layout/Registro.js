import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Label from "react-bootstrap/FormLabel";
import Alert from "react-bootstrap/Alert";

const Registro = () => {
  const [registro, setRegistro] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
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
    <Col lg={8} className="mx-auto my-5">
      <Card className="border border-dark">
        <Card.Header className="bg-dark text-center">
          <h5 className="text-light">REGISTRO</h5>
        </Card.Header>
        <Card.Body>
          <h6 className="text-center">
            Crea tu cuenta para poder participar activamente de Rolling News con
            tu email y contraseña.
          </h6>
          <hr className="lineaHR mb-4" />
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
                placeholder="Repeti nuevamente la contraseña..."
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
            <Button variant="dark" size="lg" block type="submit">
              Registrarse
            </Button>
          </Form>
          <hr className="lineaHR" />
          {error ? (
            <Alert variant="danger">¡Todos los campos son obligatorios!</Alert>
          ) : null}
          {errorPassword ? (
            <Alert variant="danger">Las contraseñas deben coincidir.</Alert>
          ) : null}
          {errorCheck ? (
            <Alert variant="danger">
              Debe aceptar los terminos y condiciones.
            </Alert>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Registro;
