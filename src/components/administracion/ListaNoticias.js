import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Noticia from "./Noticia";


const ListaNoticias = (props) => {
  return (
    <section className="container my-4">
      <h1 className="text-center">Lista de Noticias</h1>
      <ListGroup className="mb-5">
      {props.noticias.map((itemNoticia) => (
        <Noticia key={itemNoticia.id} noticiaItem={itemNoticia} 
        setRecargarNoticias={props.setRecargarNoticias}></Noticia>
      ))}
      
      </ListGroup>
    </section>
  );
};


export default ListaNoticias;
