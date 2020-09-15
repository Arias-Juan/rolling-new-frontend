import React from 'react';
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Salud = (props) => {
    return (
        <div>
        <Banner titulo={props.categorias[6]}></Banner>
        <hr></hr>
        <div className="container-fluid">
          <PublicidadH></PublicidadH>
        </div>
        <hr></hr>
        <Body></Body>
      </div>
    );
};

export default Salud;