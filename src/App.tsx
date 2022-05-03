import React from "react";
import { useState } from "react";

interface ButtonProps {
  text?: string;
}

function Exemplo(props: ButtonProps) {
  return <button className="bg-gray-900 p-2">{props.text} </button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Exemplo text="botão" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2 className="text-6xl">bla</h2>
    </div>
  );
}

export default App;
