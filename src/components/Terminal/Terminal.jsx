import React, { useState } from "react";
import CopyIcon from "../CopyIcon/CopyIcon";
import style from "./index.module.css";

function Terminal({ children }) {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
    });
  };

  return (
    <div
      className={style.terminal}
      onMouseLeave={() => {
        setCopied(false);
      }}
    >
      <pre>
        <div className={style.head}>
          <span>username@hostname</span> <span>MINGW64</span>{" "}
          <span>~/ReactProject</span>
        </div>
        <div className={style.body}>
          <span>$</span>
          <span>{children}</span>
        </div>
      </pre>
      {copied ? (
        <p className={`${style.absolute} ${style.copied}`}>Copied!</p>
      ) : (
        <CopyIcon className={style.absolute} onClick={onClick} />
      )}
    </div>
  );
}

export default Terminal;
