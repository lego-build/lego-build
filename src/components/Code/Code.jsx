import React, { useState } from "react";
import CopyIcon from "../CopyIcon/CopyIcon";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "./index.module.css";

function Code({ children, maxHeight }) {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
    });
  };

  return (
    <div
      className={style.code}
      onMouseLeave={() => {
        setCopied(false);
      }}
    >
      {copied ? (
        <p className={`${style.absolute} ${style.copied}`}>Copied!</p>
      ) : (
        <CopyIcon className={style.absolute} onClick={onClick} />
      )}
      <SyntaxHighlighter
        language="javascript"
        customStyle={{
          fontSize: "15px",
          padding: "20px 30px",
          fontFamily: "Consolas, monospace",
          maxHeight: maxHeight ? maxHeight : "",
        }}
        codeTagProps={{
          style: {
            fontSize: "14px",
            fontFamily: "Consolas, monospace",
          },
        }}
        style={vscDarkPlus}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
