import React, { useReducer } from "react";

export default function ContadorUseReducer() {
  const estadoInicial = { contador: 0 };
  const reducer = (state, action) => {
    if (action.type === "SUMAR") {
      return { contador: state.contador + 1 };
    } else if (action.type === "RESTAR") {
      if (state.contador !== 0) {
        return { contador: state.contador - 1 };
      } else {
        return { contador: 0 };
      }
    } else {
      // Es un default case por los errores de sintaxis que puede haber
      return { contador: 9999999 };
    }
  };
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div className="contador">
      <h1>ContadorUseReducer: {state.contador}</h1>
      <div className="contador__botones">
        <button onClick={() => dispatch({ type: "SUMAR" })}>Sumar</button>
        <button onClick={() => dispatch({ type: "RESTAR" })}>Restar</button>
      </div>
    </div>
  );
}
