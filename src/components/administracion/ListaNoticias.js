import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NavbarAdmin from "./common/NavbarAdmin";
import Noticia from "./Noticia";


const ListaNoticias = (props) => {
  return (
    <Fragment>
      <NavbarAdmin></NavbarAdmin>
    <section className="container my-4">
      <h1 className="text-center">Lista de Noticias</h1>
      <ListGroup className="mb-5">
      {props.noticias.map((itemNoticia) => (
        <Noticia key={itemNoticia.id} noticiaItem={itemNoticia} 
        setRecargarNoticias={props.setRecargarNoticias}></Noticia>
      )).reverse()}
      
      </ListGroup>
    </section>
    </Fragment>
  );
};


export default ListaNoticias;
