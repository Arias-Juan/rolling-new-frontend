import React from 'react';
import ApiMoneda from './ApiMoneda';
import UltimasNoticias from './UltimasNoticias'
import ApiClima from './ApiClima';
import NoticiasCategorias from './NoticiasCategorias';
import BannerCovid from './BannerCovid';
import Patrocinadores from './Patrocinadores'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Inicio = (props) => {
  
  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalPortada === "true");
  });

  const noticiasSwiperCategorias = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true");
  });
  console.log(noticiasSwiperCategorias)
  
  return (
    <section>
      <div className="container-fluid pre-footer">
        <Container>
          <Row>
            <Col className="d-none d-md-block">
              <ApiClima></ApiClima>
            </Col>
            <Col>
              <ApiMoneda></ApiMoneda>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="p-3 my-3">
        <UltimasNoticias noticias={portada}></UltimasNoticias>
      </div>

      <BannerCovid></BannerCovid>

      <div className="p-3 my-3">
        <Container fluid>
          <Row className="d-flex justify-content-around">
            <Col xs={8} className="p-0">
              {props.categoriaNuevas.map((itemCategoria) => <NoticiasCategorias key={itemCategoria.id} itemCategoria={itemCategoria} noticias={props.noticias} noticiasSwiper={noticiasSwiperCategorias}>
              </NoticiasCategorias>)}
            </Col>
            <Col xs={3} lg={2} className="p-0">
              <Patrocinadores></Patrocinadores>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );

};

export default Inicio;
