import React from "react";
import style from "./index.module.css";
import { HashLink } from "react-router-hash-link";
import Blocks from '../../pages/Docs/subpages/Blocks/Blocks';
function SideNav({ installationEl, quickStartEl, philosophyEl, blocksEl, fileFormatEl, templatesEl, jsonStructureEl, optionsEl, summaryEl, commandEl, initializingEl, makingEl, renamingEl, pathEl, parentEl, dropPhilosophy, setDropPhilosophy, dropCommands, dropOptions, setDropCommands, setDropOptions }){
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
            <HashLink
              onClick={() => setDropPhilosophy()}
              ref={philosophyEl}
              to="/docs#philosophy" className="philosophy"
            >
              Philosophy
            </HashLink>
            {dropPhilosophy && (
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
            <HashLink
              to="/docs#commands"
              className="commands nav_link"
              onClick={() => setDropCommands()}
              ref={commandEl}
            >
            Commands
          </HashLink>
            {dropCommands && (
            <span className={style.containerPhilosophy}>
              <HashLink
                  to="/docs#initializing"
                  className="initializing nav_link"
                  ref={initializingEl}
              >
                Initializing
              </HashLink>
              <HashLink
                  to="/docs#making-blocks"
                  className="making-blocks nav_link"
                ref={makingEl}
              >
                Making blocks
              </HashLink>
              <HashLink
                  to="/docs#renaming-blocks"
                  className="renaming-blocks nav_link"
                ref={renamingEl}
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
              onClick={() => setDropOptions()}
          >
            Options
            </HashLink>
            {dropOptions && (
              <span className={style.containerPhilosophy}>
                <HashLink
                  to="/docs#path"
                  className="path nav_link"
                  ref={pathEl}
                >
                  --Path
                </HashLink>
                <HashLink
                  to="/docs#parent"
                  className="parent nav_link"
                  ref={parentEl}
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
          <HashLink to="/docs/blocks#">Blocks</HashLink>
          <HashLink to="/docs/file-formats#" className="file">
            File Formats
          </HashLink>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
