import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Salud = (props) => {

  const noticiasSalud = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "salud";
  });

  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true" && itemNoticia.categoria === "salud");
  });

    return (
        <div>
        <Banner titulo={props.categorias[6]} noticias={portada}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasSalud}></Body>
      </div>
    );
};

export default Salud;