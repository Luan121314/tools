import React from "react";
import {Routes} from 'tools/Routes'


interface ColorGroupProps {
  children?: React.ReactNode;
  title?: string;
}

const App: React.FC<ColorGroupProps> = () => {
  return (
  <Routes/>
  );
};

export default App;
