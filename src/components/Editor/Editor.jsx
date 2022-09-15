import React, { useState } from "react";
import EditorCodeArea from "../EditorCodeArea/EditorCodeArea";
import EditorNav from "../EditorNav/EditorNav";
import EditorTerminal from "../EditorTerminal/EditorTerminal";
import style from "./index.module.css";
import data from "./Editordetails"
function Editor() {
  const [documentTree] = useState(data);

  const [activeFile, setActiveFile] = useState(undefined);
  return (
    <div className={style.editor}>
      <EditorNav
        documentTree={documentTree}
        key={"DON'T_RE-RENDER"}
        setActiveFile={setActiveFile}
      />
      <EditorCodeArea activeFile={activeFile} setActiveFile={setActiveFile} />
      <EditorTerminal
        setActiveFile={setActiveFile}
        key={"DON'T_RE-RENDER_TOO"}
      />
    </div>
  );
}

export default Editor;
