import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import Card from "../../../hoc/Card";

export default function Main() {
  // state (état, données)
  const [products, setProducts] = useState(fakeMenu2);

  // comportement (fonctions)

  // affichage (JSX)
  return (
    <MainStyled>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </MainStyled>
  );
}
const MainStyled = styled.main`
  background-color: ${theme.colors.background_white};
  overflow: hidden scroll;
  height: 85vh;
  max-width: 1400px;
  min-width: 410px;
  margin: 0 auto;
  padding: 50px 90px;

  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: repeat(3, 330px);
  grid-column-gap: 85px;
  grid-row-gap: 60px;

  border-radius: 0 0 15px 15px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  /* Scroll management */
  ::-webkit-scrollbar {
    width: 0.2em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
