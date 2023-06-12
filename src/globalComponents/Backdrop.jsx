import React from "react";
import classes from "./../modules/classesPage/components/UpdatePeriodic.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};

function MyBackdrop(props) {
  return ReactDOM.createPortal(
    <Backdrop>{props.children}</Backdrop>,
    document.getElementById("backdrop")
  );
}

export default MyBackdrop;
