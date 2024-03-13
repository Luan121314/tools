import React from 'react';
import styled from 'styled-components';

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonType> = ({ text, ...rest }) => {
    return <ButtonContainer {...rest}>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
    text-decoration: none;
    border: none;
    border-radius: ${(props) => props.theme['border-radius']};
    color: ${(props) => props.theme['black']};
    font-size: ${(props) => props.theme['small-size']};
    background-color: ${(props) => props.theme['blue-100']};
    padding: 5px 20px;
    &:hover {
        color: ${(props) => props.theme['white']};
    }
`;
