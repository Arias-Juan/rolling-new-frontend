import React from "react";
//import Container from "react-bootstrap/Container";
import Banner from "./Common/Banner";
import Body from "./Common/Body";
import PublicidadH from "../common/PublicidadH";

const Actualidad = (props) => {
  return (
    <div>
      <Banner titulo={props.categorias[0]}></Banner>
      <hr></hr>
      <div className="container-fluid">
        <PublicidadH></PublicidadH>
      </div>
      <hr></hr>
      <Body></Body>
    </div>
  );
};

export default Actualidad;
