/**
 * Aquí se declara el router 
 * La idea del reto es usando el tutorial y lo explicado en clase
 * Crear una página básica con un listado de mascotas, tal que cuando se
 * seleccione una mascota, se despliegue el detalle de esta en una nueva 
 * página, enlazada por routing "/mascotas/mascotaId"
 * @author Miguel Arturo Reina
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import Mascotas from "./components/mascotas";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mascotas />}/>
          <Route path="/mascotas" element={<Mascotas />}/>
          <Route path="/mascotas/:mascotaId" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;