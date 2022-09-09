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
        <svg
          width="9"
          height="10"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: `rotate(${open ? "90deg" : 0})`,
          }}
        >
          <g clipPath="url(#clip0_20_103)">
            <path
              d="M2.58203 2.45691L5.93852 5.8134L2.58203 9.1699"
              stroke="#ccc"
              strokeWidth="0.78687"
            />
          </g>
          <defs>
            <clipPath id="clip0_20_103">
              <rect
                width="8.26214"
                height="8.26214"
                fill="white"
                transform="translate(0 0.907776)"
              />
            </clipPath>
          </defs>
        </svg>

        {name}
      </button>
      <FolderWrapper height={open ? "auto" : 0} tree={tree} depth={depth} />
    </div>
  );
}

export default ToggleWrapper;
