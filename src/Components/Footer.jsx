import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0; /* Asegúrate de que esté anclado al borde izquierdo */
`;

const FooterIcons = styled.div`
  margin: 0.5rem 0;

  svg {
    color: white;
    font-size: 1.5rem;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: lightgray;
    }
  }
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterIcons>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </FooterIcons>
      <FooterText>&copy; {new Date().getFullYear()} ConsuSalud Onile. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
}

export default Footer;

