import React from "react";
import style from "./index.module.css";

function CopyIcon({ className, onClick }) {
  return (
    <button
      className={`${style.copy} ${className}`}
      onClick={onClick}
      title="Copy"
    ></button>
  );
}

export default CopyIcon;
