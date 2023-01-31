import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import Navbar from "../../hoc/Navbar";
import Main from "./Main";

export default function OrderPage() {
  // State (état, données)

  // Comportement (fonctions)

  // Affichage (JSX)
  return (
    <OrderPageStyled>
      <Navbar />
      <Main />
    </OrderPageStyled>
  );
}
const OrderPageStyled = styled.div`
  height: 100vh;
  padding: 1rem 3rem;
  background-color: ${theme.colors.primary_burger};
`;
