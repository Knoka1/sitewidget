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
  const [count, setCount] = useState(0);

  return (
    <div>
      <Exemplo text="botão" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2 className="text-6xl">bla</h2>
      <Widget />
    </div>
  );
}

export default App;
