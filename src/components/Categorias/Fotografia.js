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

  console.log(noticiasFotografia);

  //para la ventana modal
  const [show, setShow] = useState(false);
  const [idFoto, setIdFoto] = useState(0);

  const noticiaModal = noticiasFotografia.find((itemNoticia) => {
    return (itemNoticia.id === idFoto)
  })

  console.log(noticiaModal)


  return (
    <div className="mb-4">
      <div className="bg-naranja d-none d-lg-block py-3 mb-2 bg-naranja-fotografia">
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
              <div>
                <Link onMouseOver={() => setIdFoto(itemNoticiaFotografia.id)} onClick={() => setShow(true)}>
                  <img src={itemNoticiaFotografia.imagenPrincipal} alt={itemNoticiaFotografia.descripcionBreve} className="w-100 p-1"></img>
                </Link>
              </div>
            </Col>
          ).reverse()}
        </Row>
      </Container>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby={`modal-fotografia-${idFoto}`}
      >
        <Modal.Header closeButton>
          <Modal.Title id={`modal-fotografia-${idFoto}`}>
            {(noticiaModal !== undefined) ?
              <h3>{noticiaModal.tituloNoticia}</h3>
              : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            {(noticiaModal !== undefined) ?
              <img src={noticiaModal.imagenPrincipal} alt={noticiaModal.descripcionBreve} className="w-100 p-1 imagenModal"></img>
              : null}
          </div>
          <hr></hr>
          {(noticiaModal !== undefined) ?
            <h5>{noticiaModal.descripcionBreve}</h5>
            : null}
          {(noticiaModal !== undefined) ?
            <p className="text-justify">{noticiaModal.descripcionDetallada}</p>
            : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            className="rounded-pill"
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Fotografia;