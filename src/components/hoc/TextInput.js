import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export default function TextInput({ value, onChange, Icon, ...others }) {
  // state (état, données)

  // comportement (fonctions)

  // affichage (JSX)
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} type="text" {...others} />
    </TextInputStyled>
  );
}
const TextInputStyled = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
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
`;
