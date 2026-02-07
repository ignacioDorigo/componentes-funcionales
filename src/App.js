import React from "react";
// import ContadorUseState from "./components/ContadorUseState";
import "./App.css";
import "./styles/styles.css"
import ContadorUseReducer from "./components/ContadorUseReducer/ContadorUseReducer";
// import ContadorCustomHook from "./components/ContadorCustomHook/ContadorCustomHook";

export default function App() {
  return (
    <div className="app">
      {/* <ContadorUseState></ContadorUseState> */}
      {/* <ContadorCustomHook></ContadorCustomHook> */}
      <ContadorUseReducer></ContadorUseReducer>
    </div>
  );
}
