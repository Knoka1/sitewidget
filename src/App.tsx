import React from "react";
import { useState } from "react";

import Widget from "./components/Widget";

interface ButtonProps {
  text?: string;
}

function Exemplo(props: ButtonProps) {
  return <button className="bg-purple-900 p-2">{props.text} </button>;
}

function App() {
  return (
    <div>
      <Widget />
    </div>
  );
}

export default App;
