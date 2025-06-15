import React, { useState } from "react";
import "./LoginForm2.css";

export default function LoginForm2() {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    genero: "",
  });

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario);
  };

  const manejarCambioInput = (e) => {
    const clave = e.target.name;
    const valor = e.target.value;
    const nuevoFormulario = { ...formulario };
    nuevoFormulario[clave] = valor;
    setFormulario(nuevoFormulario);
  };

  return (
    <form onSubmit={enviarFormulario} className="formulario">
      <h2 className="form__titulo">Login</h2>

      <div className="form__inputs">
        <div className="form__campo">
          <label htmlFor="email">Email</label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formulario.email}
            onChange={(e) => manejarCambioInput(e)}
          ></input>
        </div>

        <div className="form__campo">
          <label htmlFor="password">Password</label>
          <input
            className="form__input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formulario.password}
            onChange={(e) => manejarCambioInput(e)}
          ></input>
        </div>

        <div className="form__campo">
          <select
            className="form__input"
            value={formulario.genero}
            name="genero"
            onChange={(e) => manejarCambioInput(e)}
          >
            <option value={""} disabled>
              Genero
            </option>
            <option value={"Masculino"}>Masculino</option>
            <option value={"Femenino"}>Femenino</option>
            <option value={"Otro"}>Otro</option>
          </select>
        </div>
      </div>

      <button className="btn__ingresar" type="submit">
        Ingresar
      </button>
    </form>
  );
}
