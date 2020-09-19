import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../../categorias.css";

const HCard = (props) => {
  return (
    <Card className="card-hover">
      {props.noticias.map((itemNoticia) => {
        return (
          <Link className="text-decoration-none" exact={true} to={`noticias/detalle/${itemNoticia.id}`}>
            <Card.Img variant="top" src={itemNoticia.imagenPrincipal} />
            <Card.Body>
              <Card.Title>
                <Link exact={true} to={`noticias/detalle/${itemNoticia.id}`} className="card-titulo">
                  {itemNoticia.tituloNoticia}
                </Link>
              </Card.Title>
              <Card.Text className="card-texto">
                {itemNoticia.descripcionBreve}
              </Card.Text>
            </Card.Body>
          </Link>
        );
      }).slice(0,1)}
    </Card>
  );
};

export default HCard;
