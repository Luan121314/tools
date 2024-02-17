import React from "react";
import styled from "styled-components";

type CardType = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardType> = ({ title, children }) => {
  return (
    <CardContainer className="card-container">
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  background-color: ${(props) => props.theme["gray-300"]};
  margin-top: 10px;
  min-width: 400px;
  border-radius: ${(props) => props.theme["border-radius"]};
  margin: 10px 0;

  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
    min-width: unset;
    min-height: unset;
    display: flex;
    flex-direction: column;

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
  }

  .title {
    background-color: ${(props) => props.theme["gray-100"]};
    padding: 5px;
    text-align: center;
    border-radius: ${(props) => props.theme["border-radius"]}
      ${(props) => props.theme["border-radius"]} 0 0;
    font-weight: 600;
  }

  .content {
    height: 100%;
    padding: 10px;
  }
`;
