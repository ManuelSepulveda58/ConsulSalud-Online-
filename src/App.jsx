import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Catalogo } from './Components/Catalogo';
import { Inicio } from './Components/Inicio';
import { Contacto } from './Components/Contacto';
import { Informacion } from './Components/Informacion';
import { Buscar } from './Components/Buscar'; // Importa la nueva página de búsqueda
import appFirebase from "../src/Credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
      setCargando(false);
    });
    return () => unsubscribe();
  }, []);

  if (cargando) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se verifica el estado de autenticación
  }

  return (
    <Routes>
      <Route path="/" element={<Inicio correoUsuario={usuario ? usuario.email : null} />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Informacion" element={<Informacion />} />
      <Route path="/Buscar" element={<Buscar />} /> {/* Añade la ruta para la página de búsqueda */}
    </Routes>
  );
}

export default App;
