import React from "react";
import  Main  from "./pages/Main/index";

import "../apps"


interface ColorGroupProps {
  children?: React.ReactNode;
  title?: string;
}

const App: React.FC<ColorGroupProps> = ({ children, title }) => {
  return (
  <Main/>
  );
};

export default App;
