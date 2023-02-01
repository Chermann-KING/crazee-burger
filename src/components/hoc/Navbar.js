import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../hoc/Logo";
import { theme } from "../../theme/theme";

export default function Navbar() {
  // State (état, données)

  // useParams() est un hook de react-router-dom permettant de récupérer les paramètres de l'URL
  const { userName } = useParams();

  // Comportement (fonctions)

  // Affichage (JSX)

  return (
    <NavbarStyled>
      <Logo />

      <div className="user">
        <div className="is-connected">
          <p>
            Hey, <span>{userName}</span>
          </p>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
        </div>

        <BsPersonCircle className="icon" />
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  cursor: default;
  background-color: ${theme.colors.white};

  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-radius: 15px 15px 0 0;

  .user {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .is-connected {
      color: ${theme.colors.greyDark};
      text-align: right;
      p > span {
        color: ${theme.colors.primary_burger};
        font-weight: ${theme.weights.bold};
      }
      button {
        cursor: pointer;
        color: ${theme.colors.greyDark};
        background-color: transparent;
        border: none;
        margin-top: ${theme.spacing.xxs};
        padding: ${theme.spacing.xxs} 0;
        border-bottom: 1px solid transparent;

        transition: all 0.2s ease;
        :hover {
          border-bottom: 1px solid ${theme.colors.greyDark};
        }
      }
    }
    .icon {
      width: 36px;
      height: auto;
      color: ${theme.colors.greyDark};
    }
  }
`;
