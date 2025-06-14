import React, { useState } from "react";

function Contador() {
  const [cont, setCont] = useState(0);

  const sumar = () => {
    setCont((prevState) => prevState + 1);
  };
  const restar = () => {
    if (cont === 0) {
      return;
    } else {
      setCont((prevState) => prevState - 1);
    }
  };
  return (
    <div>
      <h2>Contador: {cont}</h2>
      <div className="contador__btns">
        <button className="contador__btn" onClick={sumar}>
          Sumar
        </button>
        <button className="contador__btn" onClick={restar}>
          Restar
        </button>
      </div>
    </div>
  );
}

export default Contador;
