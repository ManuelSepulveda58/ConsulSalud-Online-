import React, { useState } from 'react';
import styled from 'styled-components';

import BurguerButton from './BurguerButton';

function Navbat() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
          <NavContainer>
            <h2>ConsuSalud <span>Online</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
              <a onClick={handleClick} href="#Inicio">Inicio</a>
              <a onClick={handleClick} href="#Catalogo">Catalogo</a>
              <a onClick={handleClick} href="#Contacto">Contacto</a>
              <a onClick={handleClick} href="#Informacion">Informacion</a>
            </div>
            <div className='burguer'>
              <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
          </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  z-index: 999; 
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    display: none; 
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px) {
      display: none; 
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const BurguerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 1; 
`
export default Navbat;