import React from "react";
import DocLink from "../DocLink/DocLink";
import style from "./index.module.css";

function DocSublink({ active, children, ...props }) {
  return (
    <DocLink
      {...props}
      className={`${style.link} ${active ? style.active : ""}`}
    >
      {children}
    </DocLink>
  );
}

export default DocSublink;
