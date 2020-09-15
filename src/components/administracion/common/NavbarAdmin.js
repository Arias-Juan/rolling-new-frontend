import React from "react";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

const NavbarAdmin = () => {
  return (
    <div>
      <div className="py-3 container-fluid bg-light text-light">
        <div className="container">
          <Nav className="text-center">
            <NavLink
              exact={true}
              to="/*"
              className="rn-nav-link mx-2"
            >
              Lista de Noticias
            </NavLink>
            <NavLink
              exact={true}
              to="/*"
              className="rn-nav-link mx-2"
            >
              Nueva Noticia
            </NavLink>
            <NavLink
              exact={true}
              to="/*"
              className="rn-nav-link mx-2"
            >
              Lista de Categorias
            </NavLink>
            <NavLink
              exact={true}
              to="/*"
              className="rn-nav-link mx-2"
            >
              Otro boton (borrar si no se usa)
            </NavLink>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
