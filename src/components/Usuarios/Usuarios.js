import React, { useEffect, useState } from "react";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const buscarUsuarios = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const dataJson = await data.json();
      console.log(dataJson);
      setUsuarios(dataJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <div>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={usuario.id}>
            {usuario.id} + {usuario.name}
          </li>
        ))}
      </ul>
      <button onClick={buscarUsuarios}>Buscar otra vez usuarios</button>
    </div>
  );
}

export default Usuarios;
