import React from "react";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <div>
      <div className="py-3 container-fluid bg-light text-light">
        <div className="container">
          <Nav className="text-center">
            <Link
              exact={true}
              to="/noticias"
              className="rn-nav-link mx-2"
            >
              Lista de Noticias
            </Link>
            <Link
              exact={true}
              to="/noticias/nueva"
              className="rn-nav-link mx-2"
            >
              Nueva Noticia
            </Link>
            <Link
              exact={true}
              to="/administracion/categoria"
              className="rn-nav-link mx-2"
            >
              Lista de Categorias
            </Link>
            <Link
              exact={true}
              to="/administracion/nuevacategoria"
              className="rn-nav-link mx-2"
            >
              Nueva Categoria
            </Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
