import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import imageBG from "../../../assets/images/burger-background.webp";
import { theme } from "../../../theme/theme";
import Logo from "../../hoc/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="filter"></div>
      <Logo className="scale-logo" />
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

  .scale-logo {
    transform: scale(3.4);
  }
  .filter {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
  }
`;
