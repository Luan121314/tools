import React from "react";
import styled from "styled-components";

type ShowUnitType = {
  name: string;
  value: number;
  suffix?: string;
};

export type ShowUnitGroupType = {
  title: string;
  units: Array<{
    name: string;
    value: number
    suffix?: string;
  }>;
};

const ShowUnit: React.FC<ShowUnitType> = (props) => {
  return (
    <ShowUnitContainer className="unit-container">
      <span className="unit">{props.name}: </span>
      <span className="value">
        {props.value}
      <span className="suffix"> {props.suffix}</span>
      </span>
    </ShowUnitContainer>
  );
};

export const ShowUnitGroup: React.FC<ShowUnitGroupType> = (props) => {
  return (<ShowUnitGroupContainer>
    <span className="title" ></span>
    {
        props.units.map(unit => {
            return <ShowUnit key={unit.name+unit.value} name={unit.name} value={unit.value}  suffix={unit.suffix}/>
        })
    }
  </ShowUnitGroupContainer>)
};

const ShowUnitGroupContainer = styled.article`
  margin-bottom: ${(props) => props.theme["middle-margin"]};
`;

const ShowUnitContainer = styled.article`
   .unit{
    font-weight: 600;
   }
`;
