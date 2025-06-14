import React, { useEffect, useState } from "react";

export default function ContadorUseEffect() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Este codigo se ejecuta cada vez que cambie el valor de contador
    // Ya que esa es la variable en el array de dependencias
    console.log("Me ejecute --> " + contador);
  }, [contador]);

  return (
    <div>
      <h2>Contador Actual: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
