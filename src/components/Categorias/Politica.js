import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Politica = (props) => {

  const noticiasPolitica = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "politica";
  });

  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true" && itemNoticia.categoria === "politica");
  });

    return (
        <div>
        <Banner titulo={props.categorias[5]} noticias={portada}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasPolitica}></Body>
      </div>
    );
};

export default Politica;