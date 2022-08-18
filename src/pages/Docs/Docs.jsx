import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Nav, SideNav } from "../../components";
import style from "./index.module.css";
import { Blocks, Formats, Main } from "./subpages";

function Docs() {
  const installationEl = useRef(null);
  const quickStartEl = useRef(null);
  const blocksEl = useRef(null);
  const fileFormatEl = useRef(null);
  const templatesEl = useRef(null);
  const jsonStructureEl = useRef(null);
  const optionsEl = useRef(null);
  const summaryEl = useRef(null);
  const [showSideNav, setShowSideNav] = useState(false);
  const useShowSideNav = (state=true) => {
    setShowSideNav((prev)=>!prev)
  }
  console.log(showSideNav);
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
    const links = [installationEl, quickStartEl, blocksEl, fileFormatEl, templatesEl, jsonStructureEl, optionsEl, summaryEl],
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
      links.forEach((li) => {
        li.current.style.color = "#333";
        if (li.current.classList.contains(current)) {
          li.current.style.color = "#9d50f6";
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
      <Nav setShowSideNav={useShowSideNav} />
      <div className={style.main}>
        <SideNav
          installationEl={installationEl}
          quickStartEl={quickStartEl}
          blocksEl={blocksEl}
          fileFormatEl={fileFormatEl}
          templatesEl={templatesEl}
          jsonStructureEl={jsonStructureEl}
          optionsEl={optionsEl}
          summaryEl={summaryEl}
          showSideNav={showSideNav}
        />
        {component}
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
