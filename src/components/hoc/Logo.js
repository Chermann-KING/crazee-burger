import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import picto from "../../assets/images/logo-orange.webp";

export default function Logo({ className }) {
  const reload = () => {
    window.location.reload();
  };

  return (
    <LogoStyled>
      {/* <Link to="/"> */}
      <h1 className={className} onClick={reload}>
        Crazee
        <img src={picto} alt="" aria-hidden="true" />
        Burger
      </h1>
      {/* </Link> */}
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  z-index: 1;
  width: min-content;
  cursor: pointer;
  padding: ${theme.spacing.sm} 0;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Amatic SC", cursive;
    font-size: calc(${theme.fonts.P6}*.5);
    color: ${theme.colors.primary_burger};

    img {
      /* width: 239px; */
      width: 60px;
      height: auto;
      margin: 0 0.2rem;
    }
  }
`;
