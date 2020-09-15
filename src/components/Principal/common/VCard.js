import React from "react";
//import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../../categorias.css";
import imgPrueba from "../../../img/Pruebas/prueba-01-01.jpg";

const VCard = () => {
  return (
    <div className="card-hover">
      <Link
        exact={true}
        to="/noticias/"
        className="text-decoration-none"
      >
        <div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={imgPrueba} className="card-img" alt="imgPrueba"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title card-titulo">
                    Titulo de la Noticia
                  </h5>
                  <p className="card-text card-texto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VCard;
