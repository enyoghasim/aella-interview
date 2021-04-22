import React from "react";
import Header from "./components/header";
import "./App.css";
import { checkPropTypes } from "prop-types";

const App = ({ children, match }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
