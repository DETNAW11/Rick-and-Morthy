import React from "react";
import Alert from "./Alert.jsx";
import Style from "./Stylealert.module.css";

const Test = () => {

  const LoQueQuieroQueHagaOk = () => {
    alert("NO SE ENCONTRÓ EL PERSONAJE, VUELVE A INTENTARLO");
  };

  return (
    <div className={Style.here}>
      {
        <Alert
          h1={"NO HAY PERSONAJES CON ESE ID..."}
          handleOk={LoQueQuieroQueHagaOk}
        />
      }
      
    </div>
  );
};

export default Test;
