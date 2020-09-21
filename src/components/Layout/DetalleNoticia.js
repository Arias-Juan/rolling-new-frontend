import React, { Fragment } from "react";
//import imgPrueba from ".../../../src/img/Pruebas/prueba-01-01.jpg";
import "../../categorias.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import PublicidadH from "../common/PublicidadH";
import publicidad from "../../img/Pruebas/publicidad-02.jpg";
import { withRouter } from "react-router-dom";
import { FacebookProvider, Comments } from 'react-facebook';


const DetalleNoticia = (props) => {
  return (
    <Fragment>
      <Row className="mx-4">
        <Col sm={12} md={9}>
          <section className="mt-3 mb-5">
            <div>
              <Link exact={true} to="/*">
                <h4>
                  <Badge className="badge-rn">{props.noticias.categoria}</Badge>
                </h4>
              </Link>
            </div>
            <h1 className="titulo-detalle text-dark">
              {props.noticias.tituloNoticia}
            </h1>
            {/* Titulo recibido por props */}
            <h5 className="lead">{props.noticias.descripcionBreve}</h5>
            <hr></hr>
            <p className="lead">
              Fecha: {props.noticias.fecha} | Autor: {props.noticias.autor}
            </p>
            {/* Descripcion breve recibida por props */}
            <div className="text-center my-3">
              <img
                className="w-100"
                src={props.noticias.imagenPrincipal}
                alt={props.noticias.descripcionBreve}
              ></img>
              {/* Se recibe por props el src que debe ser una url */}
            </div>
            <p className="text-justify texto-cuerpo">
              {props.noticias.descripcionDetallada}
            </p>
          </section>
          <hr></hr>
          <PublicidadH></PublicidadH>
          <hr></hr>
          {/* {Comentarios} */}
          <section>
            <h3>Comentarios:</h3>
            <FacebookProvider appId="817116249025293">
              {/* {Al momento de subirla debe ser modificado por URL de Netlify} */}
              <Comments href={`http://localhost:3000//noticias/detalle/${props.noticias.id}`} />
            </FacebookProvider>
          </section>
          <hr></hr>
        </Col>
        <Col md={3} className="my-5">
          <Card style={{ width: "21rem" }} className="ml-auto">
            <Card.Body>
              <Card.Title className="color-naranja titulo-card">
                Mas de {props.noticias.categoria}
              </Card.Title>
              {props.categorias
                .map((itemNoticia) => (
                  <Card.Text>
                    <h5 className="color-naranja mt-4">
                      <Link
                        className="card-texto text-decoration-none"
                        exact={true}
                        to={`/noticias/detalle/${itemNoticia.id}`}
                      >
                        {itemNoticia.tituloNoticia}
                      </Link>
                    </h5>
                    <hr></hr>
                  </Card.Text>
                ))
                .slice(0, 5)}
            </Card.Body>
          </Card>
          <Card style={{ width: "21rem" }} className="mt-4 py-3">
            <p className="text-muted ml-3">Publicidad:</p>
            <div className="text-center">
              <a href="https://rollingcodeschool.com" target="blank_">
                <Image src={publicidad}></Image>
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default withRouter(DetalleNoticia);
