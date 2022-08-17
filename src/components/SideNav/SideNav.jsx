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
          <HashLink to="/docs#installation" id="link" className="installation">Installation</HashLink>
          <HashLink to="/docs#quick-start" id="link" className="quick-start">Quick Start</HashLink>
          <span>
            <span
              className={style.philosophy}
              onClick={() => setDrop((prev) => !prev)}
            >
              Philosophy
            </span>
            {drop && (
              <span className={style.containerPhilosophy}>
                <HashLink to="/docs#blocks" id="link" className="blocks">Blocks</HashLink>
                <HashLink to="/docs#file-formats" id="link" className="file-formats">File Formats</HashLink>
                <HashLink to="/docs#templates" id="link" className="templates">Templates</HashLink>
                <HashLink to="/docs#json-structure" id="link" className="json-structure">JSON Structure</HashLink>
              </span>
            )}
          </span>

          <HashLink to="/docs#commands" id="link" className="commands">Commands</HashLink>
          <HashLink to="/docs#options" id="link" className="options">Options</HashLink>
          <HashLink to="/docs#summary" id="link" className="summary">Summary</HashLink>
        </div>
        <div className={style.containerRef}>
          <h3 className={style.header}>REFERENCES</h3>
          <HashLink to="/docs#blocks" id="link">Blocks</HashLink>
          <HashLink to="/docs#file" id="link" className="file">File Formats</HashLink>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
