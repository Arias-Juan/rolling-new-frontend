import React from "react";
//import Container from "react-bootstrap/Container";
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Actualidad = (props) => {
  const noticiasActualidad = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "actualidad";
  });

  //console.log(noticiasActualidad);

  return (
    <div>
      <Banner titulo={props.categorias[0]}></Banner>
      <hr></hr>
      <div className="container-fluid">
        <PublicidadH></PublicidadH>
      </div>
      <hr></hr>
      <Body noticias={noticiasActualidad}></Body>
    </div>
  );
};

export default Actualidad;
