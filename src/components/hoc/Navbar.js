import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Logo from "../hoc/Logo";
import { theme } from "../../theme/theme";
import UserConnected from "./UserConnected";

export default function Navbar() {
  // State (état, données)

  // useParams() est un hook de react-router-dom permettant de récupérer les paramètres de l'URL
  const { userName } = useParams();

  // Comportement (fonctions)
  const reload = () => {
    window.location.reload();
  };

  // Affichage (JSX)
  return (
    <NavbarStyled>
      <Logo onClick={reload} className={"pointer"} />
      <UserConnected userName={userName} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  cursor: default;
  background-color: ${theme.colors.white};

  height: 10vh;
  max-width: 1400px;
  min-width: 410px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;

  .pointer {
    cursor: pointer;
  }
`;
