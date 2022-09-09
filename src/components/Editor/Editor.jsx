import React, { useState } from "react";
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
      content: null,
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

  return (
    <div className={style.editor}>
      <EditorNav documentTree={documentTree} />
    </div>
  );
}

export default Editor;
