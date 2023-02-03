import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import picto from "../../assets/images/logo-orange.webp";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      crazee
      <img src={picto} alt="" aria-hidden="true" />
      burger
    </LogoStyled>
  );
}

const LogoStyled = styled.h1`
  z-index: 1;
  width: min-content;
  padding: ${theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Amatic SC", cursive;
  font-size: calc(${theme.fonts.P6}*.7);
  color: ${theme.colors.primary_burger};
  padding: ${theme.spacing.sm} 0;

  img {
    width: 70px;
    height: auto;
    margin: 0 0.2rem;
  }
`;
