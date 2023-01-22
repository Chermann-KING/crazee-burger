import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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
        <div className="input-wrapper">
          <BsPersonCircle className="icon" />
          <input
            onChange={handleChange}
            value={inputText}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>

        <button type="submit">
          Accéder à mon espace <IoChevronForward />
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  gap: ${theme.spacing.md};

  .header-form h2 {
    font-size: ${theme.fonts.P5};
  }
  .header-form h3 {
    font-size: ${theme.fonts.P4};
  }
  hr {
    border: 2.5px solid ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.subtle};
    margin: ${theme.spacing.md} 0;
  }

  .cta-form {
    display: flex;
    flex-direction: column;

    gap: ${theme.spacing.sm};

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.md};
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      border-radius: ${theme.borderRadius.round};
      background-color: ${theme.colors.white};

      .icon {
        color: ${theme.colors.greySemiDark};
      }
      input[type="text"] {
        background-color: transparent;
        font-size: ${theme.fonts.P0};
        border-radius: ${theme.borderRadius.round};
        border: 0.5px solid ${theme.colors.white};
        -webkit-transition: 0.3s;
        transition: 0.3s;
        outline: none;
        width: 100%;

        ::placeholder {
          color: ${theme.colors.greyMedium};
        }
        :focus {
          border: 0.5px solid ${theme.colors.greyBlue};
        }
      }
    }

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing.md};
      border-radius: ${theme.borderRadius.round};
      background-color: ${theme.colors.primary_burger};
      padding: ${theme.spacing.md} 0;
      width: 100%;
      color: ${theme.colors.white};
      font-weight: ${theme.weights.bold};
      letter-spacing: 0.1rem;
      :hover {
        background-color: ${theme.colors.white};
        padding: 19px 0;
        color: ${theme.colors.primary_burger};
        border: 0.5px solid ${theme.colors.primary_burger};
        -webkit-transition: 0.1s;
        transition: 0.1;
      }
    }
  }
`;
