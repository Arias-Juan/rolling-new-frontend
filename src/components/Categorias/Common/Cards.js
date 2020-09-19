import React from "react";

import { Link } from "react-router-dom";
import "../../../categorias.css";

const Cards = (props) => {
  console.log(props.noticias);
  return (
    <Link
      exact={true}
      to={`/noticias/detalle/${props.noticias.id}`}
      className="text-decoration-none card-hover"
    >
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={props.noticias.imagenPrincipal}
                className="card-img"
                alt="imgPrueba"
              ></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title card-titulo">
                  {props.noticias.tituloNoticia}
                </h5>
                <p className="card-text card-texto">
                  {props.noticias.descripcionBreve}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
