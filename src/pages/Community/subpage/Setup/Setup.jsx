import React from "react";
import { Link } from "react-router-dom";
import { Code } from "../../../../components";
import style from "./index.module.css";
const Setup = ({ author:{name,profileLink }, description, id, title }) => {
    return (
        <section className={style.setupcontainer}>
        <div className={style.setup}>
            <div className={style.content}>
                <span className={style.link}>By <a href={profileLink}>{name}</a></span>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>
                <span className={style.download}><a href="./index.module.css" download="lego.json" className={style.json}>Download JSON</a> <span className={style.container}> <a href="./index.module.scss" download={"lego"} className={style.template}>.</a></span></span>
            </div>
            <div className={style.editor}>
                <Code>
                    {`{
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
}`}
                </Code>
            </div>
        </div>
            <Link to={"/community"} className={style.communityLink} >Back to Community</Link>
        </section>
    );
}
 
export default Setup;