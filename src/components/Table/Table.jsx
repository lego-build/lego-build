import React from "react";
import style from "./index.module.css";

function Table({ children }) {
  return (
    <div className={style.responsive}>
      <table className={style.table}>{children}</table>
    </div>
  );
}

export default Table;
