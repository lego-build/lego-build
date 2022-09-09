import React from "react";
import FolderWrapper from "../FolderWrapper/FolderWrapper";
import style from "./index.module.css";

function EditorNav({ documentTree, setActiveFile }) {
  return (
    <div className={style.nav}>
      <FolderWrapper tree={documentTree} setActiveFile={setActiveFile} />
    </div>
  );
}

export default EditorNav;
