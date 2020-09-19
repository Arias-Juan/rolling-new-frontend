import React from 'react';
import Banner from "./Common/Banner";
//import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Fotografia = (props) => {

  const noticiasFotografia = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "fotografia";
  });

  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true" && itemNoticia.categoria === "fotografia");
  });

  console.log(noticiasFotografia);

    return (
        <div className="mb-4">
        {/* <Banner titulo={props.categorias[4]} noticias={portada}></Banner> */}
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Container fluid>
          <Row>
            {noticiasFotografia.map((itemNoticiaFotografia) => 
            <Col xs={12} md={6} lg={4} className="p-0 m-0">
              <img src={itemNoticiaFotografia.imagenPrincipal} alt={itemNoticiaFotografia.descripcionBreve} className="w-100 p-1"></img>
            </Col>).reverse()}
            
          </Row>
        </Container>
      </div>
    );
};

export default Fotografia;