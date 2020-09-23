import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Cards from "../Common/Cards";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
//import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import publicidad from "../../../img/Pruebas/publicidad-02.jpg";
import "../../../categorias.css";

const Body = (props) => {

  //console.log(props.noticias)

  return (
    <Fragment>
      <Container fluid className="bg-light">
        <Container className="py-4">
          <Row>
            <Col sm={12} lg={8}>
              {
                props.noticias.map((itemNoticia) => (
                  <Cards
                    key={itemNoticia._id}
                    noticias={itemNoticia}
                  ></Cards>
                  )).reverse().slice(0,10)
              }
              
            </Col>
            <div className="d-none d-lg-block">
              <Col lg={3}>
                <Card style={{ width: "21rem" }} className="ml-auto">
                  <Card.Body>
                    <Card.Title className="color-naranja titulo-card">
                      Lo mas visto
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      Estos son los titulos más importantes de la semana. No dejes de verlos.
                    </Card.Subtitle>
                    {
                      props.noticias.map((itemNoticia) => (
                        <Card.Text>
                      <h5 className="color-naranja mt-4">
                        <Link
                          className="card-texto text-decoration-none"
                          exact={true}
                          to={`/noticias/detalle/${itemNoticia._id}`}
                        >
                          {itemNoticia.tituloNoticia}
                        </Link>
                      </h5>
                    <hr></hr>
                    </Card.Text>
                      )).slice(0,5)
                    }
                    
                  </Card.Body>
                </Card>
                <Card style={{ width: "21rem" }} className="mt-4 py-3">
                    <p className="text-muted ml-3">Publicidad:</p>
                    <div className="text-center">
                      <a href="https://rollingcodeschool.com/" target="blank_">
                    <Image src={publicidad}></Image>
                    </a>
                    </div>
                </Card>
              </Col>
            </div>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Body;
