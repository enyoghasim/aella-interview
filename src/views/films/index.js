import React, { useEffect } from "react";
import { getFilms } from "./redux/thunk";
import "./index.css";

const Films = ({ match }) => {
  useEffect(() => {
    console.log(getFilms("/films"));
  }, [match]);
  return <></>;
};

export default Films;
