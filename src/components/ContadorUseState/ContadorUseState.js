import React, { useState } from "react";
import "./ContadorUseState.css";

export default function ContadorUseState() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador((prevState) => prevState + 1);
  };
  const restar = () => {
    if (contador !== 0) {
      setContador((prevState) => prevState - 1);
    }
  };

  return (
    <div className="contador">
      <h1>Contador: {contador}</h1>

      <div className="contador__botones">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>
    </div>
  );
}
