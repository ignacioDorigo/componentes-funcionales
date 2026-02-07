import React from "react";
import { useContador } from "../../hooks/useContador";
export default function ContadorCustomHook() {
  const estadoInicial = 0;
  const { contador, sumar, restar } = useContador(estadoInicial);

  return (
    <div className="contador">
      <h1>ContadorCustomHook: {contador}</h1>
      <div className="contador__botones">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>
    </div>
  );
}
