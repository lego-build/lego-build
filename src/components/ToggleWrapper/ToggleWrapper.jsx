import React from "react";
import FolderWrapper from "../FolderWrapper/FolderWrapper";
import style from "./index.module.css";

function ToggleWrapper({ tree, depth, name }) {
  return (
    <div className={style.wrapper}>
      <button className={style.toggle}>{name}</button>
      <FolderWrapper tree={tree} depth={depth} />
    </div>
  );
}

export default ToggleWrapper;
