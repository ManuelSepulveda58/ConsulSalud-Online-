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
  left: 0;
`;

const FooterIcons = styled.div`
  margin: 0.5rem 0;

  a {
    color: white;
    font-size: 1.5rem;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: lightgray;
    }

    svg {
      vertical-align: middle;
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
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </FooterIcons>
      <FooterText>&copy; {new Date().getFullYear()} ConsuSalud Online. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
