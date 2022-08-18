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
          <HashLink to="/docs#installation" className="installation nav_link">
            Installation
          </HashLink>
          <HashLink to="/docs#quick-start" className="quick-start nav_link">
            Quick Start
          </HashLink>
          <span>
            <span
              className={style.philosophy}
              onClick={() => setDrop((prev) => !prev)}
            >
              Philosophy
            </span>
            {drop && (
              <span className={style.containerPhilosophy}>
                <HashLink to="/docs#blocks" className="blocks nav_link">
                  Blocks
                </HashLink>
                <HashLink
                  to="/docs#file-formats"
                  className="file-formats nav_link"
                >
                  File Formats
                </HashLink>
                <HashLink to="/docs#templates" className="templates nav_link">
                  Templates
                </HashLink>
                <HashLink
                  to="/docs#json-structure"
                  className="json-structure nav_link"
                >
                  JSON Structure
                </HashLink>
              </span>
            )}
          </span>

          <HashLink to="/docs#commands" className="commands nav_link">
            Commands
          </HashLink>
          <HashLink to="/docs#options" className="options nav_link">
            Options
          </HashLink>
          <HashLink to="/docs#summary" className="summary nav_link">
            Summary
          </HashLink>
        </div>
        <div className={style.containerRef}>
          <h3 className={style.header}>REFERENCES</h3>
          <HashLink to="/docs/blocks">Blocks</HashLink>
          <HashLink to="/docs/file-formats" className="file">
            File Formats
          </HashLink>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
