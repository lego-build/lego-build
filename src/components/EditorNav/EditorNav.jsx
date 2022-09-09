import React from "react";
import FolderWrapper from "../FolderWrapper/FolderWrapper";
import style from "./index.module.css";

function EditorNav({ documentTree }) {
  return (
    <div className={style.nav}>
      <FolderWrapper tree={documentTree} />
    </div>
  );
}

export default EditorNav;
