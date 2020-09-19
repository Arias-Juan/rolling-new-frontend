import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Link from "react-bootstrap/Link";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Row } from "react-bootstrap";

const Login = () => {
  const [logg, setLogg] = useState({});
  const [pass, setPass] = useState({});

  const luciano = "luciano@gmail.com",
    juand = "juand@gmail.com",
    lucas = "lucas@gmail.com",
    contraUserAdm = "rolling12";

  // const mailVerif = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const passVerif = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde el boton enviar");
    // validar datos
    if (logg === luciano || logg === juand || logg === lucas) {
      console.log("todo ok");
      setLogg((e.target.className = "form-control is-valid"));
    } else {
      console.log("todo no");
      setLogg((e.target.className = "form-control is-invalid"));
    }

    if (pass === contraUserAdm) {
      console.log("contaseña ok");
      setPass((e.target.className = "form-control is-valid"));
    } else {
      console.log("contaseña no");
      setPass((e.target.className = "form-control is-invalid"));
    }
  };

  return (
    <Row className="d-flex justify-content-center">
    <Col xs={12} lg={6} className="mx-auto my-5">
      <div className="container">
        <div>
          <h5 className="text-light">Iniciar sesión</h5>
        </div>
        <div>
          <h6 className="text-center">Con su red social</h6>
        </div>
        <div className="text-center">
          <FaFacebook className="iconFB mx-1" size="50" />
          <FaTwitter className="iconTW mx-1" size="50" />
          <SiGmail className="iconGM mx-1" size="50" />
        </div>
        <div>
          <hr className="lineaHR" />
          <h6 className="text-center my-5">
            O con su correo electrónico y contraseña de Rolling New
          </h6>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Correo electrónico *"
              onChange={(e) => {
                setLogg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Contraseña *"
              onChange={(e) => {
                setPass(e.target.value)
               setPass(e);
              }}
            />
          </Form.Group>
          <div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar mi cuenta" />
            </Form.Group>
            <Card.Link href="#">¿Olvidó su contraseña?</Card.Link>
          </div>
          <Button variant="primary" size="lg" block type="submit">
            Ingresar
          </Button>
        </Form>
          <hr className="lineaHR" />
          <div>
            <Button
              className="mt-5"
              variant="success"
              size="lg"
              block
              type="button"
            >
              Crear una nueva cuenta
            </Button>
          </div>
      </div>
    </Col>
    </Row>
  );
};

export default Login;
