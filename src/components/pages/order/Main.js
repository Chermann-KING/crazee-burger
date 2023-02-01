import React from "react";
import styled from "styled-components";

export default function Main() {
  return <MainStyled></MainStyled>;
}
const MainStyled = styled.main`
  background-color: #f5f5f7;
  /* overflow-y: scroll; */
  height: 85vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 0 15px 15px;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  -webkit-box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  h5 {
    text-align: center;
  }
`;
