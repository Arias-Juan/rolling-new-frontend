import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Fotografia = (props) => {

  const noticiasFotografia = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "fotografia";
  });

  const portada = props.noticias.filter((itemNoticia) => {
    return (itemNoticia.principalCategoria === "true" && itemNoticia.categoria === "fotografia");
  });

  //console.log(noticiasFotografia);

    return (
        <div>
        <Banner titulo={props.categorias[4]} noticias={portada}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasFotografia}></Body>
      </div>
    );
};

export default Fotografia;