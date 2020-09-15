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

const Body = () => {
  return (
    <Fragment>
      <Container fluid className="bg-light">
        <Container className="py-4">
          <Row>
            <Col sm={12} lg={8}>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
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
                    <Card.Text>
                      <h5 className="color-naranja mt-4">
                        <b className="titulo-card">1</b> &nbsp;{" "}
                        <Link
                          className="card-texto text-decoration-none"
                          exact={true}
                          to="/*"
                        >
                          Titulo 1
                        </Link>
                      </h5>
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <h5 className="color-naranja">
                      <b className="titulo-card">2</b> &nbsp;{" "}
                        <Link
                          className="card-texto text-decoration-none"
                          exact={true}
                          to="/*"
                        >
                          Titulo 1
                        </Link>
                      </h5>
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <h5 className="color-naranja">
                      <b className="titulo-card">3</b> &nbsp;{" "}
                        <Link
                          className="card-texto text-decoration-none"
                          exact={true}
                          to="/*"
                        >
                          Titulo 1
                        </Link>
                      </h5>
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <h5 className="color-naranja">
                      <b className="titulo-card">4</b> &nbsp;{" "}
                        <Link
                          className="card-texto text-decoration-none"
                          exact={true}
                          to="/*"
                        >
                          Titulo 1
                        </Link>
                      </h5>
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <h5 className="color-naranja">
                      <b className="titulo-card">5</b> &nbsp;{" "}
                        <Link
                          className="card-texto text-decoration-none"
                          exact={true}
                          to="/*"
                        >
                          Titulo 1
                        </Link>
                      </h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "21rem" }} className="mt-4 py-3">
                    <p className="text-muted ml-3">Publicidad:</p>
                    <div className="text-center">
                    <Image src={publicidad}></Image>
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
