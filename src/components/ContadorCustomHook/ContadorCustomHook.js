import React, { useState } from "react";

// Esto es un custom hook
// Sirve para encapsular logica, usando los hooks que nos proporciona React
// En este caso, usamos useState, vamos a pasarle el valorInicial y vamos a
// devolver un arreglo con las funciones y variables que nos interesan
const useContador = (estadoInicial) => {
  const [contador, setContador] = useState(estadoInicial);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return [contador, sumar, restar];
};

export default function ContadorCustomHook() {
  const [contador, sumar, restar] = useContador(0);

  return (
    <div>
      <h2>Valor Contador: {contador}</h2>
      <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>
    </div>
  );
}
