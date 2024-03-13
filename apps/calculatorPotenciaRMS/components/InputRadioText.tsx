import React from 'react';
import styled from 'styled-components';

interface InputRadioTextType extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    radiosButtons?: Array<{
        label: string;
        value: string;
    }>;
    prefix?: string;
    suffix?: string;
    label?: string;
    valueRadio?: string;
    onChangeRadio: (value: string) => void;
}

export const InputRadioText: React.FC<InputRadioTextType> = ({
    onChangeRadio,
    ...props
}) => {
    function RenderRadioInputs() {
        if (!props.radiosButtons?.length) return null;

        const Radios = props.radiosButtons?.map((radio, index) => {
            return (
                <div className="radio-item" key={props.name + index}>
                    <input
                        type="radio"
                        name={props.name}
                        checked={props.valueRadio === radio.value}
                        onChange={() => onChangeRadio(radio.value)}
                        id={'radio' + radio.value}
                    />
                    <label htmlFor={'radio' + radio.value} className="input-label">
                        {radio.label}{' '}
                    </label>
                </div>
            );
        });

        return <div className="radios-container">{Radios}</div>;
    }

    return (
        <InputRadioTextContainer className="input-radio-text-container">
            <div className="text-container">
                <label htmlFor={'radio' + props.name} className="input-label">
                    {props.label}
                </label>
                {props.prefix ? (
                    <label htmlFor={'radio' + props.name}>{props.prefix}</label>
                ) : null}
                <input type="text" className="input" {...props} />{' '}
                {props.suffix ? (
                    <label htmlFor={'radio' + props.name} className="suffix">
                        {props.suffix}
                    </label>
                ) : null}
            </div>
            <RenderRadioInputs />
        </InputRadioTextContainer>
    );
};

const InputRadioTextContainer = styled.fieldset`
    display: flex;
    color: ${(props) => props.theme['black']};
    font-size: ${(props) => props.theme['small-size']};
    background-color: ${(props) => props.theme['gray-100']};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme['gray-700']};
    margin: 5px 0;
    height: 27px;
    padding-left: 5px;
    align-items: center;
    justify-content: space-between;

    .text-container {
        padding-right: ${(props) => props.theme['middle-padding']};
    }

    .radios-container {
        display: flex;
    }

    .radio-item {
        display: flex;
        input {
            margin-right: ${(props) => props.theme['small-margin']};
            border: none;
        }
        label {
            padding-right: ${(props) => props.theme['middle-padding']};
        }
    }

    .input {
        margin: 0 5px;
        width: 80px;
        border-radius: ${(props) => props.theme['border-radius']};
        border: 1px solid ${(props) => props.theme['gray-300']};
        background-color: ${(props) => props.theme['white']};
        padding: 0px 3px;
        height: 20px;
    }

    .suffix {
        font-weight: 600;
    }

    @media only screen and (max-width: ${(props) =>
            props.theme.breakPoints['smartphone']}) {
        & {
            flex-direction: column;
            height: unset;
            min-height: 27px;
            align-items: start;
        }
        .text-container {
            padding-top: ${(props) => props.theme['middle-padding']};
        }
    }
`;
