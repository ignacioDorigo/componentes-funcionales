import React from "react";
// import ContadorUseState from "./components/ContadorUseState";
import "./App.css";
import "./styles/styles.css";
import ContadorUseReducer from "./components/ContadorUseReducer/ContadorUseReducer";
// import ContadorCustomHook from "./components/ContadorCustomHook/ContadorCustomHook";

export default function App() {
  return (
    <div className="app">
      {/* <ContadorUseState></ContadorUseState> */}
      {/* <ContadorCustomHook></ContadorCustomHook> */}
      <ContadorUseReducer></ContadorUseReducer>
      {/* Teoria de useRef */}
      {/* Hook que se usa para almacenar valores que no queremos que se re-rendericen en pantalla cuando mutan */}
      {/* Usado en intervals, y en manipulacion de DOM */}
    </div>
  );
}
