import React from "react";
import style from "./index.module.css";

function Section({ children, ...props }) {
  return (
    <section className={style.section} {...props}>
      {children}
    </section>
  );
}

export default Section;
