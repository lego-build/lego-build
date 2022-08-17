import React, { useState } from "react";
import style from "./index.module.css";
import { HashLink } from "react-router-hash-link";
const Documentation = [
  "Installation",
  "Quick Start",
  "Philosophy",
  "Commands",
  "Options",
  "Summary",
];
function SideNav() {
  const [drop, setDrop] = useState(true);
  return (
    <aside className={style.nav}>
      <nav>
        <div className={style.containerDoc}>
          <h3 className={style.header}>DOCUMENTATION</h3>
          <HashLink to="/docs#installation" id="link">Installation</HashLink>
          <HashLink to="/docs#quick-start" id="link">Quick Start</HashLink>
          <span>
            <span
              className={style.philosophy}
              onClick={() => setDrop((prev) => !prev)}
            >
              Philosophy
            </span>
            {drop && (
              <span className={style.containerPhilosophy}>
                <HashLink to="/docs#blocks" id="link">Blocks</HashLink>
                <HashLink to="/docs#file-formats" id="link">File Formats</HashLink>
                <HashLink to="/docs#templates" id="link">Templates</HashLink>
                <HashLink to="/docs#json-structure" id="link">JSON Structure</HashLink>
              </span>
            )}
          </span>

          <HashLink to="/docs#commands" id="link">Commands</HashLink>
          <HashLink to="/docs#options" id="link">Options</HashLink>
          <HashLink to="/docs#summary" id="link">Summary</HashLink>
        </div>
        <div className={style.containerRef}>
          <h3 className={style.header}>REFERENCES</h3>
          <HashLink to="/docs#blocks" id="link">Blocks</HashLink>
          <HashLink to="/docs#file" id="link">File Formats</HashLink>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
