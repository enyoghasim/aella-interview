import React from "react";
import Header from "./components/header";
import "./App.css";

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
