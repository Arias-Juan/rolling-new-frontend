import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Economia = (props) => {

  const noticiasEconomia = props.noticias.filter((itemNoticia) => {
    return itemNoticia.categoria === "economia";
  });

  //console.log(noticiasEconomia);

    return (
        <div>
        <Banner titulo={props.categorias[2]}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body noticias={noticiasEconomia}></Body>
      </div>
    );
};

export default Economia;