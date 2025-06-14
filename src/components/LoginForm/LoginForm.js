import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    console.log({ email: email, password: password });
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form__campo">
          <label htmlFor="password">Password</label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>

      <button className="btn__ingresar" type="submit">
        Ingresar
      </button>
    </form>
  );
}
