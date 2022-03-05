import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  const modal = (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );

  return <>{ReactDOM.createPortal(modal, document.getElementById("modal"))}</>;
}

export default Modal;
