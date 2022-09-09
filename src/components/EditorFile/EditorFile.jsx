import React from "react";
import style from "./index.module.css";

function EditorFile({ icon, name, content }) {
  return (
    <button className={style.file}>
      {icon} {name}
    </button>
  );
}

export default EditorFile;
