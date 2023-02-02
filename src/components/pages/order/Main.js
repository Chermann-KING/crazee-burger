import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}
const MainStyled = styled.main`
  background-color: #f5f5f7;
  /* overflow-y: scroll; */
  height: 85vh;
  max-width: 1400px;
  min-width: 410px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 0 ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  -webkit-box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  h5 {
    text-align: center;
  }
`;
