import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Swal from 'sweetalert2';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/Principal/Inicio';
import Actualidad from './components/Categorias/Actualidad';
import Deporte from './components/Categorias/Deporte';
import Economia from './components/Categorias/Economia';
import Espectaculo from './components/Categorias/Espectaculo';
import Fotografia from './components/Categorias/Fotografia';
import Politica from './components/Categorias/Politica';
import Salud from './components/Categorias/Salud';
import Tecnologia from './components/Categorias/Tecnologia';
import Login from './components/Layout/Login';


function App() {
  return (
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Inicio></Inicio>
      </Route>
      <Route exact path="/categorias/actualidad">
        <Actualidad></Actualidad>
      </Route>
      <Route exact path="/categorias/deporte">
        <Deporte></Deporte>
      </Route>
      <Route exact path="/categorias/economia">
        <Economia></Economia>
      </Route>
      <Route exact path="/categorias/espectaculo">
        <Espectaculo></Espectaculo>
      </Route>
      <Route exact path="/categorias/fotografia">
        <Fotografia></Fotografia>
      </Route>
      <Route exact path="/categorias/politica">
        <Politica></Politica>
      </Route>
      <Route exact path="/categorias/salud">
        <Salud></Salud>
      </Route>
      <Route exact path="/categorias/tecnologia">
        <Tecnologia></Tecnologia>
      </Route>
      <Route>
        <Login></Login>
      </Route>
    </Switch>
    <Footer></Footer>
    </Router>
  );
}

export default App;
