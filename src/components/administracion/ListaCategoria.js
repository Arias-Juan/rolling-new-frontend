import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Categorias from './Categorias';


const ListaCategoria = (props) => {
    return (
        <section className="container  my-4">
        <h2 className="text-center py-3">Lista de Categorias</h2>
        <ListGroup className="mb-5">
         {props.categoriaNuevas.map((itemCategoria) => (
            <Categorias key={itemCategoria.id} categoriaItem={itemCategoria} 
            setRecargarCategoria={props.setRecargarCategoria}></Categorias>  
          ))}  
        </ListGroup>
      </section>
    );
};

export default ListaCategoria;