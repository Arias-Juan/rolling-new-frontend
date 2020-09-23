import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";


const Noticia = (props) => {
  const eliminarNoticia = (_id) => {
    console.log(_id);

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
          const resultado = await fetch(`https://rollingnewsbc.herokuapp.com/api/rn/${_id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
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
      <ListGroup.Item>
        <Row>
          <Col sm={8} className="d-flex justify-content-start">
            <p className="text-left text-wrap font-weight-bold">
              "{props.noticiaItem.tituloNoticia}
              {""}"
            </p>
          </Col>
          <Col sm={4} className="d-flex justify-content-end">
            <ButtonGroup>
              <Link
                className="btn btn-success rounded-pill mr-2"
                to={`/noticias/editar/${props.noticiaItem._id}`}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="mr-2"
                ></FontAwesomeIcon>
                Editar
              </Link>
              <Button
                className="btn btn-danger rounded-pill py-2"
                type="button"
                onClick={() => eliminarNoticia(props.noticiaItem._id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="mr-2"
                ></FontAwesomeIcon>
                Eliminar
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroup.Item>
    </article>
  );
};

export default Noticia;
