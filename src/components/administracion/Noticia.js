import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Noticia = (props) => {
  const eliminarNoticia = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Estas seguro de eliminar esta noticia?",
      text: "No puedes recuperar la noticia eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
      //aqui tengo que eliminar el producto
      try {
        const resultado = await fetch(
          `http://localhost:4000/noticia/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(resultado);
        if (resultado.status === 200) {
          props.setRecargarNoticias(true);
          Swal.fire(
            "Noticia eliminada",
            "Su noticia fue eliminada correctamente",
            "success"
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error, intentelo nuevamente",
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
    }
  });
};
  return (
    <article>
      <ListGroup.Item className="d-flex justify-content-between">
  <p>
    {props.noticiaItem.tituloNoticia}{''}
    <span className="font-weight-bold">-
    {props.noticiaItem.categoria}
    </span>
    </p>
    <div>
    <Link className="btn btn-success mr-2" to={`/noticias/editar/${props.noticiaItem.id}`}>
      Editar
      </Link>
     <Button className="btn btn-danger"  type="button" 
     onClick={() => eliminarNoticia(props.noticiaItem.id)}>Eliminar</Button>
    </div>
     </ListGroup.Item>
    </article>   
  )
};

export default Noticia;
