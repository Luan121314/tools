import React, { ReactNode } from "react";
import styled from "styled-components";

type MainType = {
  children: ReactNode;
};

export const MainShape: React.FC<MainType> = (props) => {
  return (
    <MainContainer className="main-shape">
      {props.children}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${(props) => props.theme["blue-400"]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: visible;
`;
