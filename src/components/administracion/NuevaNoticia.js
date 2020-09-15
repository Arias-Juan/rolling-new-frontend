import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from 'sweetalert2'
import { withRouter} from 'react-router-dom';


const NuevaNoticia = (props) => {
  // me creo mis state
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcionDetallada, setDescripcionDetallada] = useState("");
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
    // me creo un state que me va a servir para mostrar el error
    const [error, setError] = useState(false);
    // me creo una funcion para selecionar la categoria
    const seleccionarCategoria = (e) => {
        setCategoria(e.target.value);
      };
    //   creo el handlesubmit del formulario
    const handleSubmit = async(e) => {
        e.preventDefault();
        // valido los datos
        if(tituloNoticia.trim() === "" || descripcionBreve.trim() === "" || descripcionDetallada.trim() === "" 
        || imagenPrincipal.trim() === "" || categoria === "" || autor.trim() === "" || fecha.trim() === ""){
            // si algo de esto se cumple le muestro un cartel de error al usuario
         setError(true)
         return;
        }
         setError(false)

        //  construir un objeto con los datos a enviar
        const datos = {
            tituloNoticia,
            descripcionBreve,
            descripcionDetallada,
            imagenPrincipal,
            categoria,
            autor,
            fecha    
        }
        // uso try catch para la peticion a la API
        try{ 
            const mandar = {
                method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(datos),
            }
           const resultado = await fetch(" http://localhost:4000/noticia", mandar);
           console.log(resultado);
        // si todo salio bien
        if (resultado.status === 201) {
            Swal.fire(
              "Noticia agregada",
              "La noticia se agrego correctamente",
              "success"
            );
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocurrio un error, intentelo nuevamente',
            });
          }
          // actualizar lista de productos
           props.setRecargarNoticias(true);
          // redirecciono mi pagina 
           props.history.push("/noticias");

        }catch(error) {
          console.log(error);
          // cartel para el usuario
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error, intentelo nuevamente",
          });
        }
    }

    return (
        <section className="container my-4 d-flex justify-content-center">
      <Form className="w-75 mb-5" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Agregar Noticia</h1>
        <Form.Group>
          <Form.Label className="font-weight-bold">Titulo de la noticia</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej: boca es campeon de la liga"
            name="titulo"
            onChange={(e) => setTituloNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Descripcion breve</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: boca campeon"
            name="descripcion breve"
            onChange={(e) => setDescripcionBreve(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Descripcion detallada</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej: boca gano 2 a 0"
            name="descripcion breve"
            onChange={(e) => setDescripcionDetallada(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Imagen principal(solo url)</Form.Label>
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
        <h3 className="text-center">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            inline
            type="radio"
            name="categoria"
            label="Actualidad"
            value="actualidad"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            inline
            type="radio"
            name="categoria"
            label="Deportes"
            value="deportes"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            inline
            type="radio"
            name="categoria"
            label="Economia"
            value="economia"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            inline
            type="radio"
            name="categoria"
            label="Espectaculo"
            value="espectaculo"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            inline
            type="radio"
            name="categoria"
            label="Fotografia"
            value="fotografia"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            inline
            type="radio"
            name="categoria"
            label="Politica"
            value="politica"
            onChange={seleccionarCategoria}
          />
          <Form.Check
          inline
          type="radio"
          name="categoria"
          label="Salud"
          value="salud"
          onChange={seleccionarCategoria}
          />
          <Form.Check
          inline
          type="radio"
          name="categoria"
          label="Tecnologia"
          value="tecnologia"
          onChange={seleccionarCategoria}
         />
        </div>
        {
            error === true ? <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
            : null
        }
        <Button variant="success" type="submit" className="w-100 my-5">
          Guardar Noticia
        </Button>
      </Form>
    </section>
    );
};

export default withRouter(NuevaNoticia);