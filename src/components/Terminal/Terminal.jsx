import React from "react";
import style from "./index.module.css";

function Terminal({ children }) {
  return (
    <div className={style.terminal}>
      <div className={style.head}>
        <span>username@hostname</span> <span>MINGW64</span>{" "}
        <span>~/ReactProject</span>
      </div>
      <div className={style.body}>
        <span>$</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Terminal;
