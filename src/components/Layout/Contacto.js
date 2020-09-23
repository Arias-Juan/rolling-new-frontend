import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import {
    FaFacebook,
    FaTwitter,
    FaPhone,
    FaFax,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { BiLink } from "react-icons/bi";
import Swal from 'sweetalert2'

const Contacto = () => {
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [TextA, setTextA] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validamos datos
        let expresion = /\w+@\w+\.[a-z]/;
        if (
            nombre.trim() !== "" &&
            TextA.trim() !== "" &&
            expresion.test(email)
        ) {
            Swal.fire(
                'Enviado!',
                'Su correo a sido enviado correctamente',
                'success'
              );
        } else {
            alert("Hubo un error al enviar el correo, prueba llenando todos los campos que llevan un *")
        }
    };
    return (
        <Container className="my-5">
            <Card>
                <Card.Header variant="dark">
                    <h2>Contactanos</h2>
                </Card.Header>
                <Card.Body>
                    <FaPhone /> <b>Telefono:</b> +54 0381 - Rolling - New <br />
                    <HiAtSymbol /> <b>Correo:</b> rollingnew@gmail.com <br />
                    <TiLocation /> <b>Direccion oficcial:</b> Argentina - Tucuman - San
          Miguel de Tucuman - Gral Paz 000 <br />
                    <FaFax /> <b>Fax:</b> (No tenemos) <br />
                    <BiLink /> <b>URL:</b> (agregar URL) <br />
                    <hr />
                    <Card.Title>
                        Seguinos en nuestras redes para poder estar al tanto
          </Card.Title>
                    <Card.Text>
                        <FaFacebook size="30" />
                        <FaTwitter size="30" />
                        <FaInstagram size="30" />
                        <FaLinkedin size="30" />
                    </Card.Text>
                    <Card.Title>Publicidad</Card.Title>
                    <Card.Text>
                        Ponte en contacto con nosotros, llena esta solicitud con tus datos e
                        informando sobre el tema y nuestro equipo interno se estará
                        contactando en la brevedad.
          </Card.Text>
                    <Form className="col-12 col-lg-6" onSubmit={handleSubmit}>
                        <Form.Group controlId="formGroupNombre">
                            <Form.Control
                                type="text"
                                placeholder="Nombre // Local // Empresa *"
                                onChange={(e) => {
                                    setNombre(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupCorreo">
                            <Form.Control
                                type="email"
                                placeholder="Correo electronico *"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="ControlTextarea">
                            <Form.Control as="textarea" rows="3" placeholder="informe *" onChange={(e) => { setTextA(e.target.value) }} />
                            <Form.File id="exampleFormControlFile1" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
            </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contacto;
