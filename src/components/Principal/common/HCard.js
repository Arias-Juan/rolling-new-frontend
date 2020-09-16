import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../../categorias.css";
import imgPrueba from "../../../img/Pruebas/prueba-01-01.jpg";

const HCard = () => {




  return (
    <Card className="card-hover">
      <Link className="text-decoration-none" exact={true} to="/*">
        <Card.Img variant="top" src={imgPrueba} />
        <Card.Body>
          <Card.Title>
            <Link exact={true} to="/*" className="card-titulo">
              Titulo
            </Link>
          </Card.Title>
          <Card.Text className="card-texto">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default HCard;
