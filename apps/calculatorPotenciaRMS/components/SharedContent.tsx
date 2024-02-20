import React from "react";
import styled from "styled-components";
import { FaCopy, FaWhatsapp } from "react-icons/fa";
import { theme } from "tools/App";

export const SharedContent: React.FC<{ text: string }> = ({ text }) => {
  function handleCopyClipboard() {
    navigator.clipboard.writeText(text);
  }

  return (
    <SharedContainer>
      <button type="button" onClick={handleCopyClipboard}>
        <ClipboardIcon size={theme["middle-icon-size"]} />
      </button>
    </SharedContainer>
  );
};

const ClipboardIcon = styled(FaCopy)`
  color: ${(props) => props.theme["gray-100"]};
`;

const SharedContainer = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: ${props => props.theme['middle-margin']}

  span {
    margin-left: ${(props) => props.theme["middle-margin"]};
    margin-right: ${(props) => props.theme["middle-margin"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  button {
    background-color: transparent;
    border: none;
    padding: ${props => props.theme["small-padding"]};
    

    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
    
    &:active{
        border-radius: ${props => props.theme["border-radius"]};
        border: 1px solid  ${props => props.theme["gray-200"]};
    }
  }
`;
