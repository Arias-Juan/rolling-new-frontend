import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Login = () => {
  const [mailLogin, setMailLogin] = useState("");
  const [contraLogin, setContraLogin] = useState("");
  const [error, setError] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("desde el handle y boton ingresar");

    const expresion = /\w+@\w+\.[a-z]/;

    if (mailLogin.trim() === "") {
      e.target.className = "form-control is-invalid";
      setError(true);
      return;
      // console.log("form control invalido")
    } else {
      e.target.className = "form-control is-valid";
      setError(false);
    };

    if(contraLogin.trim() === "") {
        e.target.className = "from-control is-invalid";
        
        setError(false);
        return;
        // console.log("form control invalido")
      } else {
        e.target.className = "from-control is-valid";
        setError(true);
      };
  };

  return (
      <Col xs={12} lg={5} className="mx-auto my-5">
        <Card className="border border-dark">
          <Card.Header className="bg-dark">
            <h5 className="text-light">Iniciar sesión</h5>
          </Card.Header>
          <Card.Body className="">
            <h6 className="text-center">Con su red social</h6>
            <div className="text-center">
              <FaFacebook size="50" className="mx-2 iconFb" />
              <FaTwitter size="50" className="mx-2 icontw" />
              <SiGmail size="50" className="mx-2 iconGmail" />
            </div>
            <hr className="border border-dark" />
            <h6 className="text-center my-5">
              O con su correo electrónico y contraseña de Rolling New
            </h6>
            <Form onSubmit={handlesubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico *"
                  className="border border-dark"
                  onChange={(e) => setMailLogin(e.target.value)}
                />
                <div className="valid-feedback">Todo bien</div>
                <div className="invalid-feedback">Ingrese un correo valido</div>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Contraseña *"
                  className="border border-dark"
                  onChange={(e) => setContraLogin(e.target.value)}
                />
                <div className="valid-feedback">Todo bien</div>
                <div className="invalid-feedback">Ingrese una contraseña valida</div>
              </Form.Group>

              {/* {error ? (
                            <Alert variant={"danger"}>
                                Los datos ingresados son incorrectos
                            </Alert>
                        ) : null} */}

              <div className="d-flex justify-content-between mt-5">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordar mi cuenta" />
                </Form.Group>
                <Card.Link href="#">¿Olvidó su contraseña?</Card.Link>
              </div>
              <Button variant="primary" size="lg" block type="submit">
                Ingresar
              </Button>
            </Form>
            <hr className="border border-dark" />
            <Button
                        className="mt-5"
                        variant="success"
                        size="lg"
                        block
                        type="submit"
                    >
                        Crear una nueva cuenta
          </Button>
          </Card.Body>
        </Card>
      </Col>
  );
};
export default Login;
