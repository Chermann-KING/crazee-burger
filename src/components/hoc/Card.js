import React from "react";
import Button from "../hoc/Button";
import { formatPrice } from "../../utils/maths";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export default function Card({ key, title, imageSource, price }) {
  return (
    <CardStyled key={key} className="card">
      <div className="img-card">
        <img src={imageSource} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="cta-card">
        <h3>{formatPrice(price)}</h3>
        <Button label={"Ajouter"} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
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
`;
