import React from "react";
// import ContadorUseState from "./components/ContadorUseState";
import "./App.css";
import "./styles/styles.css"
import ContadorCustomHook from "./components/ContadorCustomHook/ContadorCustomHook";

export default function App() {
  return (
    <div className="app">
      {/* <ContadorUseState></ContadorUseState> */}
      <ContadorCustomHook></ContadorCustomHook>
      
    </div>
  );
}
