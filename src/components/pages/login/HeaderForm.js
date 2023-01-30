import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function HeaderForm() {
  return (
    <HeaderFormStyled>
      <h2>Bienvenue chez nous !</h2>
      <hr />
      <h3>Connectez-vous</h3>
    </HeaderFormStyled>
  );
}

const HeaderFormStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${theme.fonts.P5};
  }
  h3 {
    font-size: ${theme.fonts.P4};
  }
  hr {
    border-top: 2.5px solid #f56a2c;
    border-radius: ${theme.borderRadius.subtle};
    margin: ${theme.spacing.lg} 0;
    width: 100%;
  }
`;
