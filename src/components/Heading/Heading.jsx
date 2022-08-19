import React from "react";
import style from "./index.module.css";

function Heading({ children, element, id, ...props }) {
  return React.createElement(
    element,
    { ...props, className: style.heading },
    children,
    React.createElement("a", { href: id }, "#")
  );
}

export default Heading;
