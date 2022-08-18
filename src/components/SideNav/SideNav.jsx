import React, { useState } from "react";
import style from "./index.module.css";
import { HashLink } from "react-router-hash-link";
import Blocks from '../../pages/Docs/subpages/Blocks/Blocks';
function SideNav({installationEl, quickStartEl, blocksEl, fileFormatEl, templatesEl, jsonStructureEl, optionsEl, summaryEl}) {
  const [drop, setDrop] = useState(false);
  return (
    <aside className={style.nav}>
      <nav>
        <div className={style.containerDoc}>
          <h3 className={style.header}>DOCUMENTATION</h3>
          <HashLink ref={installationEl} to="/docs#installation" className="installation nav_link">
            Installation
          </HashLink>
          <HashLink ref={quickStartEl} to="/docs#quick-start" className="quick-start nav_link">
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
                <HashLink to="/docs#blocks" ref={blocksEl} className="blocks nav_link">
                  Blocks
                </HashLink>
                <HashLink
                  to="/docs#file-formats"
                  className="file-formats nav_link"
                  ref={fileFormatEl}
                >
                  File Formats
                </HashLink>
                <HashLink
                  to="/docs#templates"
                  className="templates nav_link"
                  ref={templatesEl}
                >
                  Templates
                </HashLink>
                <HashLink
                  to="/docs#json-structure"
                  className="json-structure nav_link"
                  ref={jsonStructureEl}
                >
                  JSON Structure
                </HashLink>
              </span>
            )}
          </span>
          <span>
          <HashLink to="/docs#commands" className="commands nav_link">
            Commands
          </HashLink>
          {drop && (
            <span className={style.containerPhilosophy}>
              <HashLink
                  to="/docs#initializing"
                  className="initializing nav_link"
                ref={fileFormatEl}
              >
                Initializing
              </HashLink>
              <HashLink
                  to="/docs#making-blocks"
                  className="making-blocks nav_link"
                ref={templatesEl}
              >
                Making blocks
              </HashLink>
              <HashLink
                  to="/docs#renaming-blocks"
                  className="renaming-blocks nav_link"
                ref={jsonStructureEl}
              >
                Renaming Blocks
              </HashLink>
            </span>
            )}
          </span>
          <span>

          <HashLink
            to="/docs#options"
            className="options nav_link"
            ref={optionsEl}
          >
            Options
            </HashLink>
            {drop && (
              <span className={style.containerPhilosophy}>
                <HashLink
                  to="/docs#path"
                  className="path nav_link"
                  ref={fileFormatEl}
                >
                  --Path
                </HashLink>
                <HashLink
                  to="/docs#parent"
                  className="parent nav_link"
                  ref={templatesEl}
                >
                  --Parent
                </HashLink>
              </span>
            )}
          </span>
          <HashLink
            to="/docs#summary"
            className="summary nav_link"
            ref={summaryEl}
          >
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
