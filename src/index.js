import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Auth/Login";
import Admindashboard from "./components/Dashboard/Admindashboard";
import Employeedashboard from "./components/Dashboard/Employeedashboard";
import "./styles.css";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Employeedashboard /> */}
      <Admindashboard />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
