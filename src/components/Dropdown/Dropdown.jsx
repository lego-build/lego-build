import React, { useLayoutEffect, useRef, useState } from "react";
import DocLink from "../DocLink/DocLink";
import DocSublink from "../DocSublink/DocSublink";
import style from "./index.module.css";

function Dropdown({ id, text, sublinks, current }) {
  const inner = useRef(null);
  const [height, setHeight] = useState(0);
  const [open, setOpen] = useState(true);
  const [sizeHasBeenCalculated, setSizeHasBeenCalculated] = useState(false);

  let heightStyle = height + "px";
  if (!sizeHasBeenCalculated) {
    heightStyle = "auto";
  }

  useLayoutEffect(() => {
    setHeight(inner.current.getBoundingClientRect().height);
    setSizeHasBeenCalculated(true);
    setOpen(false);
  }, []);

  return (
    <div className={style.dropdown}>
      <DocLink
        id={id}
        onClick={() => {
          setOpen((prevValue) => !prevValue);
        }}
      >
        {text}
      </DocLink>
      <div
        className={style.inner}
        ref={inner}
        style={{
          height: open ? heightStyle : 0,
        }}
      >
        {sublinks.map(({ id, text }) => (
          <DocSublink id={id} key={id}>
            {text}
          </DocSublink>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
