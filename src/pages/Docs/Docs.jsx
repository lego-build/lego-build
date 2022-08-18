import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Nav, SideNav } from "../../components";
import style from "./index.module.css";
import { Blocks, Formats, Main } from "./subpages";

function Docs() {
  const [dropPhilosophy, setDropPhilosophy] = useState(false);
  const [dropCommands, setDropCommands] = useState(false);
  const [dropOptions, setDropOptions] = useState(false);
  const useSetDropPhilosophy = () => {
    setDropPhilosophy((prev) => !prev);
  };
  const useSetDropCommands = () => {
    setDropCommands((prev) => !prev);
  };
  const useSetDropOptions = () => {
    setDropOptions((prev) => !prev);
  };
  const installationEl = useRef(null);
  const quickStartEl = useRef(null);
  const philosophyEl = useRef(null);
  const blocksEl = useRef(null);
  const fileFormatEl = useRef(null);
  const templatesEl = useRef(null);
  const jsonStructureEl = useRef(null);
  const optionsEl = useRef(null);
  const summaryEl = useRef(null);
  const commandEl = useRef(null);
  const initializingEl = useRef(null);
  const makingEl = useRef(null);
  const renamingEl = useRef(null);
  const pathEl = useRef(null);
  const parentEl = useRef(null);

  const { subpage } = useParams();

  let component = <Main />;
  const subpageToComponent = {
    blocks: <Blocks />,
    "file-formats": <Formats />,
  };

  if (subpage) {
    component = subpageToComponent[subpage];
  }

  useEffect(() => {
    const links = [
        installationEl,
        quickStartEl,
        philosophyEl,
        blocksEl,
        fileFormatEl,
        templatesEl,
        jsonStructureEl,
        optionsEl,
        commandEl,
        summaryEl,
        initializingEl,
        makingEl,
        renamingEl,
        pathEl,
        parentEl,
      ],
      sections = document.querySelectorAll("section");
    const toggleLogic = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        /* eslint-disable */
        return scrollY >= sectionTop - sectionHeight / 3
          ? (current = section.getAttribute("id"))
          : current;
      });
      if (
        current === "commands" ||
        current === "initializing" ||
        current === "making-blocks" ||
        current === "renaming-blocks"
      ) {
        setDropCommands(true);
        setDropPhilosophy(false);
        setDropOptions(false);
      } else if (
        current === "philosophy" ||
        current === "blocks" ||
        current === "file-formats" ||
        current === "templates" ||
        current === "json-structure"
      ) {
        setDropPhilosophy(true);
        setDropCommands(false);
        setDropOptions(false);
      } else if (
        current === "options" ||
        current === "parent" ||
        current === "path"
      ) {
        setDropOptions(true);
        setDropCommands(false);
        setDropPhilosophy(false);
      } else {
        setDropCommands(false);
        setDropPhilosophy(false);
        setDropOptions(false);
      }

      links.forEach((li) => {
        if (li.current != null) {
          li.current.style.color = "#333";
          if (li.current.classList.contains(current)) {
            li.current.style.color = "#9d50f6";
          }
        }
      });
    };
    window.addEventListener("scroll", toggleLogic);
    return () => {
      window.removeEventListener("scroll", toggleLogic);
    };
  }, []);

  return (
    <div className={style.docs}>
      <Nav />
      <div className={style.main}>
        <SideNav
          installationEl={installationEl}
          quickStartEl={quickStartEl}
          philosophyEl={philosophyEl}
          blocksEl={blocksEl}
          fileFormatEl={fileFormatEl}
          templatesEl={templatesEl}
          jsonStructureEl={jsonStructureEl}
          optionsEl={optionsEl}
          summaryEl={summaryEl}
          initializingEl={initializingEl}
          makingEl={makingEl}
          renamingEl={renamingEl}
          pathEl={pathEl}
          parentEl={parentEl}
          commandEl={commandEl}
          dropPhilosophy={dropPhilosophy}
          dropCommands={dropCommands}
          dropOptions={dropOptions}
          setDropPhilosophy={useSetDropPhilosophy}
          setDropCommands={useSetDropCommands}
          setDropOptions={useSetDropOptions}
        />
        {component}
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
