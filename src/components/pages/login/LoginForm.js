import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { IoChevronForward } from "react-icons/io5";
import InputText from "../../hoc/InputText";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../hoc/Button";

export default function LoginForm() {
  // state (état, données)
  const [inputText, setInputText] = useState("");
  // useNavigate() est un hook de react-router-dom permettant de forcer la navigation dans ce cas-ci
  const navigate = useNavigate();

  // comportement (fonctions)
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
    // forcer la navigation vers la OrderPage
    navigate(`/order/${inputText}`);
  };

  // affichage (JSX)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="header-form">
        <h2>Bienvenue chez nous !</h2>
        <hr />
        <h3>Connectez-vous</h3>
      </div>

      <div className="cta-form">
        <InputText
          value={inputText}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  z-index: 1;
  width: 30vw;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.white};

  gap: ${theme.spacing.md};

  .header-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header-form h2 {
    font-size: ${theme.fonts.P5};
  }
  .header-form h3 {
    font-size: ${theme.fonts.P4};
  }
  hr {
    border-top: 2.5px solid ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.subtle};
    margin: ${theme.spacing.md} 0;
    width: 100%;
  }

  .cta-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${theme.spacing.sm};
  }
`;
