import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Salud = (props) => {

  const noticiasSalud = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "salud";
  });

  //console.log(noticiasSalud);

    return (
        <div>
        <Banner titulo={props.categorias[6]}></Banner>
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