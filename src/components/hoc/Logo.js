import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import logo from "../../assets/images/logo-orange.webp";

export default function Logo() {
  return (
    <LogoStyled>
      <Link to="/">
        <h1>
          Crazee
          <img src={logo} alt="" aria-hidden="true" />
          Burger
        </h1>
      </Link>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  z-index: 1;
  width: min-content;

  h1 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Amatic SC", cursive;
    font-size: calc(${theme.fonts.P6}*1.9);
    color: ${theme.colors.primary_burger};

    img {
      width: 239px;
      height: auto;
      margin: 0 1rem;
    }
  }
`;
