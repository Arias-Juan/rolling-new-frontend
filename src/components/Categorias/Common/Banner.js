import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../../../categorias.css";
import imgPrueba from "../../../img/Pruebas/prueba-01-01.jpg";

const Banner = (props) => {
  
  return (
    <Fragment>
      <div className="bg-naranja py-3 d-none d-lg-block">
        <div className="formato-carousel">
          <h2 className="titulo text-center my-5">{props.titulo}</h2>
          <Carousel className="fc d-flex justify-content-center">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgPrueba}
                alt="First slide"
              />
              <Carousel.Caption>
                <Link exact={true} to="/*" className="text-decoration-none">
                  <h2 className="titulo-carousel">First slide label</h2>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgPrueba}
                alt="Third slide"
              />

              <Carousel.Caption>
                <Link exact={true} to="/*" className="text-decoration-none">
                  <h2 className="titulo-carousel">Second slide label</h2>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgPrueba}
                alt="Third slide"
              />

              <Carousel.Caption>
                <Link exact={true} to="/*" className="text-decoration-none">
                  <h2 className="titulo-carousel">Third slide label</h2>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="d-lg-none bg-naranja-sm">
        <div className="formato-carousel container">
          <h2 className="titulo my-4">{props.titulo}</h2>
          <Carousel className="fc-sm d-flex justify-content-center">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgPrueba}
                alt="First slide"
              />
              <Carousel.Caption>
                <Link exact={true} to="/*" className="text-decoration-none">
                  <h2 className="titulo-carousel-sm">First slide label</h2>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgPrueba}
                alt="Third slide"
              />

              <Carousel.Caption>
                <Link exact={true} to="/*" className="text-decoration-none">
                  <h2 className="titulo-carousel-sm">Second slide label</h2>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgPrueba}
                alt="Third slide"
              />

              <Carousel.Caption>
                <Link exact={true} to="/*" className="text-decoration-none">
                  <h2 className="titulo-carousel-sm">Third slide label</h2>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
