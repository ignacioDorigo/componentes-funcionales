import React, { useReducer } from "react";

// USE REDUCER RECIBE 4 COSAS
// --> state/estado: Es el nombre de la varible que va a almacenar "estado"
// --> dispatch: es la palabra que activa a la función reducer, dispatch(recibe un type)
// --> reducer: Es la funcion que maneja los posibles valores, recibe el state y el action
// --> initialState: Es el estado inicial de la variable de estado.

const reducer = (state, action) => {
  if (action.type === "sumar") {
    return { contador: state.contador + 1 };
  }
  if (action.type === "restar") {
    return { contador: state.contador - 1 };
  }
  return state;
};

export default function ContadorReducer() {
  const estadoInicial = { contador: 0 };
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <h2>Contador : {state.contador}</h2>
      <div className="contador__btns">
        <button onClick={() => dispatch({ type: "sumar" })}>Sumar</button>
        <button onClick={() => dispatch({ type: "restar" })}>Restar</button>
      </div>
    </div>
  );
}
