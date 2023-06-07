import React from "react";
import Style from "./Stylealert.module.css";

const Overlay = ({ handleOk, h1 }) => {
  return (
    <div className={Style.container}>
      <div className={Style.containerAlert}>
        <h1>{h1}</h1>
        <button onClick={() => handleOk()}>ok</button>
      </div>
    </div>
  );
};

export default Overlay;