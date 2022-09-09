import React, { useState, useLayoutEffect, useRef } from "react";
import FolderWrapper from "../FolderWrapper/FolderWrapper";
import style from "./index.module.css";

function ToggleWrapper({ tree, depth, name }) {
  const folderWrapperRef = useRef();
  const [height, setHeight] = useState(null);
  const [heightHasBeenSet, setHeightHasBeenSet] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    setHeight(folderWrapperRef.current.getBoundingClientRect().height);
    setHeightHasBeenSet(true);
  }, []);

  const computedHeight = heightHasBeenSet ? (open ? height : 0) : null;
  console.log(computedHeight, folderWrapperRef.current);

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
      <FolderWrapper
        height={computedHeight}
        wrapperRef={folderWrapperRef}
        tree={tree}
        depth={depth}
      />
    </div>
  );
}

export default ToggleWrapper;
