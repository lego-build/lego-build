import React, { memo } from "react";
import { NavLink as Link } from "react-router-dom";
import style from "./index.module.css";

function NavLink({ children, to, href, external }) {
  const Wrapper = ({ href, children, ...props }) =>
    external ? (
      <a target={"_blank"} href={href} {...props} rel="noopener noreferrer" className={style.link}>
        {children}
      </a>
    ) : (
      <Link {...props}>{children}</Link>
    );

  return (
    <Wrapper
      to={to}
      href={href}
      className={({ isActive }) =>
        `${style.link} ${isActive ? style.active : ""}`
      }
    >
      {children}
    </Wrapper>
  );
}

export default memo(NavLink);
