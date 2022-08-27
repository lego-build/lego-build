import React from "react";
import { HeaderAccent } from "../../assets";

import style from "./index.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <h1>
          Browse project{" "}
          <span>
            workflows <HeaderAccent />
          </span>
        </h1>
      </div>
      <p>
        Check out different workflows and templates to fit your project's needs.
        Try searching for 'TypeScript', or 'hooks'.
      </p>
    </header>
  );
};

export default Header;
