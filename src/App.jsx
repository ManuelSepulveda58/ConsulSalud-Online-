import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Catalogo } from './Components/Catalogo';
import { Inicio } from './Components/Inicio';
import { Contacto } from './Components/Contacto';
import { Informacion } from './Components/Informacion';
import { Home } from './Components/Home';
import appFirebase from "../src/Credenciales";
import { getAuth,onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

function App() {

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){ setUsuario(usuarioFirebase)      
    }else{
  setUsuario(null)
  }
  })
  return (
    <>

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Catalogo' element={<Catalogo/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='/Informacion' element={<Informacion/>}/>
    </Routes>
    </>
    
  );
}

export default App;

