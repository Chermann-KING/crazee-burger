import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import logo from "../../assets/images/logo-orange.png";

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
    font-size: clamp(68px, 8vw, 6rem);
    color: ${theme.colors.primary_burger};

    img {
      width: 14vw;
      min-width: 120px;
      height: auto;
    }
  }
`;
