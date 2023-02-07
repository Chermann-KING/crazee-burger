import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import Button from "../../hoc/Button";
import { fakeMenu2 } from "../../../data/fakeMenu";
import { formatPrice } from "../../../utils/maths";

export default function Main() {
  // state (état, données)
  const [products, setProducts] = useState(fakeMenu2);

  // comportement (fonctions)

  // affichage (JSX)
  return (
    <MainStyled>
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <div className="img-card">
              <img src={product.imageSource} alt={product.title} />
            </div>
            <h2>{product.title}</h2>
            <div className="cta-card">
              <h3>{formatPrice(product.price)}</h3>
              <Button label={"Ajouter"} />
            </div>
          </div>
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

  /* Card styled */
  .card {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 20px 20px;
    gap: 20px;
    width: 240px;
    height: 330px;
    background-color: white;
    border-radius: 15px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    .img-card {
      display: flex;
      justify-content: center;
      width: 200px;
      height: 145px;

      img {
        max-width: 100%;
        max-height: 100%;
        align-self: flex-end;
      }
    }
    h2 {
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-family: "Amatic SC", cursive;
      font-size: 36px;
    }

    .cta-card {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;

      h3 {
        font-size: 16px;
        font-weight: 100;
        color: ${theme.colors.primary_burger};
        align-self: center;
      }
      button {
        width: 95px;
        height: 38px;
        letter-spacing: normal;
      }
    }
  }

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
