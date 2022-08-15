import React from "react";
import style from "./index.module.css";
const Documentation = ["Installation", "Quick Start", "Philosophy", "Commands", "Options", "Summary"];
function SideNav() {
  return (
    <aside className={style.nav}>
      <nav>
        <div className={style.containerDoc}>
          <h3 className={style.header}>Documentation</h3>
          <a href="#installation">Installation</a>
          <a href="#quickstart">Quick Start</a>
          <a href="#philosophy">Philosophy</a>
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
