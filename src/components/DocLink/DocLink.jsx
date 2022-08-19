import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import style from "./index.module.css";

function DocLink({ id, children, active, to, ...props }) {
  const location = useLocation().pathname + "#";

  let isReferenceLink = false;
  if (to) isReferenceLink = true;

  if (isReferenceLink) {
    active = location === to;
  }

  return (
    <HashLink
      className={`${style.link} ${active ? style.active : ""}`}
      to={to ? to : `/docs/#${id}`}
      {...props}
    >
      {children}
    </HashLink>
  );
}

export default memo(DocLink);
