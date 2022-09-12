import React from "react";
import style from "./index.module.css";

function EditorFile({ icon, name, content, setActiveFile }) {
  return (
    <button
      className={style.file}
      onClick={() => {
        if (content === null) return;
        setActiveFile({ name, icon, content });
      }}
    >
      {icon} {name}
    </button>
  );
}

export default EditorFile;
