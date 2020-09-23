import React, { Fragment } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Categorias from './Categorias';
import NavbarAdmin from "./common/NavbarAdmin";

const ListaCategoria = (props) => {
  return (
    <Fragment>
      <NavbarAdmin></NavbarAdmin>
      <section className="container  my-4">
        <h2 className="text-center py-3">Lista de Categorias</h2>
        <ListGroup className="mb-5">
          {props.categoriaNuevas.map((itemCategoria) => (
            <Categorias key={itemCategoria.id} categoriaItem={itemCategoria}
              setRecargarCategoria={props.setRecargarCategoria}
              noticias={props.noticias}
              ></Categorias>
          )).reverse()}
        </ListGroup>
      </section>
    </Fragment>
  );
};

export default ListaCategoria;