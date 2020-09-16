import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Categorias = (props) => {
  const eliminarCategoria = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Estas seguro de eliminar esta categoria?",
      text: "No puedes recuperar la categoria eliminada",
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
            `http://localhost:4000/categoria/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(resultado);
          if (resultado.status === 200) {
            props.setRecargarCategoria(true);
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
      <Accordion>
        <Card>
          <Accordion.Toggle
            as={Card}
            variant="link"
            className="w-100"
            eventKey="0"
          >
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="col-8">
                <h5>
                  <span className="font-weight-bold">
                    {props.categoriaItem.agregarCategoria}:
                  </span>
                  {props.categoriaItem.descripcionCategoria}
                </h5>
              </div>

              <div>
                <Link
                  className="btn btn-success mr-2"
                  to={`/administracion/editarCategoria/${props.categoriaItem.id}`}
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Editar
                </Link>
                <Button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => eliminarCategoria(props.categoriaItem.id)}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>aca va las noticias</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </article>
  );
};

export default Categorias;
