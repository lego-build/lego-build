import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import DocLink from "../DocLink/DocLink";
import Dropdown from "../Dropdown/Dropdown";
import sectionStyle from "../Section/index.module.css";
import { useLocation } from "react-router-dom";
import ContentsButton from "../ContentsButton/ContentsButton";
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
  const [current, setCurrent] = useState("");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    const sections = document.querySelectorAll("." + sectionStyle.section);

    const handleScroll = (e) => {
      const scrollY = e.currentTarget.scrollY;
      const topOffset = 60;
      const bottomOffset = 40;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const elementMargin = 40;
        const elementTop = section.offsetTop;
        const elementBottom = elementTop + section.offsetHeight + elementMargin;

        if (
          scrollY > elementTop - topOffset &&
          scrollY < elementBottom - bottomOffset
        ) {
          setCurrent(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <>
      <aside className={`${style.nav} ${open ? style.open : ""}`}>
        <nav>
          <div className={style.container}>
            <h3 className={style.header}>DOCUMENTATION</h3>
            {links.map(({ id, text, children }) =>
              children ? (
                <Dropdown
                  id={id}
                  sublinks={children}
                  text={text}
                  key={id}
                  current={current}
                />
              ) : (
                <DocLink id={id} key={id} active={current === id}>
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
      <ContentsButton open={open} setOpen={setOpen} />
    </>
  );
}

export default SideNav;
