import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Arrow, Dots, LeftDots, ShadowCircle } from "../../../../assets";
import { Code } from "../../../../components";
import { wordParser } from "../../../../utils/functions";
import style from "./index.module.css";
const Setup = () => {
  const [title, setTitle] = useState("TypeScript Setup");
  const [description, setDescription] = useState(
    "Workflow for React + TypeScript, including components, pages, hooks and redux blocks. Use it to speed up your workflow."
  );
  const [author, setAuthor] = useState({
    name: "Akpeti Trust",
    profileLink: "https://github.com/AkpetiTrust",
  });
  const [json, setJson] = useState(`{
    "type": "component", // Name of the block type
    "path": "src/components", // Path where the block will be stored, relative to root
    "isFile": false, // Whether the block is a file or a folder, false by default
    "files": [
      // Formats for files that make up the block, if the block is a folder
      {
        "name": "<name>.jsx", // Use <name> to represent the block name
        "template": "templates/jsxTemplate.jsx", // Path to file template if any
      },
      {
        "name": "<name>.scss",
      },
      {
        "name": "<name>.test.jsx",
        "template": "templates/testTemplate.jsx",
      },
    ],
    "file": null, // An object or a string(more on this) representing the file format, used if the block is a file and not a folder  
 }`);

  const { workflow_id } = useParams();

  return (
    <section className={style.setupcontainer}>
      <ShadowCircle className={style.shadowCircle} />
      <div className={style.setup}>
        <div className={style.content}>
          <span className={style.link}>
            By{" "}
            <a href={author.profileLink} target="_blank">
              {author.name}
            </a>
          </span>
          <h1
            className={style.title}
            data-mark={wordParser(!!title ? title : "")}
          >
            {title}
          </h1>
          <p className={style.description}>{description}</p>
          <span className={style.download}>
            <a
              href="./index.module.css"
              download="lego.json"
              className={style.json}
            >
              Download JSON
            </a>{" "}
            <span className={style.container}>
              {" "}
              <a
                href="./index.module.scss"
                download={"lego"}
                className={style.template}
              >
                <span>Download Templates</span>
              </a>
            </span>
          </span>
        </div>
        <LeftDots className={style.leftDot} />
        <Dots className={style.rightDot} />
        <div className={style.editor}>
          <Code maxHeight={"400px"}>{json}</Code>
        </div>
      </div>
      <Link to={"/community"} className={style.communityContainer}>
        <span className={style.communityLink}>Back to community</span> <Arrow />
      </Link>
    </section>
  );
};

export default Setup;
