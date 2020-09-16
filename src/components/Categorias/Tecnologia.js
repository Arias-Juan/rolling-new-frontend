import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Tecnologia = (props) => {

  const noticiasTecnologia = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "tecnologia";
  });

  //console.log(noticiasTecnologia);

    return (
        <div>
        <Banner titulo={props.categorias[7]}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasTecnologia}></Body>
      </div>
    );
};

export default Tecnologia;