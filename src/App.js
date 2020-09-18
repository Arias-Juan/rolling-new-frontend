import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Inicio from "./components/Principal/Inicio";
import Actualidad from "./components/Categorias/Actualidad";
import Deporte from "./components/Categorias/Deporte";
import Economia from "./components/Categorias/Economia";
import Espectaculo from "./components/Categorias/Espectaculo";
import Fotografia from "./components/Categorias/Fotografia";
import Politica from "./components/Categorias/Politica";
import Salud from "./components/Categorias/Salud";
import Tecnologia from "./components/Categorias/Tecnologia";
import Error404 from "./components/common/Error404";
import Contacto from "./components/Layout/Contacto";
import Nosotros from "./components/Layout/Nosotros";
import Login from "./components/Layout/Login";
////import administracion...
import PrincipalAdmin from "./components/administracion/common/PrincipalAdmin";
import NuevaNoticia from "./components/administracion/NuevaNoticia";
import ListaNoticias from "./components/administracion/ListaNoticias";
import EditarNoticias from "./components/administracion/EditarNoticias";
// import Categorias from "./components/administracion/Categorias";
import NuevaCategoria from "./components/administracion/NuevaCategoria";
import DetalleNoticia from "./components/Layout/DetalleNoticia";
import ListaCategoria from "./components/administracion/ListaCategoria";
import EditarCategoria from "./components/administracion/EditarCategoria";
import Registro from "./components/Layout/Registro";

function App() {
  //creamos un arreglo con las categorias
  const _categorias = [
    "actualidad",
    "deporte",
    "economia",
    "espectaculo",
    "fotografia",
    "politica",
    "salud",
    "tecnologia",
  ];
  //inicializamos el state de las categorias
  const [categorias, setCategorias] = useState(_categorias);
  //console.log(setCategorias);

  const [noticias, setNoticias] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);
  const [recargarCategoria, setRecargarCategoria] = useState(true);
  const [categoriaNuevas, setcategoriaNuevas] = useState([]);

  useEffect(() => {
    consultarAPI();
    setRecargarNoticias(false);
  }, [recargarNoticias]);

  const consultarAPI = async () => {
    try {
      // obtengo la lista de noticias
      const consulta = await fetch("http://localhost:4000/noticia");
      //console.log(consulta);
      const respuesta = await consulta.json();
      //console.log(respuesta);
      if ((await consulta.status) !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
      // guardo en el state
      setNoticias(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  // consulta a API categorias
  useEffect(() => {
    consultarCategoriaAPI();
    setRecargarCategoria(false)
  }, [recargarCategoria]);

  const consultarCategoriaAPI = async () => {
    try {
      // obtengo la lista de noticias
      const consultar = await fetch("http://localhost:4000/categoria");
      //console.log(consultar);
      const respuestas = await consultar.json();
      //console.log(respuestas);
      if ((await consultar.status) !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
      // guardo en el state
      setcategoriaNuevas(respuestas);
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio noticias={noticias} categoriaNuevas={categoriaNuevas}></Inicio>
        </Route>
        <Route exact path="/categorias/actualidad">
          <Actualidad categorias={categorias} noticias={noticias}></Actualidad>
        </Route>
        <Route exact path="/categorias/deporte">
          <Deporte categorias={categorias} noticias={noticias}></Deporte>
        </Route>
        <Route exact path="/categorias/economia">
          <Economia categorias={categorias} noticias={noticias}></Economia>
        </Route>
        <Route exact path="/categorias/espectaculo">
          <Espectaculo categorias={categorias} noticias={noticias}></Espectaculo>
        </Route>
        <Route exact path="/categorias/fotografia">
          <Fotografia categorias={categorias} noticias={noticias}></Fotografia>
        </Route>
        <Route exact path="/categorias/politica">
          <Politica categorias={categorias} noticias={noticias}></Politica>
        </Route>
        <Route exact path="/categorias/salud">
          <Salud categorias={categorias} noticias={noticias}></Salud>
        </Route>
        <Route exact path="/categorias/tecnologia">
          <Tecnologia categorias={categorias} noticias={noticias}></Tecnologia>
        </Route>
        <Route exact path="/noticias/nueva">
          <NuevaNoticia
            setRecargarNoticias={setRecargarNoticias}
          ></NuevaNoticia>
        </Route>
        <Route exact path="/noticias">
          <ListaNoticias
            noticias={noticias}
            setRecargarNoticias={setRecargarNoticias}
          ></ListaNoticias>
        </Route>
        <Route
          exact
          path="/noticias/editar/:id"
          render={(props) => {
            // codigo a ejecutar antes de renderizar el componente
            // obtengo el id de la lista
            const idNoticia = parseInt(props.match.params.id);
            console.log(idNoticia);
            // buscar el producto que coincida con el id
            const noticiaSelecionada = noticias.find(
              (noticia) => noticia.id === idNoticia
            );
            console.log(noticiaSelecionada);
            // muestro el componente editarNoticias
            return (
              <EditarNoticias
                noticia={noticiaSelecionada}
                setRecargarNoticias={setRecargarNoticias}
              ></EditarNoticias>
            );
          }}
        ></Route>
        <Route exact path="/administracion">
          <PrincipalAdmin></PrincipalAdmin>
        </Route>
        <Route exact path="/administracion/categoria">
          <ListaCategoria categoriaNuevas={categoriaNuevas} setRecargarCategoria={setRecargarCategoria}></ListaCategoria>
        </Route>
        <Route exact path="/administracion/nuevacategoria">
          <NuevaCategoria setRecargarCategoria={setRecargarCategoria}></NuevaCategoria>
        </Route>
        <Route exact path="/administracion/editarCategoria/:id"
          render={(props) => {
            // codigo a ejecutar antes de renderizar el componente
            // obtengo el id de la lista
            const idCategoria = parseInt(props.match.params.id);
            console.log(idCategoria);
            // buscar el producto que coincida con el id
            const categoriaSelecionada = categoriaNuevas.find(
              (ccategoria) => ccategoria.id === idCategoria
            );
            console.log(categoriaSelecionada);
            // muestro el componente editarNoticias
            return (
              <EditarCategoria
                Categoria={categoriaSelecionada}
                setRecargarCategorias={setRecargarCategoria}
              ></EditarCategoria>
            );
          }}>
        </Route>
        <Route exact path="/contacto">
          <Contacto></Contacto>
        </Route>
        <Route exact path="/nosotros">
          <Nosotros></Nosotros>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/detalle">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/registro">
          <Registro></Registro>
        </Route>
        <Route exact path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
