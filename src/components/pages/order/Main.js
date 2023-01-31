import React from "react";
import styled from "styled-components";

export default function Main() {
  return <MainStyled></MainStyled>;
}
const MainStyled = styled.main`
  background-color: #f5f5f7;
  /* overflow-y: scroll; */
  height: 82vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 30px -3px rgba(0, 0, 0, 0.71) inset;
  -webkit-box-shadow: 0px 0px 30px -3px rgba(0, 0, 0, 0.71) inset;
  -moz-box-shadow: 0px 0px 30px -3px rgba(0, 0, 0, 0.71) inset;

  h5 {
    text-align: center;
  }
`;
