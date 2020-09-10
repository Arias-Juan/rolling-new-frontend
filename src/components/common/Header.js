import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaRegPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logoEncabezado from "../../img/Principal/logo-encabezado.svg";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={logoEncabezado}
              width="200rem"
              className=""
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                exact={true}
                to="/categorias/actualidad"
                className="nav-link"
              >
                Actualidad
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/tecnologia"
                className="nav-link"
              >
                Tecnologia
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/politica"
                className="nav-link"
              >
                Politica
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/economia"
                className="nav-link"
              >
                Economia
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/deporte"
                className="nav-link"
              >
                Deporte
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/espectaculo"
                className="nav-link"
              >
                Espectaculo
              </NavLink>
              <NavLink exact={true} to="/categorias/salud" className="nav-link">
                Salud
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/fotografia"
                className="nav-link"
              >
                Fotografia
              </NavLink>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ingresar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
