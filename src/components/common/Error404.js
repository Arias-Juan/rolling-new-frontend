import React from "react";
import '../../categorias.css';
import { FaRobot } from "react-icons/fa";
import PublicidadH from "../common/PublicidadH";

const Error404 = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <h1 className="text-center my-3 titulo-detalle"> <FaRobot className="pb-3"></FaRobot> Error 404</h1>
        <p className="lead text-center mb-4">No pudimos encontrar la pagina solicitada :(</p>
      <h1 className="titulo-404 mb-3">Te dejamos algunas recomendaciones</h1>
      </div>
      <hr></hr>
      <PublicidadH></PublicidadH>
    </div>
  );
};

export default Error404;
