import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

const Login = () => {
  const [login, useLogin] = useState("");
  const [pass, usePass] = useState("");

  const mailVerif = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passVerif = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
      return (

    // <Row>
      <Col xs={12} lg={5} className="mx-auto my-5">
        <Card className="border border-dark">
          <Card.Header className="bg-dark"><h5 className="text-light">Iniciar sesión</h5></Card.Header>
          <Card.Body>
          <h6 className="text-center">
                Con su red social
            </h6>
            <div className="text-center">
                <FaFacebook className="iconFB mx-1" size="50" />
                <FaTwitter className="iconTW mx-1" size="50" />
                <SiGmail className="iconGM mx-1" size="50" />
            </div>
            <hr className="lineaHR"/>
            <h6 className="text-center my-5">
                O con su correo electrónico y contraseña de Rolling New
            </h6>
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Control  type="email" placeholder="Correo electrónico *" onChange={
                  
                  (e)=>{if(mailVerif.test(e.target.value)){
                    console.log("usuario correcto");
                    e.target.style.border="2px solid green"
                  }else{
                    console.log("usuario incorrecto")
                    e.target.style.border="2px solid red"
                  }}} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contraseña *" onChange={(e) => {
                  if(passVerif.test(e.target.value)){
                    console.log("valido");
                    e.target.style.border="2px solid green"
                  }else{
                    console.log("invalido");
                    e.target.style.border="2px solid red"
                  }
                }} />
              </Form.Group>
              <div className="d-flex justify-content-between mt-5" >
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
            <Button className="mt-5" variant="success" size="lg" block type="submit">
                Crear una nueva cuenta
              </Button>
          </Card.Body>
        </Card>
      </Col>
    // </Row>
  );
};

export default Login;
