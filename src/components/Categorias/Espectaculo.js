import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Espectaculo = (props) => {

  const noticiasEspectaculo = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "espectaculo";
  });

  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true" && itemNoticia.categoria === "espectaculo");
  });

  //console.log(noticiasEspectaculo);

    return (
        <div>
        <Banner titulo={props.categorias[3]} noticias={portada}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasEspectaculo}></Body>
      </div>
    );
};

export default Espectaculo;