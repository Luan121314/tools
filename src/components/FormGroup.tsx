import React from "react";
import styled from "styled-components";
import { Select, SelectProps } from "./Select";

interface FormGroupType extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  prefix?: string;
  suffix?: string;
  selectOptions?: SelectProps["options"];
  type: React.HTMLInputTypeAttribute | 'select'
}

export const FormGroup: React.FC<FormGroupType> = ({
  name,
  prefix,
  suffix,
  label,
  type,
  selectOptions,
  ...rest
}) => {
  const inputID = name + "Id";
  return (
    <FormGroupContainer>
      {label ? (<label className="label" htmlFor={inputID}>{label}</label>) : null}
      <div className="input-label">{prefix ? (<label className="prefix" htmlFor={inputID}>{prefix}</label>) : null}
        {type === "select" ? 
            (<Select name={name} options={selectOptions} {...rest} />
        ) : (
          <input className="input"  {...rest} />
        )}
        {suffix ? (<label className="suffix" htmlFor={inputID}>{suffix}</label>) : null}
      </div>
    </FormGroupContainer>
  );
};

const FormGroupContainer = styled.fieldset`
  display: flex;
  color: ${(props) => props.theme["black"]};
  font-size: ${(props) => props.theme["small-size"]};
  background-color: ${(props) => props.theme["gray-100"]};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme["gray-700"]};
  margin: 5px 0;
  height: 27px;
  padding-left: 5px;
  align-items: center;

  .input, select {
    margin: 0 5px;
    width: 80px;
    border-radius: ${(props) => props.theme["border-radius"]};
    border: 1px solid ${(props) => props.theme["gray-300"]};
    background-color: ${(props) => props.theme["white"]};
    padding: 0px 3px;
    height: 20px;
  }

  .input-label {
    font-weight: 600;
    display: flex;
  }
`;
