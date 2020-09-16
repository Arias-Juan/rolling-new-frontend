import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Politica = (props) => {

  const noticiasPolitica = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "politica";
  });

  //console.log(noticiasPolitica);

    return (
        <div>
        <Banner titulo={props.categorias[5]}></Banner>
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