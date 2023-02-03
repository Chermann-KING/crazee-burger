import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export default function UserConnected({ userName }) {
  return (
    <UserConnectedStyled>
      <div className="is-connected">
        <p>
          Hey, <span>{userName}</span>
        </p>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>

      <BsPersonCircle className="icon" />
    </UserConnectedStyled>
  );
}

const UserConnectedStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-right: ${theme.spacing.xl};

  .is-connected {
    color: ${theme.colors.greyDark};
    text-align: right;
    p > span {
      color: ${theme.colors.primary_burger};
      font-weight: ${theme.weights.bold};
      font-size: 15px;
    }
    button {
      cursor: pointer;
      font-size: 10px;
      color: ${theme.colors.greyDark};
      background-color: transparent;

      padding: ${theme.spacing.xxs} 0;

      transition: all 0.2s ease;
      :hover {
        padding-top: 2px;
        text-decoration: underline;
      }
    }
  }
  .icon {
    width: 36px;
    height: auto;
    color: ${theme.colors.greyDark};
  }
`;
