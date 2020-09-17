import React from "react";
//import Container from "react-bootstrap/Container";
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Actualidad = (props) => {
  const noticiasActualidad = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.categoria === "actualidad" || itemNoticia.principalCategoria === "true");
  });

  const portadaActualidad = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true");
  });

  //console.log(noticiasActualidad);

  return (
    <div>
      <Banner titulo={props.categorias[0]} noticias={portadaActualidad}></Banner>
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
