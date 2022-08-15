import React, { useState } from "react";
import style from "./index.module.css";
const Documentation = ["Installation", "Quick Start", "Philosophy", "Commands", "Options", "Summary"];
function SideNav() {
  const [drop, setDrop] = useState(false)
  return (
    <aside className={style.nav}>
      <nav>
        <div className={style.containerDoc}>
          <h3 className={style.header}>Documentation</h3>
          <a href="#installation">Installation</a>
          <a href="#quickstart">Quick Start</a>
          <span>
            <span className={style.philosophy} onClick={()=> setDrop((prev)=>!prev)}>Philosophy</span>
            {drop &&
              <span className={style.containerPhilosophy}>
            <a href="#blocks">Blocks</a>
            <a href="#file-formats">File Formats</a>
            <a href="#templates">Templates</a>
            <a href="#json-structure">JSON Structure</a>
              </span>
            }
          </span>
            
          <a href="#commands">Commands</a>
          <a href="#options">Options</a>
          <a href="#summary">Summary</a>
        </div>
        <div className={style.containerRef}>
          <h3 className={style.header}>REFERENCES</h3>
          <a href="#blocks">Blocks</a>
          <a href="#file">File Formats</a>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
