import React, { useState } from "react";
import FolderWrapper from "../FolderWrapper/FolderWrapper";
import style from "./index.module.css";

function ToggleWrapper({ tree, depth, name }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.wrapper}>
      <button
        onClick={() => {
          setOpen((prevValue) => !prevValue);
        }}
        className={style.toggle}
      >
        {name}
      </button>
      <FolderWrapper height={open ? "auto" : 0} tree={tree} depth={depth} />
    </div>
  );
}

export default ToggleWrapper;
