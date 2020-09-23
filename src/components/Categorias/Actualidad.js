import React from "react";
//import Container from "react-bootstrap/Container";
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Actualidad = (props) => {
  const noticiasPrimerFiltro = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.categoria === "actualidad" || itemNoticia.principalCategoria === "true");
  });

  const noticiasActualidad = noticiasPrimerFiltro.filter((noticiasActualidad) => {
    return (noticiasActualidad.categoria !== "fotografia");
  });

  const portadaActualidad = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true");
  });

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
