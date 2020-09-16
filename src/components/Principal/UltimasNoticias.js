import React, { Fragment } from "react";
import HCard from "./common/HCard";
import VCard from "./common/VCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UltimasNoticias = (props) => {
  return (
    <Fragment>
      <Row>
        <Col sm={12} md={6}>
          <HCard ultimaNoticia={props.noticias[props.noticias.length -1]}></HCard>
        </Col>
        <Col sm={12} md={6}>
        <h3 className="titulo-ppal mb-4">Noticias Recientes</h3>
          <VCard noticias={props.noticias}></VCard>
          <VCard noticias={props.noticias}></VCard>
          <VCard noticias={props.noticias}></VCard>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UltimasNoticias;
