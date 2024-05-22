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
            <BurguerButton clicked={clicked} handleClick={handleClick} />
            {clicked && (
              <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="/">Inicio</a>
                <a onClick={handleClick} href="/Catalogo">Catálogo</a>
                <a onClick={handleClick} href="/Contacto">Contacto</a>
                <a onClick={handleClick} href="/Informacion">Información</a>
                <a onClick={handleClick} href="/Login">Login</a>
              </div>
            )}
          </NavContainer>
          <BgDiv className={`${clicked ? 'active' : ''}`} onClick={handleClick}></BgDiv>
        </>
    )
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
`

const BgDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  transition: opacity .3s ease;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`

export default Navbat;
