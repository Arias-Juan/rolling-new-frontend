import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const NuevaCategoria = () => {
  // creo el state para guardar los datos
  // const [nombreCategoria, setnombreCategoria] = useState("");
    return (
        <section className="container my-4 d-flex justify-content-center">
        <Form className="w-75 mb-5">
          <h1 className="text-center mb-4">Agregar Categoria</h1>
          <Form.Group>
            <Form.Label className="font-weight-bold"> Nombre de la categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej: Actualidad"
              name="titulo"
              // onChange={(e) => setnombreCategoria(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 my-5">
            Guardar Categoria
          </Button>
        </Form>
      </section>
    );
};

export default NuevaCategoria;