import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NavbarAdmin from "./common/NavbarAdmin";
import Noticia from "./Noticia";


const ListaNoticias = (props) => {
  return (
    <Fragment>
      <NavbarAdmin></NavbarAdmin>
    <section className="container my-4">
      <h2 className="text-center py-3">Lista de Noticias</h2>
      <ListGroup className="mb-5">
      {props.noticias.map((itemNoticia) => (
        <Noticia key={itemNoticia.id} noticiaItem={itemNoticia} 
        setRecargarNoticias={props.setRecargarNoticias}></Noticia>
      ))}
      </ListGroup>
    </section>
    </Fragment>
  );
};


export default ListaNoticias;
