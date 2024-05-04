import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Catalogo } from './Components/Catalogo';
import { Inicio } from './Components/Inicio';
import { Contacto } from './Components/Contacto';
import { Informacion } from './Components/Informacion';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Catalogo' element={<Catalogo/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='/Informacion' element={<Informacion/>}/>
    </Routes>
    </>
  );
}

export default App;

