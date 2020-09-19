import React, { useState } from 'react';
//import Banner from "./Common/Banner";
//import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const Fotografia = (props) => {

  const noticiasFotografia = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "fotografia";
  });

  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true" && itemNoticia.categoria === "fotografia");
  });

  console.log(portada);

  //para la ventana modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-4">
      {/* <Banner titulo={props.categorias[4]} noticias={portada}></Banner> */}
      <div className="bg-naranja d-none d-lg-block m-0">
        <h2 className="titulo text-center my-5">{props.categorias[4]}</h2>
      </div>
      <hr></hr>
      <div className="container-fluid">
        <PublicidadH></PublicidadH>
      </div>
      <hr></hr>
      <Container fluid>
        <Row>
          {noticiasFotografia.map((itemNoticiaFotografia) =>
            <Col xs={12} md={6} lg={4} className="p-0 m-0">
              <div><Link onClick={handleShow}>
                <img src={itemNoticiaFotografia.imagenPrincipal} alt={itemNoticiaFotografia.descripcionBreve} className="w-100 p-1"></img>
              </Link></div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {itemNoticiaFotografia.tituloNoticia}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="text-center">
                    <img src={itemNoticiaFotografia.imagenPrincipal} alt={itemNoticiaFotografia.descripcionBreve} className="w-100 p-1"></img>
                  </div>
                  {/* <div>
                    <p className="font-weight-light">{itemNoticiaFotografia.descripcionDetallada}</p>
                  </div> */}
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
            </Col>
          ).reverse()}
        </Row>
      </Container>

    </div>
  );
};

export default Fotografia;