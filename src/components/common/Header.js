import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FaRegPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logoEncabezado from "../../img/Principal/logo-encabezado.svg";
import '../../App.css';

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink exact={true} to="/" className="mr-2">
            <img
              src={logoEncabezado}
              width="200rem"
              alt="React Bootstrap logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                exact={true}
                to="/categorias/actualidad"
                className="rn-nav-link mx-2"
              >
                Actualidad
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/tecnologia"
                className="rn-nav-link mx-2"
              >
                Tecnologia
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/politica"
                className="rn-nav-link mx-2"
              >
                Politica
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/economia"
                className="rn-nav-link mx-2"
              >
                Economia
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/deporte"
                className="rn-nav-link mx-2"
              >
                Deporte
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/espectaculo"
                className="rn-nav-link mx-2"
              >
                Espectaculo
              </NavLink>
              <NavLink exact={true} to="/categorias/salud" className="rn-nav-link mx-2">
                Salud
              </NavLink>
              <NavLink
                exact={true}
                to="/categorias/fotografia"
                className="rn-nav-link mx-2"
              >
                Fotografia
              </NavLink>
              <div className="nav-line"></div>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" className="rn-nav-link">
                <NavDropdown.Item href="#action/3.1">Ingresar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink exact={true} to="/*" className="btn-rn-outline ml-2"><FaRegPaperPlane/></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
