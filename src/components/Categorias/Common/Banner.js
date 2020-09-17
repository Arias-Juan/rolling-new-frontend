import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../../../categorias.css";

const Banner = (props) => {
  //const noticiasPortada = props.portadaActualidad;

  return (
    <Fragment>
      <div className="bg-naranja py-3 d-none d-lg-block">
        <div className="formato-carousel">
          <h2 className="titulo text-center my-5">{props.titulo}</h2>
          <Carousel className="fc d-flex justify-content-center">
          {props.noticias.map((itemNoticia) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={itemNoticia.imagenPrincipal}
                  alt={itemNoticia.tituloNoticia}
                />
                <Carousel.Caption>
                  <Link exact={true} to="/*" className="text-decoration-none">
                    <h2 className="titulo-carousel">{itemNoticia.tituloNoticia}</h2>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            )).slice(0,3)}
          </Carousel>
        </div>
      </div>
      <div className="d-lg-none bg-naranja-sm">
        <div className="formato-carousel container">
          <h2 className="titulo my-4">{props.titulo}</h2>
          <Carousel className="fc-sm d-flex justify-content-center">
            {props.noticias.map((itemNoticia) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={itemNoticia.imagenPrincipal}
                  alt={itemNoticia.tituloNoticia}
                />
                <Carousel.Caption>
                  <Link exact={true} to="/*" className="text-decoration-none">
                    <h2 className="titulo-carousel-sm">{itemNoticia.tituloNoticia}</h2>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            )).slice(0,3)}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
