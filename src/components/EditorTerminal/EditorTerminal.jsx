import React, { useState } from "react";
import style from "./index.module.css";

function EditorTerminal({ setActiveFile }) {
  const [inputText, setInputText] = useState("lego-build component Nav");

  return (
    <div className={style.terminal}>
      <pre>
        <div className={style.head}>
          <span>username@hostname</span> <span>MINGW64</span>{" "}
          <span>~/ReactProject</span>
        </div>
        <div className={style.input}>
          <span>$</span>
          <span>{inputText}</span>
        </div>
        <p className={style.success}>
          [SUCCESS] created 'src/components/Nav/Nav.jsx' successfully
        </p>
        <p className={style.success}>
          [SUCCESS] created 'src/components/Nav/Nav.test.js' successfully
        </p>
        <p className={style.success}>
          [SUCCESS] created 'src/components/Nav/Nav.css' successfully
        </p>
        <p className={style.final_message}>
          Created 'Nav' <span>component</span> successfully
        </p>
      </pre>
    </div>
  );
}

export default EditorTerminal;
