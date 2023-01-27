import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { IoChevronForward } from "react-icons/io5";
import InputText from "../../hoc/InputText";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../hoc/Button";
import HeaderForm from "./HeaderForm";

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
      <HeaderForm />

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.white};

  gap: ${theme.spacing.md};

  .cta-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${theme.spacing.sm};
  }
`;
