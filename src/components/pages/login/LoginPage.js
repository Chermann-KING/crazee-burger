import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import imageBG from "../../../assets/images/burger-background.jpg";
import logo from "../../../assets/images/logo-orange.png";
import { theme } from "../../../theme/theme";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <header className="header">
        <Link to="/">
          <h1>
            Crazee
            <img src={logo} alt="" aria-hidden="true" />
            Burger
          </h1>
        </Link>
      </header>

      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background-image: url(${imageBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  gap: ${theme.spacing.xxl};

  .header {
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
  }
  form {
    font-family: "Amatic SC", cursive;
    color: white;
  }
`;
