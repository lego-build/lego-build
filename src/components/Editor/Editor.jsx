import React, { useState } from "react";
import EditorCodeArea from "../EditorCodeArea/EditorCodeArea";
import EditorNav from "../EditorNav/EditorNav";
import style from "./index.module.css";

function Editor() {
  const [documentTree, setDocumentTree] = useState([
    {
      name: "public",
      type: "folder",
      children: [
        {
          name: "favicon.ico",
          type: "icon",
          content: null,
        },
        {
          name: "index.html",
          type: "html",
          content: null,
        },
        {
          name: "logo192.png",
          type: "media",
          content: null,
        },
        {
          name: "logo512.png",
          type: "media",
          content: null,
        },
        {
          name: "manifest.json",
          type: "json",
          content: null,
        },
      ],
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Nav",
              type: "folder",
              children: [
                {
                  name: "Nav.js",
                  type: "jsx",
                  content: null,
                },
                {
                  name: "Nav.css",
                  type: "css",
                  content: null,
                },
                {
                  name: "Nav.test.js",
                  type: "test",
                  content: null,
                },
              ],
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "Contact",
              type: "folder",
              children: [
                {
                  name: "Contact.js",
                  type: "jsx",
                  content: null,
                },
                {
                  name: "Contact.css",
                  type: "css",
                  content: null,
                },
                {
                  name: "Contact.test.js",
                  type: "test",
                  content: null,
                },
              ],
            },
          ],
        },
        {
          name: "index.js",
          type: "javascript",
          content: null,
        },
      ],
    },
    {
      name: "lego.json",
      type: "json",
      content: null,
    },
    {
      name: ".gitignore",
      type: "gitignore",
      content: `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

      # dependencies
      /node_modules
      /.pnp
      .pnp.js
      
      # testing
      /coverage
      
      # production
      /build
      
      # misc
      .DS_Store
      .env.local
      .env.development.local
      .env.test.local
      .env.production.local
      
      npm-debug.log*
      yarn-debug.log*
      yarn-error.log*
      `,
    },
    {
      name: "package.json",
      type: "json",
      content: null,
    },
    {
      name: "package-lock.json",
      type: "json",
      content: null,
    },
    {
      name: "README.md",
      type: "info",
      content: null,
    },
  ]);

  const [activeFile, setActiveFile] = useState(undefined);

  return (
    <div className={style.editor}>
      <EditorNav
        documentTree={documentTree}
        key={"DON'T_RE-RENDER"}
        setActiveFile={setActiveFile}
      />
      <EditorCodeArea activeFile={activeFile} setActiveFile={setActiveFile} />
    </div>
  );
}

export default Editor;
