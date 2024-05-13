import React, { useState } from 'react';
import image from '../assets/loginvector.png'
import ImageProfile from '../assets/Profile.png';
import appFirebase  from '../Credenciales';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase)


export function Login() {
  const [redirigirInicio, setRedirigirInicio] = useState(false); // Estado para redirigir a la página de inicio
  const navigate = useNavigate(); // Hook useNavigate para la redirección

  const [registrando, setRegistrando] = useState(false);
  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
  
    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } else {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      }
  
      navigate('/'); 
    } catch (error) {
      console.error('Error de autenticación:', error.message);
      alert ("Usuario o contraseña incorrecto");
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='padre'>
            <div className='card card-body shadow-lg'>
              <img src={ImageProfile} alt="" className='estilo-profile'/>
              <form onSubmit={functAutentication}>
                <input type='text' placeholder='Ingresa Email' className='cajatexto' id='email' />
                <input type='Password' placeholder='Ingresar' className='cajatexto' id='password' />
                <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
              </form>
              <h4 className='texto'>{registrando ? "Si ya tienes cuenta": "No tienes cuenta"}<button className='btnswicht' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion":"Registrate"}</button></h4>
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <img src={image} alt="" className='tamaño-image'/>
        </div>
      </div>
    </div>
  );
}
