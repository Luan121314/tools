import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
}

export const Select: React.FC<SelectProps> = ({ name, options, ...rest }) => {
    return (
        <SelectComponent className="select-component">
            <select name={name} id={`select${name}`} {...rest}>
                <option value="">Selecione</option>
                {options.map((_option, index) => (
                    <option key={index} value={_option.value}>
                        {_option.label}
                    </option>
                ))}
            </select>
        </SelectComponent>
    );
};

const SelectComponent = styled.div`
    .select-component {
        margin: 10px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .select-component > label {
        font-weight: 400;
    }

    .select-component > select {
        width: 70%;
        border-radius: 8px;
        padding: 10px;
        border: none;
        box-shadow: 0px 1px 2px #000c;
    }
    .select-component > select > option {
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    @media (max-width: 470px) {
        .select-component {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 1rem;
        }
        .select-component > select {
            width: 100%;
        }

        .select-component > label {
            font-weight: 400;
            margin-bottom: 0.5rem;
        }
    }
`;
