import React, { useState, useRef } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2'
import Alert from "react-bootstrap/Alert";
import { withRouter } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'

const EditarCategoria = (props) => {
  // genero los ref
  const agregarCategoriaRef = useRef("");
  const descripcionCategoriaRef = useRef("")
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos

    if (
      agregarCategoriaRef.current.value.trim() === "" ||
      descripcionCategoriaRef.current.value.trim() === ""

    ) {
      //mostrar un cartel de error
      setError(true);
      return;
    }

    setError(false);

    //preparar el objeto a enviar
    const categoriaEditada = {
      agregarCategoria: agregarCategoriaRef.current.value,
      descripcionCategoria: descripcionCategoriaRef.current.value,

    }
    //envio los cambios a la api
    try {
      const respuesta = await fetch(`https://rollingnewsbc.herokuapp.com/categoria/${props.Categoria._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(categoriaEditada)
      })
      console.log(respuesta);

      if (respuesta.status === 200) {
        //efectivamente se modifico el producto
        props.setRecargarCategorias(true);
        Swal.fire(
          'Categoria modificada',
          'La Categoria fue modificada correctamente',
          'success'
        )
        props.history.push("/administracion/categoria");
      }

    } catch (datosError) {
      console.log(datosError);
      //cartelito para el usuario
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error, intentelo nuevamente",
      });
    }
  };

  return (
    <section className="container my-4 d-flex justify-content-center">
      <Jumbotron className="w-75 d-flex justify-content-center">
      <Form className="w-75 mb-5" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Agregar Categoria</h2>
          {
            error === true ? <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
              : null
          }
          <Form.Group>
            <Form.Label className="font-weight-bold"> Nombre de la categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej: animales"
              name="titulo"
              ref={agregarCategoriaRef}
              defaultValue={props.Categoria.agregarCategoria}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="font-weight-bold">Descripcion categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej: todo sobre animales"
              name="titulo"
              ref={descripcionCategoriaRef}
              defaultValue={props.Categoria.descripcionCategoria}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 my-5" disabled>
            Guardar Categoria
        </Button>
      </Form>
      </Jumbotron>
    </section>
  );
};

export default withRouter(EditarCategoria);