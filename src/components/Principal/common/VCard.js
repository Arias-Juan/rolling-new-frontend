import React from "react";
//import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../../categorias.css";

const VCard = (props) => {
  return (
    <div>
      {props.noticias
        .map((itemNoticia) => {
          return (
            <div className="card-hover">
              <Link
                exact={true}
                to={`noticias/detalle/${itemNoticia.id}`}
                className="text-decoration-none"
              >
                <div>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={itemNoticia.imagenPrincipal}
                          className="card-img"
                          alt="imgPrueba"
                        ></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title card-titulo">
                            {itemNoticia.tituloNoticia}
                          </h5>
                          <p className="card-text card-texto">
                            {itemNoticia.descripcionBreve}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
        .slice(1, 4)}
    </div>
  );
};

export default VCard;
