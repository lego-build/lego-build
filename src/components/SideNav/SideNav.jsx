import React from "react";
import style from "./index.module.css";
import DocLink from "../DocLink/DocLink";
import Dropdown from "../Dropdown/Dropdown";
function SideNav() {
  const links = [
    {
      id: "installation",
      text: "Installation",
    },
    {
      id: "quick-start",
      text: "Quick Start",
    },
    {
      id: "philosophy",
      text: "Philosophy",
      children: [
        {
          id: "blocks",
          text: "Blocks",
        },
        {
          id: "file-formats",
          text: "File Formats",
        },
        {
          id: "templates",
          text: "Templates",
        },
        {
          id: "json-structure",
          text: "JSON Structure",
        },
      ],
    },

    {
      id: "commands",
      text: "Commands",
      children: [
        {
          id: "initializing",
          text: "Initializing",
        },
        {
          id: "making-blocks",
          text: "Making Blocks",
        },
        {
          id: "renaming-blocks",
          text: "Renaming Blocks",
        },
      ],
    },

    {
      id: "options",
      text: "Options",
      children: [
        {
          id: "path",
          text: "--path",
        },
        {
          id: "parent",
          text: "--parent",
        },
      ],
    },
    {
      id: "summary",
      text: "Summary",
    },
  ];

  return (
    <aside className={style.nav}>
      <nav>
        <div className={style.container}>
          <h3 className={style.header}>DOCUMENTATION</h3>
          {links.map(({ id, text, children }) =>
            children ? (
              <Dropdown id={id} sublinks={children} text={text} key={id} />
            ) : (
              <DocLink id={id} key={id}>
                {text}
              </DocLink>
            )
          )}
        </div>
        <div className={`${style.container} ${style.containerRef}`}>
          <h3 className={style.header}>REFERENCES</h3>
          <DocLink to="/docs/blocks#">Blocks</DocLink>
          <DocLink to="/docs/file-formats#">File Formats</DocLink>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
