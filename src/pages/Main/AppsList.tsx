import React from 'react'
import styled from "styled-components";
import { Card } from "tools/components/Card";
import { Link } from "react-router-dom";
import { AppServiceType } from 'tools/services/appService';

type AppsListType = {
    apps: AppServiceType[]
}


export const AppsList:React.FC<AppsListType> = ({apps}) => {
    return (
        <ListAppsContainer>

        {apps.map((app, index) => {
            return (
                <Card title={app.name} key={index + app.name}>
                {app.info ? <Content>{app.info}</Content> : null}
                <NavbarLink to={app.route} key={index + app.name}>
                  Ver
                </NavbarLink>
              </Card>
            );
        })}
        </ListAppsContainer>
    )
} 

const ListAppsContainer = styled.div`
@media only screen and (max-width: 600px) {
    width: 100%;
    .card-container {
        width: 100%;
        margin: 0 3px 10px 0;
    }

}


`

const NavbarLink = styled(Link)`
  text-decoration: none;
  border-radius: ${(props) => props.theme["border-radius"]};
  color: ${(props) => props.theme["black"]};
  font-size: ${(props) => props.theme["small-size"]};
  background-color: ${(props) => props.theme["blue-100"]};
  padding: 5px 20px;
  &:hover {
    color: ${(props) => props.theme["white"]};
  }
`;

const Content = styled.div`
  font-size: ${(props) => props.theme["small-size"]};
  margin-bottom: 10px;
  max-width: 600px;
`;
