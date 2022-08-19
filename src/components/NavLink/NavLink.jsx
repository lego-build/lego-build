import React, {memo} from "react";
import { NavLink as Link } from "react-router-dom";
import style from "./index.module.css";

function NavLink({ children, to }) {
  return (
    <Link
      to={to}
      className={({ isActive }) =>
        `${style.link} ${isActive ? style.active : ""}`
      }
    >
      {children}
    </Link>
  );
}

export default memo(NavLink);
