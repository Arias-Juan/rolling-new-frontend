import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Deporte = (props) => {
  const noticiasDeporte = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "deportes";
  });

  //console.log(noticiasDeporte);
    return (
        <div>
        <Banner titulo={props.categorias[1]}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasDeporte}></Body>
      </div>
    );
};

export default Deporte;