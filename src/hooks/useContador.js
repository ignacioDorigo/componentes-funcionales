import { useState } from "react";

export const useContador = (estadoInicial) => {
  const [contador, setContador] = useState(estadoInicial);

  const sumar = () => {
    setContador((prevState) => prevState + 1);
  };

  const restar = () => {
    if (contador !== 0) {
      setContador((prevState) => prevState - 1);
    }
  };

  return { contador, restar, sumar };
};
