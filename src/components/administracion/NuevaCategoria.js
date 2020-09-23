import React, { useState, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import NavbarAdmin from "./common/NavbarAdmin";
import Jumbotron from 'react-bootstrap/Jumbotron'


const NuevaCategoria = (props) => {
  // creo el state para guardar los datos
  const [agregarCategoria, setAgregarCategoria] = useState("");
  const [descripcionCategoria, setDescripcionCategoria] = useState("");
  // me creo un state que me va a servir para mostrar el error
  const [error, setError] = useState(false);

  //   creo el handlesubmit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // valido los datos
    if (agregarCategoria.trim() === "" || descripcionCategoria.trim() === "") {
      // si algo de esto se cumple le muestro un cartel de error al usuario
      setError(true);
      return;
    }
    setError(false);

    //  construir un objeto con los datos a enviar
    const datos = {
      agregarCategoria,
      descripcionCategoria,
    };
    // uso try catch para la peticion a la API
    try {
      const mandar = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      };
      const resultado = await fetch(" https://rollingnewsbc.herokuapp.com/categoria", mandar);
      console.log(resultado);
      // si todo salio bien
      if (resultado.status === 201) {
        Swal.fire(
          "Categoria agregada",
          "La Categoria se agrego correctamente",
          "success"
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
      // actualizar lista de productos
      props.setRecargarCategoria(true);
      // redirecciono mi pagina
      props.history.push("/administracion/categoria");
    } catch (error) {
      console.log(error);
      // cartel para el usuario
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error, intentelo nuevamente",
      });
    }
  };

  return (
    <Fragment>
     <NavbarAdmin></NavbarAdmin>
      <section className="container  my-4 d-flex justify-content-center">
      <Jumbotron className="w-75 d-flex justify-content-center">
        <Form className="w-75 mb-5" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Agregar Categoria</h2>
          {error === true ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <Form.Group>
            <Form.Label className="font-weight-bold">
              {" "}
              Nombre de la categoria
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej: animales"
              name="titulo"
              onChange={(e) => setAgregarCategoria(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="font-weight-bold">
              Descripcion categoria
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej: todo sobre animales"
              name="titulo"
              onChange={(e) => setDescripcionCategoria(e.target.value)}
            />
          </Form.Group>
          <Button disabled variant="success" type="submit" className="w-100 my-5">
            Guardar Categoria
          </Button>
        </Form>
        </Jumbotron>
      </section>
    </Fragment>
  );
};

export default withRouter(NuevaCategoria);
