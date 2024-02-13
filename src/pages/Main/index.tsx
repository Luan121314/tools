import React from "react";
import styled from "styled-components";
import AppService from "tools/services/appService";
import { AppsList } from "./AppsList";
import { useGoogleAnalytics } from "tools/services/hooks/useGoogleAnalytics";
import { CONSTANTS } from "tools/Contants";

export default function Main() {
  const apps = AppService.getApps();
  useGoogleAnalytics(CONSTANTS.googleAnalytics);

  return (
    <MainContainer className="main">
      <header>
        <label className="name">LNTools</label>
        <label className="category-name"> Ferramentas genéricas</label>
      </header>
      <section>
        <AppsList apps={apps} />
      </section>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: ${(props) => props.theme["blue-400"]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    text-align: center;
    width: 100vw;
    margin-top: 20px;
    margin-bottom: 20px;
    label {
      font-weight: 600;
      font-size: ${(props) => props.theme["super-size"]};

      @media only screen and (max-width: 600px) {
        font-size: ${(props) => props.theme["large-size"]};

        &.category-name {
          display: none;
        }
      }
    }
    border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
  }

  header .name {
    color: ${(props) => props.theme["gray-100"]};
  }

  header .category-name {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
