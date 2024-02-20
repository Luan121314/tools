import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Routes } from "tools/Routes";
import { useGoogleAnalytics } from "tools/services/hooks/useGoogleAnalytics";
import { CONSTANTS } from "./Contants";


interface ColorGroupProps {
  children?: React.ReactNode;
  title?: string;
}

const App: React.FC<ColorGroupProps> = () => {
  useGoogleAnalytics(CONSTANTS.googleAnalytics)
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

export const theme = {
  "blue-100": "#3498DB",
  "blue-200": "#007BFF",
  "blue-300": "#004080",
  "blue-400": "#002147",
  "blue-500": "#001F3F",

  "gray-100": "#DDDDDD",
  "gray-200": "#A0A0A0",
  "gray-300": "#999999",
  "gray-400": "#808080",
  "gray-500": "#555555",
  "gray-600": "#444444",
  "gray-700": "#333333",

  "green-100": "#4CAF50",
  "green-200": "#008000",
  
  "red-100": "#E74C3C",
  "red-200": "#FF0000",
  
  "yellow-100": "#FFD700",
  "yellow-200": "#FFA500",
  
  "purple-100": "#800080",
  "pink-100": "#FF69B4",
  
  black: "#000000",
  white: "#FFFFFF",
  
  "whatsapp-icon-100": "#25D366",

  "micro-size": "12px",
  "small-size": "14px",
  "medium-size": "17px",
  "large-size": "24px",
  "extra-size": "29px",
  "super-size": "36px",

  "border-radius": "5px",

  "small-padding": "5px",
  "middle-padding": "10px",
  "large-padding": "20px",

  "small-margin": "5px",
  "middle-margin": "10px",
  "large-margin": "20px",

  "small-icon-size": 20,
  "middle-icon-size": 30,
  "large-icon-size": 60,

  breakPoints:{
    tablet: "600px",
    smartphone: "400px"
  }
,
};

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    margin: 0;
    font-family: Poppins, regular;
    font-weight: 400;
  }
`;
