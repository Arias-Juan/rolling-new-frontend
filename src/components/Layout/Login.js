import React, { useState, Fragment } from "react";
import Card from "react-bootstrap/Card";
import { Link, Route } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "../../categorias.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Redirect } from 'react-router';



const Login = () => {
  const [error, setError] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [administrador, setAdministrador] = useState(false);

  //para validaciones


  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones para campos vacios
    if (document.getElementById("formBasicEmail").value.trim() === "" || document.getElementById("formBasicPassword").value.trim() === "") {
      setError(true);
      return
    }
    //valdacion para email en formato incorrecto
    const mailVerif = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (mailVerif.test(document.getElementById("formBasicEmail").value)) {
      setErrorMail(true);
      return
    }
    setError(false)
    //validaciones para administrador
    if ((document.getElementById("formBasicEmail").value === "admin@admin.com") && (document.getElementById("formBasicPassword").value === "rolling")) {
      setAdministrador(true);
      return
    }
    
  }
  console.log(administrador)
  return (
    <div className="bg-login py-5">
      <div className="container">
        <div className="d-flex justify-content-center">
          <Card className="shadow p-2">
            <Card.Body>
              <h5 className="titulo-card text-center">Ingresar</h5>
              <hr></hr>
              <Link
                className="text-center naranja-rn"
                exact={true}
                to="/registro"
              >
                <p>
                  <i>¿Todavia no tienes una cuenta? Registrate aqui</i>
                </p>
              </Link>
              {(error) ?
                (<Alert variant={'danger'}>
                  Todos los campos son obligatorios.
                </Alert>)
                : null}
              {(errorMail) ?
                (<Alert variant={'danger'}>
                  El email ingresado no es válido
                </Alert>)
                : null}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <b>Email</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="micorreo@dominio.com"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    <b>Contraseña</b>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-rn my-3">
                  Ingresar
                  {(administrador) ?
                (<Redirect push to="/administracion" />)
                : null}
                  
                </Button>
                <hr></hr>
              </Form>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
