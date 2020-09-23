import React, { useState, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import NavbarAdmin from "./common/NavbarAdmin";
import Jumbotron from "react-bootstrap/Jumbotron";

const NuevaNoticia = (props) => {
  // me creo mis state
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcionDetallada, setDescripcionDetallada] = useState("");
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [principalPortada, setPrincipalPortada] = useState("false");
  const [principalCategoria, setPrincipalCategoria] = useState("false");
  // me creo un state que me va a servir para mostrar el error
  const [error, setError] = useState(false);

  //   creo el handlesubmit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // valido los datos
    if (
      tituloNoticia.trim() === "" ||
      descripcionBreve.trim() === "" ||
      descripcionDetallada.trim() === "" ||
      imagenPrincipal.trim() === "" ||
      categoria.trim() === "" ||
      autor.trim() === "" ||
      fecha.trim() === ""
    ) {
      // si algo de esto se cumple le muestro un cartel de error al usuario
      setError(true);
      return;
    }
    setError(false);

    //  construir un objeto con los datos a enviar
    const datos = {
      tituloNoticia,
      categoria,
      descripcionBreve,
      descripcionDetallada,
      imagenPrincipal,
      autor,
      fecha,
      principalPortada,
      principalCategoria,
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
      const resultado = await fetch(" https://rollingnewsbc.herokuapp.com/api/rn/", mandar);
      console.log(resultado);
      // si todo salio bien
      if (resultado.status === 201) {
        Swal.fire(
          "Noticia agregada",
          "La noticia se agrego correctamente",
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
      props.setRecargarNoticias(true);
      // redirecciono mi pagina
      props.history.push("/noticias");
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
  //seleccionar categoria
  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  //portada principal
  const portadaPrincipal = (e) => {
    if (e.target.value === "true") {
      setPrincipalPortada("true");
    } else {
      setPrincipalPortada("false");
    }
  };

  //portada categoria
  const portadaCategoria = (e) => {
    if (e.target.value === "true") {
      setPrincipalCategoria("true");
    } else {
      setPrincipalCategoria("false");
    }
  };

  return (
    <Fragment>
      <NavbarAdmin></NavbarAdmin>
      <section className="container my-4 d-flex justify-content-center">
        <Jumbotron className="w-75 d-flex justify-content-center">
          <Form className="w-75 mb-5" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Agregar Noticia</h2>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Titulo de la noticia
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Ej: boca es campeon de la liga"
                name="titulo"
                onChange={(e) => setTituloNoticia(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Descripcion breve
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: boca campeon"
                name="descripcion breve"
                onChange={(e) => setDescripcionBreve(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Descripcion detallada
              </Form.Label>
              <Form.Control 
                as="textarea"
                type="text"
                placeholder=" Ej: boca gano 2 a 0"
                name="descripcion detallada"
                onChange={(e) => setDescripcionDetallada(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Imagen principal(solo url)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: url( )"
                name="imagen principal"
                onChange={(e) => setImagenPrincipal(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: rodrigo Perez"
                name="descripcion breve"
                onChange={(e) => setAutor(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">Fecha</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 06/09/2020"
                name="fecha"
                onChange={(e) => setFecha(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Form.Label className="font-weight-bold">Categoria</Form.Label>
            </div>
            <Form.Group className="d-flex justify-content-center">
              <div className="row">
                <div className="mx-2">
                  <Form.Check
                    type="radio"
                    label="Actualidad"
                    name="categoria"
                    value="actualidad"
                    onChange={seleccionarCategoria}
                  />
                  <Form.Check
                    type="radio"
                    label="Deportes"
                    name="categoria"
                    value="deportes"
                    onChange={seleccionarCategoria}
                  />
                </div>
                <div className="mx-2">
                  <Form.Check
                    type="radio"
                    label="Economia"
                    name="categoria"
                    value="economia"
                    onChange={seleccionarCategoria}
                  />
                  <Form.Check
                    type="radio"
                    label="Espectaculo"
                    name="categoria"
                    value="espectaculo"
                    onChange={seleccionarCategoria}
                  />
                </div>
                <div className="mx-2">
                  <Form.Check
                    type="radio"
                    label="Fotografia"
                    name="categoria"
                    value="fotografia"
                    onChange={seleccionarCategoria}
                  />
                  <Form.Check
                    type="radio"
                    label="Politica"
                    name="categoria"
                    value="politica"
                    onChange={seleccionarCategoria}
                  />
                </div>
                <div>
                  <Form.Check
                    type="radio"
                    label="Salud"
                    name="categoria"
                    value="salud"
                    onChange={seleccionarCategoria}
                  />
                  <Form.Check
                    type="radio"
                    label="Tecnologia"
                    name="categoria"
                    value="tecnologia"
                    onChange={seleccionarCategoria}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="text-center">
              <Form.Label className="font-weight-bold">
                Portada Principal
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Check
                  type="radio"
                  label="Si"
                  name="portadaPrincipal"
                  value="true"
                  className="mr-3"
                  onChange={portadaPrincipal}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="portadaPrincipal"
                  value="false"
                  onChange={portadaPrincipal}
                />
              </div>
            </Form.Group>
            <Form.Group className="text-center">
              <Form.Label className="font-weight-bold">
                Portada Categoria
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Check
                  type="radio"
                  label="Si"
                  name="portadaCategoria"
                  value="true"
                  className="mr-3"
                  onChange={portadaCategoria}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="portadaCategoria"
                  value="false"
                  onChange={portadaCategoria}
                />
              </div>
            </Form.Group>

            {error === true ? (
              <Alert variant={"danger"}>
                Todos los campos son obligatorios
              </Alert>
            ) : null}
            <Button variant="success" type="submit" className="w-100 my-5">
              Guardar Noticia
            </Button>
          </Form>
        </Jumbotron>
      </section>
    </Fragment>
  );
};

export default withRouter(NuevaNoticia);
