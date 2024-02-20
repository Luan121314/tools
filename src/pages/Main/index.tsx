import React from "react";
import styled from "styled-components";
import AppService from "tools/services/appService";
import { AppsList } from "./AppsList";
import { CONSTANTS } from "tools/Contants";
import { MainShape } from "tools/components/MainShape";
import { useTitle } from "tools/services/hooks/useTitle";
import { TagHeadManager } from "tools/components/TagHeadManager";

export default function Main() {
  const apps = AppService.getApps();
  useTitle("LN tools")

  return (
    <MainContainerWapper>
      <TagHeadManager title="LN tools" description="Diversos app, com finalidades diferentes"  />
      <MainShape>
        <header>
          <label className="name">LNTools</label>
          <label className="category-name"> Ferramentas genéricas</label>
        </header>
        <section>
          <span className="info" >Escolha um app, e aperte em ver para utilizar.</span>
          <AppsList apps={apps} />
        </section>
      </MainShape>
    </MainContainerWapper>
  );
}

const MainContainerWapper = styled.div`
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

  .info{
      font-size: ${props => props.theme["micro-size"]};
      color: ${(props) => props.theme["gray-100"]};
      padding: ${props => props.theme["small-padding"]}
    }

  header .name {
    color: ${(props) => props.theme["gray-100"]};
  }

  header .category-name {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
