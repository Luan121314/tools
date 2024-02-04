import React from "react";
import  Main  from "./pages/Main";
import {Routes} from './Routes'


interface ColorGroupProps {
  children?: React.ReactNode;
  title?: string;
}

const App: React.FC<ColorGroupProps> = ({ children, title }) => {
  return (
  <Routes/>
  );
};

export default App;
