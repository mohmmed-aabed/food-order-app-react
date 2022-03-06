import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

function Backdrop(props) {
  const { onHideCart } = props;
  const backdrop = (
    <div className={classes.backdrop} onClick={onHideCart}></div>
  );

  return (
    <>{ReactDOM.createPortal(backdrop, document.getElementById("backdrop"))}</>
  );
}

export default Backdrop;
