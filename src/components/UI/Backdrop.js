import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

function Backdrop() {
  const backdrop = <div className={classes.backdrop}></div>;

  return (
    <>{ReactDOM.createPortal(backdrop, document.getElementById("backdrop"))}</>
  );
}

export default Backdrop;
