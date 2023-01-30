import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export default function Button({ label, Icon }) {
  // States

  // Components

  // Affichage
  return (
    <ButtonStyled type="submit">
      {label} {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.primary_burger};

  border: 0.5px solid ${theme.colors.primary_burger};

  padding: ${theme.spacing.md} 0;
  width: 400px;
  color: ${theme.colors.white};
  font-weight: ${theme.weights.bold};
  letter-spacing: 0.1rem;
  :hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};

    border: 0.5px solid ${theme.colors.primary_burger};

    -webkit-transition: 0.1s;
    transition: 0.1;
  }
  :active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 0.5px solid ${theme.colors.primary_burger};
  }
`;
