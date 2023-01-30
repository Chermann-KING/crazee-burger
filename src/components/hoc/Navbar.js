import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../hoc/Logo";

export default function Navbar() {
  // State (état, données)

  // useParams() est un hook de react-router-dom permettant de récupérer les paramètres de l'URL
  const { userName } = useParams();

  // Comportement (fonctions)

  // Affichage (JSX)

  return (
    <NavbarStyled>
      <div className="brand">
        <Logo className="scale-logo" />
      </div>

      <div className="user">
        <div className="is-connected">
          <p>
            Hey, <span>{userName}</span>
          </p>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
        </div>

        <div className="profil-pic">
          <BsPersonCircle />
        </div>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  /* border: 5px solid red; */
  background-color: yellow;

  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    /* flex: 1; */
    /* général style of braingin */
    /* border: 5px solid green; */
    .scale-logo {
      border: 5px solid black;

      /* transform: scale(0.3); */
    }
  }
  .user {
    /* flex: 3; */
    /* border: 5px solid blue; */

    display: flex;
    align-items: center;
    gap: 1.2rem;

    .profil-pic {
      justify-self: flex-end;
    }
  }
`;
