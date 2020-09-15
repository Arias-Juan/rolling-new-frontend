import React from 'react';

const EditarCategoria = () => {
    return (
        <section className="container my-4 d-flex justify-content-center">
        <Form className="w-75 mb-5">
          <h1 className="text-center mb-4">Agregar Categoria</h1>
          <Form.Group>
            <Form.Label> Nombre de la categoria</Form.Label>
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

export default EditarCategoria;