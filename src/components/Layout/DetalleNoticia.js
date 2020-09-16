import React from "react";
import imgPrueba from ".../../../src/img/Pruebas/prueba-01-01.jpg";

const DetalleNoticia = (props) => {
  return (
    <section className="container mt-3 mb-5">
      <div className="d-flex justify-content-between mb-1">
        <div className="font-weight-light">15/09/2020</div>
        {/* Fecha recibido por props */}
        <a href="/*" className="font-weight-light text-decoration-none text-dark">Actualidad</a>
        {/* Categoria recibido por props */}
      </div>
      <h1 className="text-center">Titulo de la Noticia</h1>
      {/* Titulo recibido por props */}
      <h5 className="lead">
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Some quick example text to build on the card
        title and make up the bulk of the card's content.
      </h5>
      {/* Descripcion breve recibida por props */}
      <div className="text-center my-3">
        <img className="w-75" src={imgPrueba} alt="Imagen prueba"></img>
        {/* Se recibe por props el src que debe ser una url */}
      </div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        faucibus, diam non consequat ultrices, ex metus tempus dui, vitae
        vehicula lectus mi molestie leo. Proin commodo rutrum suscipit. Quisque
        lacinia ligula sed iaculis venenatis. Donec eget nisl lacus. Duis
        pretium luctus urna, nec rutrum sem. Aliquam dapibus vulputate turpis et
        aliquet. Sed tempor dui porttitor tristique ornare. Aenean velit orci,
        tempus in consectetur at, semper consectetur magna. Morbi in felis nec
        ex iaculis lacinia id sed orci. Vivamus ipsum ex, consectetur a risus
        vel, pulvinar porttitor felis. Aliquam ut lacinia dolor. In rhoncus
        vitae lectus sit amet dapibus. Quisque ultrices ultricies imperdiet.
        Vestibulum vehicula lectus nec posuere condimentum. Vestibulum sit amet
        tellus sed diam auctor blandit in et ipsum. Vestibulum lectus leo,
        tincidunt nec nunc vitae, efficitur dapibus elit. Cras aliquam ut tortor
        vel aliquam. Sed vestibulum finibus massa, non pellentesque odio
        vehicula nec. Cras non leo ante. Etiam ligula lacus, fermentum non diam
        sed, auctor fermentum tellus. Sed luctus eros quis odio vulputate, at
        sollicitudin diam gravida. Ut sodales feugiat ipsum, vel lobortis
        mauris. Sed maximus dapibus semper. Morbi sagittis metus eget orci porta
        malesuada. Sed ac posuere dolor. Cras in sollicitudin leo. Vivamus felis
        ligula, maximus et suscipit.
      </p>
      <p className="text-justify">
        tellus sed diam auctor blandit in et ipsum. Vestibulum lectus leo,
        tincidunt nec nunc vitae, efficitur dapibus elit. Cras aliquam ut tortor
        vel aliquam. Sed vestibulum finibus massa, non pellentesque odio
        vehicula nec. Cras non leo ante. Etiam ligula lacus, fermentum non diam
        sed, auctor fermentum tellus. Sed luctus eros quis odio vulputate, at
        sollicitudin diam gravida. Ut sodales feugiat ipsum, vel lobortis
        mauris. Sed maximus dapibus semper. Morbi sagittis metus eget orci porta
        malesuada. Sed ac posuere dolor. Cras in sollicitudin leo. Vivamus felis
        ligula, maximus et suscipit.
      </p>
      {/* Cuerpo de la noticia props (se puede dividir en p.1 (parrafo 1) p.2 (parrafo 2)) */}
        <p className="text-right mt-2 font-weight-lighter">Autor: admin</p> {/* admin de debe modificar por props */}
    </section>
  );
};

export default DetalleNoticia;
